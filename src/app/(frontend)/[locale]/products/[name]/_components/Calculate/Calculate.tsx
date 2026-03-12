import { Calc } from '@/payload-types'
import { CalculateAvtokredit } from './CalculateAvtokredit'
import { CalculateBezZaloga } from './CalculateBezZaloga'
import { CalculatePodZalog } from './CalculatePodZalog'

export const Calculate = ({ name, calcData }: { name: string; calcData: Calc }) => {
  function switchCalcProduct() {
    switch (name) {
      case 'pod-zalog':
        return <CalculatePodZalog calcData={calcData} />
      case 'bez-zaloga':
        return <CalculateBezZaloga calcData={calcData} />
      case 'avtokredit':
        return <CalculateAvtokredit calcData={calcData} />
      default:
        return ''
    }
  }

  return <>{switchCalcProduct()}</>
}
