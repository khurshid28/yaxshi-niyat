import Link from 'next/link'
import { FaqBlock } from '@/blocks/FaqBlock'
import { formatDate } from '@/utilities/dayjs'
import { Media } from '@/components/Media'
import { useLocale, useTranslations } from 'next-intl'
import { StructuredDataServer } from '@/components/StructuredDataServer'
import { generateStructuredData } from '@/utilities/structuredData'

export default function BlogPage({ data }: any) {
  const t = useTranslations()
  const locale = useLocale()

  // Генерация structured data для страницы блога
  const blogSchema = generateStructuredData(
    {
      title: t('blog_title'),
      description: `${t('blog_description_1')} ${t('blog_description_2')}`,
      slug: 'blog',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    'page',
    locale as 'ru' | 'uz'
  )

  // Генерация схемы для списка статей
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('blog_title'),
    description: `${t('blog_description_1')} ${t('blog_description_2')}`,
    numberOfItems: data.length,
    itemListElement: data.map((post: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        name: post.title,
        description: post.description,
        url: `https://yaxshiniyat.uz/${locale}/blog/${post.slug}`,
        image: post.heroImage?.url ? `https://yaxshiniyat.uz${post.heroImage.url}` : undefined,
        datePublished: post.publishedAt,
        author: {
          '@type': 'Organization',
          name: 'Yaxshiniyat'
        }
      }
    }))
  }

  return (
    <div className="self-stretch relative overflow-hidden">
      {/* Structured Data */}
      <StructuredDataServer data={blogSchema} id="blog-page" />
      <StructuredDataServer data={itemListSchema} id="blog-list" />
      
      <div className="flex flex-col justify-start items-center gap-12 container lg:px-12 pb-12">
        <div className="gap-1">
          <h1 className="self-stretch text-[40px] font-bold text-[#1c4058]">{t('blog_title')}</h1>
          <p className="text-secondary-200 text-[18px] font-normal">
            {t('blog_description_1')}
            <br />
            {t('blog_description_2')}
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-12">
          {data.map((post: any, index: number) => (
            <NewsItem key={index} {...post} locale={locale} />
          ))}
        </div>
      </div>
      <FaqBlock locale={locale as any} />
    </div>
  )
}

const NewsItem = ({ slug, locale, title, heroImage, publishedAt, description }: any) => (
  <Link
    href={`/${locale}/blog/${slug}`}
    className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-4"
  >
    <div className="self-stretch relative aspect-[1.46]">
      <Media fill imgClassName="object-cover rounded-[30px]" resource={heroImage} priority />
    </div>
    <div className="flex flex-col justify-start items-start self-stretch gap-8">
      <div className="flex flex-col justify-start items-start self-stretch relative gap-2">
        <p className="self-stretch text-2xl font-bold text-[#1c4058] font-sofiaSans">{title}</p>
        <p className="self-stretch text-base italic text-orange font-sofiaSans">
          {formatDate(publishedAt, locale)}
        </p>
        <p className="self-stretch text-lg text-[#617a8b]">
          <span className="self-stretch w-[318px] text-lg text-[#617a8b]">{description}</span>
        </p>
      </div>
    </div>
  </Link>
)