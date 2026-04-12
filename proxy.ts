import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, isValidLocale } from './lib/i18n'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]
  const locale =
    maybeLocale && isValidLocale(maybeLocale) ? maybeLocale : defaultLocale

  const response = NextResponse.next()
  response.cookies.set('locale', locale, { path: '/' })

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
