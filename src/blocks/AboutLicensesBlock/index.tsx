'use client'

import { useTranslations } from 'next-intl'
import { ArrowRightCircleIcon } from '../../components/Icons/ArrowRightCircle'
import { ShieldIcon } from '../../components/Icons/Shield'
import { TickCircleIcon } from '../../components/Icons/TickCircle'
import { ResponsiveImage } from '../../components/Image'
import ImageModal from '@/components/ImageModal'
import { useState } from 'react'

export const AboutLicensesBlock = () => {
  const t = useTranslations('blocks.aboutLicenses')
  return (
    <div className="flex flex-col justify-between items-center self-stretch relative lg:py-0 py-[32px] overflow-hidden bg-[#F0F0F0]">
      <div className="absolute lg:w-[50%] h-full right-0 top-0 bg-[#FB85001A] lg:block hidden" />
      <div className="flex justify-between items-center flex-grow container lg:px-12">
        <div className="flex flex-col justify-start items-start lg:w-[612px] relative gap-12">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
            <p className="self-stretch lg:w-[612px] md:text-[40px] text-[36px] font-bold text-[#1c4058] font-sofiaSans">
              {t('title')}
            </p>
          </div>
          <p className="self-stretch md:w-[612px] md:text-2xl text-[20px] text-[#617a8b]">
            <span className="self-stretch md:w-[612px] md:text-2xl text-[20px] text-[#617a8b]">
              {t('description')}
            </span>
            <br />
            <span className="self-stretch md:w-[612px] md:text-2xl text-[20px] text-[#617a8b]">
              {t('description_2')}
            </span>
          </p>
          <div className="flex flex-col justify-center items-start self-stretch relative  gap-2 px-8 py-6 rounded-[40px] bg-white/50">
            {[
              {
                title: t('license'),
                image: '/assets/License.png',
              },
              {
                title: t('guvohnoma'),
                image: '/assets/Certificate.png',
              },
            ].map((item) => (
              <LicenseItem key={item.title} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
        <div className="flex-to-hidden-lg flex-col justify-start items-start  gap-6 md:py-[96px] md:px-[112px] relative z-2">
          <div className="flex justify-start items-center self-stretch flex-grow relative gap-6">
            <div className="w-[348px] h-[372px]">
              <ResponsiveImage
                className="rounded-[60px]"
                src="/assets/licgar1.jpg"
                width={348}
                height={372}
              />
            </div>
            <div className="self-stretch w-60 relative overflow-hidden rounded-[100000px] bg-orange/25">
              <div className="flex flex-col justify-start items-center w-48 absolute left-6 top-32 gap-3">
                <p className="self-stretch w-48 text-2xl italic text-center text-[#617a8b]">
                  {t('description_3')}
                </p>
              </div>
              <div className="flex justify-start items-center absolute left-[84px] top-8 gap-2.5 p-3 rounded-[100px] bg-white/70 text-[#1C4058]">
                <TickCircleIcon size={48} />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow relative gap-6">
            <div className="self-stretch w-60 relative overflow-hidden rounded-[100000px] bg-[#1c4058]">
              <div className="flex flex-col justify-start items-center w-44 absolute left-8 top-[149px] gap-2 font-sofiaSans">
                <p className="text-[28px] text-orange">{t('official')}</p>
                <p className="text-[42px] font-light text-white">{t('reliable')}</p>
                <p className="self-stretch w-44 text-[28px] font-light text-center text-[#617a8b]">
                  {t('transparent')}
                </p>
              </div>
              <div className="flex justify-start items-center absolute left-[84px] top-8 gap-2.5 p-3 rounded-[100px] bg-white/70 text-[#1C4058]">
                <ShieldIcon />
              </div>
            </div>
            <div className="w-[348px] h-[372px]">
              <ResponsiveImage
                className="relative overflow-hidden rounded-[60px]"
                src="/assets/licgar2.jpg"
                width={348}
                height={372}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LicenseItem = ({ title, image }: { title: string; image: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="flex flex-col justify-start items-end self-stretch border-dashed border-b-[1px] border-[#1C40581F] text-[#1c4058] hover:text-orange overflow-hidden gap-4 px-4 py-2 rounded-[20px] font-sofiaSans"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex justify-between items-center self-stretch relative">
          <p className="md:text-2xl text-[20px]">{title}</p>
          <ArrowRightCircleIcon />
        </div>
      </div>
      {isOpen && <ImageModal isOpen={isOpen} onClose={() => setIsOpen(false)} imageUrl={image} />}
    </>
  )
}
