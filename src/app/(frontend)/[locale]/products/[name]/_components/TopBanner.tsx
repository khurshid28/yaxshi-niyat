'use client'

import BreadCrumbs from '@/components/BreadCrumbs'
import { Button } from '@/components/Button'
import { useEffect, useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import style from '../../style.module.scss'
import { TypedLocale } from 'payload'
import { ResponsiveImage } from '@/components/Image'
import { ModalForm } from '@/components/ModalForm'
import Image from 'next/image'

export const TopBanner = ({ name, locale }: { name: string; locale: TypedLocale }) => {
  const t = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const productsPages: { route: string; title: string }[] = [
    {
      route: 'pod-zalog',
      title: t('pod_zalog'),
    },
    {
      route: 'bez-zaloga',
      title: t('bez_zaloga'),
    },
    {
      route: 'avtokredit',
      title: t('avtokredit'),
    },
  ]

  const [breadCrumbs, setBreadCrumbs] = useState<
    { title: string; path?: string | null; isActive: boolean }[]
  >([
    {
      title: t('main'),
      path: '/',
      isActive: true,
    },
    {
      title: t('microloans'),
      path: '/#products',
      isActive: true,
    },
  ])

  const BannerKontent: {
    [key: string]: { span: string; title: string; title2: string; title3: string; img: string }
  } = {
    'pod-zalog': {
      span: t('bannerContent.pod_zalog.span'),
      title: t('bannerContent.pod_zalog.title'),
      title2: t('bannerContent.pod_zalog.title2'),
      title3: t('bannerContent.pod_zalog.title3'),
      img: t('bannerContent.pod_zalog.img'),
    },
    'bez-zaloga': {
      span: t('bannerContent.bez_zaloga.span'),
      title: t('bannerContent.bez_zaloga.title'),
      title2: t('bannerContent.bez_zaloga.title2'),
      title3: t('bannerContent.bez_zaloga.title3'),
      img: t('bannerContent.bez_zaloga.img'),
    },
    avtokredit: {
      span: t('bannerContent.avtokredit.span'),
      title: t('bannerContent.avtokredit.title'),
      title2: t('bannerContent.avtokredit.title2'),
      title3: t('bannerContent.avtokredit.title3'),
      img: t('bannerContent.avtokredit.img'),
    },
  }

  const content = useMemo<any>(() => {
    return BannerKontent[name] || null
  }, [name])

  useEffect(() => {
    const page: any = productsPages.find((item) => item.route === name)

    if (page) {
      if (!breadCrumbs.find((item) => item.title === page.title)) {
        const newElem: any = {
          title: page.title,
          path: null,
          isActive: false,
        }
        setBreadCrumbs([...breadCrumbs, newElem])
      }
    }
  }, [name])

  if (!content) {
    return ''
  }

  return (
    <div className="container">
      <BreadCrumbs data={breadCrumbs} locale={locale} />

      <div
        className={`rounded-[40px] overflow-hidden grid-cols-2 relative bg-[#1C4058] ${style.product_banner}`}
      >
        <div className="md:px-[48px] md:py-[48px] px-[16px] py-[20px]  relative z-[3]">
          <div className="">
            <p className="md:text-[20px] text-[14px] my-[8px] font-light text-white opacity-70">
              {content.span}
            </p>
            <h1 className="text-white my-[8px] leading-[1.3] font-bold md:text-[40px] text-[36px] font-sofiaSans">{content.title}</h1>
            <p className="text-orange my-[8px] italic md:text-[40px] text-[32px]">
              {content.title2}
            </p>
            <p className="md:text-[24px] text-[18px] my-[8px] font-light text-white opacity-70">
              {content.title3}
            </p>
          </div>

          <div className="flex row-to-col-md gap-4 md:w-[450px] md:mt-[70px] mt-[24px]">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              {t('apply')}
            </Button>
            <ModalForm
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              additionalData={{ product: content.span }}
            />

            {/* <a href="https://t.me/yaxshi_niyat_support_bot" target="_blank" className="w-full">
              <Button variant="outlineWhite" icon={<TgIcon />}>
                {t('apply')}
              </Button>
            </a> */}
          </div>
        </div>

        <Image
          priority
          width={800}
          height={500}
          src="/assets/EllipseShadow.svg"
          alt="elipce-shadow"
          className="absolute z-[1] left-[50%] w-full h-full md:block hidden"
          style={{ transform: 'translateX(-50%)' }}
        />

        <div className="relative z-[2] xs:aspect-[428/372]">
          <ResponsiveImage fill layout="fill" src={content.img} priority />
        </div>
      </div>
    </div>
  )
}
