import Link from 'next/link'
import { Drawer } from 'antd'
import { LanguageSelector } from '@/globals/Header/LanguageSelector'
import CloseIcon from '@/components/Icons/CloseIcon'
import { ResponsiveImage } from '@/components/Image'
import { FacebookIcon } from '@/components/Icons/Facebook'
import { TelegramIcon } from '@/components/Icons/Telegram'
import { InstagramIcon } from '@/components/Icons/Instagram'
import SvgIcon1 from '@/globals/Header/ContactBox/icons/SvgIcon1'
import { useTranslations } from 'next-intl'
import { TypedLocale } from 'payload'
import { Header } from '@/payload-types'
import { usePathname } from 'next/navigation'

type Props = {
  open: boolean
  onClose: (val: any) => void
  locale: TypedLocale
  data: Header
}

function Title({ onClose }: { onClose: (val: boolean) => void }) {
  return (
    <div className="flex justify-between">
      <LanguageSelector />
      <button onClick={() => onClose(false)} className="text-[#1C4058]">
        <CloseIcon />
      </button>
    </div>
  )
}

export default function MobileMenu({ open, onClose, locale, data }: Props) {
  const t = useTranslations()
  const pathname = usePathname()
  return (
    <Drawer
      size="large"
      title={<Title onClose={onClose} />}
      closeIcon={null}
      onClose={onClose}
      open={open}
      styles={{
        content: { background: '#F0F0F0' },
      }}
    >
      <div className="flex justify-center items-center my-[50px]">
        <Link onClick={onClose} href="/" className="w-[120px] h-[38px]">
          <ResponsiveImage
            src="/assets/logo-2.png"
            width={161}
            height={30}
            alt=""
            className="h-[30px] max-w-[initial]"
          />
        </Link>
      </div>
      <div className="flex justify-start font-nunitoSans  flex-col items-center gap-6">
        <Link
          onClick={onClose}
          href={`/${locale}/about`}
          className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
            pathname === `/${locale}/about` ? 'text-orange' : ''
          }`}
        >
          {t('about')}
        </Link>
        <Link
          onClick={onClose}
          href={`/${locale}#products`}
          className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
            pathname === `/${locale}#products` ? 'text-orange' : ''
          }`}
        >
          {t('microloans')}
        </Link>
        <Link
          onClick={onClose}
          href={`/${locale}/blog`}
          className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
            pathname === `/${locale}/blog` ? 'text-orange' : ''
          }`}
        >
          {t('blog')}
        </Link>
        <Link
          onClick={onClose}
          href={`/${locale}/contacts`}
          className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
            pathname === `/${locale}/contacts` ? 'text-orange' : ''
          }`}
        >
          {t('contacts')}
        </Link>
        <Link
          onClick={onClose}
          href={`/${locale}/faq`}
          className={`text-lg font-semibold text-[#617a8b] grow-0 m-0 p-0 ${
            pathname === `/${locale}/faq` ? 'text-orange' : ''
          }`}
        >
          {t('faq')}
        </Link>
      </div>
      <div className="flex items-center flex-col gap-9 mt-[50px]">
        <div className="flex justify-start items-center flex-row gap-2 ">
          <a
            href={data.telegram!}
            className="bg-[white] flex justify-center items-center flex-row gap-2 w-10 px-2 py-2.5 rounded-[32px]"
          >
            <FacebookIcon />
          </a>
          <a
            href={data.facebook!}
            className="bg-[white] flex justify-center items-center flex-row gap-2 w-10 px-2 py-2.5 rounded-[32px]"
          >
            <TelegramIcon />
          </a>
          <a
            href={data.instagram!}
            className="bg-[white] flex justify-center items-center flex-row gap-2 w-10 px-2 py-2.5 rounded-[32px]"
          >
            <InstagramIcon />
          </a>
        </div>

        <a
          href={`tel:${(data.phone ?? '').replace(/\D/g, '')}`}
          className="bg-[white] font-sofiaSans text-base font-medium text-[#1c4058] cursor-pointer min-w-[204px] h-10 w-[204px] inline-flex items-center justify-center gap-2 rounded-[32px] border-[none]"
        >
          <SvgIcon1 className="w-5 h-5 text-orange flex" />
          {data.phone}
        </a>
      </div>
    </Drawer>
  )
}
