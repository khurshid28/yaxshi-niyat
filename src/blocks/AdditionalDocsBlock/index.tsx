import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const AdditionalDocsBlock = () => {
  const t = useTranslations('blocks.additionalDocs')
  return (
    <div className="flex flex-col justify-center items-center self-stretch overflow-hidden gap-8 md:p-12 bg-[#f7f7f7] ">
      <div className="flex  row-to-col-reverse-md justify-start items-center relative gap-12 lg:px-12 container">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-12">
          <div className="flex flex-col justify-start items-start self-stretch gap-[15px]">
            <div className="flex flex-col justify-start items-start self-stretch relative gap-1">
              <p className="self-stretch md:w-[797px] md:text-[40px] text-[36px] font-bold text-[#1c4058]">
                {t('title')}
              </p>
              <p className="md:hidden block text-[20px] text-[#617A8B]">{t('description')}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch relative overflow-hidden gap-6 md:p-8 px-[24px] py-[40px] rounded-[40px] bg-[#f0f0f0]">
            <Image
              width={180}
              height={180}
              priority
              src="/assets/ellipseShadowSmall.svg"
              alt="elipce-shadow"
              className="absolute top-0 right-0 md:hidden block"
            />
            <div className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 py-2 rounded-[20px]">
              <div className="flex justify-start items-center self-stretch relative gap-2">
                <IconDoc />
                <p className="font-sofiaSans-regular-18 text-[#1c4058] md:w-auto w-[90%]">
                  {t('doc_1')}
                </p>
              </div>
            </div>
            <svg
              width={733}
              height={1}
              viewBox="0 0 733 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch"
              preserveAspectRatio="none"
            >
              <line
                y1="0.5"
                x2={733}
                y2="0.5"
                stroke="#1C4058"
                strokeOpacity="0.16"
                strokeDasharray="2 2"
              />
            </svg>
            <div className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 py-2 rounded-[20px]">
              <div className="flex justify-start items-center self-stretch relative gap-2">
                <IconDoc />
                <p className="font-sofiaSans-regular-18 text-[#1c4058] md:w-auto w-[90%]">
                  {t('doc_2')}
                </p>
              </div>
            </div>
            <svg
              width={733}
              height={1}
              viewBox="0 0 733 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch"
              preserveAspectRatio="none"
            >
              <line
                y1="0.5"
                x2={733}
                y2="0.5"
                stroke="#1C4058"
                strokeOpacity="0.16"
                strokeDasharray="2 2"
              />
            </svg>
            <div className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 py-2 rounded-[20px]">
              <div className="flex justify-start items-center self-stretch relative gap-2">
                <IconDoc />
                <p className="font-sofiaSans-regular-18 text-[#1c4058] md:w-auto w-[90%]">
                  {t('doc_3')}
                </p>
              </div>
            </div>
            <svg
              width={733}
              height={1}
              viewBox="0 0 733 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch"
              preserveAspectRatio="none"
            >
              <line
                y1="0.5"
                x2={733}
                y2="0.5"
                stroke="#1C4058"
                strokeOpacity="0.16"
                strokeDasharray="2 2"
              />
            </svg>
            <div className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 py-2 rounded-[20px]">
              <div className="flex justify-start items-center self-stretch relative gap-2">
                <IconDoc />
                <p className="font-sofiaSans-regular-18 text-[#1c4058] md:w-auto w-[90%]">
                  {t('doc_4')}
                </p>
              </div>
            </div>
            <svg
              width={733}
              height={1}
              viewBox="0 0 733 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-stretch"
              preserveAspectRatio="none"
            >
              <line
                y1="0.5"
                x2={733}
                y2="0.5"
                stroke="#1C4058"
                strokeOpacity="0.16"
                strokeDasharray="2 2"
              />
            </svg>
            <div className="flex flex-col justify-start items-end self-stretch overflow-hidden gap-4 px-4 py-2 rounded-[20px]">
              <div className="flex justify-start items-center self-stretch relative gap-2">
                <IconDoc />
                <p className="font-sofiaSans-regular-18 text-[#1c4058] md:w-auto w-[90%]">
                  {t('doc_5')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[499px] md:h-[552px] h-[300px] w-full rounded-[40px] overflow-hidden">
          <Image
            priority
            width={998}
            height={1100}
            src="/assets/additional-docs-preview.jpg"
            alt="additional-docs-preview"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function IconDoc() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke="#FB8500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke="#FB8500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13H13"
        stroke="#FB8500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17H11"
        stroke="#FB8500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
