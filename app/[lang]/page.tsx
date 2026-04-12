import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin, Mail, Phone } from 'lucide-react'
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
    <div className="min-h-screen bg-transparent text-[#163c43]">
      <header className="sticky top-0 z-50 border-b border-[#cfe7e5] bg-[#f6fffe]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 rounded-full border border-[#cfe7e5] bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(18,75,84,0.08)] transition hover:bg-white"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#cde6e4] bg-white ring-2 ring-white">
              <Image
                src="/images/logo-round.png"
                alt="Wad'n Verhaal logo"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-[1.45rem] font-black tracking-tight text-[#12505a] sm:text-[1.7rem]">
                {t.site.name}
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm text-[#24535a] md:flex">
              <a href="#tours" className="transition hover:opacity-70">
                {t.nav.tours}
              </a>
              <a href={`#${t.home.howItWorksId}`} className="transition hover:opacity-70">
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
        <section className="px-6 pb-8 pt-10 md:pb-12 md:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#cfe7e5] bg-[#e9f8f7] shadow-[0_30px_90px_rgba(18,75,84,0.12)]">
              <div className="relative min-h-[980px] md:min-h-[1080px]">
                <img
                  src="/images/hero-ameland.jpg"
                  alt={t.home.heroTitle}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,255,254,0.96)_0%,rgba(246,255,254,0.86)_34%,rgba(246,255,254,0.34)_62%,rgba(246,255,254,0.12)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,255,254,0.08)_0%,rgba(246,255,254,0.02)_36%,rgba(246,255,254,0.94)_78%,rgba(246,255,254,1)_100%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14">
                  <div className="max-w-2xl pt-2">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#cfe7e5] bg-white/92 px-4 py-2 shadow-sm">
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
                      <span className="text-sm font-semibold tracking-[0.08em] text-[#12505a]">
                        Wad&apos;n Verhaal
                      </span>
                    </div>

                    <h1 className="max-w-3xl font-serif text-5xl leading-[0.97] tracking-tight text-[#103f47] sm:text-6xl md:text-[5.8rem]">
                      {t.home.heroTitle}
                    </h1>

                    <p className="mt-8 max-w-xl text-xl leading-9 text-[#3d6a71]">
                      {t.home.heroText}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="#tours"
                        className="rounded-2xl bg-[#12505a] px-7 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(18,75,84,0.18)] transition hover:opacity-90"
                      >
                        {t.home.viewTours}
                      </a>
                      <a
                        href={getAppUrl(locale)}
                        className="rounded-2xl border border-[#bfe1de] bg-white/95 px-7 py-4 text-base font-medium text-[#12505a] transition hover:bg-white"
                      >
                        {t.home.orderNow}
                      </a>
                    </div>
                  </div>

                  <div id="tours" className="mt-14 grid gap-6 lg:grid-cols-3">
                    {t.tours.map((tour) => (
                      <div
                        key={tour.title}
                        className={`relative overflow-hidden rounded-[2rem] border bg-white/92 shadow-[0_18px_45px_rgba(18,75,84,0.10)] backdrop-blur ${
                          tour.featured
                            ? 'border-[#ffb49f] ring-1 ring-[#ffb49f]/60'
                            : 'border-[#d8ecea]'
                        } ${tour.available ? '' : 'opacity-70'}`}
                      >
                        {!tour.available && (
                          <>
                            <div className="absolute inset-0 z-20 bg-white/24 backdrop-[blur(1px)]" />
                            <div className="absolute left-4 right-4 top-6 z-30 flex justify-center">
                              <div className="rounded-full border border-[#d9eae7] bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#50757a] shadow-sm">
                                {tour.cta}
                              </div>
                            </div>
                          </>
                        )}

                        <div className="relative z-10 p-4 pb-0">
                          <div className="overflow-hidden rounded-[1.35rem]">
                            <img
                              src={tour.image}
                              alt={tour.title}
                              className={`h-56 w-full object-cover ${
                                tour.available ? '' : 'grayscale-[25%]'
                              }`}
                            />
                          </div>
                        </div>

                        <div className="relative z-10 p-6">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                tour.featured
                                  ? 'bg-[#ef7f63] text-white'
                                  : 'bg-[#e8f6f4] text-[#497178]'
                              }`}
                            >
                              {tour.badge}
                            </span>
                            <span className="text-sm text-[#5b7f84]">{tour.duration}</span>
                          </div>

                          <h3 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tight text-[#163c43]">
                            {tour.title}
                          </h3>

                          <div className="mt-5 space-y-3">
                            {tour.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-3 text-sm text-[#456a70]"
                              >
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5eb6ad]" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href={tour.available ? getAppUrl(locale) : '#'}
                            className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 font-medium transition ${
                              tour.featured
                                ? 'bg-[#12505a] text-white hover:opacity-90'
                                : 'border border-[#cfe7e5] bg-[#f7fefe] text-[#55787d]'
                            } ${tour.available ? '' : 'pointer-events-none cursor-default'}`}
                          >
                            {tour.cta}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-8 pt-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f8a8e]">
                {t.home.toursEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#103f47]">
                {t.home.toursTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-[#426c73]">
                {t.home.toursText}
              </p>
            </div>
          </div>
        </section>

        <section id={t.home.howItWorksId} className="px-6 pb-20 pt-6">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2.2rem] border border-[#cfe7e5] bg-[#f7fefe] shadow-[0_18px_50px_rgba(18,75,84,0.08)]">
              <div className="grid divide-y divide-[#dcefee] md:grid-cols-3 md:divide-x md:divide-y-0">
                {t.steps.map((step) => (
                  <div key={step.number} className="relative p-8 md:p-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#12505a] text-2xl font-bold text-white shadow-sm">
                        {step.number}
                      </div>
                      <div className="h-px flex-1 bg-[#d5ece9]" />
                    </div>

                    <h3 className="mt-6 text-[2rem] font-semibold leading-tight tracking-tight text-[#163c43]">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[24ch] text-lg leading-8 text-[#466d73]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#12505a] shadow-[0_28px_70px_rgba(18,75,84,0.24)]">
              <img
                src="/images/tour-duinen.jpg"
                alt={t.home.ctaTitle}
                className="absolute inset-0 h-full w-full object-cover opacity-20"
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
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-medium text-[#12505a] transition hover:bg-[#f3fffe]"
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
                className="inline-flex rounded-2xl bg-white px-5 py-3 font-medium text-[#12505a] transition hover:bg-[#f3fffe]"
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