'use client'
import { SliderCustom } from '@/components/SliderCustom'
import { useEffect, useState } from 'react'
import { formatNumberWithSpaces } from '@/utilities'
import { Button } from '@/components/Button'
import { useTranslations } from 'next-intl'
import { calculateNoCollateralLoan } from '@/utilities/calculator'
import { ModalForm } from '@/components/ModalForm'
import { Calc } from '@/payload-types'
import { ResponsiveImage } from '@/components/Image'
import Image from 'next/image'

export const CalculateBezZaloga = ({ calcData }: { calcData: Calc }) => {
  const t = useTranslations()
  const [loanAmount, setLoanAmount] = useState(18500000)
  const [term, setTerm] = useState(6)
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
    [calcData.bez_zaloga.minLoanAmount]:
      `${calcData.bez_zaloga.minLoanAmount / 1000000} ${t('million_sum')}`,
    [calcData.bez_zaloga.maxLoanAmount]:
      `${calcData.bez_zaloga.maxLoanAmount / 1000000} ${t('million_sum')}`,
  }

  const marksCreditMobile = {
    [calcData.bez_zaloga.minLoanAmount]:
      `${calcData.bez_zaloga.minLoanAmount / 1000000} ${t('million_sum')}`,
    [calcData.bez_zaloga.maxLoanAmount]:
      `${calcData.bez_zaloga.maxLoanAmount / 1000000} ${t('million_sum')}`,
  }

  const marksMonth = {
    [calcData.bez_zaloga.minTermMonths]: `${calcData.bez_zaloga.minTermMonths} ${t('months')}`,
    [calcData.bez_zaloga.maxTermMonths]: `${calcData.bez_zaloga.maxTermMonths} ${t('months')}`,
  }

  const [result, setResult] = useState<any>({})

  useEffect(() => {
    setResult(calculateNoCollateralLoan(loanAmount, term, calcData.bez_zaloga!.annualInterestRate))
  }, [loanAmount, term])

  const [isModalOpen, setIsModalOpen] = useState(false)

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
            <ResponsiveImage src="/assets/products-calc2.png" alt="bez zaloga" fill />
          </div>

          <div className="md:p-[48px] md:pr-0 bg-[#F7F7F7]">
            <div className="md:mb-[32px] md:block hidden">
              <p className="text-[#1C4058] font-bold text-[40px] font-sofiaSans">
                {t('credit_calculator')}
              </p>
              <p className="text-secondary-200 text-[18px] font-normal">
                {t('credit_calculator_desc')}
              </p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[40px]  md:p-[32px] px-[15px] py-[24px]  relative overflow-hidden">
              <Image src="/assets/EllipseCalc.svg" width={190} height={190} alt="elipce-calc" className="absolute right-0 top-0" priority/>
              <div>
                <div className="pt-[32px]">
                  <SliderCustom
                    step={10000}
                    defaultValue={loanAmount}
                    max={calcData.bez_zaloga.maxLoanAmount}
                    min={calcData.bez_zaloga.minLoanAmount}
                    onChange={(val) => setLoanAmount(val)}
                    value={formatNumberWithSpaces(loanAmount) + ` ${t('sum')}`}
                    marks={isMobile ? marksCreditMobile : marksCredit}
                    label={t('desired_loan_amount')}
                  />
                </div>

                <div className="pt-[52px] md:w-[50%]">
                  <SliderCustom
                    step={1}
                    defaultValue={term}
                    max={12}
                    min={1}
                    onChange={(val) => setTerm(val)}
                    value={term + ' ' + t('months')}
                    marks={marksMonth}
                    label={t('to_term')}
                  />
                </div>
              </div>
            </div>

            <div className="mt-[16px] md:px-[32px] py-[32px] px-[16px] rounded-[40px] bg-[#FFFFFF80]">
              <div className="flex row-to-col-md md:gap-[48px] gap-[24px]">
                <div>
                  <p className="font-sofiaSans text-secondary-200 font-semibold italic text-[18px]">
                    {t('monthly_payment')}
                  </p>
                  <p className="font-sofiaSans text-[#1C4058] font-semibold italic text-[24px]">
                    {formatNumberWithSpaces(result.monthlyPayment)} {t('sum')}
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
                    {formatNumberWithSpaces(result.totalPayment)} {t('sum')}
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
                product: t('bez_zaloga'),
                amount: loanAmount,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
