import { FC, PropsWithChildren, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends PropsWithChildren {
  variant: 'primary' | 'icon' | 'outline' | 'details' | 'outlineWhite'
  icon?: ReactElement
  onClick?: (e: any) => void
  className?: string
}

export const Button: FC<IProps> = ({ variant, children, icon, onClick, className }) => {
  if (variant === 'primary') {
    return (
      <div
        className={twMerge(
          'flex justify-center items-center w-full h-[54px] rounded-[32px] bg-orange text-lg font-bold text-white  cursor-pointer leading-none hover:bg-[#fb7500]',
          className,
        )}
        onClick={onClick}
      >
        <span>{children}</span>
      </div>
    )
  }
  if (variant === 'outline') {
    return (
      <div
        className={twMerge(
          'flex justify-center items-center relative gap-2.5 px-4 h-[54px] rounded-[32px] border  border-[#617a8b]/25 text-lg font-bold text-[#1c4058] cursor-pointer leading-none hover:bg-orange/10',
          className,
        )}
        onClick={onClick}
      >
        <div className="shrink-0">{icon}</div>
        <span>{children}</span>
      </div>
    )
  }
  if (variant === 'icon') {
    return (
      <div
        className={twMerge(
          'flex justify-center items-center w-full gap-2.5 md:p-4 p-[13px] h-12 rounded-[32px] bg-orange md:text-lg text-[18px] font-bold text-white cursor-pointer leading-none hover:bg-[#fb7500]',
          className,
        )}
        onClick={onClick}
      >
        <div className="shrink-0">{icon}</div>
        <span>{children}</span>
      </div>
    )
  }

  if (variant === 'outlineWhite') {
    return (
      <div
        className={twMerge(
          'flex justify-center items-center relative gap-2.5 px-4 h-[54px] rounded-[32px] border border-white/70 text-lg font-bold text-white  cursor-pointer  leading-none ',
          className,
        )}
        onClick={onClick}
      >
        <div className="shrink-0">{icon}</div>
        <span>{children}</span>
      </div>
    )
  }

  if (variant === 'details') {
    return (
      <div
        className="flex justify-center items-center flex-grow relative gap-2 px-4 md:py-3 py-[13px] rounded-[32px]  md:text-lg text-[18px] text-[#1c4058] cursor-pointer  leading-none hover:text-orange"
        onClick={onClick}
      >
        <span>{children}</span>

        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.57617 20.4201L16.0962 13.9001C16.8662 13.1301 16.8662 11.8701 16.0962 11.1001L9.57617 4.58008"
            stroke="currentcolor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }
}
