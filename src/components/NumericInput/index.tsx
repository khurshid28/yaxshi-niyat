import { NumericFormat } from 'react-number-format'

export const NumericInput = ({ value, onChange }: any) => {
  return (
    <NumericFormat
      className="gap-2.5 py-2 px-3 rounded-2xl bg-white/[0.06] border border-white/[0.15] text-lg font-medium text-white font-sofiaSans"
      thousandSeparator={' '}
      decimalScale={0}
      fixedDecimalScale={false}
      allowNegative={false}
      value={value}
      onValueChange={(values) => {
        const { value } = values
        onChange(value)
      }}
    />
  )
}
