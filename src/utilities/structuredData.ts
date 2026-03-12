import { SITE_CONFIG } from '../payload.config';

// Определяем тип Language локально
export type Language = 'ru' | 'uz';

// Упрощенный интерфейс для совместимости с SITE_CONFIG
export interface StructuredDataConfig {
  siteUrl: string;
  siteName: Record<Language, string>;
  logoUrl: string;
  address: Record<Language, {
    full: string;
    city: string;
    district: string;
    street: string;
    building: string;
    country: string;
    postalCode: string;
  }>;
  contact: {
    email: string;
    phone: string;
    phoneRaw: string;
    workingHours: Record<Language, string>;
  };
  socialProfiles?: readonly string[];
  geo: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
  texts: Record<Language, {
    organization: string;
    website: string;
    searchAction: string;
    customerService: string;
    localBusiness: string;
    contactPage: string;
    aboutPage: string;
    workingHours: string;
    address: string;
    phone: string;
    email: string;
  }>;
}

export class StructuredDataGenerator {
  private config: StructuredDataConfig;
  private language: Language;

  constructor(config: StructuredDataConfig = SITE_CONFIG as StructuredDataConfig, language: Language = 'ru') {
    this.config = config;
    this.language = language;
  }

  // Установка языка
  setLanguage(language: Language): void {
    this.language = language;
  }

  getCurrentLanguage(): Language {
    return this.language;
  }

