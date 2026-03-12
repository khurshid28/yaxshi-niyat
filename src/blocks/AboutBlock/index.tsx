import Link from 'next/link'
import { Button } from '../../components/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const AboutBlock = ({ locale }: any) => {
  const t = useTranslations('blocks.about')
  return (
    <div className="flex flex-col justify-start items-start mx-auto gap-4 container lg:px-12 pb-8">
      <div className="flex row-to-col-lg justify-start items-center flex-grow relative gap-12">
        <div className="lg:w-[676px] lg:h-[808px]  relative overflow-hidden rounded-[40px]">
          <Image src="/assets/about-preview.jpg" width={1350} height={1600} alt="about-preview" className="w-full h-full object-cover" priority />
        </div>
        <div className="flex flex-col justify-center items-start self-stretch flex-grow gap-12">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
            <h1 className="self-stretch md:text-[40px] text-[36px] font-bold text-[#1c4058] font-sofiaSans">{t('title')}</h1>
            <p className="self-stretch md:w-[620px] md:text-lg text-[18px] text-[#617a8b]">
              <span className="self-stretch md:w-[620px] md:text-lg text-[18px] text-[#617a8b]">
                {t('description_0')}
              </span>
              <br />
              <br />
              <span className="self-stretch w-[620px] md:text-lg text-[18px] text-[#617a8b]">
                {t('description_1')}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch gap-4">
            <div className="flex flex-col justify-center items-start self-stretch relative overflow-hidden gap-4 p-8 rounded-[40px] bg-[#e4e6e7]">
              <div className="flex justify-start items-center self-stretch relative gap-4">
                <p className="flex-grow md:w-[556px] md:text-2xl text-[24px] font-semibold text-[#1c4058]  font-sofiaSans">
                  {t('description_2')}
                </p>
              </div>
              <p className="self-stretch md:w-[556px] md:text-lg text-[18px] italic text-[#617a8b]">
                {t('description_3')}
              </p>
            </div>
          </div>
          <Link href={`/${locale}#products`} className="md:w-[218px] w-full">
            <Button variant="primary">{t('button')}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
