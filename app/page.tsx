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
    cta: 'Bekijk tour',
    featured: false,
  },
  {
    title: 'Familietour',
    label: 'Meest gekozen',
    duration: '30–45 min',
    audience: 'Voor gezinnen met kinderen',
    image: '/images/tour-dorp.jpg',
    points: [
      'Speels en toegankelijk',
      'Leuk voor jong en oud',
      'Perfect voor een ontspannen uitje',
    ],
    cta: 'Start hier',
    featured: true,
  },
  {
    title: 'Fietsroute door Duin & Dorp',
    label: 'Voor natuurliefhebbers',
    duration: '60–90 min',
    audience: 'Voor fietsers en eilandliefhebbers',
    image: '/images/tour-duinen.jpg',
    points: [
      'Sfeervolle route door landschap en dorp',
      'Audio op de juiste plekken',
      'Een complete eilandbeleving',
    ],
    cta: 'Ontdek route',
    featured: false,
  },
]

const steps = [
  {
    number: '01',
    title: 'Kies jouw tour',
    text: 'Kies de route die past bij jouw dag op Ameland.',
  },
  {
    number: '02',
    title: 'Bestel direct online',
    text: 'Open de tour op je telefoon en start wanneer je wilt.',
  },
  {
    number: '03',
    title: 'Ga op pad',
    text: 'Ontdek dorp, duin en landschap met verhalen onderweg.',
  },
]

