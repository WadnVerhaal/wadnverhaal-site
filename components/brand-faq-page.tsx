import Link from 'next/link'
import { CalendarDays, ChevronDown, Headphones, Mail, Route } from 'lucide-react'
import LanguageSwitcher from '@/components/language-switcher'
import type { Locale } from '@/lib/i18n'

type FaqItem = { question: string; answer: string }

type BrandFaqPageProps = {
  locale: Locale
  siteName: string
  nav: { tours: string; faq: string; orderNow: string }
  title: string
  intro: string
  items: FaqItem[]
  footerText: string
  email: string
  phone: string
}

const copy = {
  nl: {
    eyebrow: 'Praktische informatie',
    lead: 'Snel antwoord, rustig op weg',
    hint: 'Klik op een vraag om het antwoord te bekijken.',
    helpTitle: 'Staat je vraag er niet tussen?',
    helpEyebrow: 'Persoonlijke hulp',
    helpText: 'Neem gerust contact met ons op. We helpen je graag voor, tijdens of na je audiotour.',
    contact: 'Neem contact op',
    tour: 'Bekijk de audiotour',
    home: 'Home',
    ameland: 'Over Ameland',
    contactTitle: 'Contact',
  },
  en: {
    eyebrow: 'Practical information',
    lead: 'A clear answer, a relaxed start',
    hint: 'Select a question to view the answer.',
    helpTitle: 'Is your question not listed?',
    helpEyebrow: 'Personal assistance',
    helpText: 'Feel free to contact us. We are happy to help before, during or after your audio tour.',
    contact: 'Contact us',
    tour: 'View the audio tour',
    home: 'Home',
    ameland: 'About Ameland',
    contactTitle: 'Contact',
  },
  de: {
    eyebrow: 'Praktische Informationen',
    lead: 'Klare Antworten, entspannt unterwegs',
    hint: 'Wähle eine Frage aus, um die Antwort zu lesen.',
    helpTitle: 'Deine Frage ist nicht dabei?',
    helpEyebrow: 'Persönliche Hilfe',
    helpText: 'Nimm gern Kontakt mit uns auf. Wir helfen dir vor, während oder nach deiner Audiotour.',
    contact: 'Kontakt aufnehmen',
    tour: 'Audiotour ansehen',
    home: 'Startseite',
    ameland: 'Über Ameland',
    contactTitle: 'Kontakt',
  },
} satisfies Record<Locale, Record<string, string>>

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative shrink-0 overflow-hidden rounded-full border border-[#0b3443]/20 bg-white ${compact ? 'h-11 w-11' : 'h-14 w-14'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://app.amelandaudiotours.nl/images/ameland-audiotours-logo.webp" alt="" className="h-full w-full object-cover" />
      </span>
      <span className="leading-none text-[#082f3e]">
        <span className={`block font-serif tracking-[.08em] ${compact ? 'text-lg' : 'text-2xl'}`}>AMELAND</span>
        <span className={`mt-1 block tracking-[.24em] ${compact ? 'text-[9px]' : 'text-xs'}`}>AUDIOTOURS</span>
      </span>
    </span>
  )
}