  // 1. Базовые схемы с поддержкой языка
  generateOrganizationSchema() {
    const lang = this.language;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.config.siteUrl}/#organization`,
      name: this.config.siteName[lang],
      url: this.config.siteUrl,
      logo: {
        '@type': 'ImageObject',
        '@id': `${this.config.siteUrl}/#logo`,
        url: this.config.logoUrl,
        width: '600',
        height: '60',
        caption: this.config.siteName[lang],
      },
      sameAs: this.config.socialProfiles || [],
      email: this.config.contact.email,
      telephone: this.config.contact.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: this.config.address[lang].full,
        addressLocality: this.config.address[lang].city,
        addressRegion: this.config.address[lang].district,
        addressCountry: this.config.address[lang].country,
        postalCode: this.config.address[lang].postalCode
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: this.config.contact.phone,
        contactType: this.config.texts[lang].customerService,
        email: this.config.contact.email,
        areaServed: 'UZ',
        availableLanguage: ['Russian', 'Uzbek'],
        hoursAvailable: this.config.contact.workingHours[lang]
      },
      location: {
        '@type': 'Place',
        name: this.config.siteName[lang],
        address: {
          '@type': 'PostalAddress',
          streetAddress: this.config.address[lang].full,
          addressLocality: this.config.address[lang].city,
          addressCountry: this.config.address[lang].country
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: this.config.geo.latitude,
          longitude: this.config.geo.longitude
        }
      },
      description: this.config.texts[lang].organization
    };
  }

  generateWebsiteSchema() {
    const lang = this.language;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${this.config.siteUrl}/#website`,
      url: this.config.siteUrl,
      name: this.config.siteName[lang],
      description: this.config.texts[lang].website,
      publisher: {
        '@id': `${this.config.siteUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${this.config.siteUrl}/search?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string',
        name: this.config.texts[lang].searchAction
      },
      inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ'
    };
  }

  // 2. Local Business схема
  generateLocalBusinessSchema() {
    const lang = this.language;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${this.config.siteUrl}/#localbusiness`,
      name: this.config.siteName[lang],
      description: this.config.texts[lang].localBusiness,
      url: this.config.siteUrl,
      logo: this.config.logoUrl,
      telephone: this.config.contact.phone,
      email: this.config.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: this.config.address[lang].full,
        addressLocality: this.config.address[lang].city,
        addressRegion: this.config.address[lang].district,
        addressCountry: this.config.address[lang].country,
        postalCode: this.config.address[lang].postalCode
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: this.config.geo.latitude,
        longitude: this.config.geo.longitude
      },
      openingHours: this.parseWorkingHours(this.config.contact.workingHours[lang]),
      priceRange: '$$',
      sameAs: this.config.socialProfiles,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: this.config.contact.phone,
        contactType: this.config.texts[lang].customerService,
        email: this.config.contact.email,
        availableLanguage: [lang === 'ru' ? 'Russian' : 'Uzbek']
      }
    };
  }

  // 3. Контактная страница
  generateContactPageSchema() {
    const lang = this.language;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${this.config.siteUrl}/contact#webpage`,
      url: `${this.config.siteUrl}/contact`,
      name: `${this.config.texts[lang].contactPage} - ${this.config.siteName[lang]}`,
      description: `${this.config.texts[lang].contactPage} ${this.config.siteName[lang]}`,
      mainEntity: {
        '@type': 'Organization',
        name: this.config.siteName[lang],
        telephone: this.config.contact.phone,
        email: this.config.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: this.config.address[lang].full,
          addressLocality: this.config.address[lang].city,
          addressCountry: this.config.address[lang].country
        }
      },
      inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ'
    };
  }

  // 4. About страница
  generateAboutPageSchema() {
    const lang = this.language;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${this.config.siteUrl}/about#webpage`,
      url: `${this.config.siteUrl}/about`,
      name: `${this.config.texts[lang].aboutPage} - ${this.config.siteName[lang]}`,
      description: `${this.config.texts[lang].aboutPage} ${this.config.siteName[lang]}`,
      publisher: {
        '@id': `${this.config.siteUrl}/#organization`
      },
      inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ'
    };
  }

  // 5. Схема для страниц контента (используем any для простоты)
  generateWebPageSchema(page: any) {
    const lang = this.language;
    const pageUrl = `${this.config.siteUrl}${page.slug ? `/${page.slug}` : ''}`;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.meta?.title || page.title,
      description: page.meta?.description,
      publisher: {
        '@id': `${this.config.siteUrl}/#organization`,
      },
      mainEntityOfPage: {
        '@id': pageUrl,
      },
      datePublished: page.createdAt,
      dateModified: page.updatedAt,
      inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ'
    };
  }

  // 6. Схема для статей (используем any для простоты)
  generateArticleSchema(post: any) {
    const lang = this.language;
    const postUrl = `${this.config.siteUrl}/blog/${post.slug}`;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${postUrl}#article`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl,
      },
      headline: post.title,
      description: post.meta?.description,
      image: post.image?.url ? `${this.config.siteUrl}${post.image.url}` : undefined,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'Admin',
      },
      publisher: {
        '@id': `${this.config.siteUrl}/#organization`,
        name: this.config.siteName[lang],
        logo: {
          '@type': 'ImageObject',
          url: this.config.logoUrl
        }
      },
      datePublished: post.publishedAt || post.createdAt,
      dateModified: post.updatedAt,
      articleSection: post.categories?.[0]?.name,
      keywords: post.tags?.map((tag: any) => tag.name).filter(Boolean).join(', '),
      inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ',
      wordCount: 500
    };
  }

  // 7. Схема для продуктов (используем any для простоты)
  generateProductSchema(product: any) {
    const lang = this.language;
    const productUrl = `${this.config.siteUrl}/products/${product.slug}`;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${productUrl}#product`,
      name: product.title,
      description: product.meta?.description,
      image: product.images?.[0]?.url ? `${this.config.siteUrl}${product.images[0].url}` : undefined,
      sku: product.sku,
      mpn: product.sku,
      brand: {
        '@type': 'Brand',
        name: this.config.siteName[lang],
      },
      offers: {
        '@type': 'Offer',
        url: productUrl,
        priceCurrency: 'UZS',
        price: product.price,
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        availability: product.stock && product.stock > 0 ? 
          'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: {
          '@type': 'Organization',
          name: this.config.siteName[lang]
        }
      },
      aggregateRating: product.rating ? {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 1,
        bestRating: '5',
        worstRating: '1'
      } : undefined,
      inLanguage: lang === 'ru' ? 'ru-RU' : 'uz-UZ'
    };
  }

  // 8. Вспомогательные методы
  private parseWorkingHours(workingHours: string): string[] {
    const hours: string[] = [];
    
    if (workingHours.includes('Пн-Пт') || workingHours.includes('Dushanba-Juma')) {
      hours.push('Mo-Fr 09:00-18:00');
    }
    if (workingHours.includes('Сб') || workingHours.includes('Shanba')) {
      hours.push('Sa 10:00-16:00');
    }
    if (workingHours.includes('Вс') || workingHours.includes('Yakshanba')) {
      hours.push('Su 10:00-14:00');
    } else {
      hours.push('Su off');
    }
    
    return hours;
  }

  // 9. Генерация всех основных схем сразу
  generateCompleteSiteSchema() {
    return [
      this.generateOrganizationSchema(),
      this.generateWebsiteSchema(),
      this.generateLocalBusinessSchema()
    ];
  }

  // 10. Генерация для конкретного языка
  generateForLanguage(language: Language) {
    const originalLang = this.language;
    this.setLanguage(language);
    
    const schemas = this.generateCompleteSiteSchema();
    
    this.setLanguage(originalLang);
    return schemas;
  }
}

