import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
import { getTranslation, isValidLocale, locales, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ lang: string }>
}

type PageCopy = {
  eyebrow: string
  title: string
  intro: string
  tourCta: string
  howCta: string
  benefits: string[]
  available: string
  tourTitle: string
  tourIntro: string
  durationLabel: string
  duration: string
  distanceLabel: string
  distance: string
  stopsLabel: string
  stops: string
  included: string
  points: string[]
  priceLabel: string
  price: string
  buy: string
  payment: string
  howEyebrow: string
  howTitle: string
  howIntro: string
  steps: Array<[string, string, string]>
  upcomingEyebrow: string
  upcomingTitle: string
  upcomingText: string
  places: Array<[string, string]>
  finalTitle: string
  finalText: string
  finalCta: string
  footerText: string
}

const copy: Record<Locale, PageCopy> = {
  nl: {
    eyebrow: 'Zelfgeleide audiowandeling op Ameland',
    title: 'Loop door Hollum. Luister naar wat hier gebeurd is.',
    intro: 'Negen verhalen leiden je van het oude dorp naar de vuurtoren. De kaart toont steeds één volgende stop en jij bepaalt wanneer je begint.',
    tourCta: 'Bekijk de tour',
    howCta: 'Zo werkt het',
    benefits: ['Eén volgende stop tegelijk', 'Audio op de juiste plek', 'Geen app-installatie nodig'],
    available: 'Nu beschikbaar',
    tourTitle: 'Maak kennis met Hollum',
    tourIntro: 'Een complete wandeling langs commandeurshuizen, museum, kerk, molen, maritieme verhalen, duinen en de vuurtoren.',
    durationLabel: 'Duur',
    duration: '90 min',
    distanceLabel: 'Afstand',
    distance: '6,5 km',
    stopsLabel: 'Stops',
    stops: '9',
    included: 'Dit beleef je onderweg',
    points: ['Een duidelijke wandelroute naar iedere stop', 'Lokale verhalen die passen bij de plek waar je staat', 'Volledig in je eigen tempo, met 48 uur toegang'],
    priceLabel: 'Prijs per tour',
    price: '€ 9,99',
    buy: 'Bekijk en bestel',
    payment: 'Veilig betalen via Mollie',
    howEyebrow: 'Van bestelling tot verhaal',
    howTitle: 'Eerst bewust starten. Daarna lopen en luisteren.',
    howIntro: 'De tour opent niet meteen in navigatiemodus. Je ziet eerst wat je nodig hebt en drukt zelf op Start de wandeling wanneer je buiten klaarstaat.',
    steps: [
      ['1', 'Kies en bestel', 'Na betaling verschijnt je persoonlijke tourlink direct en ontvang je hem ook per e-mail.'],
      ['2', 'Start de wandeling', 'Pas na jouw startknop vraagt de app om locatie en maakt hij de route naar de eerste stop.'],
      ['3', 'Loop en luister', 'Bij aankomst wordt het verhaal beschikbaar. Daarna wijst de app de volgende stop aan.'],
    ],
    upcomingEyebrow: 'In voorbereiding',
    upcomingTitle: 'Na Hollum volgen meer dorpen.',
    upcomingText: 'Nieuwe wandelingen worden toegevoegd zodra route, verhalen en audio volledig klaar zijn.',
    places: [['Nes', 'Dorpshart en historie'], ['Ballum', 'Cammingha en bestuur'], ['Buren', 'Boerenleven en duinen']],
    finalTitle: 'Klaar om Hollum anders te beleven?',
    finalText: 'Neem je telefoon en bij voorkeur één oortje mee. De wandeling begint pas wanneer jij op start drukt.',
    finalCta: 'Naar Maak kennis met Hollum',
    footerText: 'Lokale audiotours die je rustig door de verhalen van Ameland laten lopen.',
  },
  en: {
    eyebrow: 'Self-guided audio walk on Ameland',
    title: 'Walk through Hollum. Hear what happened here.',
    intro: 'Nine stories lead you from the old village to the lighthouse. The map shows one next stop at a time and you decide when to begin.',
    tourCta: 'View the tour',
    howCta: 'How it works',
    benefits: ['One next stop at a time', 'Audio in the right place', 'No app installation'],
    available: 'Available now',
    tourTitle: 'Discover Hollum',
    tourIntro: 'A complete walk past commander houses, the museum, church, windmill, maritime stories, dunes and the lighthouse.',
    durationLabel: 'Duration',
    duration: '90 min',
    distanceLabel: 'Distance',
    distance: '6.5 km',
    stopsLabel: 'Stops',
    stops: '9',
    included: 'What you experience',
    points: ['A clear walking route to every stop', 'Local stories that belong to the place where you stand', 'Entirely at your own pace, with 48-hour access'],
    priceLabel: 'Price per tour',
    price: '€9.99',
    buy: 'View and book',
    payment: 'Secure payment with Mollie',
    howEyebrow: 'From booking to story',
    howTitle: 'Start deliberately. Then walk and listen.',
    howIntro: 'The tour does not open straight into navigation. First check what you need, then press Start the walk when you are outside and ready.',
    steps: [
      ['1', 'Choose and book', 'Your personal tour link appears immediately after payment and is also sent by email.'],
      ['2', 'Start the walk', 'Only after you press start does the app request location and create the route to the first stop.'],
      ['3', 'Walk and listen', 'The story becomes available when you arrive. The app then shows the next stop.'],
    ],
    upcomingEyebrow: 'In development',
    upcomingTitle: 'More villages will follow Hollum.',
    upcomingText: 'New walks are added only when their route, stories and audio are fully ready.',
    places: [['Nes', 'Village centre and history'], ['Ballum', 'Cammingha and government'], ['Buren', 'Farm life and dunes']],
    finalTitle: 'Ready to experience Hollum differently?',
    finalText: 'Bring your phone and preferably one earbud. The walk only begins when you press start.',
    finalCta: 'Go to Discover Hollum',
    footerText: 'Local audio tours that let you walk calmly through the stories of Ameland.',
  },
  de: {
    eyebrow: 'Selbstgeführte Audiowanderung auf Ameland',
    title: 'Geh durch Hollum. Höre, was hier geschehen ist.',
    intro: 'Neun Geschichten führen dich vom alten Dorf bis zum Leuchtturm. Die Karte zeigt immer nur den nächsten Stopp und du entscheidest, wann es losgeht.',
    tourCta: 'Tour ansehen',
    howCta: 'So funktioniert es',
    benefits: ['Immer nur ein nächster Stopp', 'Audio am richtigen Ort', 'Keine App-Installation'],
    available: 'Jetzt verfügbar',
    tourTitle: 'Entdecke Hollum',
    tourIntro: 'Eine vollständige Wanderung vorbei an Kommandeurshäusern, Museum, Kirche, Mühle, maritimen Geschichten, Dünen und Leuchtturm.',
    durationLabel: 'Dauer',
    duration: '90 Min.',
    distanceLabel: 'Entfernung',
    distance: '6,5 km',
    stopsLabel: 'Stopps',
    stops: '9',
    included: 'Das erlebst du unterwegs',
    points: ['Ein klarer Fußweg zu jedem Stopp', 'Lokale Geschichten, die zu deinem Standort passen', 'Vollständig in deinem Tempo, mit 48 Stunden Zugang'],
    priceLabel: 'Preis pro Tour',
    price: '9,99 €',
    buy: 'Ansehen und buchen',
    payment: 'Sichere Zahlung mit Mollie',
    howEyebrow: 'Von der Buchung zur Geschichte',
    howTitle: 'Bewusst starten. Danach gehen und zuhören.',
    howIntro: 'Die Tour öffnet nicht sofort die Navigation. Prüfe zuerst, was du brauchst, und drücke draußen auf Wanderung starten, sobald du bereit bist.',
    steps: [
      ['1', 'Wählen und buchen', 'Dein persönlicher Tourlink erscheint direkt nach der Zahlung und wird zusätzlich per E-Mail gesendet.'],
      ['2', 'Wanderung starten', 'Erst nach dem Start fragt die App nach deinem Standort und erstellt die Route zum ersten Stopp.'],
      ['3', 'Gehen und zuhören', 'Bei der Ankunft wird die Geschichte verfügbar. Danach zeigt die App den nächsten Stopp.'],
    ],
    upcomingEyebrow: 'In Vorbereitung',
    upcomingTitle: 'Nach Hollum folgen weitere Dörfer.',
    upcomingText: 'Neue Wanderungen werden erst hinzugefügt, wenn Route, Geschichten und Audio vollständig fertig sind.',
    places: [['Nes', 'Dorfzentrum und Geschichte'], ['Ballum', 'Cammingha und Verwaltung'], ['Buren', 'Bauernleben und Dünen']],
    finalTitle: 'Bereit, Hollum anders zu erleben?',
    finalText: 'Nimm dein Handy und möglichst einen Ohrhörer mit. Die Wanderung beginnt erst, wenn du auf Start drückst.',
    finalCta: 'Zu Entdecke Hollum',
    footerText: 'Lokale Audiotouren, mit denen du ruhig durch die Geschichten Amelands gehst.',
  },
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) return { title: 'Ameland Audiotours' }
  return getTranslation(lang).meta
}