export default function BrandFaqPage({ locale, siteName, nav, title, intro, items, footerText, email, phone }: BrandFaqPageProps) {
  const t = copy[locale]
  const bookingUrl = `https://app.amelandaudiotours.nl/checkout/Kennismaken-hollum?lang=${locale}`

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#102f3a]">
      <header className="sticky top-0 z-50 border-b border-[#dfe3e2] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <Link href={`/${locale}`} aria-label={`${siteName} home`}><BrandLockup /></Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#273b42] lg:flex" aria-label="Hoofdnavigatie">
            <Link href={`/${locale}`} className="py-3 transition hover:text-[#e56550]">{t.home}</Link>
            <Link href={`/${locale}#audiotours`} className="py-3 transition hover:text-[#e56550]">{nav.tours}</Link>
            <Link href={`/${locale}/faq`} aria-current="page" className="border-b-2 border-[#e56550] py-3">{nav.faq}</Link>
            <Link href={`/${locale}#over-ameland`} className="py-3 transition hover:text-[#e56550]">{t.ameland}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />
            <a href={bookingUrl} className="hidden min-h-11 items-center gap-2 rounded-md bg-[#003b4d] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#002d3b] sm:inline-flex">
              <CalendarDays className="h-4 w-4" /> {nav.orderNow}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#073746] text-white">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_80%_20%,#efaa87_0,transparent_34%),linear-gradient(125deg,transparent_45%,#0d5668_100%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#ffc7ba]">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[.98] tracking-[-.025em]">{title}</h1>
            <div className="mt-5 h-[3px] w-14 bg-[#ef6c57]" />
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88">{intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-8 flex flex-col justify-between gap-2 border-b border-[#deddd9] pb-6 sm:flex-row sm:items-end">
            <h2 className="font-serif text-3xl text-[#082f3e] sm:text-4xl">{t.lead}</h2>
            <p className="text-sm text-[#667278]">{t.hint}</p>
          </div>

          <div className="divide-y divide-[#dfe2df] border-y border-[#dfe2df]">
            {items.map((faq, index) => (
              <details key={faq.question} className="group bg-white/40 open:bg-white">
                <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-6 px-4 py-5 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline gap-4">
                    <span className="hidden font-serif text-sm text-[#d85c49] sm:inline">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-lg font-semibold leading-7 text-[#143642] sm:text-xl">{faq.question}</span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#ccd5d4] text-[#003b4d] transition group-open:rotate-180 group-open:border-[#e96551] group-open:text-[#e96551]">
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </span>
                </summary>
                <div className="px-4 pb-7 sm:pl-[4.75rem] sm:pr-20">
                  <p className="max-w-3xl text-base leading-8 text-[#526168]">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <aside className="mt-14 grid overflow-hidden rounded-xl border border-[#e1e4e3] bg-white shadow-[0_18px_50px_rgba(4,48,62,.09)] md:grid-cols-[1fr_auto]">
            <div className="px-7 py-8 sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d85c49]">{t.helpEyebrow}</p>
              <h2 className="mt-2 font-serif text-3xl text-[#082f3e]">{t.helpTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#526168]">{t.helpText}</p>
            </div>
            <div className="flex flex-col justify-center gap-3 bg-[#f1eee9] p-7 sm:min-w-[280px]">
              <a href={`mailto:${email}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#003b4d] px-5 font-bold text-white transition hover:bg-[#002d3b]"><Mail className="h-5 w-5" />{t.contact}</a>
              <a href={bookingUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#cbd3d1] bg-white px-5 font-bold text-[#003b4d] transition hover:border-[#e96551]"><Headphones className="h-5 w-5" />{t.tour}</a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#deddd9] bg-[#f1eee9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><BrandLockup compact /><p className="mt-5 max-w-md text-sm leading-6 text-[#596167]">{footerText}</p></div>
          <div><h3 className="font-serif text-lg">{nav.tours}</h3><div className="mt-3 space-y-2 text-sm text-[#596167]"><Link className="block" href={`/${locale}#audiotours`}>{t.tour}</Link><Link className="block" href={`/${locale}/faq`}>{nav.faq}</Link></div></div>
          <div><h3 className="font-serif text-lg">{t.contactTitle}</h3><div className="mt-3 space-y-2 text-sm text-[#596167]"><p>{email}</p>{phone ? <p>{phone}</p> : null}<p className="inline-flex items-center gap-2"><Route className="h-4 w-4" />Ameland</p></div></div>
        </div>
        <div className="bg-[#003b4d] px-6 py-4 text-center text-xs text-white/80">© {new Date().getFullYear()} Ameland Audiotours</div>
      </footer>
    </div>
  )
}
