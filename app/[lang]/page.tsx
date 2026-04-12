import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Headphones, Map, MapPin, Mail, Phone, Waves } from 'lucide-react'
import LanguageSwitcher from '@/components/language-switcher'
import { getTranslation, isValidLocale, locales, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const getAppUrl = (lang: string) => `https://app.wadnverhaal.nl?lang=${lang}`

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
      title: "Wad'n Verhaal",
      description: 'Audiotours op Ameland',
    }
  }

  const t = getTranslation(lang)

  return {
    title: t.meta.title,
    description: t.meta.description,
  }
}

export default async function LocalizedHomepage({ params }: Props) {
  const { lang } = await params

  if (!isValidLocale(lang)) {
    notFound()
  }

  const locale = lang as Locale
  const t = getTranslation(locale)

  return (
    <div className="min-h-screen bg-transparent text-[#143c43]">
      <header className="sticky top-0 z-50 border-b border-[#cfe7e5] bg-[#f7ffff]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 rounded-full border border-[#cfe7e5] bg-white/95 px-3 py-2 shadow-[0_10px_30px_rgba(19,74,82,0.08)] transition hover:bg-white"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d5ebe9] bg-white">
              <Image
                src="/images/logo-round.png"
                alt="Wad'n Verhaal logo"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <span className="text-[1.35rem] font-black tracking-tight text-[#12505a] sm:text-[1.6rem]">
              {t.site.name}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm text-[#28545b] md:flex">
              <a href="#tours" className="transition hover:opacity-70">
                {t.nav.tours}
              </a>
              <a href="#beleef" className="transition hover:opacity-70">
                {t.nav.howItWorks}
              </a>
              <Link href={`/${locale}/faq`} className="transition hover:opacity-70">
                {t.nav.faq}
              </Link>
              <a
                href={getAppUrl(locale)}
                className="rounded-full bg-[#12505a] px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                {t.nav.orderNow}
              </a>
            </nav>

            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 pt-8 md:pt-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#cfe7e5] bg-white/95 px-4 py-2 shadow-sm">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d5ebe9] bg-white">
                  <Image
                    src="/images/logo-round.png"
                    alt="Wad'n Verhaal logo"
                    fill
                    className="object-cover"
                    sizes="40px"
                    priority
                  />
                </div>
                <span className="text-sm font-semibold tracking-[0.08em] text-[#12505a]">
                  Wad&apos;n Verhaal
                </span>
              </div>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-[#103f47] sm:text-6xl md:text-[5.2rem]">
                {t.home.heroTitle}
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-9 text-[#456b72]">
                {t.home.heroText}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#tours"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#12505a] px-7 py-4 text-base font-medium text-white shadow-[0_14px_35px_rgba(18,80,90,0.18)] transition hover:opacity-90"
                >
                  {t.home.viewTours}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={getAppUrl(locale)}
                  className="rounded-2xl border border-[#c9e5e2] bg-white/95 px-7 py-4 text-base font-medium text-[#12505a] transition hover:bg-white"
                >
                  {t.home.orderNow}
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.6rem] border border-[#d7ecea] bg-white/90 p-5 shadow-[0_12px_30px_rgba(18,75,84,0.07)]">
                  <Headphones className="h-6 w-6 text-[#1d8fa0]" />
                  <p className="mt-3 text-sm font-semibold text-[#143c43]">Luister onderweg</p>
                  <p className="mt-1 text-sm leading-6 text-[#5a7a7f]">Verhalen die passen bij de plek waar je bent.</p>
                </div>

                <div className="rounded-[1.6rem] border border-[#d7ecea] bg-white/90 p-5 shadow-[0_12px_30px_rgba(18,75,84,0.07)]">
                  <Map className="h-6 w-6 text-[#1d8fa0]" />
                  <p className="mt-3 text-sm font-semibold text-[#143c43]">Route & ontdekking</p>
                  <p className="mt-1 text-sm leading-6 text-[#5a7a7f]">Wandel of fiets langs bijzondere plekken op Ameland.</p>
                </div>

                <div className="rounded-[1.6rem] border border-[#d7ecea] bg-white/90 p-5 shadow-[0_12px_30px_rgba(18,75,84,0.07)]">
                  <Waves className="h-6 w-6 text-[#ef7f63]" />
                  <p className="mt-3 text-sm font-semibold text-[#143c43]">Eilandgevoel</p>
                  <p className="mt-1 text-sm leading-6 text-[#5a7a7f]">Frisse lucht, zee, duinen en verhalen met karakter.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#cfe7e5] bg-[#e8f7f6] shadow-[0_30px_90px_rgba(18,75,84,0.12)]">
                <div className="relative aspect-[4/5] md:aspect-[5/6]">
                  <img
                    src="/images/hero-ameland.jpg"
                    alt={t.home.heroTitle}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,70,80,0.10)_0%,rgba(255,255,255,0.04)_40%,rgba(246,255,254,0.92)_100%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-white/60 bg-white/85 p-4 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5c8b90]">
                          Ontdek
                        </p>
                        <p className="mt-2 text-lg font-semibold text-[#143c43]">
                          Luisteren, kijken en beleven
                        </p>
                      </div>

                      <div className="rounded-[1.4rem] border border-white/60 bg-[#12505a] p-4 text-white shadow-lg">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ece7]">
                          Ameland
                        </p>
                        <p className="mt-2 text-lg font-semibold">
                          Audiotours met sfeer, route en verhaal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beleef" className="px-6 pb-8 pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4d8b8f]">
                  Beleven
                </p>
                <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#103f47]">
                  Meer dan een route
                </h2>
                <p className="mt-5 max-w-xl text-xl leading-8 text-[#456b72]">
                  Met Wad&apos;n Verhaal ontdek je Ameland niet alleen met je ogen, maar ook met je oren.
                  Je volgt een route, hoort verhalen en beleeft het eiland op een rustigere en rijkere manier.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.8rem] border border-[#d6ece9] bg-white/90 p-6 shadow-[0_14px_34px_rgba(18,75,84,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4d8b8f]">1</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#143c43]">Kies je tour</h3>
                  <p className="mt-3 leading-7 text-[#5a7a7f]">
                    Kies een route die past bij jouw dag: fietsen, wandelen, dorp, natuur of strand.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-[#d6ece9] bg-white/90 p-6 shadow-[0_14px_34px_rgba(18,75,84,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4d8b8f]">2</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#143c43]">Open de app</h3>
                  <p className="mt-3 leading-7 text-[#5a7a7f]">
                    Je start eenvoudig op je telefoon en volgt de tour terwijl je onderweg bent.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-[#d6ece9] bg-white/90 p-6 shadow-[0_14px_34px_rgba(18,75,84,0.08)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4d8b8f]">3</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#143c43]">Luister op locatie</h3>
                  <p className="mt-3 leading-7 text-[#5a7a7f]">
                    Op bijzondere plekken hoor je verhalen, weetjes en eilandbeleving die passen bij de omgeving.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-[#ffd3c7] bg-[linear-gradient(180deg,#fff7f4_0%,#fffdfb_100%)] p-6 shadow-[0_14px_34px_rgba(239,127,99,0.10)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d56b51]">Extra fijn</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#143c43]">Rustig en flexibel</h3>
                  <p className="mt-3 leading-7 text-[#6e797b]">
                    Je kunt audio pauzeren en later verder luisteren wanneer het veilig en rustig uitkomt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="px-6 pb-10 pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4d8b8f]">
                  {t.home.toursEyebrow}
                </p>
                <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#103f47]">
                  {t.home.toursTitle}
                </h2>
                <p className="mt-5 text-xl leading-8 text-[#456b72]">{t.home.toursText}</p>
              </div>

              <a
                href={getAppUrl(locale)}
                className="inline-flex rounded-2xl border border-[#c9e5e2] bg-white px-5 py-3 font-medium text-[#12505a] transition hover:bg-[#f7ffff]"
              >
                {t.home.orderNow}
              </a>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.tours.map((tour) => (
                <div
                  key={tour.title}
                  className={`relative overflow-hidden rounded-[2rem] border bg-white/94 shadow-[0_20px_50px_rgba(18,75,84,0.10)] ${
                    tour.featured
                      ? 'border-[#ffb49f] ring-1 ring-[#ffb49f]/70'
                      : 'border-[#d8ecea]'
                  } ${tour.available ? '' : 'opacity-75'}`}
                >
                  {!tour.available && (
                    <div className="absolute left-5 top-5 z-20 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6c7c80] shadow-sm">
                      {tour.cta}
                    </div>
                  )}

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className={`h-full w-full object-cover ${tour.available ? '' : 'grayscale-[25%]'}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,49,57,0.02)_0%,rgba(10,49,57,0.05)_50%,rgba(10,49,57,0.42)_100%)]" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          tour.featured ? 'bg-[#ef7f63] text-white' : 'bg-white/90 text-[#365f65]'
                        }`}
                      >
                        {tour.badge}
                      </span>
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#365f65]">
                        {tour.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[2rem] font-semibold leading-tight tracking-tight text-[#143c43]">
                      {tour.title}
                    </h3>

                    <div className="mt-5 space-y-3">
                      {tour.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-sm text-[#4e7075]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1d9baa]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={tour.available ? getAppUrl(locale) : '#'}
                      className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 font-medium transition ${
                        tour.featured
                          ? 'bg-[#12505a] text-white hover:opacity-90'
                          : 'border border-[#cfe7e5] bg-[#f7ffff] text-[#55777c]'
                      } ${tour.available ? '' : 'pointer-events-none cursor-default'}`}
                    >
                      {tour.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2.2rem] border border-[#cfe7e5] bg-[linear-gradient(135deg,#effcfb_0%,#f7ffff_58%,#fff8f5_100%)] p-8 shadow-[0_20px_60px_rgba(18,75,84,0.08)] md:p-12">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4d8b8f]">
                    Veilig luisteren
                  </p>
                  <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#103f47]">
                    Ontspannen op pad, met aandacht voor je omgeving
                  </h2>
                  <p className="mt-5 max-w-2xl text-xl leading-8 text-[#486c72]">
                    Gebruik bij voorkeur één oortje of open-ear audio, blijf letten op verkeer en omgeving,
                    en pauzeer het fragment gerust om later op een veilig moment verder te luisteren.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-[#d9ecea] bg-white/95 p-6 shadow-sm">
                  <div className="space-y-4 text-[#4a6b70]">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1d9baa]" />
                      <span>Luister met één oortje of open-ear audio.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1d9baa]" />
                      <span>Blijf onderweg alert op verkeer en andere weggebruikers.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1d9baa]" />
                      <span>Pauzeer en rewind wanneer dat beter uitkomt.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.2rem] bg-[#12505a] shadow-[0_28px_70px_rgba(18,75,84,0.24)]">
              <img
                src="/images/tour-duinen.jpg"
                alt={t.home.ctaTitle}
                className="absolute inset-0 h-full w-full object-cover opacity-18"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,80,90,0.96)_0%,rgba(18,80,90,0.88)_52%,rgba(18,80,90,0.76)_100%)]" />

              <div className="relative z-10 grid gap-8 px-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-12">
                <div>
                  <h2 className="font-serif text-5xl leading-tight tracking-tight text-white">
                    {t.home.ctaTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d7f0ee]">
                    {t.home.ctaText}
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a
                    href={getAppUrl(locale)}
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-medium text-[#12505a] transition hover:bg-[#f4fffe]"
                  >
                    {t.home.goToApp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0f4650] bg-[#103f47]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#2a6670] bg-white shadow-sm">
                <Image
                  src="/images/logo-round.png"
                  alt="Wad'n Verhaal logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>

              <h2 className="text-2xl font-black tracking-tight text-white">{t.site.name}</h2>
            </div>

            <p className="mt-4 max-w-md text-lg leading-8 text-[#c7e4e2]">
              {t.footer.description}
            </p>

            <div className="mt-6 space-y-3 text-[#d7ecea]">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>info@wadnverhaal.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>06 13 67 83 10</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>{t.footer.location}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#2a6670] bg-[#14535d] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9dd5cf]">
              {t.footer.quickStart}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              {t.footer.chooseAndOrder}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#d2ece9]">
              {t.footer.quickText}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={getAppUrl(locale)}
                className="inline-flex rounded-2xl bg-white px-5 py-3 font-medium text-[#12505a] transition hover:bg-[#f4fffe]"
              >
                {t.footer.openApp}
              </a>
              <Link
                href={`/${locale}/faq`}
                className="inline-flex rounded-2xl border border-[#3b7881] bg-transparent px-5 py-3 font-medium text-white transition hover:bg-[#1a5d67]"
              >
                {t.footer.viewFaq}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}