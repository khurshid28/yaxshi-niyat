import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '@/payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
      const path = `/news/${doc.slug}`

      payload.logger.info(`Revalidating post at path: ${path}`)

      revalidatePath(path)
      revalidateTag('news-sitemap')

  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/news/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('news-sitemap')
  }

  return doc
}
