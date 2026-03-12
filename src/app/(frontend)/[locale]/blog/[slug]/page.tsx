import PageClient from './page.client'
import { Post } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import { cache } from 'react'
import { getPayload, TypedLocale } from 'payload'
import { Metadata } from 'next'
import configPromise from '@payload-config'

type Props = {
  params: Promise<{ locale: TypedLocale; slug: string }>
}

export default async function NewsView({ params }: Props) {
  const { locale, slug = '' } = await params

  const post = (await queryPostBySlug({
    slug,
    locale,
  })) as Post

  return <PageClient data={post} locale={locale} />
}

export async function generateMetadata({ params: paramsPromise }: Props): Promise<Metadata> {
  const { slug = '', locale } = await paramsPromise
  const post = await queryPostBySlug({ slug, locale })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    limit: 1,
    locale,
    overrideAccess: true,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
