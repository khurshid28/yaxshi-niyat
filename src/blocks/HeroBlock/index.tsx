import { Calc } from '@/payload-types'
import { HeroBlockClient } from './client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { TypedLocale } from 'payload'

export const HeroBlock = async ({ locale }: { locale: TypedLocale }) => {
  const calcData: Calc = (await getCachedGlobal('calc', locale, 1)()) as Calc
  return <HeroBlockClient calcData={calcData} />
}
