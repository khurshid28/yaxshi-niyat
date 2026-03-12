import type { GlobalConfig } from 'payload'

import { revalidateFooter } from './hooks/revalidate'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const Footer: GlobalConfig = {
  slug: 'footer',
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
      name: 'address',
      defaultValue: 'Ташкент, 9-й тупик Сагбан, 30',
      localized: true,
      required: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      defaultValue: 'Support@yniyat.uz',
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Телефон',
      defaultValue: '998 (90) 900-90-90',
    },
    {
      type: 'text',
      name: 'copyright',
      label: 'Текст копирайта',
      defaultValue: 'ООО «CASH U mikromoliya tashkiloti»',
      localized: true,
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
