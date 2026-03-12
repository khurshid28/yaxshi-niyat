import type { Partner as PartnersProps } from '@/payload-types'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { TypedLocale } from 'payload'
import { PartnersBlockClient } from './client'

export const PartnersBlock = async ({ locale }: { locale: TypedLocale }) => {
  const data: PartnersProps = (await getCachedGlobal('partners', locale, 1)()) as PartnersProps

  return <PartnersBlockClient items={data.items} />
}
