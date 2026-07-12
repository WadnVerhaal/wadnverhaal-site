import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import {
  ArrowRight,
  Check,
  Clock3,
  Footprints,
  Headphones,
  Mail,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
} from 'lucide-react'
import LanguageSwitcher from '@/components/language-switcher'
import {
  getTranslation,
  isValidLocale,
  locales,
  type Locale,
} from '@/lib/i18n'
import { getContactSettings } from '@/lib/data/site-content'
import { notFound } from 'next/navigation'

const getAppUrl = (lang: string) => `https://app.amelandaudiotours.nl/tours?lang=${lang}`

function resolveTourImage(value: unknown) {
  if (typeof value !== 'string' || !value.trim()) return '/images/tour-dorp.jpg'
  const filename = value.trim().split(/[?#]/)[0].split('/').pop()
  const localImages = new Set([
    'hero-ameland.jpg',
    'tour-dorp.jpg',
    'tour-duinen.jpg',
    'tour-fietsen.jpg',
  ])
  return filename && localImages.has(filename) ? `/images/${filename}` : '/images/tour-dorp.jpg'
}

type Props = {
  params: Promise<{ lang: string }>
}

type LocalPageCopy = {
  heroEyebrow: string
  heroTitle: string
  heroText: string
  heroPrimary: string
  heroSecondary: string
  benefit1: string
  benefit2: string
  benefit3: string
  availableEyebrow: string
  availableTitle: string
  availableText: string
  duration: string
  distance: string
  stops: string
  priceLabel: string
  price: string
  tourCta: string
  included: string
  defaultPoints: string[]
  howEyebrow: string
  howTitle: string
  howText: string
  steps: Array<[string, string, string]>
  finalTitle: string
  finalText: string
  finalCta: string
  upcomingEyebrow: string
  upcomingTitle: string
  upcomingText: string
  footerText: string
}

type MarketingTour = {
  slug: string
  image_url: string
  featured: boolean
  available: boolean
  sort_order: number
  title: string
  badge: string
  duration_label: string
  cta: string
  points: string[]
}

type MarketingTourTranslationRow = {
  title: string
  badge: string
  duration_label: string
  cta: string
  points: string[] | null
}

type MarketingTourRow = {
  slug: string
  image_url: string | null
  featured: boolean
  available: boolean
  sort_order: number
  tour_marketing_translations: MarketingTourTranslationRow | MarketingTourTranslationRow[]
}

const pageCopy: Record<Locale, LocalPageCopy> = {
  nl: {
    heroEyebrow: 'Zelfgeleide wandelingen op Ameland',
    heroTitle: 'Loop door het landschap. Luister naar wat hier gebeurd is.',
    heroText: 'Ameland Audiotours brengt route en eilandverhalen samen op je telefoon. Je loopt op je eigen tempo en luistert precies op de plek waar het verhaal thuishoort.',
    heroPrimary: 'Bekijk de tour',
    heroSecondary: 'Zo werkt het',
    benefit1: 'Eén volgende stop tegelijk',
    benefit2: 'Audio op de juiste plek',
    benefit3: 'Geen app-installatie nodig',
    availableEyebrow: 'Nu beschikbaar',
    availableTitle: 'Maak kennis met Hollum',
    availableText: 'Een complete wandeling van het oude dorp naar de vuurtoren, verteld in negen verhalen.',
    duration: '90 min',
    distance: '6,5 km',
    stops: '9 stops',
    priceLabel: 'Prijs per tour',
    price: '€ 9,99',
    tourCta: 'Bekijk en bestel',
    included: 'Dit beleef je onderweg',
    defaultPoints: ['Historisch Hollum en zijn commandeurshuizen', 'Molen, museum en maritieme verhalen', 'Een duidelijke wandelroute naar iedere stop'],
    howEyebrow: 'Zo werkt het',
    howTitle: 'Eerst bewust starten. Daarna lopen en luisteren.',
    howText: 'De tour begint niet vanzelf. Je opent je persoonlijke link en kiest zelf wanneer je klaar bent om te vertrekken.',
    steps: [
      ['1', 'Kies en bestel', 'Je ontvangt direct een persoonlijke link naar de tour.'],
      ['2', 'Start de wandeling', 'Druk pas op start wanneer je buiten staat en wilt gaan lopen.'],
      ['3', 'Loop en luister', 'De kaart wijst één volgende stop aan. Bij aankomst start je het verhaal.'],
    ],
    finalTitle: 'Klaar om Hollum anders te beleven?',
    finalText: 'Neem je telefoon en één oortje mee. De rest wijst zich onderweg vanzelf.',
    finalCta: 'Naar Maak kennis met Hollum',
    upcomingEyebrow: 'In voorbereiding',
    upcomingTitle: 'Na Hollum volgen meer dorpen.',
    upcomingText: 'Nieuwe wandelingen voor Nes, Ballum en Buren worden stap voor stap toegevoegd.',
    footerText: 'Lokale audiotours die je rustig door de verhalen van Ameland laten lopen.',
  },
  en: {
    heroEyebrow: 'Self-guided walks on Ameland',
    heroTitle: 'Walk through the landscape. Hear what happened here.',
    heroText: 'Ameland Audiotours brings routes and island stories together on your phone. Walk at your own pace and listen exactly where each story belongs.',
    heroPrimary: 'View the tour',
    heroSecondary: 'How it works',
    benefit1: 'One next stop at a time',
    benefit2: 'Audio in the right place',
    benefit3: 'No app installation',
    availableEyebrow: 'Available now',
    availableTitle: 'Discover Hollum',
    availableText: 'A complete walk from the old village to the lighthouse, told through nine stories.',
    duration: '90 min',
    distance: '6.5 km',
    stops: '9 stops',
    priceLabel: 'Price per tour',
    price: '€9.99',
    tourCta: 'View and book',
    included: 'What you experience',
    defaultPoints: ['Historic Hollum and its commander houses', 'Windmill, museum and maritime stories', 'A clear walking route to every stop'],
    howEyebrow: 'How it works',
    howTitle: 'Start deliberately. Then walk and listen.',
    howText: 'The tour does not start by itself. Open your personal link and decide when you are ready to leave.',
    steps: [
      ['1', 'Choose and book', 'You immediately receive a personal link to the tour.'],
      ['2', 'Start the walk', 'Press start only when you are outside and ready to walk.'],
      ['3', 'Walk and listen', 'The map shows one next stop. Start the story when you arrive.'],
    ],
    finalTitle: 'Ready to experience Hollum differently?',
    finalText: 'Bring your phone and one earbud. The tour guides you from there.',
    finalCta: 'Go to Discover Hollum',
    upcomingEyebrow: 'In development',
    upcomingTitle: 'More villages will follow Hollum.',
    upcomingText: 'New walks for Nes, Ballum and Buren will be added step by step.',
    footerText: 'Local audio tours that let you walk calmly through the stories of Ameland.',
  },
  de: {
    heroEyebrow: 'Selbstgeführte Wanderungen auf Ameland',
    heroTitle: 'Geh durch die Landschaft. Höre, was hier geschehen ist.',
    heroText: 'Ameland Audiotours verbindet Routen und Inselgeschichten auf deinem Handy. Du gehst in deinem Tempo und hörst jede Geschichte genau an dem Ort, zu dem sie gehört.',
    heroPrimary: 'Tour ansehen',
    heroSecondary: 'So funktioniert es',
    benefit1: 'Immer nur ein nächster Stopp',
    benefit2: 'Audio am richtigen Ort',
    benefit3: 'Keine App-Installation',
    availableEyebrow: 'Jetzt verfügbar',
    availableTitle: 'Entdecke Hollum',
    availableText: 'Eine vollständige Wanderung vom alten Dorf bis zum Leuchtturm, erzählt in neun Geschichten.',
    duration: '90 Min.',
    distance: '6,5 km',
    stops: '9 Stopps',
    priceLabel: 'Preis pro Tour',
    price: '9,99 €',
    tourCta: 'Ansehen und buchen',
    included: 'Das erlebst du unterwegs',
    defaultPoints: ['Historisches Hollum und seine Kommandeurshäuser', 'Mühle, Museum und maritime Geschichten', 'Ein klarer Fußweg zu jedem Stopp'],
    howEyebrow: 'So funktioniert es',
    howTitle: 'Bewusst starten. Danach gehen und zuhören.',
    howText: 'Die Tour startet nicht von selbst. Öffne deinen persönlichen Link und entscheide, wann du bereit bist loszugehen.',
    steps: [
      ['1', 'Wählen und buchen', 'Du erhältst sofort einen persönlichen Link zur Tour.'],
      ['2', 'Wanderung starten', 'Drücke erst auf Start, wenn du draußen bist und losgehen möchtest.'],
      ['3', 'Gehen und zuhören', 'Die Karte zeigt einen nächsten Stopp. Bei der Ankunft startest du die Geschichte.'],
    ],
    finalTitle: 'Bereit, Hollum anders zu erleben?',
    finalText: 'Nimm dein Handy und einen Ohrhörer mit. Danach führt dich die Tour.',
    finalCta: 'Zu Entdecke Hollum',
    upcomingEyebrow: 'In Vorbereitung',
    upcomingTitle: 'Nach Hollum folgen weitere Dörfer.',
    upcomingText: 'Neue Wanderungen für Nes, Ballum und Buren werden Schritt für Schritt hinzugefügt.',
    footerText: 'Lokale Audiotouren, mit denen du ruhig durch die Geschichten Amelands gehst.',
  },
}

function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceRoleKey) throw new Error('Missing Supabase server environment variables')

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

async function getMarketingTours(locale: Locale): Promise<MarketingTour[]> {
  const supabase = getSupabaseAdminClient()
  const { data, error } = await supabase
    .from('tour_marketing')
    .select(`
      slug,
      image_url,
      featured,
      available,
      sort_order,
      tour_marketing_translations!inner (
        title,
        badge,
        duration_label,
        cta,
        points,
        locale
      )
    `)
    .eq('tour_marketing_translations.locale', locale)
    .order('sort_order', { ascending: true })

  if (error) throw error

  return ((data ?? []) as MarketingTourRow[]).map((row) => {
    const translation = Array.isArray(row.tour_marketing_translations)
      ? row.tour_marketing_translations[0]
      : row.tour_marketing_translations

    return {
      slug: row.slug,
      image_url: resolveTourImage(row.image_url),
      featured: row.featured,
      available: row.available,
      sort_order: row.sort_order,
      title: translation.title,
      badge: translation.badge,
      duration_label: translation.duration_label,
      cta: translation.cta,
      points: Array.isArray(translation.points) ? translation.points : [],
    }
  })
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) return { title: 'Ameland Audiotours', description: 'Audiotours op Ameland' }
  const t = getTranslation(lang)
  return { title: t.meta.title, description: t.meta.description }
}