export default async function LocalizedHomepage({ params }: Props) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const locale = lang as Locale
  const t = getTranslation(locale)
  const c = copy[locale]
  const appUrl = `https://app.amelandaudiotours.nl/tours?lang=${locale}`

  return (
    <div className="min-h-screen bg-[#f4fbfb] text-[#143a43]">
      <header className="sticky top-0 z-40 border-b border-[#d8e9ea] bg-[#f7ffff]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image src="/images/ameland-audiotours-logo.webp" alt="Ameland Audiotours" width={48} height={48} className="h-11 w-11 rounded-full border border-[#d9e9e9] object-cover shadow-sm" priority />
            <span className="hidden text-xl font-black tracking-tight text-[#0f4b58] min-[430px]:inline">{t.site.name}</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-6 text-sm font-bold text-[#416a72] md:flex">
              <a href="#tour">{t.nav.tours}</a>
              <a href="#hoe-werkt-het">{t.nav.howItWorks}</a>
              <Link href={`/${locale}/faq`}>{t.nav.faq}</Link>
            </nav>
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-14 pt-9 sm:px-6 md:pb-20 md:pt-14">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(27,150,165,.11),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(239,127,99,.08),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#54888f]">{c.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-[clamp(3.1rem,8vw,6.2rem)] font-black leading-[.91] tracking-[-.06em] text-[#0d3d48]">{c.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c6f75] sm:text-xl sm:leading-9">{c.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#tour" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#0f4b58] px-7 font-black text-white shadow-[0_16px_38px_rgba(15,75,88,.2)]">{c.tourCta}<ArrowRight className="h-5 w-5" /></a>
                <a href="#hoe-werkt-het" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#cfe3e5] bg-white px-7 font-black text-[#0f4b58]">{c.howCta}</a>
              </div>
              <div className="mt-8 grid gap-2 sm:grid-cols-3">
                {[Route, Headphones, ShieldCheck].map((Icon, index) => (
                  <div key={c.benefits[index]} className="flex items-start gap-3 rounded-2xl border border-[#d9e9e9] bg-white/80 p-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#12879a]" />
                    <span className="text-sm font-bold leading-6 text-[#44676d]">{c.benefits[index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-[#d9ebec] bg-white shadow-[0_34px_90px_rgba(15,75,88,.14)]">
              <div className="relative h-[430px] sm:h-[560px]">
                <Image src="/images/hero-ameland.jpg" alt="Landschap op Ameland" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082f38]/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/20 bg-[#0b3c46]/90 text-white backdrop-blur">
                    {[[Clock3, c.duration], [Footprints, c.distance], [MapPin, c.stops]].map(([Icon, value], index) => {
                      const FactIcon = Icon as typeof Clock3
                      return <div key={String(value)} className={index === 1 ? 'border-x border-white/10 p-4 text-center' : 'p-4 text-center'}><FactIcon className="mx-auto h-5 w-5 text-[#9de2df]" /><p className="mt-2 text-sm font-black">{String(value)}</p></div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tour" className="scroll-mt-24 px-4 pb-14 sm:px-6 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#54888f]">{c.available}</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.045em] text-[#0d3d48] sm:text-5xl">{c.tourTitle}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5b757b]">{c.tourIntro}</p>

            <article className="mt-7 overflow-hidden rounded-[2.2rem] border border-[#dbecef] bg-white shadow-[0_24px_70px_rgba(15,75,88,.10)]">
              <div className="grid lg:grid-cols-[.95fr_1.05fr]">
                <div className="relative min-h-[310px] bg-[#dfeeed] sm:min-h-[430px]">
                  <Image src="/images/tour-dorp.jpg" alt={c.tourTitle} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082f38]/45 to-transparent" />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-9">
                  <div>
                    <div className="grid grid-cols-3 gap-2">
                      {[[c.durationLabel, c.duration], [c.distanceLabel, c.distance], [c.stopsLabel, c.stops]].map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-[#e9f2ef] p-3"><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#70837b]">{label}</p><p className="mt-2 text-lg font-black text-[#234b43]">{value}</p></div>
                      ))}
                    </div>
                    <p className="mt-7 text-xs font-black uppercase tracking-[.18em] text-[#5a8d93]">{c.included}</p>
                    <div className="mt-5 space-y-4">
                      {c.points.map((point) => <p key={point} className="flex items-start gap-3 text-base font-bold leading-7 text-[#45656b]"><span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#dff1ef] text-[#12879a]"><Check className="h-4 w-4" /></span>{point}</p>)}
                    </div>
                  </div>
                  <div className="mt-9 border-t border-[#e4eeee] pt-6">
                    <div className="flex items-end justify-between"><div><p className="text-xs font-black uppercase tracking-[.16em] text-[#72878b]">{c.priceLabel}</p><p className="mt-1 text-4xl font-black tracking-[-.04em] text-[#0d3d48]">{c.price}</p></div><ShieldCheck className="h-8 w-8 text-[#12879a]" /></div>
                    <a href={appUrl} className="mt-5 inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-[#ef7f63] px-6 text-base font-black text-white shadow-[0_16px_38px_rgba(239,127,99,.22)]">{c.buy}<ArrowRight className="h-5 w-5" /></a>
                    <p className="mt-3 text-center text-xs font-bold text-[#718078]">{c.payment}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="hoe-werkt-het" className="scroll-mt-24 bg-[#0f4b58] px-4 py-14 text-white sm:px-6 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[.2em] text-[#9de2df]">{c.howEyebrow}</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl">{c.howTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d0e9e8]">{c.howIntro}</p>
            <div className="mt-9 grid gap-3 lg:grid-cols-3">
              {c.steps.map(([number, title, text], index) => {
                const Icon = [ShieldCheck, Footprints, Headphones][index]
                return <article key={number} className="rounded-[1.6rem] border border-white/10 bg-white/[.07] p-6"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-black text-[#0f4b58]">{number}</span><Icon className="h-6 w-6 text-[#9de2df]" /></div><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-[#d0e9e8]">{text}</p></article>
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_.8fr]">
            <div className="rounded-[2rem] border border-[#dbecef] bg-[#eef7f7] p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[.2em] text-[#54888f]">{c.upcomingEyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-.035em] text-[#0d3d48]">{c.upcomingTitle}</h2>
              <p className="mt-3 text-base leading-7 text-[#5b757b]">{c.upcomingText}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{c.places.map(([place, text]) => <div key={place} className="rounded-2xl bg-white p-4"><p className="font-black text-[#0d3d48]">{place}</p><p className="mt-1 text-sm text-[#647a7e]">{text}</p></div>)}</div>
            </div>
            <div className="rounded-[2rem] bg-[#fff3e8] p-7 sm:p-9">
              <h2 className="text-4xl font-black tracking-[-.045em] text-[#0d3d48]">{c.finalTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-[#5b757b]">{c.finalText}</p>
              <a href={appUrl} className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#0f4b58] px-7 font-black text-white">{c.finalCta}<ArrowRight className="h-5 w-5" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0d414d] bg-[#0c3944] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-xl font-black">{t.site.name}</p><p className="mt-3 max-w-xl text-base leading-7 text-[#c8e2e2]">{c.footerText}</p></div>
          <div className="space-y-2 text-sm font-bold text-[#d7ecec]"><p className="flex items-center gap-2"><Mail className="h-4 w-4" />info@amelandaudiotours.nl</p><p className="flex items-center gap-2"><Phone className="h-4 w-4" />06 13 67 83 10</p><Link href={`/${locale}/faq`} className="inline-flex pt-2 underline underline-offset-4">{t.nav.faq}</Link></div>
        </div>
      </footer>
    </div>
  )
}
