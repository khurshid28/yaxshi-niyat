import { ArchiveBlock } from '@/blocks/ArchiveBlock'
import RichText from '@/components/RichText'
import { formatDate } from '@/utilities/dayjs'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { StructuredDataServer } from '@/components/StructuredDataServer'
import { SITE_CONFIG } from '@/payload.config'

export default function Page({ data, locale }: any) {
  const t = useTranslations()

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': data.title,
    'description': data.meta?.description || data.description || t('blog_description'),
    'image': data.heroImage?.url ? `${SITE_CONFIG.siteUrl}${data.heroImage.url}` : undefined,
    'author': {
      '@type': 'Person',
      'name': data.author?.name || data.author?.username || 'Yaxshiniyat'
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE_CONFIG.siteName[locale as 'ru' | 'uz'],
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logoUrl}`
      }
    },
    'datePublished': data.publishedAt,
    'dateModified': data.updatedAt || data.publishedAt,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.siteUrl}/${locale}/blog/${data.slug}`
    },
    'inLanguage': locale === 'ru' ? 'ru-RU' : 'uz-UZ'
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': t('main'),
        'item': `${SITE_CONFIG.siteUrl}/${locale}`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': t('blog'),
        'item': `${SITE_CONFIG.siteUrl}/${locale}/blog`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': data.title,
        'item': `${SITE_CONFIG.siteUrl}/${locale}/blog/${data.slug}`
      }
    ]
  }

  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SITE_CONFIG.siteName[locale as 'ru' | 'uz'],
    'url': SITE_CONFIG.siteUrl,
    'logo': `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logoUrl}`,
    'sameAs': SITE_CONFIG.socialProfiles
  }

  return (
    <div className="self-stretch relative overflow-hidden">
      {/* Structured Data */}
      <StructuredDataServer data={organizationSchema} id="organization" />
      <StructuredDataServer data={articleSchema} id="article" />
      <StructuredDataServer data={breadcrumbSchema} id="breadcrumb" />
      
      <div className="container lg:px-12  flex flex-col items-stretch pb-8">
        <div className="flex flex-col items-stretch gap-8">
          <div className="flex items-start relative gap-2">
            <Link href={`/${locale}`} className="text-sm font-semibold text-left text-[#617a8b]">
              {t('main')}
            </Link>
            <p className="text-sm font-semibold text-left text-[#617a8b]">/</p>
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-semibold text-left text-[#617a8b]"
            >
              {t('blog')}
            </Link>
            <p className="text-sm font-semibold text-left text-[#617a8b]">/</p>
            <p className="text-sm font-semibold text-left text-[#1c4058]">{data.title}</p>
          </div>

          <div className=" h-80 gap-12 mx-auto md:w-[1006px] w-full max-w-[1006px] ">
            <div className="flex flex-col items-start flex-grow relative overflow-hidden gap-8 rounded-[40px] bg-[#e4e6e7]">
              <div className="relative flex justify-between w-full overflow-hidden  h-80">
                <div
                  className={`flex z-[3] w-full flex-col justify-center  relative gap-2 px-8 font-sofiaSans`}
                >
                  <h1 className="md:text-[40px] text-[32px] font-bold text-left text-white">
                    {data.title}
                  </h1>
                  <p className="md:text-lg text-[18px] italic text-left text-[#fb8500]">
                    {formatDate(data.publishedAt, locale)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-2.5 max-w-[1006px] w-full mx-auto">
            <RichText data={data.content} />
          </div>
        </div>
      </div>
      
      <ArchiveBlock locale={locale} title={t('same_post')} excludePost={data.id} />
    </div>
  )
}