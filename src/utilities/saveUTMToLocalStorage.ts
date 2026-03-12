'use client'

import { useEffect } from 'react'

export function useSaveUTMToLocalStorage() {
  return useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    let hasUTM = false

    utmKeys.forEach((key) => {
      const value = params.get(key)
      if (value) {
        localStorage.setItem(key, value)
        hasUTM = true
      }
    })

    if (hasUTM) {
      localStorage.setItem('utm_saved_at', new Date().toISOString())
    }
  }, [])
}

export function getUTMFromLocalStorage() {
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const utm = {}
  utmKeys.forEach((key) => {
    const value = localStorage.getItem(key)
    if (value) {
      utm[key] = value
    }
  })
  return utm
}
