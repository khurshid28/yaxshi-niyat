import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq',
  fields: [{
    type: 'checkbox',
    name: 'full',
    label: 'Показывать все'

  }],
  interfaceName: 'FaqBlock',
}
