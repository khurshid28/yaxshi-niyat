'use client'

import { FC, useState } from 'react'
import { SelectArrowIcon } from '../Icons/SelectArrow'
import { twMerge } from 'tailwind-merge'
import { useRef } from 'react'

import { useOnClickOutside } from 'usehooks-ts'

interface IProps {
  options?: {
    label: string
    value: string | number | null
  }[]
  value: string | number | null
  onChange: (value: string|number) => void
  variant?: 'primary' | 'secondary'
}

export const Select: FC<IProps> = ({ options = [], value, onChange, variant = 'primary' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<any>(null)

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleSelect = (option: any) => {
    setIsOpen(false)
    onChange(option.value as string)
  }

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className="w-full relative gap-1 font-sofiaSans" ref={ref}>
      <div
        className={twMerge(
          'flex justify-center items-center self-stretch relative gap-2.5 py-2 px-3 rounded-2xl',
          variant === 'primary' && 'bg-white/[0.06] border border-white/[0.15]',
          variant === 'secondary' && 'bg-white border border-[#1c4058]/[0.12]',
          'cursor-pointer select-none',
        )}
        onClick={toggleDropdown}
      >
        <p
          className={twMerge(
            'flex-grow text-lg font-medium',
            variant === 'primary' && 'text-white',
            variant === 'secondary' && ' text-[#1c4058]',
          )}
        >
          {selectedOption?.label}
        </p>
        <div
          className={twMerge(
            `transition-transform duration-300  ${isOpen ? 'rotate-180' : ''}`,
            variant === 'primary' && 'text-white',
            variant === 'secondary' && 'text-[#617A8B]',
          )}
        >
          <SelectArrowIcon />
        </div>
      </div>
      {isOpen && (
        <ul className="absolute top-full mt-2 w-full bg-white border border-[#1c4058]/[0.12] rounded-2xl shadow-md z-10 max-h-[200px] overflow-y-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-4 text-[#1c4058] hover:bg-[#f0f4f7] cursor-pointer rounded-xl transition-colors"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
