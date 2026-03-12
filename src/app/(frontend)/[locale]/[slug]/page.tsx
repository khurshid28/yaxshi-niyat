import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayload, TypedLocale } from 'payload'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { StructuredDataServer } from '@/components/StructuredDataServer'
import { SITE_CONFIG } from '@/payload.config'

export async function generateStaticParams() {
  if (process.env.NEXT_BUILD_SKIP_DB === 'true') return []
  try {
    const payload = await getPayload({ config: configPromise })
    const pages = await payload.find({
      collection: 'pages',
      limit: 1000,
      overrideAccess: true,
      pagination: false,
      select: {
        slug: true,
      },
    })

    const params = pages.docs
      ?.filter((doc) => {
        return doc.slug !== 'home'
      })
      .map(({ slug }) => ({ slug }))

    return params
  } catch {
    return []
  }
}

type Args = {
  params: Promise<{
    slug?: string
    locale: TypedLocale
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home', locale } = await paramsPromise
  const url = '/' + locale + '/' + slug
  const page = await queryPageBySlug({ slug, locale })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  // Для главной страницы используем WebSite, для остальных - WebPage
  const schema = slug === 'home' 
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': page.title,
        'url': `${SITE_CONFIG.siteUrl}/${locale}`,
        'inLanguage': locale === 'ru' ? 'ru-RU' : 'uz-UZ'
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': page.title,
        'url': `${SITE_CONFIG.siteUrl}/${locale}/${slug}`,
        'inLanguage': locale === 'ru' ? 'ru-RU' : 'uz-UZ'
      }

  return (
    <div className="self-stretch relative overflow-hidden">
      <StructuredDataServer data={schema} id={slug === 'home' ? 'website' : 'webpage'} />
      <RenderBlocks blocks={page.layout} locale={locale} />
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home', locale } = await paramsPromise
  const page = await queryPageBySlug({ slug, locale })
  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    locale,
    pagination: false,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 3,
  })
  return result.docs?.[0] || null
})