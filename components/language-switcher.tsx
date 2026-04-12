import Link from 'next/link'
import { Locale } from '@/lib/i18n'

type Props = {
  currentLocale: Locale
}

const locales: Locale[] = ['nl', 'en', 'de']

export default function LanguageSwitcher({ currentLocale }: Props) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#d8d0c2] bg-[#f8f4eb] p-1">
      {locales.map((locale) => {
        const active = currentLocale === locale

        return (
          <Link
            key={locale}
            href={`/${locale}`}
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