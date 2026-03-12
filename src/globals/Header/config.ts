import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidate'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: 'text',
      name: 'telegram',
    },
    {
      type: 'text',
      name: 'facebook',
    },
    {
      type: 'text',
      name: 'instagram',
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Телефон',
      defaultValue: '998 (90) 900-90-90',
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
