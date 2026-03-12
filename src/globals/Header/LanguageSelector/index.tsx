'use client'

import { startTransition, useRef, useState } from 'react'
import { ArrowDown } from './icons/ArrowDown'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useOnClickOutside } from 'usehooks-ts'

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)

  const locale = useLocale()
  const router = useRouter()
  const path = usePathname()
  const ref = useRef<any>(null)

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (lang: string) => {
  if (!path) return // если путь не определён, ничего не делаем
  setIsOpen(false)
  const newPathname = path.replace(`/${locale}`, `/${lang}`)
  startTransition(() => {
    router.replace(newPathname)
  })
}


  return (
    <div className="relative inline-block select-none" ref={ref}>
      <div
        className="flex justify-center items-center flex-row gap-1 px-4 py-2.5 rounded-[32px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-sofiaSans text-base font-medium text-[#1c4058] m-0 p-0">
          {locale.toUpperCase()}
        </p>
        <ArrowDown
          className={`w-5 h-5 text-[#617a8b] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
          {['uz', 'ru'].map((lang) => (
            <div
              key={lang}
              onClick={() => selectLanguage(lang)}
              className="px-4 py-2 text-[#1c4058] hover:bg-[#f0f0f0] cursor-pointer text-center"
            >
              {lang.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
