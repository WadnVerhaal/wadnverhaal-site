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
    <div className="min-h-screen bg-[#f7f3ea] text-[#29453f]">
      <header className="sticky top-0 z-50 border-b border-[#ddd5c7] bg-[#f7f3ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href={`/${locale}`} className="flex items-center gap-4 leading-tight">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#d8cfbf] bg-white shadow-sm">
              <Image
                src="/images/logo-round.png"
                alt="Wad'n Verhaal logo"
                fill
                className="object-cover"
                sizes="56px"
                priority
              />
            </div>

            <div>
              <div className="text-[2rem] font-black tracking-tight text-[#26443e]">
                {t.site.name}
              </div>
              <div className="text-sm text-[#6f7872]">{t.site.tagline}</div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 text-sm text-[#314b45] md:flex">
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
                className="rounded-full bg-[#26443e] px-5 py-3 font-medium text-white transition hover:opacity-90"
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
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ddd5c7] bg-[#efe7d8] shadow-[0_25px_80px_rgba(70,60,40,0.10)]">
              <div className="relative min-h-[980px] md:min-h-[1080px]">
                <img
                  src="/images/hero-ameland.jpg"
                  alt={t.home.heroTitle}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,234,0.94)_0%,rgba(247,243,234,0.80)_34%,rgba(247,243,234,0.24)_62%,rgba(247,243,234,0.08)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,243,234,0.12)_0%,rgba(247,243,234,0.02)_40%,rgba(247,243,234,0.92)_78%,rgba(247,243,234,1)_100%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14">
                  <div className="max-w-2xl pt-2">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#e9dfbf]/85 px-5 py-2 text-sm font-medium text-[#6a5c37] shadow-sm">
                      {t.home.heroBadge}
                    </div>

                    <div className="mb-8 flex items-center gap-5">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[#d8cfbf] bg-white shadow-md md:h-24 md:w-24">
                        <Image
                          src="/images/logo-round.png"
                          alt="Wad'n Verhaal logo"
                          fill
                          className="object-cover"
                          sizes="96px"
                          priority
                        />
                      </div>

                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73807a]">
                          Wad&apos;n Verhaal
                        </div>
                        <div className="mt-1 text-base text-[#5e6b66]">
                          Audiotours op Ameland
                        </div>
                      </div>
                    </div>

                    <h1 className="max-w-3xl font-serif text-5xl leading-[0.97] tracking-tight text-[#23413b] sm:text-6xl md:text-[5.8rem]">
                      {t.home.heroTitle}
                    </h1>

                    <p className="mt-8 max-w-xl text-xl leading-9 text-[#5e6b66]">
                      {t.home.heroText}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="#tours"
                        className="rounded-2xl bg-[#26443e] px-7 py-4 text-base font-medium text-white transition hover:opacity-90"
                      >
                        {t.home.viewTours}
                      </a>
                      <a
                        href={getAppUrl(locale)}
                        className="rounded-2xl border border-[#cfc5b6] bg-[#f7f3ea] px-7 py-4 text-base font-medium text-[#26443e] transition hover:bg-white"
                      >
                        {t.home.orderNow}
                      </a>
                    </div>
                  </div>

                  <div id="tours" className="mt-14 grid gap-6 lg:grid-cols-3">
                    {t.tours.map((tour) => (
                      <div
                        key={tour.title}
                        className={`relative overflow-hidden rounded-[2rem] border bg-[#f8f4eb]/95 shadow-lg backdrop-blur ${
                          tour.featured
                            ? 'border-[#d8b091] ring-1 ring-[#d8b091]/50'
                            : 'border-[#dfd7ca]'
                        } ${tour.available ? '' : 'opacity-70'}`}
                      >
                        {!tour.available && (
                          <>
                            <div className="absolute inset-0 z-20 bg-white/18 backdrop-[blur(1px)]" />
                            <div className="absolute left-4 right-4 top-6 z-30 flex justify-center">
                              <div className="rounded-full border border-[#d5c8b8] bg-[#f7f3ea]/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6f6456] shadow-sm">
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
                              className={`h-56 w-full object-cover ${tour.available ? '' : 'grayscale-[25%]'}`}
                            />
                          </div>
                        </div>

                        <div className="relative z-10 p-6">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                tour.featured
                                  ? 'bg-[#b97858] text-white'
                                  : 'bg-[#eae3d5] text-[#67736d]'
                              }`}
                            >
                              {tour.badge}
                            </span>
                            <span className="text-sm text-[#7a857f]">{tour.duration}</span>
                          </div>

                          <h3 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tight text-[#29453f]">
                            {tour.title}
                          </h3>

                          <div className="mt-5 space-y-3">
                            {tour.points.map((point) => (
                              <div key={point} className="flex items-start gap-3 text-sm text-[#4e5b56]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7a9183]" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href={tour.available ? getAppUrl(locale) : '#'}
                            className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3.5 font-medium transition ${
                              tour.featured
                                ? 'bg-[#26443e] text-white hover:opacity-90'
                                : 'border border-[#d8d0c2] bg-[#f4efe5] text-[#7c857f]'
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73807a]">
                {t.home.toursEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#23413b]">
                {t.home.toursTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-[#5d6a65]">
                {t.home.toursText}
              </p>
            </div>
          </div>
        </section>

        <section id={t.home.howItWorksId} className="px-6 pb-20 pt-6">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2.2rem] border border-[#ddd5c7] bg-[#f2ece0] shadow-[0_18px_50px_rgba(70,60,40,0.08)]">
              <div className="grid divide-y divide-[#ddd5c7] md:grid-cols-3 md:divide-x md:divide-y-0">
                {t.steps.map((step) => (
                  <div key={step.number} className="relative p-8 md:p-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#26443e] text-2xl font-bold text-white shadow-sm">
                        {step.number}
                      </div>
                      <div className="h-px flex-1 bg-[#d7cebf]" />
                    </div>

                    <h3 className="mt-6 text-[2rem] font-semibold leading-tight tracking-tight text-[#29453f]">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[24ch] text-lg leading-8 text-[#5f6b66]">
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
            <div className="relative overflow-hidden rounded-[2rem] bg-[#20453f] shadow-[0_25px_70px_rgba(30,50,40,0.22)]">
              <img
                src="/images/tour-duinen.jpg"
                alt={t.home.ctaTitle}
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,69,62,0.96)_0%,rgba(30,69,62,0.88)_52%,rgba(30,69,62,0.74)_100%)]" />

              <div className="relative z-10 grid gap-8 px-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-12">
                <div>
                  <h2 className="font-serif text-5xl leading-tight tracking-tight text-white">
                    {t.home.ctaTitle}
                  </h2>
                  <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d8e4df]">
                    {t.home.ctaText}
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a
                    href={getAppUrl(locale)}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#f7f3ea] px-8 py-4 text-base font-medium text-[#26443e] transition hover:bg-white"
                  >
                    {t.home.goToApp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ddd5c7] bg-[#f8f4eb]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#d8cfbf] bg-white shadow-sm">
                <Image
                  src="/images/logo-round.png"
                  alt="Wad'n Verhaal logo"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              <div>
                <h2 className="text-3xl font-black tracking-tight text-[#24413b]">{t.site.name}</h2>
                <p className="mt-1 text-sm text-[#6f7872]">{t.site.tagline}</p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-lg leading-8 text-[#5e6b66]">
              {t.footer.description}
            </p>
            <div className="mt-6 space-y-3 text-[#4d5a55]">
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

          <div className="rounded-[2rem] border border-[#ddd5c7] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#74807b]">
              {t.footer.quickStart}
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#24413b]">
              {t.footer.chooseAndOrder}
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#5e6b66]">
              {t.footer.quickText}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={getAppUrl(locale)}
                className="inline-flex rounded-2xl bg-[#26443e] px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                {t.footer.openApp}
              </a>
              <Link
                href={`/${locale}/faq`}
                className="inline-flex rounded-2xl border border-[#cfc5b6] bg-[#f8f4eb] px-5 py-3 font-medium text-[#26443e] transition hover:bg-[#f1ebe0]"
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