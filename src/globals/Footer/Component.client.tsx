'use client'

import Link from 'next/link'
import styles from './styles.module.scss'

import React from 'react'

import { ResponsiveImage } from '@/components/Image'
import { TelegramIcon } from '@/components/Icons/Telegram'
import { FacebookIcon } from '@/components/Icons/Facebook'
import { InstagramIcon } from '@/components/Icons/Instagram'
import { ArrowRightFooterIcon } from '@/components/Icons/ArrowRightFooter'
import { LocationIcon } from '@/components/Icons/Location'
import { SmsIcon } from '@/components/Icons/Sms'
import { CallIcon } from '@/components/Icons/Call'
import { formatDate } from '@/utilities/dayjs'
import { useTranslations } from 'next-intl'

export function FooterClient({ locale, footerData, fetchedPosts }: any) {
  const t = useTranslations()

  return (
    <div className={styles.footer}>
      <div className="container pt-14 flex flex-col gap-24">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-[94px] gap-[48px]">
          <div className="flex flex-col gap-6 order-last md:order-none">
            <div className="flex flex-col relative gap-4">
              <Link href={`/${locale}`}>
                <div className={'w-[137px]'}>
                  <ResponsiveImage src="/assets/logo-footer.svg" width={137} height={32} />
                </div>
              </Link>
              <p className="w-[306px] text-sm font-light text-white/70">{t('footer_desc')}</p>
            </div>
            <div className="flex gap-4">
              <a href={footerData.telegram!} className="gap-2 p-1.5 rounded-[32px] bg-white">
                <TelegramIcon />
              </a>
              <a href={footerData.facebook!} className="gap-2 p-1.5 rounded-[32px] bg-white">
                <FacebookIcon />
              </a>
              <a href={footerData.instagram!} className="gap-2 p-1.5 rounded-[32px] bg-white">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6  items-start order-none">
            <p className="text-base font-medium text-white border-b border-dashed border-orange leading-none pb-3.5">
              {t('navigation')}
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href={`/${locale}/about`}
                className="flex justify-start items-center relative gap-1.5"
              >
                <ArrowRightFooterIcon />
                <p className="text-base text-white">{t('about')}</p>
              </Link>
              <Link
                href={`/${locale}#products`}
                className="flex justify-start items-center relative gap-1.5"
              >
                <ArrowRightFooterIcon />
                <p className="text-base text-white">{t('microloans')}</p>
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="flex justify-start items-center relative gap-1.5"
              >
                <ArrowRightFooterIcon />
                <p className="text-base text-white">{t('blog')}</p>
              </Link>
              <Link
                href={`/${locale}/faq`}
                className="flex justify-start items-center relative gap-1.5"
              >
                <ArrowRightFooterIcon />
                <p className="text-base text-white">{t('faq')}</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6  items-start order-none">
            <p className="text-base font-medium text-white border-b border-dashed border-orange  leading-none pb-3.5">
              {t('blog')}
            </p>
            <div className="flex flex-col gap-4">
              {fetchedPosts.docs.map((p) => (
                <Link
                  href={`/${locale}/blog/${p.slug}`}
                  className="flex relative gap-1.5"
                  key={p.id}
                >
                  <ArrowRightFooterIcon />
                  <div>
                    <p className="text-[13px] italic text-white/70">
                      {formatDate(p.publishedAt!, locale)}
                    </p>
                    <p className="top-0 text-base font-medium text-white">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start">
            <p className="text-base font-medium  text-white border-b border-dashed border-orange leading-none pb-3.5">
              {t('contacts')}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-start items-center relative gap-3.5 text-orange">
                <div className="flex-shrink-0">
                  <LocationIcon />
                </div>
                <p className="text-base text-white">{footerData.address}</p>
              </div>
              <a
                href={`mailto:${footerData.email}`}
                className="flex justify-start items-center relative gap-3.5"
              >
                <div className="flex-shrink-0">
                  <SmsIcon />
                </div>
                <p className="text-base text-white">{footerData.email}</p>
              </a>
              <a
                href={`tel:${(footerData.phone ?? '').replace(/\D/g, '')}`}
                className="flex justify-start items-center relative gap-3.5"
              >
                <div className="flex-shrink-0">
                  <CallIcon />
                </div>
                <p className="text-base text-white">{footerData.phone}</p>
              </a>
            </div>
          </div>
        </div>
        <p className="text-[13px] text-center text-white">
          © {new Date().getFullYear()} {footerData.copyright}
        </p>
      </div>
    </div>
  )
}
