'use client'

import { Calc } from '@/payload-types'
import { ConditionsAvtokredit } from './ConditionsAvtokredit'
import { ConditionsBezZaloga } from './ConditionsBezZaloga'
import { CondtionsPodZalog } from './CondtionsPodZalog'

export const Conditions = ({ name, calcData }: { name: string; calcData: Calc }) => {
  function switchConditions() {
    switch (name) {
      case 'bez-zaloga':
        return <ConditionsBezZaloga calcData={calcData} />
      case 'pod-zalog':
        return <CondtionsPodZalog calcData={calcData} />
      case 'avtokredit':
        return <ConditionsAvtokredit calcData={calcData} />
      default:
        return ''
    }
  }
  return <>{switchConditions()}</>
}
