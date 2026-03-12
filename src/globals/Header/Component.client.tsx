'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data: Header
  locale: TypedLocale
}

import Link from 'next/link'
import { ContactBox } from './ContactBox'
import { ResponsiveImage } from '@/components/Image'
import SvgIcon1 from '@/globals/Header/ContactBox/icons/SvgIcon1'
import BurgerMenu from '@/components/Icons/BurgerMenu'
import MobileMenu from '@/globals/Header/MobileMenu'
import { TypedLocale } from 'payload'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useSaveUTMToLocalStorage } from '@/utilities/saveUTMToLocalStorage'
import { usePathname } from 'next/navigation'

export function useElementInView(id: string, threshold: number = 0.5): boolean {
  const [isInView, setIsInView] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const element = document.getElementById(id)
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]: any) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [id, threshold, pathname])

  return isInView
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, locale }) => {
  const t = useTranslations()
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  const isProductsInView = useElementInView('products')

  const showDrawer = () => {
    setOpen(true)
  }

  useSaveUTMToLocalStorage()

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div className="bg-[#f0f0f0] mb-8 xs:sticky xs:top-0 xs:z-[4]">
      <div className="pt-8 pb-4 md:mx-auto container">
        <div className="flex justify-between items-center flex-row">
          <div className="flex xl:justify-start justify-between w-full items-center flex-row xl:gap-9 gap-6">
            <div className="flex justify-center items-stretch flex-col w-[161px] h-[38px] ">
              <Link href={`/${locale}`}>
                <ResponsiveImage
                  src="/assets/logo-2.png"
                  width={161}
                  height={30}
                  alt="Yaxshiniyat.uz"
                  className="h-[30px] max-w-[initial]"
                />
              </Link>
            </div>
            <div className={`gap-[20px] xl:hidden flex ${style.mobile_block_content}`}>
              <a
                href={`tel:${(data.phone ?? '').replace(/\D/g, '')}`}
                className="flex font-sofiaSans xl:text-base text-xs font-medium text-[#1c4058] cursor-pointer  h-10
            sm:inline-flex items-center justify-center gap-2 rounded-[32px] border-[none] md:hidden"
              >
                <SvgIcon1 className="w-5 h-5 text-orange flex" />
                {data.phone}
              </a>
              <button onClick={showDrawer} className=" text-[#1C4058]">
                <BurgerMenu />
              </button>
            </div>

            <MobileMenu open={open} onClose={onClose} locale={locale} data={data} />

            <div className="hidden xl:flex justify-start items-center flex-row gap-6">
              <Link
                href={`/${locale}/about`}
                className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
                  pathname === `/${locale}/about` ? 'text-orange' : ''
                }`}
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}#products`}
                className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
                  isProductsInView ? 'text-orange' : ''
                }`}
              >
                {t('microloans')}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
                  pathname === `/${locale}/blog` ? 'text-orange' : ''
                }`}
              >
                {t('blog')}
              </Link>
              <Link
                href={`/${locale}/contacts`}
                className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
                  pathname === `/${locale}/contacts` ? 'text-orange' : ''
                }`}
              >
                {t('contacts')}
              </Link>
              <Link
                href={`/${locale}/faq`}
                className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
                  pathname === `/${locale}/faq` ? 'text-orange' : ''
                }`}
              >
                {t('faq')}
              </Link>
            </div>
          </div>
          <ContactBox {...data} />
        </div>
      </div>
    </div>
  )
}
