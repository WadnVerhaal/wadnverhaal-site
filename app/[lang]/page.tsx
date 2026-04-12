import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Mail,
  Phone,
  Route,
  ShieldCheck,
} from 'lucide-react'
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
  const availableTours = t.tours.filter((tour) => tour.available)
  const upcomingTours = t.tours.filter((tour) => !tour.available)
  const orderedTours = [...availableTours, ...upcomingTours]

  return (
    <div className="min-h-screen bg-[#f4fbfb] text-[#143a43]">
      <header className="sticky top-0 z-50 border-b border-[#d8e9ea] bg-[#f7ffff]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d9e9e9] bg-white shadow-sm">
              <Image
                src="/images/logo-round.png"
                alt="Wad'n Verhaal logo"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <span className="text-[1.35rem] font-black tracking-tight text-[#0f4b58] sm:text-[1.55rem]">
              {t.site.name}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#2b5a64] md:flex">
              <a href="#tours" className="transition hover:opacity-70">
                {t.nav.tours}
              </a>
              <a href="#hoe-werkt-het" className="transition hover:opacity-70">
                {t.nav.howItWorks}
              </a>
              <Link href={`/${locale}/faq`} className="transition hover:opacity-70">
                {t.nav.faq}
              </Link>
            </nav>

            <a
              href={getAppUrl(locale)}
              className="hidden rounded-full bg-[#0f4b58] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,75,88,0.18)] transition hover:opacity-90 md:inline-flex"
            >
              {t.nav.orderNow}
            </a>

            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 pb-16 pt-8 md:pb-20 md:pt-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.94] tracking-tight text-[#0d3d48] sm:text-6xl md:text-[5.6rem]">
                Ontdek Ameland op een manier die je bijblijft
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-[#4c6f75]">
                {t.home.heroText}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={getAppUrl(locale)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#0f4b58] px-7 py-4 text-base font-semibold text-white shadow-[0_16px_38px_rgba(15,75,88,0.20)] transition hover:opacity-90"
                >
                  Start direct
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#tours"
                  className="inline-flex rounded-2xl border border-[#cfe3e5] bg-white px-7 py-4 text-base font-semibold text-[#0f4b58] transition hover:bg-[#f8ffff]"
                >
                  Bekijk tours
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-[#55757a]">
                <div className="inline-flex items-center gap-2">
                  <Route className="h-4 w-4 text-[#12879a]" />
                  Route + audio in één
                </div>
                <div className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#12879a]" />
                  Meteen te starten
                </div>
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#ef7f63]" />
                  Eenvoudig en duidelijk
                </div>
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d9ebec] bg-white shadow-[0_30px_80px_rgba(15,75,88,0.12)]">
                <div className="relative h-[560px]">
                  <img
                    src="/images/hero-ameland.jpg"
                    alt={t.home.heroTitle}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,48,56,0.04)_0%,rgba(8,48,56,0.14)_46%,rgba(8,48,56,0.72)_100%)]" />

                  <div className="absolute right-5 top-5 rounded-full bg-[#0f4b58] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
                    Ameland
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="rounded-[1.8rem] border border-white/20 bg-white/14 p-5 backdrop-blur-md">
                      <div className="flex flex-wrap items-center gap-3 text-white/95">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-sm font-medium">
                          <Clock3 className="h-4 w-4" />
                          Luisteren onderweg
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-sm font-medium">
                          <MapPin className="h-4 w-4" />
                          Op locatie beleven
                        </div>
                      </div>

                      <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                        Verhaal, route en eilandgevoel in één ervaring
                      </h2>

                      <p className="mt-3 max-w-xl text-base leading-7 text-[#e2f1f2]">
                        Perfect voor bezoekers die Ameland niet alleen willen zien, maar ook echt willen beleven.
                      </p>

                      <a
                        href={getAppUrl(locale)}
                        className="mt-5 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-[#0f4b58] transition hover:bg-[#f3ffff]"
                      >
                        Kies jouw tour
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.4rem] border border-[#dbecef] bg-white shadow-[0_24px_70px_rgba(15,75,88,0.08)]">
              <div className="border-b border-[#e7f1f2] px-6 py-6 md:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5a8d93]">
                      {t.home.toursEyebrow}
                    </p>
                    <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-[#0d3d48] md:text-5xl">
                      Kies de tour die bij jouw dag past
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-[#5b757b]">{t.home.toursText}</p>
                  </div>

                  <a
                    href={getAppUrl(locale)}
                    className="inline-flex rounded-2xl bg-[#0f4b58] px-5 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    Nu bestellen
                  </a>
                </div>
              </div>

              <div className="divide-y divide-[#e7f1f2]">
                {orderedTours.map((tour) => (
                  <div
                    key={tour.title}
                    className={`grid gap-6 px-6 py-6 md:px-8 lg:grid-cols-[260px_1fr_auto] lg:items-center ${
                      tour.available ? '' : 'bg-[#fafdfd]'
                    }`}
                  >
                    <div className="relative h-52 overflow-hidden rounded-[1.5rem]">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className={`h-full w-full object-cover ${
                          tour.available ? '' : 'grayscale brightness-90 saturate-50'
                        }`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,48,56,0.02)_0%,rgba(8,48,56,0.08)_46%,rgba(8,48,56,0.35)_100%)]" />

                      {tour.available ? (
                        <div className="absolute left-4 top-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              tour.featured ? 'bg-[#ef7f63] text-white' : 'bg-white/92 text-[#355f65]'
                            }`}
                          >
                            {tour.badge}
                          </span>
                        </div>
                      ) : (
                        <div className="absolute left-4 top-4">
                          <span className="rounded-full bg-[#0f4b58]/92 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                            Binnenkort
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3
                          className={`text-3xl font-semibold tracking-tight ${
                            tour.available ? 'text-[#143a43]' : 'text-[#6c7f83]'
                          }`}
                        >
                          {tour.title}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            tour.available
                              ? 'bg-[#eef8f8] text-[#4c7177]'
                              : 'bg-[#f0f5f5] text-[#7d8e92]'
                          }`}
                        >
                          {tour.duration}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {tour.points.map((point) => (
                          <div
                            key={point}
                            className={`flex items-start gap-3 text-sm ${
                              tour.available ? 'text-[#526f75]' : 'text-[#7c8c90]'
                            }`}
                          >
                            <Check
                              className={`mt-0.5 h-4 w-4 shrink-0 ${
                                tour.available ? 'text-[#1694a3]' : 'text-[#a8b7bb]'
                              }`}
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center lg:justify-end">
                      <a
                        href={tour.available ? getAppUrl(locale) : '#'}
                        className={`inline-flex min-w-[180px] items-center justify-center rounded-2xl px-5 py-3.5 font-semibold transition ${
                          tour.available
                            ? 'bg-[#0f4b58] text-white hover:opacity-90'
                            : 'pointer-events-none cursor-default border border-[#d7e7e8] bg-[#f7fbfb] text-[#7b8c90]'
                        }`}
                      >
                        {tour.available ? tour.cta : 'Binnenkort'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="px-6 pb-12 pt-4">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.4rem] border border-[#dbecef] bg-white shadow-[0_24px_70px_rgba(15,75,88,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="border-b border-[#e7f1f2] px-6 py-8 lg:border-b-0 lg:border-r md:px-8 md:py-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5a8d93]">
                    {t.nav.howItWorks}
                  </p>
                  <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#0d3d48] md:text-5xl">
                    Snel geregeld. Makkelijk te gebruiken.
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-[#5b757b]">
                    Van kiezen tot luisteren: alles is erop gericht om bezoekers snel en zonder gedoe op pad te laten gaan.
                  </p>

                  <a
                    href={getAppUrl(locale)}
                    className="mt-8 inline-flex rounded-2xl bg-[#ef7f63] px-6 py-3.5 font-semibold text-white shadow-[0_14px_35px_rgba(239,127,99,0.18)] transition hover:opacity-90"
                  >
                    Start jouw audiotour
                  </a>
                </div>

                <div className="grid gap-0 md:grid-cols-3">
                  {t.steps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`px-6 py-8 md:px-8 md:py-10 ${
                        index < t.steps.length - 1 ? 'border-b border-[#e7f1f2] md:border-b-0 md:border-r' : ''
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f4b58] text-lg font-bold text-white">
                        {step.number}
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#143a43]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#5b757b]">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-6">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f4b58] shadow-[0_30px_80px_rgba(15,75,88,0.20)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%),linear-gradient(135deg,#0f4b58_0%,#0d3f4d_58%,#0a3340_100%)]" />

              <div className="relative z-10 grid gap-8 px-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-12 md:py-14">
                <div>
                  <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
                    Klaar om Ameland op een nieuwe manier te beleven?
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d3ebea]">
                    Kies je tour, open de app en beleef Ameland met rust, richting en verhaal.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                  <div className="space-y-4 text-[#eef9f9]">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd0c3]" />
                      <span>Duidelijke start en snelle aankoop</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd0c3]" />
                      <span>Modern design in logo-kleuren</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd0c3]" />
                      <span>Gemaakt als echte verkoopsite</span>
                    </div>
                  </div>

                  <a
                    href={getAppUrl(locale)}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-[#0f4b58] transition hover:bg-[#f3ffff]"
                  >
                    Bestel nu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0d414d] bg-[#0c3944]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#255964] bg-white shadow-sm">
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

            <p className="mt-4 max-w-md text-lg leading-8 text-[#c8e2e2]">{t.footer.description}</p>

            <div className="mt-6 space-y-3 text-[#d7ecec]">
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

          <div className="rounded-[2rem] border border-[#255964] bg-[#114753] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9cd4d1]">
              {t.footer.quickStart}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              {t.footer.chooseAndOrder}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#d2ebea]">{t.footer.quickText}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={getAppUrl(locale)}
                className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-[#0f4b58] transition hover:bg-[#f3ffff]"
              >
                {t.footer.openApp}
              </a>
              <Link
                href={`/${locale}/faq`}
                className="inline-flex rounded-2xl border border-[#3c7480] bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-[#19505b]"
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