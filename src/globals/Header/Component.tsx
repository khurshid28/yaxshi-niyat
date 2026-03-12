import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header({ locale }: any) {
  const headerData: Header = await getCachedGlobal('header', locale, 1)() as Header

  return <HeaderClient data={headerData} locale={locale} />
}
