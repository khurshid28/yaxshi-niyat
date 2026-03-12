import type { GlobalConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateContacts: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating offices`)

    revalidateTag('global_offices_ru')
    revalidateTag('global_offices_uz')
  }

  return doc
}

const regionOptions = [
  {
    label: 'Toshkent',
    value: 'tashkent',
  },
  {
    label: 'Toshkent viloyati',
    value: 'tashkentRegion',
  },
  {
    label: 'Buxoro',
    value: 'bukhara',
  },
  {
    label: 'Andijan',
    value: 'andijan',
  },
  {
    label: 'Samarqand',
    value: 'samarkand',
  },
  {
    label: 'Navoiy',
    value: 'navoiy',
  },
  {
    label: 'Jizzax',
    value: 'jizzax',
  },
  {
    label: 'Qarshi',
    value: 'qarshi',
  },
  {
    label: 'Termiz',
    value: 'termiz',
  },
  {
    label: 'Urganch',
    value: 'urganch',
  },
  {
    label: 'Karakalpakstan',
    value: 'karakalpakstan',
  },
  {
    label: 'Khorezm',
    value: 'khorezm',
  },
  {
    label: 'Fergana',
    value: 'fergana',
  },
  {
    label: 'Surxondaryo',
    value: 'surxondaryo',
  },
  {
    label: 'Sirdaryo',
    value: 'sirdaryo',
  },
  {
    label: 'Namangan',
    value: 'namangan',
  },
]

export const Offices: GlobalConfig = {
  slug: 'offices',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'items',
      label: 'Контакт',
      type: 'array',
      required: true,
      fields: [
        {
          type: 'select',
          name: 'region',
          defaultValue: 'tashkent',
          options: regionOptions,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Заголовок',
          required: true,
          localized: true,
        },
        {
          name: 'address',
          type: 'text',
          label: 'Адрес',
          required: true,
          localized: true,
        },
        {
          name: 'Schedule',
          type: 'array',
          label: 'График',
          required: true,
          fields: [
            {
              name: 'item',
              type: 'text',
              defaultValue: 'Пн-Сб с 09:00-18:00',
              required: true,
              localized: true,
            },
          ],
        },
        {
          name: 'phones',
          type: 'array',
          label: 'Телефоны',
          required: true,
          fields: [
            {
              name: 'item',
              type: 'text',
              defaultValue: '+998 (78) 113-31-11',
              required: true,
            },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateContacts],
  },
}
