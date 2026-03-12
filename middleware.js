import { NextResponse } from 'next/server'

export function middleware(req) {
  const host = req.headers.get('host')

  // Redirect www to non-www
  if (host && host.startsWith('www.')) {
    const url = req.nextUrl.clone()
    url.hostname = host.replace(/^www\./, '')
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}
