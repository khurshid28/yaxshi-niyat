'use client'
import { Media } from '@/components/Media'
import { ReactMarques } from 'react-marques'

export const PartnersBlockClient = ({ items }: any) => {
  return (
    <div className="flex flex-col justify-start items-center self-stretch overflow-hidden p-12 bg-[#1c4058] whitespace-nowrap">
      <ReactMarques fade={true}>
        {items.map((logo, index) => (
          <Media
            imgClassName={`h-9 object-contain inline-block mr-8`}
            className={`flex-shrink-0`}
            resource={logo.media}
            priority
            key={index}
          />
        ))}
        {items.map((logo, index) => (
          <Media
            imgClassName={`h-9 object-contain inline-block mr-8`}
            className={`flex-shrink-0`}
            resource={logo.media}
            priority
            key={index}
          />
        ))}
      </ReactMarques>
    </div>
  )
}
