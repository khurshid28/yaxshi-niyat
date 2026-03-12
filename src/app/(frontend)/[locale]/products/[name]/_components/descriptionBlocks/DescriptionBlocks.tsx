'use client'

import { Calc } from '@/payload-types';
import { DescriptionBezZaloga } from './DescriptionBezZaloga'
import { DescriptionPodZalog } from './DescriptionPodZalog'
import {
  DescriptionAvtokredit
} from "@/app/(frontend)/[locale]/products/[name]/_components/descriptionBlocks/DescriptionAvtokredit";

export const DescriptionBlocks = ({ name, calcData }: { name: string; calcData: Calc }) => {
  function switchProducts() {
    switch (name) {
      case 'pod-zalog':
        return <DescriptionPodZalog calcData={calcData} />
      case 'bez-zaloga':
        return <DescriptionBezZaloga calcData={calcData} />
      case 'avtokredit':
        return <DescriptionAvtokredit calcData={calcData} />
      default:
        return ''
    }
  }

  return <>{switchProducts()}</>
}
