import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import configPromise from '@payload-config'
import { getPayload, TypedLocale } from 'payload'
import { ArchiveBlockClient } from './client'

export const ArchiveBlock = async ({
  bgWhite = false,
  locale,
  title,
  excludePost,
}: {
  bgWhite?: boolean
  locale: TypedLocale
  title?: string
  excludePost?: any
}) => {
  const where = excludePost ? { id: { not_equals: excludePost } } : undefined
  const payload = await getPayload({ config: configPromise })
  const fetchedPosts = await payload.find({
    collection: 'posts',
    locale: locale,
    depth: 1,
    limit: 6,
    where,
  })

  return (
    <ArchiveBlockClient
      bgWhite={bgWhite}
      locale={locale}
      fetchedPosts={fetchedPosts}
      title={title}
    />
  )
}
