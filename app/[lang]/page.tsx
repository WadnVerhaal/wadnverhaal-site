import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Compass,
  Headphones,
  Map,
  MapPin,
  Mail,
  Phone,
  Shell,
  Waves,
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

  return (
    <div className="min-h-screen bg-[#f3fbfb] text-[#143b43]">
      <header className="sticky top-0 z-50 border-b border-[#d8ecea] bg-[#f7ffff]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 rounded-full border border-[#d5ebe8] bg-white px-3 py-2 shadow-[0_8px_25px_rgba(18,75,84,0.06)]"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d5ebe8] bg-white">
              <Image
                src="/images/logo-round.png"
                alt="Wad'n Verhaal logo"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </div>
            <span className="text-[1.3rem] font-black tracking-tight text-[#12505a] sm:text-[1.55rem]">
              {t.site.name}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm text-[#27545b] md:flex">
              <a href="#tours" className="transition hover:opacity-70">
                {t.nav.tours}
              </a>
              <a href="#verhalen" className="transition hover:opacity-70">
                Verhalen
              </a>
              <a href="#eiland" className="transition hover:opacity-70">
                Eilandgevoel
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
        <section className="px-6 pb-10 pt-8 md:pb-14 md:pt-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-[#d8ecea] bg-[linear-gradient(180deg,#fbffff_0%,#eef9f8_100%)] p-8 shadow-[0_25px_70px_rgba(18,75,84,0.08)] md:p-10">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#d6ece9] bg-white px-4 py-2 shadow-sm">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[#d6ece9] bg-white">
                    <Image
                      src="/images/logo-round.png"
                      alt="Wad'n Verhaal logo"
                      fill
                      className="object-cover"
                      sizes="36px"
                      priority
                    />
                  </div>
                  <span className="text-sm font-semibold tracking-[0.1em] text-[#12505a]">
                    Wad&apos;n Verhaal
                  </span>
                </div>

                <h1 className="mt-7 font-serif text-5xl leading-[0.95] tracking-tight text-[#0f3f47] sm:text-6xl md:text-[5.3rem]">
                  Ontdek Ameland
                  <br />
                  al luisterend
                </h1>

                <p className="mt-6 max-w-xl text-xl leading-9 text-[#496c73]">
                  Verken het eiland met audiotours vol sfeer, geschiedenis en verhalen die
                  precies passen bij de plek waar je bent.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#tours"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#12505a] px-7 py-4 text-base font-medium text-white shadow-[0_14px_35px_rgba(18,80,90,0.18)] transition hover:opacity-90"
                  >
                    Bekijk tours
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={getAppUrl(locale)}
                    className="rounded-2xl border border-[#cfe7e5] bg-white px-7 py-4 text-base font-medium text-[#12505a] transition hover:bg-[#f7ffff]"
                  >
                    Open de app
                  </a>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-[#d8ecea] bg-white/90 p-5">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-5 w-5 text-[#1d98a5]" />
                    <p className="font-semibold text-[#143b43]">Luister onderweg</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5c7a7f]">
                    Verhalen die je wandeling of fietstocht meer diepte geven.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-[#ffd7cc] bg-[linear-gradient(180deg,#fff8f5_0%,#fffdfa_100%)] p-5">
                  <div className="flex items-center gap-3">
                    <Compass className="h-5 w-5 text-[#ef7f63]" />
                    <p className="font-semibold text-[#143b43]">Eilandbeleving</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#6a777a]">
                    Duinen, dorpen, zee en verhalen in één rustige ervaring.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem] border border-[#d8ecea] shadow-[0_30px_80px_rgba(18,75,84,0.10)] md:min-h-[640px]">
                <img
                  src="/images/hero-ameland.jpg"
                  alt={t.home.heroTitle}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,64,73,0.08)_0%,rgba(12,64,73,0.12)_45%,rgba(12,64,73,0.52)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="max-w-md rounded-[1.8rem] border border-white/50 bg-white/85 p-5 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5c8b90]">
                      Eilandroute
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#143b43]">
                      Hoor het verhaal achter de plek
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[2rem] border border-[#d8ecea] bg-white p-6 shadow-[0_18px_40px_rgba(18,75,84,0.08)]">
                  <Map className="h-6 w-6 text-[#1d98a5]" />
                  <h2 className="mt-4 text-2xl font-semibold text-[#143b43]">Volg de route</h2>
                  <p className="mt-3 leading-7 text-[#56757a]">
                    Elke tour verbindt locatie, verhaal en beleving tot één soepel avontuur op
                    je telefoon.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-[#d8ecea] bg-[#12505a] p-6 text-white shadow-[0_20px_45px_rgba(18,75,84,0.18)]">
                  <Shell className="h-6 w-6 text-[#ffd1c3]" />
                  <h2 className="mt-4 text-2xl font-semibold">Typisch Ameland</h2>
                  <p className="mt-3 leading-7 text-[#d4ece9]">
                    Een stijl die past bij lucht, kust, eilandcultuur en de warme verhalen van
                    onderweg.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-[#d8ecea] bg-[linear-gradient(180deg,#effafa_0%,#ffffff_100%)] p-6 shadow-[0_18px_40px_rgba(18,75,84,0.08)]">
                  <Waves className="h-6 w-6 text-[#ef7f63]" />
                  <h2 className="mt-4 text-2xl font-semibold text-[#143b43]">Zee, dorp, duin</h2>
                  <p className="mt-3 leading-7 text-[#56757a]">
                    Ontworpen alsof je een digitaal eilandmagazine binnenstapt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="verhalen" className="px-6 pb-12 pt-8 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4d8b8f]">
                Verhalen
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#103f47]">
                Een layout die voelt als een eilandreis
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2.2rem] border border-[#d8ecea] bg-white p-7 shadow-[0_18px_45px_rgba(18,75,84,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4d8b8f]">
                  Verhalen
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[#143b43]">Luister en kijk</h3>
                <p className="mt-4 leading-8 text-[#56757a]">
                  Geen droge route, maar een ervaring waarin geluid, plek en sfeer elkaar
                  versterken.
                </p>
              </div>

              <div className="rounded-[2.2rem] border border-[#ffd7cc] bg-[linear-gradient(180deg,#fff8f5_0%,#ffffff_100%)] p-7 shadow-[0_18px_45px_rgba(239,127,99,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d56b51]">
                  Eiland
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-[#143b43]">Sfeer van de kust</h3>
                <p className="mt-4 leading-8 text-[#6a777a]">
                  Kleur, ritme en rust geïnspireerd op lucht, vuurtoren, zee en zand.
                </p>
              </div>

              <div className="rounded-[2.2rem] border border-[#d8ecea] bg-[#143f47] p-7 shadow-[0_18px_45px_rgba(18,75,84,0.16)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9dd5cf]">
                  Beleving
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">Rustig en modern</h3>
                <p className="mt-4 leading-8 text-[#d5ece9]">
                  Meer boutique travel dan standaard landingspagina. Dat past veel beter bij je
                  merk.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="px-6 pb-12 pt-4 md:pb-20">
          <div className="mx-auto max-w-7xl">
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
                className="inline-flex rounded-2xl border border-[#cfe7e5] bg-white px-5 py-3 font-medium text-[#12505a] transition hover:bg-[#f7ffff]"
              >
                {t.home.orderNow}
              </a>
            </div>

            <div className="mt-10 space-y-6">
              {t.tours.map((tour) => (
                <div
                  key={tour.title}
                  className={`overflow-hidden rounded-[2.2rem] border bg-white shadow-[0_20px_50px_rgba(18,75,84,0.09)] ${
                    tour.featured
                      ? 'border-[#ffb49f] ring-1 ring-[#ffb49f]/60'
                      : 'border-[#d8ecea]'
                  }`}
                >
                  <div className="grid lg:grid-cols-[320px_1fr]">
                    <div className="relative h-72 lg:h-full">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className={`h-full w-full object-cover ${tour.available ? '' : 'grayscale-[25%]'}`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,39,45,0.05)_0%,rgba(8,39,45,0.08)_45%,rgba(8,39,45,0.45)_100%)]" />
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
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

                    <div className="flex flex-col justify-between p-7 md:p-8">
                      <div>
                        <h3 className="text-[2.1rem] font-semibold leading-tight tracking-tight text-[#143b43]">
                          {tour.title}
                        </h3>

                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                          {tour.points.map((point) => (
                            <div key={point} className="flex items-start gap-3 text-sm text-[#4e7075]">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1d9baa]" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        <a
                          href={tour.available ? getAppUrl(locale) : '#'}
                          className={`inline-flex rounded-2xl px-5 py-3.5 font-medium transition ${
                            tour.featured
                              ? 'bg-[#12505a] text-white hover:opacity-90'
                              : 'border border-[#cfe7e5] bg-[#f7ffff] text-[#55777c]'
                          } ${tour.available ? '' : 'pointer-events-none cursor-default opacity-70'}`}
                        >
                          {tour.cta}
                        </a>

                        {!tour.available && (
                          <span className="text-sm font-medium text-[#6b7c80]">Binnenkort beschikbaar</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="eiland" className="px-6 pb-12 pt-4 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d8ecea] shadow-[0_30px_80px_rgba(18,75,84,0.10)]">
              <div className="relative min-h-[620px]">
                <img
                  src="/images/tour-duinen.jpg"
                  alt="Eilandgevoel op Ameland"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,46,54,0.76)_0%,rgba(8,46,54,0.54)_40%,rgba(8,46,54,0.14)_100%)]" />

                <div className="relative z-10 flex min-h-[620px] items-end p-8 md:p-12">
                  <div className="max-w-2xl rounded-[2rem] border border-white/20 bg-white/12 p-8 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bfe6e1]">
                      Eilandgevoel
                    </p>
                    <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-white">
                      Alsof iemand je Ameland persoonlijk laat zien
                    </h2>
                    <p className="mt-5 text-xl leading-8 text-[#d8efec]">
                      Wad&apos;n Verhaal combineert routes met audio, sfeer en context. Zo wordt een
                      wandeling of fietstocht niet alleen mooier, maar ook betekenisvoller.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2.2rem] border border-[#d8ecea] bg-[linear-gradient(135deg,#effcfb_0%,#f7ffff_58%,#fff8f5_100%)] p-8 shadow-[0_20px_60px_rgba(18,75,84,0.08)] md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4d8b8f]">
                  Veilig luisteren
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#103f47]">
                  Ontspannen op pad, met aandacht voor je omgeving
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#486c72]">
                  Gebruik bij voorkeur één oortje of open-ear audio, blijf letten op verkeer en
                  omgeving, en pauzeer het fragment gerust om later op een veilig moment verder te
                  luisteren.
                </p>
              </div>

              <div className="rounded-[2.2rem] border border-[#d8ecea] bg-white p-8 shadow-[0_18px_50px_rgba(18,75,84,0.08)] md:p-10">
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
        </section>
      </main>

      <footer className="border-t border-[#0f4650] bg-[#103f47]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2">
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