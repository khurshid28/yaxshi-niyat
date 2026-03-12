'use client'
import { SliderCustom } from '@/components/SliderCustom'
import { useEffect, useState } from 'react'
import { formatNumberWithSpaces } from '@/utilities'
import { Button } from '@/components/Button'
import { useTranslations } from 'next-intl'
import { calculateAutoLoan } from '@/utilities/calculator'
import { ModalForm } from '@/components/ModalForm'
import { Calc } from '@/payload-types'
import { ResponsiveImage } from '@/components/Image'
import Image from 'next/image'

export const CalculateAvtokredit = ({ calcData }: { calcData: Calc }) => {
  const t = useTranslations()

  const [loanAmount, setLoanAmount] = useState(calcData.avtokredit!.loanAmount)
  const [term, setTerm] = useState(calcData.avtokredit!.termMonths)
  const [result, setResult] = useState<any>({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 960)
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 960)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setIsMobile(window.innerWidth < 960)
      })
    }
  }, [])

  const marksCredit = {
    [calcData.avtokredit!.minLoanAmount]:
      `${calcData.avtokredit!.minLoanAmount / 1000000} ${t('million_sum')}`,
    [calcData.avtokredit!.maxLoanAmount]:
      `${calcData.avtokredit!.maxLoanAmount / 1000000} ${t('million_sum')}`,
  }

  const marksCreditMobile = {
    [calcData.avtokredit!.minLoanAmount]:
      `${calcData.avtokredit!.minLoanAmount / 1000000} ${t('million_sum')}`,
    [calcData.avtokredit!.maxLoanAmount]:
      `${calcData.avtokredit!.maxLoanAmount / 1000000} ${t('million_sum')}`,
  }

  const marksMonth = {
    [calcData.avtokredit!.minTermMonths]: `${calcData.avtokredit!.minTermMonths} ${t('months')}`,
    [calcData.avtokredit!.maxTermMonths]: `${calcData.avtokredit!.maxTermMonths} ${t('months')}`,
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setResult(calculateAutoLoan(loanAmount, term, calcData.avtokredit!))
  }, [loanAmount, term])

  return (
    <div className="bg-[#F7F7F7]">
      <div className="flex row-to-col-md container">
        <div className="md:mt-0 my-[32px] md:hidden block">
          <h2 className="text-[#1C4058] font-bold text-[40px] font-sofiaSans">
            {t('credit_calculator')}
          </h2>
          <p className="text-secondary-200 text-[18px] font-normal">
            {t('credit_calculator_desc2')}
          </p>
        </div>
        <div className="md:flex w-full">
          <div className="md:w-[50%] md:shrink-0 md:rounded-[0px] rounded-[40px] overflow-hidden md:h-full h-[330px] relative">
            <ResponsiveImage src="/assets/products-calc3.png" alt="bez zaloga" fill />
          </div>

          <div className="md:p-[48px] md:pr-0 bg-[#F7F7F7]">
            <div className="md:mb-[32px] md:block hidden">
              <p className="text-[#1C4058] font-bold md:text-[40px] text-[36px] font-sofiaSans">
                {t('credit_calculator_avtokredit')}
              </p>
              <p className="text-secondary-200 text-[18px] font-normal">
                {t('credit_calculator_desc')}
              </p>
            </div>
            <div className="bg-[#FFFFFF] md:mt-0 mt-[24px] rounded-[40px] md:p-[32px] px-[15px] py-[24px] relative overflow-hidden">
              <Image src="/assets/EllipseCalc.svg" alt="elipce-calc" className="absolute right-0 top-0" priority width={190} height={190}/>
              <div>
                <div className="pt-[32px]">
                  <SliderCustom
                    step={10000}
                    defaultValue={loanAmount}
                    max={calcData.avtokredit!.maxLoanAmount}
                    min={calcData.avtokredit!.minLoanAmount}
                    onChange={(val) => setLoanAmount(val)}
                    value={formatNumberWithSpaces(loanAmount) + ` ${t('sum')}`}
                    marks={isMobile ? marksCreditMobile : marksCredit}
                    label={t('car_price')}
                  />
                </div>

                <div className="pt-[52px] md:w-[50%]">
                  <SliderCustom
                    step={1}
                    defaultValue={term}
                    max={calcData.avtokredit!.maxTermMonths}
                    min={calcData.avtokredit!.minTermMonths}
                    onChange={(val) => setTerm(val)}
                    value={term + ' ' + t('months')}
                    marks={marksMonth}
                    label={t('to_term')}
                  />
                </div>
              </div>
            </div>

            <div className="mt-[16px] md:px-[32px] py-[32px] px-[16px] rounded-[40px] bg-[linear-gradient(to_bottom,_#F1E1CDA6_65%,_#F1E6D88C_100%)]">
              <div className="flex row-to-col-md md:gap-[48px] gap-[24px]">
                <div>
                  <p className="font-sofiaSans text-secondary-200 font-semibold italic text-[18px]">
                    {t('monthly_payment')}
                  </p>
                  <p className="font-sofiaSans text-[#1C4058] font-semibold italic text-[24px]">
                    {formatNumberWithSpaces(Math.round(loanAmount / term))} {t('sum')}
                  </p>
                </div>

                <div>
                  <p className="font-sofiaSans text-secondary-200 font-semibold italic text-[18px]">
                    {t('term')}
                  </p>
                  <p className="font-sofiaSans text-[#1C4058] font-semibold italic text-[24px]">
                    {term} {t('months')}
                  </p>
                </div>

                <div>
                  <p className="font-sofiaSans text-secondary-200 font-semibold italic text-[18px]">
                    {t('total_payment')}
                  </p>
                  <p className="font-sofiaSans text-[#1C4058] font-semibold italic text-[24px]">
                    {formatNumberWithSpaces(loanAmount)} {t('sum')}
                  </p>
                </div>
              </div>
              <p className="text-[14px] italic font-sofiaSans text-secondary-200 font-normal mt-[16px]">
                <span className="text-[#FB8500]">* </span>
                {t('calculation_note')}
              </p>
            </div>

            <Button
              variant="primary"
              className="flex-grow basis-0 mt-[32px] w-[218px]"
              onClick={() => setIsModalOpen(true)}
            >
              {t('apply')}
            </Button>

            <ModalForm
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              additionalData={{
                product: t('avtokredit'),
                amount: loanAmount,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
