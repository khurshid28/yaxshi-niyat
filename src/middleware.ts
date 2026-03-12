import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

const TRACKING_PARAMS = [
  'yclid', 'gclid', 'fbclid',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'etext'
]

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const isLocalhost = url.hostname.includes('localhost')

  // Debug logging
  console.log("🌐 Incoming request:", {
    fullUrl: req.url,
    hostname: url.hostname,
  })

  // 1. Handle security redirects first (www → non-www, HTTP → HTTPS)
  if (!isLocalhost) {
    // Redirect www → non-www
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.replace(/^www\./, '')
      return NextResponse.redirect(url, 308)
    }

    // Redirect HTTP → HTTPS (check x-forwarded-proto for platforms like Vercel)
    const protocol = req.headers.get('x-forwarded-proto') || url.protocol.replace(':', '')
    if (protocol === 'http') {
      url.protocol = 'https:'
      return NextResponse.redirect(url, 308)
    }
  }

  // 2. Handle UTM parameters
  const cookiesToSet: { name: string; value: string }[] = []
  let hasTrackingParams = false

  TRACKING_PARAMS.forEach(param => {
    if (url.searchParams.has(param)) {
      const value = url.searchParams.get(param)
      if (value) {
        cookiesToSet.push({ name: param, value })
      }
      url.searchParams.delete(param)
      hasTrackingParams = true
    }
  })

  if (hasTrackingParams) {
    const redirect = NextResponse.redirect(url, 301)
    cookiesToSet.forEach(cookie => {
      redirect.cookies.set(cookie.name, cookie.value, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    })
    return redirect
  }

  // 3. Custom redirects
  if (url.pathname === '/lang/ru') {
    return NextResponse.redirect(new URL('/ru', req.url))
  }
  
  if (url.pathname === '/lang/uz') {
    return NextResponse.redirect(new URL('/uz', req.url))
  }

  // 4. Apply next-intl middleware with security headers
  const response = intlMiddleware(req)
  
  // Add security headers
  if (!isLocalhost) {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    )
  }
  
  response.headers.set('Vary', 'Accept-Language')
  return response
}

export const config = {
  matcher: '/((?!api|_next|admin|static|assets|.*\\..*).*)',
}