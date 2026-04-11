import { Check, MapPin, Mail, Phone } from 'lucide-react'

const APP_URL = 'https://app.wadnverhaal.nl'

const tours = [
  {
    title: 'Historische Dorpswandeling',
    badge: 'Rustig ontdekken',
    duration: '45–60 min',
    image: '/images/tour-fietsen.jpg',
    points: [
      'Verhalen over dorp en geschiedenis',
      'Zelfstandig en eenvoudig te volgen',
      'Ideaal als eerste kennismaking',
    ],
    cta: 'Binnenkort verkrijgbaar',
    featured: false,
    available: false,
  },
  {
    title: 'Maak kennis met Hollum',
    badge: 'Meest gekozen',
    duration: '90 min',
    image: '/images/tour-duinen.jpg',
    points: [
      'Een rustige wandeling langs bijzondere plekken',
      'Live kaart en audio precies op de juiste locatie',
      'Perfect als eerste kennismaking met Hollum',
    ],
    cta: 'Bestel direct',
    featured: true,
    available: true,
  },
  {
    title: 'Fietsroute door Duin & Dorp',
    badge: 'Voor natuurliefhebbers',
    duration: '60–90 min',
    image: '/images/tour-fietsen.jpg',
    points: [
      'Route door landschap en dorp',
      'Luisteren op bijzondere plekken',
      'Een complete eilandbeleving',
    ],
    cta: 'Binnenkort verkrijgbaar',
    featured: false,
    available: false,
  },
]

const steps = [
  {
    number: '1',
    title: 'Kies jouw tour',
    text: 'Kies de route die past bij jouw dag op Ameland.',
  },
  {
    number: '2',
    title: 'Bestel direct online',
    text: 'Open de tour eenvoudig op je telefoon en start wanneer je wilt.',
  },
  {
    number: '3',
    title: 'Ga op pad',
    text: 'Ontdek dorp, duin en landschap met verhalen onderweg.',
  },
]

export default function WadnVerhaalHomepage() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#29453f]">
      <header className="sticky top-0 z-50 border-b border-[#ddd5c7] bg-[#f7f3ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="leading-tight">
            <div className="text-[2rem] font-black tracking-tight text-[#26443e]">Wad&apos;n Verhaal</div>
            <div className="text-sm text-[#6f7872]">Audiotours op Ameland</div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#314b45] md:flex">
            <a href="#tours" className="transition hover:opacity-70">
              Tours
            </a>
            <a href="#hoe-werkt-het" className="transition hover:opacity-70">
              Hoe het werkt
            </a>
            <a href="/faq" className="transition hover:opacity-70">
              FAQ
            </a>
            <a
              href={APP_URL}
              className="rounded-full bg-[#26443e] px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              Bestel direct
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-6 pb-8 pt-10 md:pb-12 md:pt-14">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ddd5c7] bg-[#efe7d8] shadow-[0_25px_80px_rgba(70,60,40,0.10)]">
              <div className="relative min-h-[980px] md:min-h-[1080px]">
                <img
                  src="/images/hero-ameland.jpg"
                  alt="Fietsen en wandelen op Ameland"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,234,0.94)_0%,rgba(247,243,234,0.80)_34%,rgba(247,243,234,0.24)_62%,rgba(247,243,234,0.08)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,243,234,0.12)_0%,rgba(247,243,234,0.02)_40%,rgba(247,243,234,0.92)_78%,rgba(247,243,234,1)_100%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-14">
                  <div className="max-w-2xl pt-2">
                    <div className="mb-6 inline-flex items-center rounded-full bg-[#e9dfbf]/85 px-5 py-2 text-sm font-medium text-[#6a5c37] shadow-sm">
                      Audiotours voor wandelen en fietsen op Ameland
                    </div>

                    <h1 className="max-w-3xl font-serif text-5xl leading-[0.97] tracking-tight text-[#23413b] sm:text-6xl md:text-[5.8rem]">
                      Audiotours voor wandelen en fietsen op Ameland
                    </h1>

                    <p className="mt-8 max-w-xl text-xl leading-9 text-[#5e6b66]">
                      Geen drukke excursie, maar een rustige manier om het eiland te ontdekken.
                      Kies jouw route en beleef dorp, duin en landschap met verhalen in je oor.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="#tours"
                        className="rounded-2xl bg-[#26443e] px-7 py-4 text-base font-medium text-white transition hover:opacity-90"
                      >
                        Bekijk de tours
                      </a>
                      <a
                        href={APP_URL}
                        className="rounded-2xl border border-[#cfc5b6] bg-[#f7f3ea] px-7 py-4 text-base font-medium text-[#26443e] transition hover:bg-white"
                      >
                        Bestel direct
                      </a>
                    </div>
                  </div>

                  <div id="tours" className="mt-14 grid gap-6 lg:grid-cols-3">
                    {tours.map((tour) => (
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
                                Binnenkort verkrijgbaar
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
                            href={tour.available ? APP_URL : '#'}
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73807a]">Tours</p>
              <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-[#23413b]">
                Kies jouw eilandervaring
              </h2>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-[#5d6a65]">
                Overzichtelijk en rustig gepresenteerd. Kies de tour die het beste past bij jouw
                bezoek aan Ameland.
              </p>
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="px-6 pb-20 pt-6">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2.2rem] border border-[#ddd5c7] bg-[#f2ece0] shadow-[0_18px_50px_rgba(70,60,40,0.08)]">
              <div className="grid divide-y divide-[#ddd5c7] md:grid-cols-3 md:divide-x md:divide-y-0">
                {steps.map((step) => (
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
                alt="Duinlandschap op Ameland"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,69,62,0.96)_0%,rgba(30,69,62,0.88)_52%,rgba(30,69,62,0.74)_100%)]" />

              <div className="relative z-10 grid gap-8 px-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-12">
                <div>
                  <h2 className="font-serif text-5xl leading-tight tracking-tight text-white">
                    Bestel jouw tour direct online
                  </h2>
                  <p className="mt-5 max-w-2xl text-xl leading-8 text-[#d8e4df]">
                    Kies je route, rond je bestelling af en ga direct op pad door dorp, duin en
                    landschap.
                  </p>
                </div>

                <div className="flex md:justify-end">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#f7f3ea] px-8 py-4 text-base font-medium text-[#26443e] transition hover:bg-white"
                  >
                    Ga naar de app
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
            <h2 className="text-3xl font-black tracking-tight text-[#24413b]">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md text-lg leading-8 text-[#5e6b66]">
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

          <div className="rounded-[2rem] border border-[#ddd5c7] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#74807b]">
              Direct starten
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#24413b]">
              Kies en bestel online
            </h3>
            <p className="mt-4 text-lg leading-8 text-[#5e6b66]">
              Ga direct naar de app en kies de tour die past bij jouw wandeling of fietstocht.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={APP_URL}
                className="inline-flex rounded-2xl bg-[#26443e] px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                Open de app
              </a>
              <a
                href="/faq"
                className="inline-flex rounded-2xl border border-[#cfc5b6] bg-[#f8f4eb] px-5 py-3 font-medium text-[#26443e] transition hover:bg-[#f1ebe0]"
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