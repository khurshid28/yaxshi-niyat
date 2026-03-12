import React from 'react'
import { AboutBlock } from './AboutBlock'
import { AboutLicensesBlock } from './AboutLicensesBlock'
import { AdditionalDocsBlock } from './AdditionalDocsBlock'
import { CallToActionBlock } from './CallToActionBlock'
import { ArchiveBlock } from './ArchiveBlock'
import { EmployeesBlock } from './EmployeesBlock'
import { FaqBlock } from './FaqBlock'
import { HeroBlock } from './HeroBlock'
import { LicensesBlock } from './LicensesBlock'
import { PartnersBlock } from './PartnersBlock'
import { ProductsBlock } from './ProductsBlock'
import { MapBlock } from './MapBlock'

// import type { Page } from '@/payload-types'

const blockComponents: any = {
  about: AboutBlock,
  aboutLicenses: AboutLicensesBlock,
  additionalDocs: AdditionalDocsBlock,
  archive: ArchiveBlock,
  callToAction: CallToActionBlock,
  employees: EmployeesBlock,
  faq: FaqBlock,
  hero: HeroBlock,
  licenses: LicensesBlock,
  map: MapBlock,
  partners: PartnersBlock,
  products: ProductsBlock,
}

export const RenderBlocks: React.FC<{
  blocks: any
  locale: string
}> = async (props) => {
  const { blocks, locale } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <React.Fragment key={index}>
                  <Block {...block} locale={locale} disableInnerContainer />
                </React.Fragment>
              )
            }
          }
          return null
        })}
      </>
    )
  }

  return null
}
