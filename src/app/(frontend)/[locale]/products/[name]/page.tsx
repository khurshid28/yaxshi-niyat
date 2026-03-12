import { FaqBlock } from '@/blocks/FaqBlock'
import { CallToActionBlock } from '@/blocks/CallToActionBlock'
import { PartnersBlock } from '@/blocks/PartnersBlock'
import { getPayload, TypedLocale } from 'payload'
import { ProductsBlock } from '@/blocks/ProductsBlock'
import { TopBanner } from './_components/TopBanner'
import { DescriptionBlocks } from './_components/descriptionBlocks/DescriptionBlocks'
import { Calculate } from './_components/Calculate/Calculate'
import { Conditions } from './_components/Conditions/Conditions'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Calc } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { cache } from 'react'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { StructuredDataServer } from '@/components/StructuredDataServer'
import { SITE_CONFIG } from '@/payload.config'

type Props = {
  params: Promise<{
    locale: TypedLocale
    name: string
  }>
}

export default async function Blog({ params }: Props) {
  const { locale, name } = await params

  const calcData: Calc = (await getCachedGlobal('calc', locale, 1)()) as Calc

  return (
    <div>
      {/* Простая WebPage schema */}
      <StructuredDataServer 
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': name,
          'url': `${SITE_CONFIG.siteUrl}/${locale}/products/${name}`
        }} 
        id="webpage" 
      />

      <TopBanner name={name} locale={locale} />
      <DescriptionBlocks name={name} calcData={calcData} />
      <Calculate name={name} calcData={calcData} />
      <Conditions name={name} calcData={calcData} />
      <CallToActionBlock />
      <ProductsBlock exclude={name} locale={locale} />
      <PartnersBlock locale={locale} />
      <FaqBlock locale={locale} />
    </div>
  )
}

export async function generateStaticParams() {
  if (process.env.NEXT_BUILD_SKIP_DB === 'true') return []
  try {
    const payload = await getPayload({ config: configPromise })
    const pages = await payload.find({
      collection: 'pages',
      where: {
        parent: {
          equals: 7,
        },
      },
      limit: 1000,
      overrideAccess: true,
      pagination: false,
      select: {
        slug: true,
      },
    })

    const params = pages.docs.map(({ slug }) => ({ name: slug }))

    return params
  } catch {
    return []
  }
}

type Args = {
  params: Promise<{
    name?: string
    locale: TypedLocale
  }>
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { name, locale } = await paramsPromise

  const page = await queryPageBySlug({
    slug: name || '',
    locale,
  })

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
  })

  return result.docs?.[0] || null
})
