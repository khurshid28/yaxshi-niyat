'use client'

import { Calc } from '@/payload-types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const ConditionsBezZaloga = ({ calcData }: { calcData: Calc }) => {
  const t = useTranslations('products.bez_zaloga')
  const data = [
    {
      title: t('conditions.0.title'),
      text: t('conditions.0.text'),
      description: t('conditions.0.description'),
      document: t('conditions.0.document'),
    },
    {
      title: t('conditions.2.title'),
      text: t('conditions.2.text', {
        maxLoanAmount: new Intl.NumberFormat('ru-RU').format(calcData.bez_zaloga.maxLoanAmount),
      }),
      description: t('conditions.2.description'),
      document: t('conditions.2.document'),
    },
    {
      title: t('conditions.3.title'),
      text: t('conditions.3.text', {
        maxTermMonths: calcData.bez_zaloga.maxTermMonths,
      }),
      description: t('conditions.3.description'),
      document: t('conditions.3.document'),
    },
    {
      title: t('conditions.4.title'),
      text: t('conditions.4.text'),
      description: t('conditions.4.description'),
      document: t('conditions.4.document'),
    },
    {
      title: t('conditions.5.title'),
      text: t('conditions.5.text'),
      description: t('conditions.5.description'),
      document: t('conditions.5.document'),
    },
    {
      title: t('conditions.7.title'),
      text: t('conditions.7.text'),
      description: t('conditions.7.description'),
      document: t('conditions.7.document'),
    },
    {
      title: t('conditions.8.title'),
      text: t('conditions.8.text'),
      description: t('conditions.8.description'),
      document: t('conditions.8.document'),
    },
  ]
  return (
    <div className="bg-[#F7F7F7]">
      <div className="container p-[48px] relative">
        <div className="mb-[32px] text-center container">
          <h2 className="container font-sofiaSans text-center text-[#1C4058] md:text-[40px] text-[36px] font-bold ">
            {t('conditions_title')}
          </h2>
          <p className="text-secondary-200 text-[18px] font-normal">
            {t('conditions_description')}
          </p>
        </div>

        <div>
          <div className="relative overflow-hidden mt-[24px] bg-[#FFFFFF] rounded-[40px] py-[32px] px-[48px]">
            <Image
              priority
              width={190}
              height={190}
              src="/assets/EllipseCalc.svg"
              alt="elipce-calc"
              className="absolute right-0 top-0 md:block hidden"
            />
            <Image
              priority
              width={300}
              height={600}
              src="/assets/bigEllipse.svg"
              alt="elipce-big"
              className="absolute right-0 top-[50%] md:hidden block"
              style={{ transform: 'translateY(-50%)' }}
            />
            {data.map((item, index, arr) => {
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
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
