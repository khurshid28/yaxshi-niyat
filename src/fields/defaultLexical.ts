import { Config } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  BlocksFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HorizontalRuleFeature,
  HeadingFeature,
} from '@payloadcms/richtext-lexical'
import { MediaBlock } from '@/components/RichText/blocks/MediaBlock/config'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ defaultFeatures, rootFeatures }) => {
    return [
      ...defaultFeatures,
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      HorizontalRuleFeature(),
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      LinkFeature({
        enabledCollections: ['pages', 'posts'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: ({ linkType }) => linkType !== 'internal',
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
              validate: (value: any, options: any) => {
                if (options?.siblingData?.linkType === 'internal') {
                  return true // no validation needed, as no url should exist for internal links
                }
                return value ? true : 'URL is required'
              },
            },
          ]
        },
      }),
      BlocksFeature({
        blocks: [MediaBlock],
      }),
    ]
  },
})
