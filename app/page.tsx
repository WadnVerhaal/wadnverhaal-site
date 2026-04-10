import { Check, Clock3, Headphones, MapPin, Wind, Bike, Mail, Phone } from 'lucide-react'
const APP_URL = 'https://app.wadnverhaal.nl'

const tours = [
  {
    title: 'Historische Dorpswandeling',
    label: 'Rustig ontdekken',
    duration: '45–60 min',
    audience: 'Voor volwassenen & gezinnen',
    image: '/images/tour-fietsen.jpg',
    points: [
      'Lokale verhalen en geschiedenis',
      'Rustig tempo en duidelijke route',
      'Ideaal als eerste kennismaking',
    ],
    cta: 'Kies deze tour',
    featured: false,
  },
  {
    title: 'Familietour',
    label: 'Meest gekozen',
    duration: '30–45 min',
    audience: 'Voor gezinnen met kinderen',
    image: '/images/tour-dorp.jpg',
    points: [
      'Speels, toegankelijk en verrassend',
      'Leuk voor jong en oud',
      'Perfect voor een ontspannen uitje',
    ],
    cta: 'Start met deze tour',
    featured: true,
  },
  {
    title: 'Fietsroute door Duin & Dorp',
    label: 'Voor natuurliefhebbers',
    duration: '60–90 min',
    audience: 'Voor fietsers en eilandliefhebbers',
    image: '/images/tour-duinen.jpg',
    points: [
      'Sfeervolle route langs landschap en dorp',
      'Onderweg luisteren op de juiste plekken',
      'Een complete eilandbeleving',
    ],
    cta: 'Ontdek deze tour',
    featured: false,
  },
]

const steps = [
  {
    number: '01',
    title: 'Kies jouw tour',
    text: 'Bekijk welke route past bij jouw dag, gezelschap en interesses.',
  },
  {
    number: '02',
    title: 'Bestel direct online',
    text: 'Open de tour eenvoudig op je telefoon en start wanneer het jou uitkomt.',
  },
  {
    number: '03',
    title: 'Ga op pad',
    text: 'Beleef Ameland via verhalen, sfeer en bijzondere plekken onderweg.',
  },
]