// Хелпер функция для быстрого доступа
export const generateStructuredData = (
  data: any,
  type: 'organization' | 'website' | 'localBusiness' | 'contactPage' | 
        'aboutPage' | 'completeSite' | 'page' | 'article' | 'product',
  language: Language = 'ru',
  config: StructuredDataConfig = SITE_CONFIG as StructuredDataConfig
) => {
  const generator = new StructuredDataGenerator(config, language);
  
  switch (type) {
    case 'organization':
      return generator.generateOrganizationSchema();
    case 'website':
      return generator.generateWebsiteSchema();
    case 'localBusiness':
      return generator.generateLocalBusinessSchema();
    case 'contactPage':
      return generator.generateContactPageSchema();
    case 'aboutPage':
      return generator.generateAboutPageSchema();
    case 'completeSite':
      return generator.generateCompleteSiteSchema();
    case 'page':
      return generator.generateWebPageSchema(data);
    case 'article':
      return generator.generateArticleSchema(data);
    case 'product':
      return generator.generateProductSchema(data);
    default:
      return null;
  }
};

// Генерация для обоих языков
export const generateMultiLanguageStructuredData = (
  type: 'organization' | 'website' | 'localBusiness' | 'completeSite'
) => {
  const ruGenerator = new StructuredDataGenerator(SITE_CONFIG as StructuredDataConfig, 'ru');
  const uzGenerator = new StructuredDataGenerator(SITE_CONFIG as StructuredDataConfig, 'uz');
  
  switch (type) {
    case 'organization':
      return {
        ru: ruGenerator.generateOrganizationSchema(),
        uz: uzGenerator.generateOrganizationSchema()
      };
    case 'website':
      return {
        ru: ruGenerator.generateWebsiteSchema(),
        uz: uzGenerator.generateWebsiteSchema()
      };
    case 'localBusiness':
      return {
        ru: ruGenerator.generateLocalBusinessSchema(),
        uz: uzGenerator.generateLocalBusinessSchema()
      };
    case 'completeSite':
      return {
        ru: ruGenerator.generateCompleteSiteSchema(),
        uz: uzGenerator.generateCompleteSiteSchema()
      };
    default:
      return null;
  }
};

// Утилита для создания ссылок
export const createContactLinks = () => {
  return {
    phone: `tel:${SITE_CONFIG.contact.phoneRaw}`,
    email: `mailto:${SITE_CONFIG.contact.email}`,
    whatsapp: `https://wa.me/${SITE_CONFIG.contact.phoneRaw.replace('+', '')}`,
    telegram: `https://t.me/${SITE_CONFIG.contact.phoneRaw.replace('+', '')}`
  };
};