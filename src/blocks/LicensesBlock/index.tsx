'use client'

import { useTranslations } from 'next-intl'
import ImageModal from '@/components/ImageModal'
import { useState } from 'react'
import style from './style.module.scss'
import Image from 'next/image'

export const LicensesBlock = () => {
  const t = useTranslations('blocks.licenses')

  return (
    <div className="flex flex-col justify-center items-start self-stretch overflow-hidden gap-12 md:py-16 py-[32px] bg-[#f7f7f7]">
      <div className="md:grid grid-cols-2 justify-start items-center relative gap-12 mx-auto container">
        <div className="md:w-[612px] md:h-[780px] h-[294px] rounded-[40px] overflow-hidden md:mb-0 mb-[24px]">
          <Image
            width={1224}
            height={1560}
            priority
            className="w-full h-full object-cover object-center "
            src="/assets/licenses-preview.jpg"
            alt="licenses-preview"
          />
        </div>

        <div className="flex flex-col self-stretch flex-grow gap-12 justify-center">
          <div className="flex flex-col self-stretch gap-[15px]">
            <div className="flex flex-col self-stretch relative gap-1">
              <p className="self-stretch md:w-[684px] md:text-[40px] text-[36px] font-bold text-[#1c4058]">
                {t('title')}
              </p>
              <p className="self-stretch md:w-[684px] md:text-2xl text-[20px] text-[#617a8b]">
                {t('description')}
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col md:justify-center items-start relative  md:p-8 rounded-[40px] bg-[#e4e6e7] ${style.block_items}`}
          >
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
      </div>
    </div>
  )
}

const LicenseItem = ({ title, image }: { title: string; image: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 md:py-2 rounded-[20px] cursor-pointer text-[#1c4058] hover:text-orange"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex justify-between items-center self-stretch relative border-dashed border-b border-[#1C405829] py-[24px]">
          <p className="md:text-2xl text-[20px]  font-sofiaSans">{title}</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.03 12.53L13.03 15.53C12.88 15.68 12.69 15.75 12.5 15.75C12.31 15.75 12.12 15.68 11.97 15.53C11.68 15.24 11.68 14.76 11.97 14.47L13.69 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H13.69L11.97 9.53C11.68 9.24 11.68 8.76 11.97 8.47C12.26 8.18 12.74 8.18 13.03 8.47L16.03 11.47C16.32 11.76 16.32 12.24 16.03 12.53Z"
              fill="#1C4058"
            ></path>
          </svg>
        </div>
      </div>
      {isOpen && <ImageModal isOpen={isOpen} onClose={() => setIsOpen(false)} imageUrl={image} />}
    </>
  )
}
