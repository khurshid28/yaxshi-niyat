'use client'
import style from './style.module.scss'
import { Button } from '../../components/Button'
import { StarIcon } from '../../components/Icons/Star'
import { TickCircleIcon } from '../../components/Icons/TickCircle'
import { ShareIcon } from '../../components/Icons/Share'
import { Select } from '../../components/Select'
import { NumericInput } from '../../components/NumericInput'
import { useTranslations } from 'next-intl'
import { formatNumberWithSpaces, generateAverages } from '@/utilities'
import { useEffect, useState } from 'react'
import {
  calculateAutoLoan,
  calculateCollateralLoan,
  calculateNoCollateralLoan,
} from '@/utilities/calculator'
import { ModalForm } from '@/components/ModalForm'
import { Calc } from '@/payload-types'
import Image from 'next/image'

export const HeroBlockClient = ({ calcData }: { calcData: Calc }) => {
  const t = useTranslations()

  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="flex container flex-col gap-4 mx-auto pb-12">
      <div className="flex md:flex-row flex-col-reverse justify-between  relative overflow-hidden rounded-[40px] bg-[#1c4058]">
        <div className="flex flex-col items-start md:w-[65%] px-[16px] py-[21px]  md:p-12 md:pr-14 md:gap-12 gap-[24px]">
          <div className="flex flex-col self-stretch gap-8">
            <div className="flex flex-col self-stretch relative gap-4">
              <div className="flex justify-start items-center self-stretch relative gap-2">
                <svg
                  width="16"
                  height="1"
                  viewBox="0 0 16 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  preserveAspectRatio="none"
                >
                  <line y1="0.5" x2="16" y2="0.5" stroke="white" strokeOpacity="0.7"></line>
                </svg>
                <p className="md:text-xl text-[14px] text-white/70 leading-1">YAXSHI NIYAT</p>
              </div>
              <div className="flex flex-col self-stretch relative gap-4 font-sofiaSans">
                <h1 className="md:text-[40px] text-[36px] font-bold text-white leading-none">{t('blocks.hero.title')}</h1>
                <p className="md:text-[40px] text-[32px] italic text-orange leading-none">
                  {t('blocks.hero.title_span')}
                </p>
              </div>
              <h2 className="self-stretch md:text-2xl text-[18px] text-white/70 pt-1">
                {t('blocks.hero.description')}
              </h2>
            </div>
            <Calculator calcData={calcData} />
          </div>
          <div className="md:flex block gap-4  w-full">
            <Button
              variant="primary"
              className="mb-[8px] md:w-[213px]"
              onClick={() => setIsModalOpen(true)}
            >
              {t('apply')}
            </Button>
            <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
        <div className="md:w-[50%] w-full h-full">
          <Image
            priority
            src="/assets/main-hero.jpg"
            alt="main-hero"
            className="w-full h-full object-cover bg-slate-600"
            width={1000}
            height={1300}
          />
        </div>
      </div>
      <div className="md:flex hidden justify-start items-center self-stretch gap-4 container p-0">
        <div className="flex justify-start items-center flex-grow overflow-hidden gap-4 p-8 rounded-[40px] bg-[#e4e6e7]">
          <div className="flex justify-start items-center relative gap-2.5 p-3 rounded-[32px] bg-[#1c4058] text-white">
            <StarIcon />
          </div>
          <div className="flex flex-col relative gap-1  font-sofiaSans">
            <p className="text-2xl font-semibold text-[#1c4058]">{t('heroFeatures.first.key')}</p>
            <p className="text-xl italic text-[#617a8b]">{t('heroFeatures.first.value')}</p>
          </div>
        </div>
        <div className="flex justify-start items-center flex-grow overflow-hidden gap-4 p-8 rounded-[40px] bg-white/50">
          <div className="flex justify-start items-center relative gap-2.5 p-3 rounded-[32px] bg-[#1c4058] text-white">
            <TickCircleIcon />
          </div>
          <div className="flex flex-col relative gap-1  font-sofiaSans">
            <p className="text-2xl font-semibold text-[#1c4058]">{t('heroFeatures.second.key')}</p>
            <p className="text-xl italic text-[#617a8b]">{t('heroFeatures.second.value')}</p>
          </div>
        </div>
        <div className="flex justify-start items-center flex-grow overflow-hidden gap-4 p-8 rounded-[40px] bg-orange/20">
          <div className="flex justify-start items-center relative gap-2.5 p-3 rounded-[32px] bg-[#1c4058] text-white">
            <ShareIcon />
          </div>
          <div className="flex flex-col relative gap-1 font-sofiaSans">
            <p className="text-2xl font-semibold text-[#1c4058]">{t('heroFeatures.third.key')}</p>
            <p className="text-xl italic text-[#617a8b]">{t('heroFeatures.third.value')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Calculator = ({ calcData }: { calcData: Calc }) => {
  const t = useTranslations()

  const [loanType, setLoanType] = useState('pod_zalog')
  const [loanAmount, setLoanAmount] = useState(10000000)
  const [term, setTerm] = useState(6)

  const [result, setResult] = useState<any>({})

  useEffect(() => {
    setLoanAmount(calcData[loanType]!.loanAmount!)
    setTerm(calcData[loanType]!.termMonths!)
  }, [loanType, calcData])

  useEffect(() => {
    if (loanType === 'bez_zaloga') {
      if (loanAmount > calcData.bez_zaloga.maxLoanAmount) {
        setLoanAmount(calcData.bez_zaloga.maxLoanAmount)
      }
      setResult(
        calculateNoCollateralLoan(loanAmount, term, calcData!.bez_zaloga!.annualInterestRate!),
      )
    }
    if (loanType === 'pod_zalog') {
      if (loanAmount > calcData.pod_zalog.maxLoanAmount) {
        setLoanAmount(calcData.pod_zalog.maxLoanAmount)
      }
      setResult(calculateCollateralLoan(loanAmount, term, false, calcData!.pod_zalog!))
    }
    if (loanType === 'avtokredit') {
      if (loanAmount > calcData.avtokredit.maxLoanAmount) {
        setLoanAmount(calcData.avtokredit.maxLoanAmount)
      }
      setResult(calculateAutoLoan(loanAmount, term, calcData!.avtokredit!))
    }
  }, [loanType, loanAmount, term, calcData])

  const termsOptions = generateAverages(
    calcData[loanType]!.minTermMonths!,
    calcData[loanType]!.maxTermMonths!,
  ).map((term) => ({
    label: `${term} ${t('months')}`,
    value: term,
  }))

  return (
    <div className="flex flex-col justify-center items-start gap-6 p-6 rounded-3xl bg-white/[0.03] font-sofiaSans">
      <div className={`flex  self-stretch gap-4 ${style.input_groups}`}>
        <div className="flex flex-col flex-grow basis-0 justify-start gap-1">
          <p className="text-lg italic text-white/70 font-sofiaSans leading-tight">
            {t('credit_type')}
          </p>
          <Select
            value={loanType}
            options={[
              { label: t('pod_zalog'), value: 'pod_zalog' },
              { label: t('bez_zaloga'), value: 'bez_zaloga' },
              { label: t('avtokredit'), value: 'avtokredit' },
            ]}
            onChange={(value) => setLoanType(value as string)}
          />
        </div>
        <div className="flex flex-col flex-grow basis-0 justify-start gap-1">
          <p className="text-lg italic text-white/70 font-sofiaSans  leading-tight">
            {loanType === 'avtokredit' ? t('car_price') : t('loan_amount')}
          </p>
          <NumericInput value={loanAmount} onChange={(value) => setLoanAmount(value as number)} />
        </div>
        <div className="flex flex-col flex-grow basis-0 justify-start gap-1">
          <p className="text-lg italic text-white/70 font-sofiaSans  leading-tight">
            {t('to_term')}
          </p>
          <Select
            value={term}
            options={termsOptions}
            onChange={(value) => setTerm(value as number)}
          />
        </div>
      </div>
      <div className={`flex ${style.input_groups} self-stretch gap-4`}>
        <div className="flex flex-col relative gap-0.5 px-2">
          <p className="text-lg italic text-white/70 font-sofiaSans leading-tight">
            {t('monthly_payment')}
          </p>
          <p className="flex-grow text-[28px] font-semibold text-white leading-none">
            {formatNumberWithSpaces(result.monthlyPayment)} {t('sum')}
          </p>
        </div>
        <div className="flex flex-col relative gap-0.5 px-2">
          <p className="text-lg italic text-white/70 font-sofiaSans leading-tight">
            {t('total_payment')}
          </p>
          <p className="flex-grow text-[28px] font-semibold text-white leading-none">
            {formatNumberWithSpaces(result.totalPayment)} {t('sum')}
          </p>
        </div>
        {loanType === 'avtokredit' && (
          <div className="flex flex-col relative gap-0.5 px-2">
            <p className="text-lg italic text-white/70 font-sofiaSans leading-tight">
              {t('prepayment')}
            </p>
            <p className="flex-grow text-[28px] font-semibold text-white leading-none">
              {formatNumberWithSpaces(result.downPayment)} {t('sum')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
