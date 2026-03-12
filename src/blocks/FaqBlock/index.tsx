import { TypedLocale } from 'payload'
import type { Faq as FaqProps } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { FaqBlockClient } from './client'

export const FaqBlock = async ({
  full = false,
  locale,
}: {
  full?: boolean
  locale: TypedLocale
}) => {


  const data: FaqProps = (await getCachedGlobal('faq', locale, 1)()) as FaqProps


  const items = data.items.slice(0, full ? 100 : 6)


  return <FaqBlockClient full={full} locale={locale} items={items} />

}
