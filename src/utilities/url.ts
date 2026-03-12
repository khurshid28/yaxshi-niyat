import { SITE_CONFIG } from '../payload.config'

export const generateAbsoluteUrl = (path: string, locale: string = 'ru'): string => {
  return `${SITE_CONFIG.siteUrl}/${locale}${path.startsWith('/') ? path : `/${path}`}`
}

export const generateBlogPostUrl = (slug: string, locale: string = 'ru'): string => {
  return generateAbsoluteUrl(`/blog/${slug}`, locale)
}