export default function WadnVerhaalHomepage() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#29453f]">
      <header className="sticky top-0 z-40 border-b border-[#ddd4c7] bg-[#f7f3eb]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="group">
            <p className="text-2xl font-black tracking-tight text-[#24413b]">Wad&apos;n Verhaal</p>
            <p className="text-sm text-[#6b746f]">Audiotours op Ameland</p>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tours" className="transition hover:text-[#24413b]">
              Tours
            </a>
            <a href="#hoe-werkt-het" className="transition hover:text-[#24413b]">
              Hoe het werkt
            </a>
            <a href="/faq" className="transition hover:text-[#24413b]">
              FAQ
            </a>
            <a
              href={APP_URL}
              className="rounded-2xl bg-[#26463f] px-4 py-2 font-medium text-white transition hover:opacity-90"
            >
              Bestel direct
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pb-10 pt-10 md:pb-14 md:pt-14">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ddd4c7] bg-[#efe7d8] shadow-xl">
              <div className="relative min-h-[820px] md:min-h-[920px]">
                <img
                  src="/images/hero-ameland.jpg"
                  alt="Wandelen en fietsen door het landschap van Ameland"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,235,0.96)_0%,rgba(247,243,235,0.82)_34%,rgba(247,243,235,0.28)_62%,rgba(247,243,235,0.08)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,243,235,0.10)_0%,rgba(247,243,235,0.00)_45%,rgba(247,243,235,0.85)_100%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
                  <div className="max-w-2xl pt-2 md:pt-6">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ebe1bf]/80 px-4 py-2 text-sm font-medium text-[#6a5a33] backdrop-blur">
                      <Wind className="h-4 w-4" />
                      Audiotours voor wandelen en fietsen op Ameland
                    </div>

                    <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-[#24413b] sm:text-5xl md:text-7xl">
                      Audiotours voor wandelen en fietsen op Ameland
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f6c66]">
                      Geen drukke excursie, maar een rustige manier om het eiland te ontdekken. Kies
                      jouw route en beleef dorp, duin en landschap met verhalen in je oor.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="#tours"
                        className="inline-flex items-center rounded-2xl bg-[#26463f] px-6 py-3 font-medium text-white transition hover:opacity-90"
                      >
                        Bekijk de tours
                      </a>
                      <a
                        href={APP_URL}
                        className="inline-flex items-center rounded-2xl border border-[#cfc4b4] bg-[#f8f4ec] px-6 py-3 font-medium text-[#26463f] transition hover:bg-white"
                      >
                        Bestel direct
                      </a>
                    </div>
                  </div>

                  <div id="tours" className="mt-12 grid gap-5 lg:grid-cols-3">
                    {tours.map((tour) => (
                      <div
                        key={tour.title}
                        className={`overflow-hidden rounded-[1.8rem] ${
                          tour.featured
                            ? 'border border-[#d3b190] bg-[#f8f3ea] shadow-xl'
                            : 'border border-[#ded5c9] bg-[#f8f4ec]/95 shadow-md backdrop-blur'
                        }`}
                      >
                        <div className="p-3 pb-0">
                          <div className="overflow-hidden rounded-[1.25rem]">
                            <img
                              src={tour.image}
                              alt={tour.title}
                              className="h-44 w-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                tour.featured
                                  ? 'bg-[#b87758] text-white'
                                  : 'bg-[#ece4d7] text-[#64706b]'
                              }`}
                            >
                              {tour.label}
                            </span>
                            <span className="text-sm text-[#7a857f]">{tour.duration}</span>
                          </div>

                          <h3 className="mt-4 text-[1.8rem] font-bold leading-tight tracking-tight text-[#29453f]">
                            {tour.title}
                          </h3>

                          <p className="mt-2 text-sm text-[#66736d]">{tour.audience}</p>

                          <div className="mt-5 space-y-3">
                            {tour.points.map((point) => (
                              <div key={point} className="flex items-start gap-3 text-sm text-[#4f5c57]">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#76917f]" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href={APP_URL}
                            className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-medium transition ${
                              tour.featured
                                ? 'bg-[#26463f] text-white hover:opacity-90'
                                : 'border border-[#cfc4b4] bg-white text-[#26463f] hover:bg-[#f7f2e8]'
                            }`}
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

        <section className="pb-8 pt-4 md:pb-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#75827c]">Tours</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#24413b] sm:text-5xl">
                Kies jouw eilandervaring
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5d6a64]">
                Overzichtelijk en rustig gepresenteerd. Kies de tour die het beste past bij jouw
                bezoek aan Ameland.
              </p>
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="pb-20 pt-4">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[1.6rem] border border-[#e2d9cc] bg-[#f4efe4] p-6 shadow-sm"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e6dfd0] text-lg font-bold text-[#2f4a44]">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#29453f]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5f6b66]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#24453f] shadow-xl">
              <img
                src="/images/tour-duinen.jpg"
                alt="Landschap op Ameland"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,69,63,0.96)_0%,rgba(36,69,63,0.88)_55%,rgba(36,69,63,0.70)_100%)]" />

              <div className="relative z-10 grid gap-8 px-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-10">
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    Bestel jouw tour direct online
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#d8e3de]">
                    Kies je route, rond je bestelling af en ga direct op pad door dorp, duin en
                    landschap.
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#f7f3eb] px-6 py-3 font-medium text-[#26463f] transition hover:bg-white"
                  >
                    Ga naar de app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ddd4c7] bg-[#f8f4ec]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#24413b]">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md leading-7 text-[#5f6c66]">
              Audiotours die bezoekers van Ameland op een rustige, toegankelijke en sfeervolle manier
              meenemen langs verhalen van het eiland.
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
                <span>Ameland, Nederland</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ddd4c7] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#77837d]">
              Direct starten
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#24413b]">
              Kies en bestel online
            </h3>
            <p className="mt-4 leading-7 text-[#5f6c66]">
              Ga direct naar de app en kies de tour die past bij jouw wandeling of fietstocht.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={APP_URL}
                className="inline-flex rounded-2xl bg-[#26463f] px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                Open de app
              </a>
              <a
                href="/faq"
                className="inline-flex rounded-2xl border border-[#cfc4b4] bg-[#f8f4ec] px-5 py-3 font-medium text-[#26463f] transition hover:bg-[#f2ece1]"
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