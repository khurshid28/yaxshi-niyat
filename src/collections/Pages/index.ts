import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { anyone } from '@/access/anyone'
import { About } from '@/blocks/AboutBlock/config'
import { AboutLicenses } from '@/blocks/AboutLicensesBlock/config'
import { AdditionalDocs } from '@/blocks/AdditionalDocsBlock/config'
import { Archive } from '@/blocks/ArchiveBlock/config'
import { CallToAction } from '@/blocks/CallToActionBlock/config'
import { Employees } from '@/blocks/EmployeesBlock/config'
import { Hero } from '@/blocks/HeroBlock/config'
import { Licenses } from '@/blocks/LicensesBlock/config'
import { Partners } from '@/blocks/PartnersBlock/config'
import { Products } from '@/blocks/ProductsBlock/config'
import { FaqBlock } from '@/blocks/FaqBlock/config'

import { Map } from '@/blocks/MapBlock/config'
import { createParentField } from '@payloadcms/plugin-nested-docs'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  labels: {
    singular: 'Страница',
    plural: 'Страницы',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt', 'parent'],
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                About,
                AboutLicenses,
                AdditionalDocs,
                Archive,
                CallToAction,
                Employees,
                FaqBlock,
                Hero,
                Licenses,
                Map,
                Partners,
                Products,
              ],
              required: false,
              admin: {
                initCollapsed: false,
              },
              label: 'Content',
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    createParentField(
      // First argument is equal to the slug of the collection
      // that the field references
      'pages',

      // Second argument is equal to field overrides that you specify,
      // which will be merged into the base parent field config
      {
        admin: {
          position: 'sidebar',
        },
        // Note: if you override the `filterOptions` of the `parent` field,
        // be sure to continue to prevent the document from referencing itself as the parent like this:
        // filterOptions: ({ id }) => ({ id: {not_equals: id }})
      },
    ),
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
}
