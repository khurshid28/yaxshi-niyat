import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return (
      <input
        className="gap-2.5 py-2 px-3 rounded-2xl bg-white border border-[#617a8b]/[0.15] text-lg font-medium text-[#1c4058] font-sofiaSans w-full"
        {...props}
        ref={ref}
      />
    )
  },
)

Input.displayName = 'Input'
