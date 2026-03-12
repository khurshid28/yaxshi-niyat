'use client'
import { twMerge } from 'tailwind-merge'
import { Button } from '../../components/Button'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { TypedLocale } from 'payload'
import { formatDate } from '@/utilities/dayjs'
import { useTranslations } from 'next-intl'
import { Media } from '@/components/Media'

export const ArchiveBlockClient = ({
  bgWhite = false,
  locale,
  fetchedPosts,
  title,
}: {
  bgWhite?: boolean
  locale: TypedLocale
  fetchedPosts: any
  title?: string
}) => {
  const t = useTranslations()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 4)
    }, 3000) // автосмена каждые 3 секунды

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={twMerge('overflow-hidden', bgWhite && 'bg-[#F7F7F4]')}>
      <div className="container py-[32px]">
        <p className="self-stretch md:text-[40px] text-[36px] font-bold text-[#1c4058] mb-8">
          {title || t('blog')}
        </p>
        <Swiper
          className="mySwiper mb-[24px]"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 1.5,
            },
            960: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={24}
        >
          {fetchedPosts.docs.map((i, idx) => (
            <SwiperSlide key={idx}>
              <Link
                className="flex flex-col flex-grow relative overflow-hidden gap-4"
                href={`/${locale}/blog/${i.slug}`}
              >
                <div className="self-stretch h-[318px] relative overflow-hidden rounded-[30px] aspect-square">
                  <Media fill imgClassName="object-cover" resource={i.heroImage} />
                </div>
                <div className="flex flex-col self-stretch gap-8">
                  <div className="flex flex-col self-stretch relative gap-2">
                    <p className="self-stretch md:text-2xl text-[24px] font-bold text-[#1c4058]">
                      {i.title}
                    </p>
                    <p className="self-stretch md:text-lg text-[18px] italic text-orange">
                      {formatDate(i.publishedAt!, locale)}
                    </p>
                    <p className="self-stretch md:text-xl text-[20px] text-[#617a8b] h-[115px] text-ellipse-4">
                      {i.description}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-[234px] mx-auto">
          <Link href={`/${locale}/blog`}>
            <Button variant="outline">{t('all_articles')}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
