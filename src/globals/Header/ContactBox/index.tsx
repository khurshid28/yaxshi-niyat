import { FacebookIcon } from '@/components/Icons/Facebook'
import { LanguageSelector } from '../LanguageSelector'
import SvgIcon1 from './icons/SvgIcon1'
import { TelegramIcon } from '@/components/Icons/Telegram'
import { InstagramIcon } from '@/components/Icons/Instagram'

export function ContactBox({ telegram, facebook, instagram, phone }: any) {
  return (
    <div className="xl:flex justify-start items-center flex-row gap-9 hidden ">
      <div className="flex justify-start items-center flex-row gap-2 ">
        <LanguageSelector />
        <a href={telegram!} className="p-1.5 rounded-[32px] bg-white">
          <TelegramIcon />
        </a>
        <a href={facebook!} className="p-1.5 rounded-[32px] bg-white">
          <FacebookIcon />
        </a>
        <a href={instagram!} className="p-1.5 rounded-[32px] bg-white">
          <InstagramIcon />
        </a>
      </div>

      <a
        href={`tel:${(phone ?? '')!.replace(/\D/g, '')}`}
        className="bg-[white] font-sofiaSans text-base font-medium text-[#1c4058] cursor-pointer min-w-[204px] h-10 w-[204px] inline-flex items-center justify-center gap-2 rounded-[32px] border-[none]"
      >
        <SvgIcon1 className="w-5 h-5 text-orange flex" />
        {phone}
      </a>
    </div>
  )
}
