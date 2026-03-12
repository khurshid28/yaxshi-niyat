'use client'

import Link from 'next/link'
import { TypedLocale } from 'payload'

type Props = {
  data: {
    title: string
    path?: string | null
    isActive: boolean
  }[]
  locale: TypedLocale
}

export default function BreadCrumbs({ data, locale }: Props) {
  return (
    <div className="flex gap-[8px] my-[16px]">
      {data.map((item, index, arr) => {
        if (item.isActive && item.path) {
          return (
            <div
              key={index + item.title}
              className="flex gap-[8px] font-semibold text-[14px] text-secondary-200"
            >
              <Link href={`/${locale}${item.path}`}>{item.title}</Link>
              {index !== arr.length - 1 ? <span>/</span> : ''}
            </div>
          )
        }
        return (
          <div
            key={index + item.title}
            className="flex gap-[8px] font-semibold text-[14px] text-[#1C4058] "
          >
            <p>{item.title}</p>
            {index !== arr.length - 1 ? <span>/</span> : ''}
          </div>
        )
      })}
    </div>
  )
}
