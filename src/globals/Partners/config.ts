import type { GlobalConfig } from 'payload'

import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const revalidate: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating`)

    revalidateTag(`global_partners_ru`)
    revalidateTag(`global_partners_uz`)
  }

  return doc
}

export const Partners: GlobalConfig = {
  slug: 'partners',
  label: {
    singular: 'Партнеры',
  },
  fields: [
    {
      type: 'array',
      name: 'items',
      fields: [
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
  access: {
    read: anyone,
    update: authenticated,
  },
  hooks: {
    afterChange: [revalidate],
  },
}
