import React from 'react'
import Image from 'next/image'

export const LogoV2 = () => {
  return (
    /* eslint-disable @next/next/no-img-element */
    <div>
      <Image priority src="/assets/logo.png" alt="Yaxshi niyat" width={800} height={890}/>
    </div>
  )
}

export const Icon = () => {
  return (
    /* eslint-disable @next/next/no-img-element */
    <div>
      <Image priority src="/assets/icon.png" alt="Yaxshi niyat" width={385} height={385}/>
    </div>
  )
}
