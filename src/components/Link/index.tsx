import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

// import type { Page, Post } from "@/payload-types";
// import { TypedLocale } from "payload";

import type { Page } from '@/payload-types'

type CMSLinkType = {
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  region?: string
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const { type, children, className, label, newTab, reference, url, region } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `/${region}${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  return (
    <Link
      className={cn(className)}
      href={(href || url || '').replace('solutionsc', 'solution')}
      {...newTabProps}
    >
      {label && label}
      {children && children}
    </Link>
  )
}