export default function WadnVerhaalHomepage() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#2D4743]">
      <header className="sticky top-0 z-40 border-b border-[#DED6C8] bg-[#F6F1E8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="group">
            <p className="text-2xl font-black tracking-tight text-[#24413E]">Wad&apos;n Verhaal</p>
            <p className="text-sm text-[#68756F]">Audiotours op Ameland</p>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tours" className="transition hover:text-[#24413E]">
              Tours
            </a>
            <a href="#hoe-werkt-het" className="transition hover:text-[#24413E]">
              Hoe het werkt
            </a>
            <a href="/faq" className="transition hover:text-[#24413E]">
              FAQ
            </a>
            <a
              href={APP_URL}
              className="rounded-2xl bg-[#2F4A4A] px-4 py-2 font-medium text-white transition hover:opacity-90"
            >
              Bestel direct
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(210,226,220,0.35),transparent_30%)]" />
          <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 md:pb-16 md:pt-16">
            <div className="overflow-hidden rounded-[2.25rem] border border-[#DDD4C7] shadow-2xl">
              <div className="relative min-h-[580px] md:min-h-[700px]">
                <img
                  src="/images/hero-ameland.jpg"
                  alt="Wandelen en fietsen door het landschap van Ameland"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E8]/95 via-[#F6F1E8]/72 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F6F1E8]/55 via-transparent to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
                  <div className="max-w-2xl pt-2 md:pt-6">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ECE2BF]/80 px-4 py-2 text-sm font-medium text-[#67572F] backdrop-blur">
                      <Wind className="h-4 w-4" />
                      Audiotours voor wandelen en fietsen op Ameland
                    </div>

                    <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#264440] sm:text-5xl md:text-6xl">
                      Kies jouw route en beleef Ameland op een bijzondere manier.
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5B6963]">
                      Ontdek dorp, duin en eilandverhalen in je eigen tempo. Rustig, sfeervol en direct
                      te starten op je telefoon.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="#tours"
                        className="inline-flex items-center rounded-2xl bg-[#2F4A4A] px-6 py-3 font-medium text-white transition hover:opacity-90"
                      >
                        Bekijk de tours
                      </a>
                      <a
                        href={APP_URL}
                        className="inline-flex items-center rounded-2xl border border-[#CFC5B5] bg-[#F8F3EA] px-6 py-3 font-medium text-[#2F4A4A] transition hover:bg-white"
                      >
                        Bestel direct
                      </a>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 md:max-w-3xl md:grid-cols-3">
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#DDD4C7] backdrop-blur">
                      <Clock3 className="h-5 w-5 text-[#2F4A4A]" />
                      <p className="mt-3 font-semibold">Start wanneer je wilt</p>
                      <p className="mt-1 text-sm text-[#67746E]">Geen vaste tijden of groepen</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#DDD4C7] backdrop-blur">
                      <Headphones className="h-5 w-5 text-[#2F4A4A]" />
                      <p className="mt-3 font-semibold">Verhalen onderweg</p>
                      <p className="mt-1 text-sm text-[#67746E]">Luisteren op de juiste plekken</p>
                    </div>
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#DDD4C7] backdrop-blur">
                      <Bike className="h-5 w-5 text-[#2F4A4A]" />
                      <p className="mt-3 font-semibold">Wandelen of fietsen</p>
                      <p className="mt-1 text-sm text-[#67746E]">Kies wat bij jouw dag past</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="pb-16 pt-4 md:pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#77847E]">Tours</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#264440] sm:text-5xl">
                Kies jouw eilandervaring
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5D6A65]">
                Overzichtelijk en eenvoudig gepresenteerd. Kies de tour die het beste past bij jouw
                bezoek aan Ameland.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {tours.map((tour) => (
                <div
                  key={tour.title}
                  className={`overflow-hidden rounded-[2rem] ${
                    tour.featured
                      ? 'border-2 border-[#B87452] bg-[#F7F2E9] shadow-xl'
                      : 'border border-[#DDD4C7] bg-[#FBF8F1] shadow-sm'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="h-56 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          tour.featured
                            ? 'bg-[#B87452] text-white'
                            : 'bg-[#ECE5D7] text-[#5E6B65]'
                        }`}
                      >
                        {tour.label}
                      </span>
                      <span className="text-sm text-[#78847E]">{tour.duration}</span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#264440]">
                      {tour.title}
                    </h3>
                    <p className="mt-3 text-[#5D6A65]">{tour.audience}</p>

                    <div className="mt-5 space-y-3">
                      {tour.points.map((point) => (
                        <div key={point} className="flex items-start gap-3 text-sm text-[#4D5A55]">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#789281]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={APP_URL}
                      className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-medium transition ${
                        tour.featured
                          ? 'bg-[#2F4A4A] text-white hover:opacity-90'
                          : 'border border-[#CFC5B5] bg-white text-[#2F4A4A] hover:bg-[#F8F3EA]'
                      }`}
                    >
                      {tour.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#77847E]">
                Hoe het werkt
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#264440] sm:text-4xl">
                Binnen een paar stappen op pad
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[1.75rem] border border-[#DDD4C7] bg-[#FBF8F1] p-6 shadow-sm"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EAE2D0] font-bold text-[#2F4A4A]">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#264440]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5D6A65]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="overflow-hidden rounded-[2rem] bg-[#274643] shadow-xl">
              <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C7D6D0]">
                    Klaar om te starten?
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Bestel jouw tour direct online
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#D8E5E0]">
                    Kies je route, rond je bestelling af en ga direct op pad door dorp, duin en
                    landschap.
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#F6F1E8] px-6 py-3 font-medium text-[#2F4A4A] transition hover:bg-white"
                  >
                    Ga naar de app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#DED6C8] bg-[#F8F3EA]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#264440]">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md leading-7 text-[#5D6A65]">
              Audiotours die bezoekers van Ameland op een rustige, originele en toegankelijke manier
              meenemen langs verhalen van het eiland.
            </p>
            <div className="mt-6 space-y-3 text-[#4D5A55]">
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
                <span>Ameland, Nederland</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#DDD4C7] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#77847E]">
              Direct starten
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#264440]">
              Kies en bestel online
            </h3>
            <p className="mt-4 leading-7 text-[#5D6A65]">
              Ga direct naar de app en kies de tour die past bij jouw wandeling of fietstocht.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={APP_URL}
                className="inline-flex rounded-2xl bg-[#2F4A4A] px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                Open de app
              </a>
              <a
                href="/faq"
                className="inline-flex rounded-2xl border border-[#CFC5B5] bg-[#F8F3EA] px-5 py-3 font-medium text-[#2F4A4A] transition hover:bg-[#F3EDE2]"
              >
                Bekijk FAQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}