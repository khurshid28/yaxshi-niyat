// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { ru } from '@payloadcms/translations/languages/ru'
import { Faq } from './globals/Faq/config'
import { Partners } from './globals/Partners/config'
import { Offices } from './globals/Offices/config'
import { Calc } from './globals/Calc/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


// Глобальная конфигурация сайта с мультиязычностью
export const SITE_CONFIG = {
  // Основная информация
  siteUrl: process.env.SITE_URL || 'https://yaxshiniyat.uz',
  siteName: {
    ru: 'Yaxshiniyat',
    uz: 'Yaxshiniyat'
  },
  logoUrl: process.env.LOGO_URL || '/logo.png',
  
  // Контактная информация
  address: {
    ru: {
      full: 'г. Ташкент, Алмазарский район, ул. Сагбан 30 туп, д. 9',
      city: 'Ташкент',
      district: 'Алмазарский район',
      street: 'ул. Сагбан 30 туп',
      building: 'д. 9',
      country: 'UZ',
      postalCode: '100000'
    },
    uz: {
      full: 'Toshkent shahar, Almazar tumani, Sagbon 30 tup ko\'chasi, 9-uy',
      city: 'Toshkent',
      district: 'Almazar tumani',
      street: 'Sagbon 30 tup ko\'chasi',
      building: '9-uy',
      country: 'UZ',
      postalCode: '100000'
    }
  },
  contact: {
    email: 'info@yaxshiniyat.uz',
    phone: '+998 (78) 113-31-14',
    phoneRaw: '+998781133114',
    workingHours: {
      ru: 'Пн-Пт: 9:00-18:00, Сб: 10:00-16:00',
      uz: 'Dushanba-Juma: 9:00-18:00, Shanba: 10:00-16:00'
    }
  },
  
  // Социальные сети
  socialProfiles: [
    'https://www.facebook.com/yaxshiniyat',
    'https://www.instagram.com/yaxshiniyat_uz',
    'https://t.me/yaxshiniyat_uz',
  ],

  // Геолокация
  geo: {
    latitude: 41.2995,
    longitude: 69.2401,
    timezone: 'Asia/Tashkent'
  },

  // Тексты для structured data
  texts: {
    ru: {
      organization: 'Организация',
      website: 'Веб-сайт',
      searchAction: 'Поиск по сайту',
      customerService: 'Обслуживание клиентов',
      localBusiness: 'Местный бизнес',
      contactPage: 'Контактная страница',
      aboutPage: 'О нас',
      workingHours: 'Режим работы',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Электронная почта'
    },
    uz: {
      organization: 'Tashkilot',
      website: 'Veb-sayt',
      searchAction: 'Sayt bo\'yicha qidiruv',
      customerService: 'Mijozlarga xizmat ko\'rsatish',
      localBusiness: 'Mahalliy biznes',
      contactPage: 'Aloqa sahifasi',
      aboutPage: 'Biz haqimizda',
      workingHours: 'Ish vaqtlari',
      address: 'Manzil',
      phone: 'Telefon',
      email: 'Elektron pochta'
    }
  }
} as const;

export type SiteConfig = typeof SITE_CONFIG;
export type Language = 'ru' | 'uz';

export default buildConfig({
  localization: {
    locales: ['ru', 'uz'], // required
    defaultLocale: 'uz', // required
  },
  i18n: {
    supportedLanguages: { ru },
    fallbackLanguage: 'ru',
  },
  admin: {
    theme: 'dark',
    components: {
      graphics: {
        Logo: {
          path: '@/components/LogoV2/LogoV2#LogoV2',
        },
        Icon: {
          path: '@/components/LogoV2/LogoV2#Icon',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
  }),
  collections: [Pages, Media, Users, Posts],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, Faq, Partners, Offices, Calc],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM || 'info@yaxshiniyat.uz',
    defaultFromName: 'Yaxshiniyat',
    transportOptions: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  secret: process.env.PAYLOAD_SECRET ?? '75c98a9def0e3a58eaabcc5e',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
