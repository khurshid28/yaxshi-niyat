'use client'

import styles from './styles.module.scss'

import { Button } from '@/components/Button'
import { CalculatorIcon } from '@/components/Icons/Calculator'
import { ResponsiveImage } from '@/components/Image'
import { ModalForm } from '@/components/ModalForm'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const ProductCard = ({
  title,
  description,
  image,
  path,
  locale,
  name,
  className,
}: {
  title: string
  description: string
  image: string
  path: string
  className?: string
  locale: string
  name: string
}) => {
  const t = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={`${className} flex flex-col flex-grow relative overflow-hidden gap-8 pb-8 rounded-[40px] bg-[#e4e6e7] ${styles.productCard}`}
    >
      <div className="self-stretch aspect-[1.15] relative overflow-hidden">
        <ResponsiveImage src={image} fill layout="auto" />
      </div>
      <div className="flex flex-col justify-between items-start self-stretch flex-grow md:px-8 px-[24px] gap-7">
        <div className="flex flex-col self-stretch relative gap-1 grow">
          <p className="text-[32px] font-bold text-[#1c4058]">{title}</p>
          <p className="self-stretch md:text-xl text-[20px] text-[#617a8b]">{description}</p>
        </div>
        <div className="flex self-stretch gap-2">
          <Button variant="icon" icon={<CalculatorIcon />} onClick={() => setIsModalOpen(true)}>
            {t('calculate')}
          </Button>
          <Link href={path}>
            <Button variant="details">{t('details')}</Button>
          </Link>
        </div>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        additionalData={{ product: t(name.replace('-', '_')) }}
      />
    </div>
  )
}
