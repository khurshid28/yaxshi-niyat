import { generateStructuredData } from '../utilities/structuredData'
import { generateAbsoluteUrl } from '../utilities/url'

export const useBlogStructuredData = (post: any, locale: string) => {
  const articleSchema = generateStructuredData(
    {
      title: post.title,
      slug: post.slug,
      meta: { description: post.description },
      image: post.heroImage,
      author: { name: post.author?.name || 'Yaxshiniyat' },
      publishedAt: post.publishedAt,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      categories: post.categories,
      tags: post.tags
    },
    'article',
    locale as 'ru' | 'uz'
  )

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'ru' ? 'Главная' : 'Bosh sahifa',
        item: generateAbsoluteUrl('', locale)
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'ru' ? 'Блог' : 'Blog',
        item: generateAbsoluteUrl('/blog', locale)
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: generateAbsoluteUrl(`/blog/${post.slug}`, locale)
      }
    ]
  }

  return { articleSchema, breadcrumbSchema }
}