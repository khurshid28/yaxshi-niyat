import { getPayload, TypedLocale } from 'payload'
import configPromise from '@payload-config'
import BlogClient from './page.client'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { cache } from 'react'

type Props = {
  params: Promise<{ locale: TypedLocale }>
}

type Args = {
  params: Promise<{
    locale: TypedLocale
  }>
}

export default async function Blog({ params }: Props) {
  const { locale } = await params

  const payload = await getPayload({ config: configPromise })

  const page = await queryPageBySlug({
    locale: locale as TypedLocale,
  })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 100,
    locale: locale as TypedLocale,
    overrideAccess: true,
  })

  return <BlogClient locale={locale} data={posts.docs} page={page} />
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { locale } = await paramsPromise

  const page = await queryPageBySlug({
    locale,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ locale }: { locale: TypedLocale }) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    locale,
    pagination: false,
    overrideAccess: true,
    where: {
      slug: {
        equals: 'blog',
      },
    },
    select: {
      title: true,
      description: true,
    },
    depth: 3,
  })

  return result.docs?.[0] || null
})
