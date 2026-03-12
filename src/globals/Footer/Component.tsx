import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FooterClient } from './Component.client'

export async function Footer({ locale }: any) {
  const footerData: Footer = (await getCachedGlobal('footer', locale, 1)()) as Footer

  const payload = await getPayload({ config: configPromise })
  const fetchedPosts = await payload.find({
    collection: 'posts',
    locale: locale,
    depth: 0,
    limit: 2,
  })

  return <FooterClient fetchedPosts={fetchedPosts} footerData={footerData} locale={locale} />
}