export default async function LocalizedHomepage({ params }: Props) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const locale = lang as Locale
  const t = getTranslation(locale)
  const copy = pageCopy[locale]
  const marketingTours = await getMarketingTours(locale)
  const contactSettings = await getContactSettings()
  const availableTours = marketingTours.filter((tour) => tour.available)
  const upcomingTours = marketingTours.filter((tour) => !tour.available)
  const primaryTour = availableTours[0]
  const primaryPoints = primaryTour?.points?.length ? primaryTour.points.slice(0, 3) : copy.defaultPoints
  const footerEmail = contactSettings?.email || 'info@amelandaudiotours.nl'
  const footerPhone = contactSettings?.phone || '06 13 67 83 10'

  return (
    <div className="min-h-screen bg-[#f4fbfb] text-[#143a43]">
      <header className="sticky top-0 z-50 border-b border-[#d8e9ea]/90 bg-[#f7ffff]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#d9e9e9] bg-white shadow-sm sm:h-12 sm:w-12">
              <Image src="/images/ameland-audiotours-logo.webp" alt="Ameland Audiotours" fill className="object-cover" sizes="48px" priority />
            </div>
            <span className="hidden text-xl font-black tracking-tight text-[#0f4b58] min-[430px]:inline sm:text-2xl">{t.site.name}</span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-7 text-sm font-semibold text-[#2b5a64] md:flex">
              <a href="#tours" className="transition hover:text-[#0f4b58]">{t.nav.tours}</a>
              <a href="#hoe-werkt-het" className="transition hover:text-[#0f4b58]">{t.nav.howItWorks}</a>
              <Link href={`/${locale}/faq`} className="transition hover:text-[#0f4b58]">{t.nav.faq}</Link>
            </nav>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-14">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(27,150,165,.11),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(239,127,99,.08),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#54888f] sm:text-sm">{copy.heroEyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,6.2rem)] font-black leading-[.91] tracking-[-.06em] text-[#0d3d48]">{copy.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c6f75] sm:text-xl sm:leading-9">{copy.heroText}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#tours" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#0f4b58] px-7 font-black text-white shadow-[0_16px_38px_rgba(15,75,88,.2)] transition hover:-translate-y-0.5 hover:bg-[#0b404b]">
                  {copy.heroPrimary} <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#hoe-werkt-het" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#cfe3e5] bg-white px-7 font-black text-[#0f4b58] transition hover:bg-[#f8ffff]">{copy.heroSecondary}</a>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  [Route, copy.benefit1],
                  [Headphones, copy.benefit2],
                  [ShieldCheck, copy.benefit3],
                ].map(([Icon, label]) => {
                  const BenefitIcon = Icon as typeof Route
                  return (
                    <div key={String(label)} className="flex items-start gap-3 rounded-2xl border border-[#d9e9e9] bg-white/75 p-4">
                      <BenefitIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#12879a]" />
                      <span className="text-sm font-bold leading-6 text-[#44676d]">{String(label)}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-[#d9ebec] bg-white shadow-[0_34px_90px_rgba(15,75,88,.14)]">
              <div className="relative h-[460px] sm:h-[560px]">
                <Image src="/images/hero-ameland.jpg" alt={copy.heroTitle} fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082f38]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/20 bg-[#0b3c46]/88 text-white shadow-xl backdrop-blur">
                    <div className="p-4 text-center"><Clock3 className="mx-auto h-5 w-5 text-[#9de2df]" /><p className="mt-2 text-sm font-black">{copy.duration}</p></div>
                    <div className="border-x border-white/10 p-4 text-center"><Footprints className="mx-auto h-5 w-5 text-[#9de2df]" /><p className="mt-2 text-sm font-black">{copy.distance}</p></div>
                    <div className="p-4 text-center"><MapPin className="mx-auto h-5 w-5 text-[#9de2df]" /><p className="mt-2 text-sm font-black">{copy.stops}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 px-4 pb-14 sm:px-6 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#54888f]">{copy.availableEyebrow}</p>
              <h2 className="mt-3 text-4xl font-black tracking-[-.045em] text-[#0d3d48] sm:text-5xl">{primaryTour?.title || copy.availableTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-[#5b757b]">{copy.availableText}</p>
            </div>

            <article className="overflow-hidden rounded-[2.2rem] border border-[#dbecef] bg-white shadow-[0_24px_70px_rgba(15,75,88,.10)]">
              <div className="grid lg:grid-cols-[.92fr_1.08fr]">
                <div className="relative min-h-[310px] bg-[#dfeeed] sm:min-h-[420px]">
                  <Image src={primaryTour?.image_url || '/images/tour-dorp.jpg'} alt={primaryTour?.title || copy.availableTitle} fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082f38]/55 to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-9">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.18em] text-[#5a8d93]">{copy.included}</p>
                    <div className="mt-5 space-y-4">
                      {primaryPoints.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-base font-bold leading-7 text-[#45656b]">
                          <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#dff1ef] text-[#12879a]"><Check className="h-4 w-4" /></span>
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-9 border-t border-[#e4eeee] pt-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[.16em] text-[#72878b]">{copy.priceLabel}</p>
                        <p className="mt-1 text-4xl font-black tracking-[-.04em] text-[#0d3d48]">{copy.price}</p>
                      </div>
                      <ShieldCheck className="h-8 w-8 text-[#12879a]" />
                    </div>
                    <a href={getAppUrl(locale)} className="mt-5 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-[#ef7f63] px-6 text-base font-black text-white shadow-[0_16px_38px_rgba(239,127,99,.22)] transition hover:-translate-y-0.5 hover:bg-[#f08a70]">
                      {copy.tourCta} <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {upcomingTours.length ? (
              <div className="mt-8 rounded-[2rem] border border-[#dbecef] bg-[#eef7f7] p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[.2em] text-[#54888f]">{copy.upcomingEyebrow}</p>
                <h3 className="mt-3 text-3xl font-black tracking-[-.035em] text-[#0d3d48]">{copy.upcomingTitle}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#5b757b]">{copy.upcomingText}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {upcomingTours.map((tour) => <span key={tour.slug} className="rounded-full border border-[#cfe3e5] bg-white px-4 py-2 text-sm font-black text-[#4f7177]">{tour.title}</span>)}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section id="hoe-werkt-het" className="scroll-mt-24 bg-[#0f4b58] px-4 py-14 text-white sm:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#9de2df]">{copy.howEyebrow}</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl">{copy.howTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d0e9e8]">{copy.howText}</p>

            <div className="mt-9 grid gap-3 lg:grid-cols-3">
              {copy.steps.map(([number, title, text], index) => {
                const Icon = [ShieldCheck, Footprints, Headphones][index]
                return (
                  <article key={number} className="rounded-[1.6rem] border border-white/10 bg-white/[.07] p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-[#0f4b58]">{number}</span>
                      <Icon className="h-6 w-6 text-[#9de2df]" />
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#d0e9e8]">{text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl rounded-[2.2rem] bg-[#fff7ed] p-7 text-center shadow-[0_24px_70px_rgba(15,75,88,.08)] sm:p-12">
            <h2 className="text-4xl font-black tracking-[-.045em] text-[#0d3d48] sm:text-5xl">{copy.finalTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#5b757b]">{copy.finalText}</p>
            <a href={getAppUrl(locale)} className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#0f4b58] px-7 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0b404b]">
              {copy.finalCta} <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0d414d] bg-[#0c3944] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white"><Image src="/images/ameland-audiotours-logo.webp" alt="Ameland Audiotours" fill className="object-cover" sizes="44px" /></div>
              <p className="text-xl font-black">{t.site.name}</p>
            </div>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#c8e2e2]">{copy.footerText}</p>
          </div>
          <div className="space-y-2 text-sm font-bold text-[#d7ecec]">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" />{footerEmail}</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{footerPhone}</p>
            <Link href={`/${locale}/faq`} className="inline-flex pt-2 underline underline-offset-4">{t.nav.faq}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
