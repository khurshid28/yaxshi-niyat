'use client'
import ArrowTop from '@/components/Icons/ArrowTop'
import { useLocale, useTranslations } from 'next-intl'
import { Calc } from '@/payload-types'
import Image from 'next/image'

export const DescriptionAvtokredit = ({ calcData }: { calcData: Calc }) => {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <div className="container grid md:grid-cols-3 grid-cols-2 gap-[16px] my-[16px]">
      <div className="p-[32px] bg-white/50 overflow-hidden rounded-[40px] relative flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="md:text-[20px] text-[16px]">{t('loan_amount_2')}</p>
          <ArrowTop />
        </div>

        <Image priority src="/assets/ellipseShadowSmall.svg" alt="elipce-shadow-small" className="absolute top-0 right-0" />

        {locale === 'ru' ? (
          <div className="mt-[29px]">
            <p className="font-sofiaSans italic text-[#617A8B] font-normal text-right md:text-[24px] text-[20px]">
              {t('to')}{' '}
              <span className="text-[#1C4058] font-semibold md:text-[54px] text-[48px] not-italic font-nunitoSans">
                {calcData.avtokredit.maxLoanAmount / 1000000}
              </span>{' '}
              <span className="md:text-[24px] text-[20px] text-[#FB8500]">{t('million_sum')}</span>
            </p>
          </div>
        ) : (
          <div className="mt-[29px]">
            <p className="font-sofiaSans italic text-[#617A8B] font-normal text-right md:text-[24px] text-[20px]">
              <span className="text-[#1C4058] font-semibold md:text-[54px] text-[48px] not-italic font-nunitoSans">
                {calcData.avtokredit.maxLoanAmount / 1000000}
              </span>{' '}
              <span className="md:text-[24px] text-[20px] text-[#FB8500]">{t('million_sum')}{t('to')}</span>
            </p>
          </div>
        )}
      </div>

      <div className="p-[32px] bg-white/50 overflow-hidden rounded-[40px] relative flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="md:text-[20px] text-[16px]">{t('convenient_term')}</p>
          <ArrowTop />
        </div>

        {locale === 'ru' ? (
          <div>
            <p className="font-sofiaSans italic text-[#617A8B] font-normal text-right md:text-[24px] text-[20px]">
              {t('to')}{' '}
              <span className="text-[#1C4058] font-semibold md:text-[54px] text-[48px] not-italic font-nunitoSans">
                {calcData.avtokredit.maxTermMonths}
              </span>{' '}
              <span className="md:text-[24px] text-[20px] text-[#FB8500]">{t('to_months')}</span>
            </p>
          </div>
        ) : (
          <div>
            <p className="font-sofiaSans italic text-[#617A8B] font-normal text-right md:text-[24px] text-[20px]">
              <span className="text-[#1C4058] font-semibold md:text-[54px] text-[48px] not-italic font-nunitoSans">
                {calcData.avtokredit.maxTermMonths}
              </span>{' '}
              <span className="md:text-[24px] text-[20px] text-[#FB8500]">{t('to_months')}</span>
            </p>
          </div>
        )}
      </div>

      <div className="p-[32px] bg-white/50 overflow-hidden rounded-[40px] relative flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="md:text-[20px] text-[16px]">{t('prepayment')}</p>
          <ArrowTop />
        </div>

        <div>
          <p className="font-sofiaSans italic text-[#617A8B] font-normal text-right md:text-[24px] text-[20px]">
            <span className="not-italic text-[#1C4058] font-semibold font-nunitoSans md:text-[54px] text-[48px]">
              {calcData.avtokredit.downPaymentPercent}%
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
