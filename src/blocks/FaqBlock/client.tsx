'use client'

import { useState } from 'react'
import { AddCircleIcon } from '../../components/Icons/AddCircle'
import { TECollapse } from 'tw-elements-react'
import { MinusCircleIcon } from '../../components/Icons/MinusCircle'
import { Button } from '../../components/Button'
import { twMerge } from 'tailwind-merge'
import { TypedLocale } from 'payload'
import type { Faq as FaqProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const FaqBlockClient = ({
  full,
  locale,
  items,
}: {
  full: boolean
  locale: TypedLocale
  items: FaqProps['items']
}) => {
  const t = useTranslations()
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIdx(activeIdx === index ? null : index)
  }
  const isActive = (index: number) => activeIdx === index

  return (
    <div
      className={twMerge(
        'flex flex-col justify-center items-center gap-12 md:px-12 px-4 py-14',
        !full && 'bg-[#f7f7f7]',
      )}
    >
      <div className="flex flex-col justify-start items-center md:gap-12 gap-8 max-w-[942px] w-full">
        <div className="flex flex-col self-stretch gap-[15px]">
          <div className="flex flex-col self-stretch relative gap-1">
            <h1 className="self-stretch font-bold text-center text-[#1c4058]">
              {full ? t('faq_2') : t('faq')}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center relative gap-4 md:px-8 px-4 rounded-[40px] max-w-[942px] w-full">
          {items.map((item, index, array) => (
            <div
              className={`${index !== array.length - 1 ? 'border-b border-dashed border-[#1C4058/16]' : ''}`}
              key={index}
            >
              <div className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 py-2 rounded-[20px] pb-4">
                <div className="flex self-stretch relative gap-12">
                  <div className="flex flex-col flex-grow relative gap-2">
                    <h2
                      className="self-stretch md:text-2xl text-xl text-[#1c4058] cursor-pointer"
                      onClick={() => toggleAnswer(index)}
                    >
                      {item.title}
                    </h2>

                    <TECollapse show={isActive(index)} theme={{ collapseStyles: '' }}>
                      <div className="self-stretch text-lg">
                        <RichText data={item.content} />
                      </div>
                    </TECollapse>
                  </div>

                  <div className="cursor-pointer" onClick={() => toggleAnswer(index)}>
                    {isActive(index) ? <MinusCircleIcon /> : <AddCircleIcon />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!full && (
          <Link href={`/${locale}/faq`} className=" w-[234px]">
            <Button variant="outline">{t('all_questions')}</Button>
          </Link>
        )}
      </div>
    </div>
  )
}
