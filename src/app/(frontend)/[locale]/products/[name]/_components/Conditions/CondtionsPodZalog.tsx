'use client'

import { TabsSwitch } from '@/components/TabsSwitch'
import { Calc } from '@/payload-types'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Image from 'next/image'

export const CondtionsPodZalog = ({ calcData }: { calcData: Calc }) => {
  const [activeTab, setActiveTab] = useState<string>('nedvij')
  const t = useTranslations('products.pod_zalog')
  const tabsData = [
    {
      name: t('nedvij'),
      key: 'nedvij',
    },
    {
      name: t('avto'),
      key: 'avto',
    },
    {
      name: t('gold'),
      key: 'gold',
    },
  ]

  const data = {
    nedvij: [
      {
        title: t('conditions.nedvij.0.title'),
        text: t('conditions.nedvij.0.text'),
        description: t('conditions.nedvij.0.description'),
        document: t('conditions.nedvij.0.document'),
      },
      {
        title: t('conditions.nedvij.2.title'),
        text: t('conditions.nedvij.2.text', {
          maxLoanAmount: new Intl.NumberFormat('ru-RU').format(calcData.pod_zalog.maxLoanAmount),
        }),
        description: t('conditions.nedvij.2.description'),
        document: t('conditions.nedvij.2.document'),
      },
      {
        title: t('conditions.nedvij.3.title'),
        text: t('conditions.nedvij.3.text', {
          maxTermMonths: calcData.pod_zalog.maxTermMonths,
        }),
        description: t('conditions.nedvij.3.description'),
        document: t('conditions.nedvij.3.document'),
      },
      {
        title: t('conditions.nedvij.4.title'),
        text: t('conditions.nedvij.4.text'),
        description: t('conditions.nedvij.4.description'),
        document: t('conditions.nedvij.4.document'),
      },
      {
        title: t('conditions.nedvij.5.title'),
        text: t('conditions.nedvij.5.text'),
        description: t('conditions.nedvij.5.description'),
        document: t('conditions.nedvij.5.document'),
      },
      {
        title: t('conditions.nedvij.7.title'),
        text: t('conditions.nedvij.7.text'),
        description: t('conditions.nedvij.7.description'),
        document: t('conditions.nedvij.7.document'),
      },
      {
        title: t('conditions.nedvij.8.title'),
        text: t('conditions.nedvij.8.text'),
        description: t('conditions.nedvij.8.description'),
        document: t('conditions.nedvij.8.document'),
      },
    ],
    avto: [
      {
        title: t('conditions.avto.0.title'),
        text: t('conditions.avto.0.text'),
        description: t('conditions.avto.0.description'),
        document: t('conditions.avto.0.document'),
      },
      {
        title: t('conditions.avto.2.title'),
        text: t('conditions.avto.2.text', {
          maxLoanAmount: new Intl.NumberFormat('ru-RU').format(calcData.pod_zalog.maxLoanAmount),
        }),
        description: t('conditions.avto.2.description'),
        document: t('conditions.avto.2.document'),
      },
      {
        title: t('conditions.avto.3.title'),
        text: t('conditions.avto.3.text', {
          maxTermMonths: calcData.pod_zalog.maxTermMonths,
        }),
        description: t('conditions.avto.3.description'),
        document: t('conditions.avto.3.document'),
      },
      {
        title: t('conditions.avto.4.title'),
        text: t('conditions.avto.4.text'),
        description: t('conditions.avto.4.description'),
        document: t('conditions.avto.4.document'),
      },
      {
        title: t('conditions.avto.5.title'),
        text: t('conditions.avto.5.text'),
        description: t('conditions.avto.5.description'),
        document: t('conditions.avto.5.document'),
      },
      {
        title: t('conditions.avto.7.title'),
        text: t('conditions.avto.7.text'),
        description: t('conditions.avto.7.description'),
        document: t('conditions.avto.7.document'),
      },
      {
        title: t('conditions.avto.8.title'),
        text: t('conditions.avto.8.text'),
        description: t('conditions.avto.8.description'),
        document: t('conditions.avto.8.document'),
      },
    ],
    gold: [
      {
        title: t('conditions.gold.0.title'),
        text: t('conditions.gold.0.text'),
        description: t('conditions.gold.0.description'),
        document: t('conditions.gold.0.document'),
      },
      {
        title: t('conditions.gold.2.title'),
        text: t('conditions.gold.2.text', {
          maxLoanAmount: new Intl.NumberFormat('ru-RU').format(calcData.pod_zalog.maxLoanAmount),
        }),
        description: t('conditions.gold.2.description'),
        document: t('conditions.gold.2.document'),
      },
      {
        title: t('conditions.gold.3.title'),
        text: t('conditions.gold.3.text', {
          maxTermMonths: calcData.pod_zalog.maxTermMonthsGold,
        }),
        description: t('conditions.gold.3.description'),
        document: t('conditions.gold.3.document'),
      },
      {
        title: t('conditions.gold.4.title'),
        text: t('conditions.gold.4.text'),
        description: t('conditions.gold.4.description'),
        document: t('conditions.gold.4.document'),
      },
      {
        title: t('conditions.gold.5.title'),
        text: t('conditions.gold.5.text'),
        description: t('conditions.gold.5.description'),
        document: t('conditions.gold.5.document'),
      },
      {
        title: t('conditions.gold.7.title'),
        text: t('conditions.gold.7.text'),
        description: t('conditions.gold.7.description'),
        document: t('conditions.gold.7.document'),
      },
      {
        title: t('conditions.gold.8.title'),
        text: t('conditions.gold.8.text'),
        description: t('conditions.gold.8.description'),
        document: t('conditions.gold.8.document'),
      },
    ],
  }
  return (
    <div className="bg-[#F7F7F7]">
      <div className=" md:p-[48px] py-[32px] relative">
        <div className="mb-[32px] text-center container">
          <h2 className="container font-sofiaSans text-center text-[#1C4058] md:text-[40px] text-[36px] font-bold ">
            {t('conditions_title')}
          </h2>
          <p className="text-secondary-200 text-[18px] font-normal">
            {t('conditions_description')}
          </p>
        </div>
        <div>
          <TabsSwitch tabs={tabsData} activeTab={activeTab} onChange={setActiveTab} />

          <div className="container">
            <div className=" relative overflow-hidden mt-[24px] bg-[#FFFFFF] rounded-[40px] py-[32px] px-[48px]">
              <Image priority src="/assets/EllipseCalc.svg" alt="elipce-calc" className="absolute right-0 top-0" width={190} height={190}/>
              {data[activeTab]
                ? data[activeTab].map((item, index, arr) => {
                    return (
                      <div
                        key={item.title}
                        className={`flex row-to-col-md justify-between ${index !== arr.length - 1 ? 'border-dashed border-b-[2px] border-[#1C40581F]' : ''}  py-[20px]`}
                      >
                        <p className="text-[18px] text-secondary-200 font-semibold">{item.title}</p>
                        <div className="md:text-right">
                          {item.document !== null ? (
                            <a
                              className="md:text-right text-[#FB8500] font-semibold font-sofiaSans text-[18px]"
                              download={true}
                              href={item.document}
                            >
                              {item.text}
                            </a>
                          ) : (
                            <p className="md:text-right text-[#1C4058] font-semibold font-sofiaSans text-[18px]">
                              {item.text}
                            </p>
                          )}
                          {item.description ? (
                            <p className="md:text-right text-[#617A8B] italic font-sofiaSans">
                              {item.description}
                            </p>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    )
                  })
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
