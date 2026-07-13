import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock3, Headphones, MapPin, Route, Ticket } from 'lucide-react'
import LanguageSwitcher from '@/components/language-switcher'
import type { Locale } from '@/lib/i18n'

type BrandHomepageProps = {
  locale: Locale
  siteName: string
  nav: { tours: string; howItWorks: string; faq: string; orderNow: string }
  hero: { eyebrow: string; title: string; text: string; primary: string }
  tour: {
    label: string
    title: string
    text: string
    image: string
    duration: string
    distance: string
    stops: string
    price: string
    cta: string
  }
  steps: Array<[string, string, string]>
  footerText: string
  email: string
  phone: string
}

const ASSET_BASE = 'https://app.amelandaudiotours.nl/images'

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative shrink-0 overflow-hidden rounded-full border border-[#0b3443]/20 bg-white ${compact ? 'h-11 w-11' : 'h-14 w-14'}`}>
        <Image src={`${ASSET_BASE}/ameland-audiotours-logo.webp`} alt="" fill sizes={compact ? '44px' : '56px'} className="object-cover" />
      </span>
      <span className="leading-none text-[#082f3e]">
        <span className={`block font-serif tracking-[.08em] ${compact ? 'text-lg' : 'text-2xl'}`}>AMELAND</span>
        <span className={`mt-1 block tracking-[.24em] ${compact ? 'text-[9px]' : 'text-xs'}`}>AUDIOTOURS</span>
      </span>
    </span>
  )
}

export default function BrandHomepage({ locale, siteName, nav, hero, tour, steps, footerText, email, phone }: BrandHomepageProps) {
  const bookingUrl = `https://app.amelandaudiotours.nl/checkout/Kennismaken-hollum?lang=${locale}`

  return (
    <div className="min-h-screen bg-[#fbfaf8] text-[#102f3a]">
      <header className="sticky top-0 z-50 border-b border-[#dfe3e2] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <Link href={`/${locale}`} aria-label={`${siteName} home`}><BrandLockup /></Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#273b42] lg:flex" aria-label="Hoofdnavigatie">
            <Link href={`/${locale}`} className="border-b-2 border-[#e56550] py-3">Home</Link>
            <a href="#audiotours" className="py-3 transition hover:text-[#e56550]">{nav.tours}</a>
            <Link href={`/${locale}/faq`} className="py-3 transition hover:text-[#e56550]">{nav.faq}</Link>
            <a href="#over-ameland" className="py-3 transition hover:text-[#e56550]">Ameland</a>
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
        <section className="relative min-h-[520px] overflow-hidden bg-[#032f3e] text-white">
          <Image src={`${ASSET_BASE}/tour-duinen-v2.webp`} alt="Vuurtoren en duinen op Ameland" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,37,50,.96)_0%,rgba(2,37,50,.78)_42%,rgba(2,37,50,.12)_82%)]" />
          <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 sm:px-9">
            <div className="max-w-[620px]">
              <p className="text-xs font-bold uppercase tracking-[.24em] text-[#ffd0c6]">{hero.eyebrow}</p>
              <h1 className="mt-5 font-serif text-[clamp(3.5rem,7vw,6.1rem)] leading-[.91] tracking-[-.035em]">{hero.title}</h1>
              <div className="mt-5 h-[3px] w-14 bg-[#ef6c57]" />
              <p className="mt-5 max-w-md text-lg leading-7 text-white/90">{hero.text}</p>
              <a href="#audiotours" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#e96551] px-6 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#f17460]">
                <Headphones className="h-5 w-5" /> {hero.primary}
              </a>
            </div>
          </div>
        </section>

        <section id="audiotours" className="relative z-10 mx-auto -mt-9 max-w-7xl px-5 sm:px-8">
          <article className="grid overflow-hidden rounded-xl border border-[#e1e4e3] bg-white p-2 shadow-[0_18px_55px_rgba(4,48,62,.13)] lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative min-h-[290px] overflow-hidden rounded-lg">
              <Image src={tour.image} alt={tour.title} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d85c49]">{tour.label}</p>
              <h2 className="mt-2 font-serif text-4xl leading-tight text-[#082f3e] sm:text-5xl">{tour.title}</h2>
              <p className="mt-3 max-w-xl leading-7 text-[#405159]">{tour.text}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-[#233943]">
                <span className="inline-flex items-center gap-2"><Clock3 className="h-5 w-5" />{tour.duration}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5" />{tour.distance}</span>
                <span className="inline-flex items-center gap-2"><Headphones className="h-5 w-5" />{tour.stops}</span>
                <span className="inline-flex items-center gap-2"><Ticket className="h-5 w-5" />{tour.price}</span>
              </div>
              <a href={bookingUrl} className="mt-5 inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-md bg-[#003b4d] px-6 font-bold text-white transition hover:bg-[#002d3b]">
                <CalendarDays className="h-5 w-5" /> {tour.cta} — {tour.price}
              </a>
            </div>
          </article>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-6 py-10 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article key={number} className="flex gap-4 border-b border-[#dde2e0] py-5 md:border-b-0 md:border-r md:px-5 last:border-0">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#003b4d] font-serif text-xl text-white">{number}</span>
              <div><h3 className="font-serif text-2xl text-[#102f3a]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#536067]">{text}</p></div>
            </article>
          ))}
        </section>

        <section id="over-ameland" className="border-t border-[#deddd9] bg-[#f1eee9]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
            <div><BrandLockup compact /><p className="mt-5 max-w-md text-sm leading-6 text-[#596167]">{footerText}</p></div>
            <div><h3 className="font-serif text-lg">{nav.tours}</h3><div className="mt-3 space-y-2 text-sm text-[#596167]"><a className="block" href="#audiotours">{tour.title}</a><Link className="block" href={`/${locale}/faq`}>{nav.faq}</Link></div></div>
            <div><h3 className="font-serif text-lg">Contact</h3><div className="mt-3 space-y-2 text-sm text-[#596167]"><p>{email}</p><p>{phone}</p><p className="inline-flex items-center gap-2"><Route className="h-4 w-4" />Ameland</p></div></div>
          </div>
          <div className="bg-[#003b4d] px-6 py-4 text-center text-xs text-white/80">© {new Date().getFullYear()} Ameland Audiotours</div>
        </section>
      </main>
    </div>
  )
}
