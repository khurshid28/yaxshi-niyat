'use client'

import { useTranslations } from 'next-intl'
import { Button } from '../../components/Button'
import { CtaArrowIcon } from '../../components/Icons/CtaArrow'
import { DocsIcon } from '../../components/Icons/Docs'
import style from './style.module.scss'
import { ModalForm } from '@/components/ModalForm'
import { useState } from 'react'
import Image from 'next/image'

export const CallToActionBlock = () => {
  const t = useTranslations('blocks.callToAction')
  const t2 = useTranslations()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-[#f0f0f0] md:py-[90px] py-[32px] font-sofiaSans">
      <div className="container">
        <div
          className={`flex justify-between items-center relative gap-[24px] ${style.call_to_action_block}`}
        >
          <div className="flex flex-col md:gap-12 gap-[24px]">
            <div className="flex flex-col md:w-[620px] gap-[15px]">
              <div className="flex flex-col self-stretch relative gap-1">
                <p className="self-stretch md:w-[620px] md:text-[40px] text-[36px] font-bold text-[#1c4058]">
                  {t('title')}
                </p>
                <p className="self-stretch md:w-[620px] md:text-2xl text-[20px] text-[#617a8b]">
                  {t('description')}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start md:w-[621px] gap-8 md:p-8 px-[16px] py-[24px] rounded-[40px] bg-[#e4e6e7] relative">
              <div className="flex justify-start items-center self-stretch gap-4 md:pr-0 pr-[20px]">
                <div className="flex justify-center items-center w-[60px] h-[60px] relative gap-2.5 p-3 rounded-[32px] md:bg-white/50">
                  <p className="text-[32px] font-medium text-[#1c4058]">1</p>
                </div>
                <div className="flex flex-col flex-grow relative gap-1">
                  <p className="md:text-2xl text-[20px] font-semibold text-[#1c4058]">
                    {t('step_1')}
                  </p>
                  <p className="self-stretch md:w-[481px] md:text-xl text-[18px]">
                    <span className="self-stretch md:w-[481px] italic text-[#617a8b]">
                      {t('step_1_description')}{' '}
                    </span>
                    <span className="self-stretch md:w-[481px] italic text-orange">
                      {t('step_1_description_2')}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center self-stretch gap-4 md:pr-0 pr-[20px]">
                <div className="flex justify-center items-center w-[60px] h-[60px] relative gap-2.5 p-3 rounded-[32px] md:bg-white/50">
                  <p className="text-[32px] font-medium text-[#1c4058]">2</p>
                </div>
                <div className="flex flex-col flex-grow relative gap-1">
                  <p className="md:text-2xl text-[20px] font-semibold text-[#1c4058]">
                    {t('step_2')}
                  </p>
                  <p className="self-stretch md:w-[481px] md:text-xl text-[18px] italic text-[#617a8b]">
                    {t('step_2_description')}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center self-stretch gap-4 md:pr-0 pr-[20px]">
                <div className="flex justify-center items-center w-[60px] h-[60px] relative gap-2.5 p-3 rounded-[32px] md:bg-white/50">
                  <p className="text-[32px] font-medium text-[#1c4058]">3</p>
                </div>
                <div className="flex flex-col flex-grow relative gap-1">
                  <p className="md:text-2xl text-[20px] font-semibold text-[#1c4058]">
                    {t('step_3')}
                  </p>
                  <p className="self-stretch md:w-[481px] md:text-xl text-[18px] italic text-[#617a8b]">
                    {t('step_3_description')}
                  </p>
                </div>
              </div>
              <Image
                priority
                width={48}
                height={265}
                src="/assets/arrowDash.svg"
                alt="arrow-dash"
                className="absolute right-[10px] top-[90px] sm:hidden block"
              />
              <svg
                width="303"
                height="61"
                viewBox="0 0 303 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute md:block hidden left-[344px] top-[100px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M1.72768 2.12383C1.05391 2.27422 0.629627 2.94234 0.780023 3.61612C0.930419 4.28989 1.59854 4.71418 2.27232 4.56378L1.72768 2.12383ZM96 22.8448L96.4759 21.689L96 22.8448ZM234 19.3447L234.441 18.1749L234 19.3447ZM303 60.8447L298.243 47.2172L288.82 58.1502L303 60.8447ZM2.27232 4.56378C3.19246 4.35839 4.15554 4.18002 5.16065 4.02893L4.789 1.5567C3.73024 1.71586 2.70926 1.90472 1.72768 2.12383L2.27232 4.56378ZM11.0705 3.47603C12.9603 3.39285 14.9541 3.38402 17.0468 3.44961L17.1251 0.950832C14.9761 0.883488 12.9193 0.89224 10.9606 0.978446L11.0705 3.47603ZM23.0335 3.81637C24.962 3.98782 26.9573 4.21292 29.016 4.49148L29.3512 2.01406C27.2573 1.73074 25.224 1.50125 23.2548 1.32619L23.0335 3.81637ZM34.963 5.41443C36.891 5.75001 38.8658 6.12738 40.8851 6.54632L41.393 4.09845C39.3487 3.67432 37.3474 3.29187 35.3917 2.95146L34.963 5.41443ZM46.7783 7.85738C48.6965 8.31184 50.6496 8.80071 52.6358 9.32381L53.2725 6.90624C51.267 6.37805 49.2937 5.88413 47.3547 5.42472L46.7783 7.85738ZM58.4564 10.9277C60.3603 11.475 62.2912 12.0516 64.2476 12.6575L64.9872 10.2694C63.0149 9.65864 61.0677 9.0771 59.147 8.52501L58.4564 10.9277ZM70.0123 14.5033C71.8982 15.1265 73.8055 15.7755 75.7328 16.4501L76.5587 14.0905C74.6179 13.4111 72.6968 12.7575 70.7968 12.1295L70.0123 14.5033ZM81.4275 18.4965C83.2977 19.1859 85.1849 19.8982 87.0882 20.6335L87.9892 18.3015C86.074 17.5616 84.1746 16.8447 82.292 16.1508L81.4275 18.4965ZM92.7167 22.8564C93.649 23.2325 94.5849 23.6139 95.5241 24.0006L96.4759 21.689C95.5313 21.3 94.5899 20.9163 93.652 20.5379L92.7167 22.8564ZM95.5241 24.0006C96.4518 24.3826 97.3787 24.7451 98.3049 25.0887L99.1744 22.7448C98.2758 22.4114 97.3763 22.0597 96.4759 21.689L95.5241 24.0006ZM103.937 26.9539C105.857 27.515 107.773 28 109.685 28.4149L110.215 25.9718C108.36 25.5691 106.501 25.0985 104.638 24.5542L103.937 26.9539ZM115.526 29.4732C117.498 29.7614 119.463 29.9807 121.422 30.1379L121.622 27.6459C119.715 27.4929 117.804 27.2795 115.888 26.9995L115.526 29.4732ZM127.338 30.4311C129.318 30.4703 131.29 30.4523 133.254 30.3841L133.167 27.8856C131.246 27.9523 129.32 27.9698 127.388 27.9316L127.338 30.4311ZM139.154 30.0336C141.12 29.8703 143.077 29.6632 145.025 29.4197L144.715 26.939C142.798 27.1786 140.876 27.382 138.947 27.5422L139.154 30.0336ZM150.859 28.5839C152.801 28.2725 154.733 27.9315 156.654 27.5683L156.19 25.1118C154.288 25.4712 152.379 25.8081 150.463 26.1155L150.859 28.5839ZM162.419 26.4135C164.341 26.0087 166.252 25.5888 168.152 25.1616L167.604 22.7225C165.712 23.148 163.812 23.5653 161.903 23.9671L162.419 26.4135ZM173.861 23.8547C175.775 23.4113 177.673 22.969 179.561 22.5341L179 20.0979C177.11 20.5332 175.206 20.9769 173.297 21.4192L173.861 23.8547ZM185.259 21.2461C187.173 20.8244 189.072 20.4201 190.956 20.0417L190.463 17.5907C188.561 17.9729 186.646 18.3805 184.721 18.8047L185.259 21.2461ZM196.675 18.9732C198.605 18.6434 200.516 18.3514 202.409 18.1065L202.089 15.6272C200.157 15.877 198.212 16.1743 196.254 16.5089L196.675 18.9732ZM208.159 17.5139C210.101 17.3692 212.021 17.287 213.919 17.2778L213.907 14.7778C211.945 14.7873 209.966 14.8723 207.973 15.0208L208.159 17.5139ZM219.653 17.4884C221.568 17.6441 223.458 17.8891 225.324 18.2353L225.78 15.7772C223.824 15.4144 221.849 15.1587 219.856 14.9966L219.653 17.4884ZM230.86 19.5916C231.766 19.8707 232.666 20.1778 233.559 20.5145L234.441 18.1749C233.498 17.82 232.55 17.4964 231.597 17.2025L230.86 19.5916ZM233.559 20.5145C234.453 20.8512 235.345 21.1959 236.234 21.548L237.155 19.2235C236.253 18.8664 235.348 18.5167 234.441 18.1749L233.559 20.5145ZM241.536 23.7453C243.296 24.5069 245.042 25.2942 246.772 26.1028L247.83 23.838C246.08 23.0197 244.312 22.2225 242.529 21.451L241.536 23.7453ZM251.943 28.606C253.667 29.4687 255.37 30.3491 257.05 31.2428L258.224 29.0357C256.527 28.1327 254.805 27.2427 253.062 26.3703L251.943 28.606ZM262.093 34.003C263.783 34.954 265.444 35.9142 267.073 36.8786L268.347 34.7276C266.703 33.754 265.026 32.7845 263.318 31.8241L262.093 34.003ZM271.99 39.8628C273.651 40.8953 275.27 41.9265 276.843 42.9505L278.207 40.8553C276.62 39.8221 274.986 38.7814 273.31 37.7396L271.99 39.8628ZM281.63 46.137C283.268 47.2521 284.843 48.3502 286.349 49.4227L287.799 47.3863C286.279 46.3037 284.69 45.1956 283.037 44.0704L281.63 46.137ZM290.999 52.8118C292.636 54.0331 294.161 55.2032 295.564 56.3069L297.109 54.3419C295.689 53.2249 294.148 52.042 292.495 50.8083L290.999 52.8118Z"
                  fill="#FB8500"
                ></path>
              </svg>
            </div>
            <div className="w-[218px] md:block hidden">
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                {t2('apply')}
              </Button>
              <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
          <div className="md:ml-[24px] md:h-[780px] relative">
            <div className="rounded-[40px] overflow-hidden md:block hidden">
              <Image priority src="/assets/cta-preview.jpg" alt="cta-preview" className="w-full h-full object-cover" width={1350} height={1560}/>
              {/*<ResponsiveImage width={675} height={780} src="/assets/cta-preview.jpg" alt="" />*/}
            </div>

            <div className="md:hidden block w-full overflow-hidden mt-[24px]">
              <div className="w-full rounded-[40px] bg-[#FFFFFF0F] border border-white/[0.15] backdrop-blur-[100px] p-[24px]">
                <div className="flex justify-start items-center self-stretch relative gap-[16px] mb-[16px]">
                  <div className="flex justify-start items-center relative gap-2.5 p-2 rounded-[32px] bg-[#1c4058]">
                    <DocsIcon />
                  </div>
                  <p className="text-[20px] font-sofiaSans font-bold text-[#1C4058]">
                    {t('documents')}
                  </p>
                </div>
                <div className="flex flex-col self-stretch gap-4">
                  <div className="flex  justify-start items-center self-stretch relative gap-2.5 rounded-[10000px]">
                    <span className="text-[#1C4058]">
                      <CtaArrowIcon />
                    </span>
                    <p className="text-[20px] font-sofiaSans italic text-[#1C4058]">
                      {t('documents_1')}
                    </p>
                  </div>
                  <div className="flex justify-start items-center self-stretch relative gap-2.5 rounded-[10000px]">
                    <span className="text-[#1C4058]">
                      <CtaArrowIcon />
                    </span>
                    <p className="text-[20px] font-sofiaSans italic text-[#1C4058]">
                      {t('documents_2')}
                    </p>
                  </div>
                </div>
                <p className="self-stretch font-sofiaSans text-base italic text-[#617A8B] mt-[16px]">
                  {t('documents_3')}
                </p>
              </div>
            </div>

            <div className="md:flex hidden flex-col w-full justify-start items-end absolute top-[500px] overflow-hidden px-[32px]">
              <div className="w-full rounded-[40px] bg-[#f2dbc0]/20 border border-white/[0.15] backdrop-blur-[100px] p-8">
                <div className="flex justify-start items-center self-stretch relative gap-4">
                  <div className="flex justify-start items-center relative gap-2.5 p-2 rounded-[32px] bg-[#1c4058]">
                    <DocsIcon />
                  </div>
                  <p className="text-2xl font-bold text-white">{t('documents')}</p>
                </div>
                <div className="flex flex-col self-stretch gap-4">
                  <div className="flex justify-start text-white items-center self-stretch relative gap-2.5 rounded-[10000px]">
                    <CtaArrowIcon />
                    <p className="text-2xl italic text-white">{t('documents_2')}</p>
                  </div>
                  <div className="flex justify-start text-white items-center self-stretch relative gap-2.5 rounded-[10000px]">
                    <CtaArrowIcon />
                    <p className="text-2xl italic text-white">{t('documents_1')}</p>
                  </div>
                </div>
                <p className="self-stretch  text-base italic text-white/70">{t('documents_3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
