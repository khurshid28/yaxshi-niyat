import type { GlobalConfig } from 'payload'
import { defaultLexical } from '@/fields/defaultLexical'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidate: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating faq`)

    revalidateTag('global_faq_ru')
    revalidateTag('global_faq_uz')
  }

  return doc
}

export const Faq: GlobalConfig = {
  slug: 'faq',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'items',
      label: 'Вопросы-ответы',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Вопрос',
          required: true,
          localized: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: defaultLexical,
          label: 'Ответ',
          required: true,
          localized: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidate],
  },
}
