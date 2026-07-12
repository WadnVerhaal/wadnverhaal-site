import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getTranslation, isValidLocale, locales, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) {
    return { title: 'FAQ | Ameland Audiotours', description: 'Veelgestelde vragen' }
  }

  const t = getTranslation(lang)
  return { title: `${t.faq.title} | ${t.site.name}`, description: t.faq.intro }
}

export default async function FaqPage({ params }: Props) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const locale = lang as Locale
  const t = getTranslation(locale)

  return (
    <main className="min-h-screen bg-[#edf6f3] px-4 py-6 text-[#20372f] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="inline-flex items-center gap-3 font-black text-[#0f5d67]">
            <Image
              src="/images/ameland-audiotours-logo.webp"
              alt="Ameland Audiotours"
              width={46}
              height={46}
              className="h-11 w-11 rounded-full border border-white object-cover shadow"
              priority
            />
            <span className="hidden sm:inline">{t.site.name}</span>
          </Link>
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 rounded-full border border-[#cfddd6] bg-white px-4 py-2 text-sm font-black text-[#315848]">
            <ArrowLeft className="h-4 w-4" /> {t.faq.backToHome}
          </Link>
        </header>

        <section className="mt-10 rounded-[2rem] bg-[#153f45] p-6 text-white sm:p-10">
          <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-200">{t.faq.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-black leading-[.93] tracking-[-.055em] sm:text-6xl">{t.faq.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{t.faq.intro}</p>
        </section>

        <div className="mt-6 space-y-3">
          {t.faq.items.map((faq, index) => (
            <details key={faq.question} className="group rounded-[1.4rem] border border-[#d5e2db] bg-[#fffdf8] p-5 shadow-[0_10px_30px_rgba(32,55,47,.06)]">
              <summary className="flex cursor-pointer list-none items-start gap-4 font-black text-[#20372f]">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#dcebe1] text-xs text-[#0f5d67]">{index + 1}</span>
                <span className="flex-1 pt-1">{faq.question}</span>
                <span className="pt-1 text-xl leading-none text-[#0f5d67] transition group-open:rotate-45">+</span>
              </summary>
              <p className="ml-12 mt-4 max-w-3xl text-sm leading-7 text-[#5f6f66] sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  )
}
