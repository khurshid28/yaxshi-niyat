import { getCachedGlobal } from '@/utilities/getGlobals'
import { MapBlockClient } from './client'
import { TypedLocale } from 'payload'
import { Office } from '@/payload-types'
export const MapBlock = async ({
  className,
  locale,
}: {
  className?: string
  locale: TypedLocale
}) => {
  const data = (await getCachedGlobal('offices', locale, 1)()) as Office
  return <MapBlockClient data={data} />
}
