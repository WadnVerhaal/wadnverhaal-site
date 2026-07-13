'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale } from '@/lib/i18n'

type Props = {
  currentLocale: Locale
}

const locales: Locale[] = ['nl', 'en', 'de']

export default function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname() || `/${currentLocale}`

  function localizedPath(locale: Locale) {
    const parts = pathname.split('/')
    if (parts[1] === 'nl' || parts[1] === 'en' || parts[1] === 'de') {
      parts[1] = locale
      return parts.join('/') || `/${locale}`
    }
    return `/${locale}${pathname === '/' ? '' : pathname}`
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-[#d8d0c2] bg-[#f8f4eb] p-1">
      {locales.map((locale) => {
        const active = currentLocale === locale

        return (
          <Link
            key={locale}
            href={localizedPath(locale)}
            hrefLang={locale}
            aria-label={`Taal wijzigen naar ${locale.toUpperCase()}`}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition ${
              active
                ? 'bg-[#26443e] text-white'
                : 'text-[#5f6d67] hover:bg-white'
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        )
      })}
    </div>
  )
}
