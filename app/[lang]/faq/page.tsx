import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslation, isValidLocale, locales } from '@/lib/i18n'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{
    lang: string
  }>
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params

  if (!isValidLocale(lang)) {
    return {
      title: "FAQ | Wad'n Verhaal",
      description: 'Veelgestelde vragen',
    }
  }

  const t = getTranslation(lang)

  return {
    title: `${t.faq.title} | ${t.site.name}`,
    description: t.faq.intro,
  }
}

export default async function FaqPage({ params }: Props) {
  const { lang } = await params

  if (!isValidLocale(lang)) {
    notFound()
  }

  const t = getTranslation(lang)

  return (
    <main className="min-h-screen bg-transparent px-6 py-16 text-[#163c43]">
      <div className="mx-auto max-w-4xl">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-3 rounded-full border border-[#cfe7e5] bg-white/92 px-3 py-2 text-sm font-medium text-[#2d6269] shadow-sm transition hover:bg-white hover:text-[#163c43]"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#cde6e4] bg-white">
            <Image
              src="/images/logo-round.png"
              alt="Wad'n Verhaal logo"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span>{t.faq.backToHome}</span>
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4f8a8e]">
            {t.faq.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#103f47]">
            {t.faq.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#476d73]">{t.faq.intro}</p>
        </div>

        <div className="mt-10 space-y-4">
          {t.faq.items.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[1.5rem] border border-[#d7ecea] bg-white/94 p-6 shadow-[0_12px_35px_rgba(18,75,84,0.08)]"
            >
              <h2 className="text-lg font-bold text-[#103f47]">{faq.question}</h2>
              <p className="mt-3 leading-7 text-[#56757a]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}