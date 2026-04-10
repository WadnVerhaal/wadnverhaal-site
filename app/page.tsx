import { MapPin, Headphones, Clock3, Users, Mail, Phone, Check, Wind, Bike } from 'lucide-react'

const APP_URL = 'https://app.wadnverhaal.nl'

export default function WadnVerhaalHomepage() {
  const tours = [
    {
      title: 'Historische Dorpswandeling',
      subtitle: 'Voor liefhebbers van sfeer en historie',
      duration: '45–60 min',
      audience: 'Volwassenen & gezinnen',
      badge: 'Populair',
      highlight: false,
      points: ['Lokale verhalen en geschiedenis', 'Rustig tempo', 'Ideaal als eerste kennismaking'],
      cta: 'Kies deze tour'
    },
    {
      title: 'Familietour',
      subtitle: 'De leukste keuze voor samen op pad',
      duration: '30–45 min',
      audience: 'Gezinnen met kinderen',
      badge: 'Meest gekozen',
      highlight: true,
      points: ['Speels en laagdrempelig', 'Leuk voor jong en oud', 'Perfect voor een ontspannen uitje'],
      cta: 'Start met deze tour'
    },
    {
      title: 'Fietsroute door Duin & Dorp',
      subtitle: 'Voor rust, ruimte en eilandgevoel',
      duration: '60–90 min',
      audience: 'Fietsers & natuurliefhebbers',
      badge: 'Premium',
      highlight: false,
      points: ['Mooie fietsroutes langs natuur en dorp', 'Sfeervolle audio onderweg', 'Perfect voor een complete eilandervaring'],
      cta: 'Ontdek deze tour'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Kies jouw tour',
      text: 'Bekijk welke route past bij jouw dag op Ameland.'
    },
    {
      number: '02',
      title: 'Bestel direct online',
      text: 'Rond je bestelling eenvoudig af en open de tour meteen op je telefoon.'
    },
    {
      number: '03',
      title: 'Ga op pad',
      text: 'Start wanneer je wilt en beleef Ameland via verhalen, sfeer en bijzondere plekken.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#2E3C3C]">
      <header className="sticky top-0 z-30 border-b border-[#DDD4C7] bg-[#F7F3EC]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <p className="text-2xl font-black tracking-tight text-[#2F4A4A]">Wad&apos;n Verhaal</p>
            <p className="text-sm text-[#64706B]">Audiotours op Ameland</p>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tours" className="transition hover:text-[#2F4A4A]">Tours</a>
            <a href="#hoe-werkt-het" className="transition hover:text-[#2F4A4A]">Hoe het werkt</a>
            <a href="/faq" className="transition hover:text-[#2F4A4A]">FAQ</a>
            <a
              href={APP_URL}
              className="rounded-2xl bg-[#2F4A4A] px-4 py-2 font-medium text-white transition hover:opacity-90"
            >
              Bestel je tour
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,226,220,0.45),transparent_30%),radial-gradient(circle_at_left,rgba(231,198,106,0.14),transparent_30%)]" />
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E8D9A8]/40 px-4 py-2 text-sm font-medium text-[#6A5B34]">
                  <Wind className="h-4 w-4" />
                  Rust, ruimte en verhalen van het eiland
                </div>

                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#2F4A4A] sm:text-5xl md:text-6xl">
                  Premium audiotours voor wandelen en fietsen op Ameland.
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F6D67]">
                  Geen drukke excursie, maar een stijlvolle manier om Ameland zelf te ontdekken.
                  Kies jouw route en beleef duin, dorp en landschap met verhalen in je oor.
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
                    className="inline-flex items-center rounded-2xl border border-[#CFC6B8] bg-white px-6 py-3 font-medium text-[#2F4A4A] transition hover:bg-[#FBF8F2]"
                  >
                    Bestel direct
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-[#DDD4C7]">
                    <Clock3 className="h-5 w-5 text-[#2F4A4A]" />
                    <p className="mt-3 font-semibold text-[#2F4A4A]">Direct starten</p>
                    <p className="mt-1 text-sm text-[#68736D]">Geen gedoe, meteen op je telefoon</p>
                  </div>
                  <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-[#DDD4C7]">
                    <Headphones className="h-5 w-5 text-[#2F4A4A]" />
                    <p className="mt-3 font-semibold text-[#2F4A4A]">Rijke audioverhalen</p>
                    <p className="mt-1 text-sm text-[#68736D]">Meer beleving dan een gewone route</p>
                  </div>
                  <div className="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-[#DDD4C7]">
                    <Bike className="h-5 w-5 text-[#2F4A4A]" />
                    <p className="mt-3 font-semibold text-[#2F4A4A]">Wandelen & fietsen</p>
                    <p className="mt-1 text-sm text-[#68736D]">Past bij jouw tempo en dag</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2">
                <div className="sm:col-span-2 overflow-hidden rounded-[2rem] border border-[#DDD4C7] bg-white shadow-xl">
                  <img
                    src="/images/ameland-fietspad.jpg"
                    alt="Fietsers op een rustig pad door het landschap van Ameland"
                    className="h-[320px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.75rem] border border-[#DDD4C7] bg-white shadow-md">
                  <img
                    src="/images/ameland-dorp.jpg"
                    alt="Sfeervol dorp op Ameland"
                    className="h-[210px] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.75rem] border border-[#DDD4C7] bg-white shadow-md">
                  <img
                    src="/images/ameland-vuurtoren.jpg"
                    alt="Landschap met vuurtoren op Ameland"
                    className="h-[210px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="pb-20 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7B8780]">Tours</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2F4A4A] sm:text-4xl">
                Kies jouw eilandervaring
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5F6D67]">
                Overzichtelijk, rustig en premium gepresenteerd. Kies de tour die het beste past bij jouw bezoek aan Ameland.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {tours.map((tour) => (
                <div
                  key={tour.title}
                  className={`relative flex h-full flex-col rounded-[2rem] p-6 ${
                    tour.highlight
                      ? 'border-2 border-[#D8B85F] bg-white shadow-xl ring-2 ring-[#D8B85F]/15'
                      : 'border border-[#DDD4C7] bg-[#FCFAF6] shadow-sm'
                  }`}
                >
                  {tour.highlight && (
                    <div className="absolute -top-3 left-6 rounded-full bg-[#D8B85F] px-3 py-1 text-xs font-bold text-[#4D432A] shadow-sm">
                      Meest gekozen
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#EEE7D8] px-3 py-1 text-xs font-semibold text-[#5E6A65]">
                      {tour.badge}
                    </span>
                    <span className="text-sm text-[#7B8780]">{tour.duration}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#2F4A4A]">{tour.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#8C7A48]">{tour.subtitle}</p>
                  <p className="mt-3 text-[#5F6D67]">{tour.audience}</p>

                  <div className="mt-6 space-y-3">
                    {tour.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-[#4F5D58]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7B9A87]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={APP_URL}
                    className={`mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition ${
                      tour.highlight
                        ? 'bg-[#2F4A4A] text-white hover:opacity-90'
                        : 'border border-[#CCC3B4] bg-white text-[#2F4A4A] hover:bg-[#F8F4EC]'
                    }`}
                  >
                    {tour.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="bg-[#F3EEE4] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7B8780]">Hoe het werkt</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2F4A4A] sm:text-4xl">
                Binnen drie stappen op pad
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.number} className="rounded-[1.75rem] border border-[#DED5C7] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#7B8780]">Stap {item.number}</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#2F4A4A]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#5F6D67]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] bg-[#2F4A4A] px-8 py-10 text-white shadow-xl">
              <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9D7D1]">Klaar om te starten?</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    Bestel jouw tour direct online
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#D8E4DF]">
                    Kies je route, rond je bestelling af en ga direct op pad door dorp, duin en landschap.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#F7F3EC] px-6 py-3 font-medium text-[#2F4A4A] transition hover:bg-white"
                  >
                    Ga naar de app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#DDD4C7] bg-[#F8F4EC]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#2F4A4A]">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md leading-7 text-[#5F6D67]">
              Premium audiotours die bezoekers van Ameland op een rustige, originele en toegankelijke manier meenemen langs verhalen van het eiland.
            </p>
            <div className="mt-6 space-y-3 text-[#4F5D58]">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> <span>info@wadnverhaal.nl</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> <span>06 13 67 83 10</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> <span>Ameland, Nederland</span></div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#DED5C7] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7B8780]">Direct starten?</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#2F4A4A]">Kies en bestel online</h3>
            <p className="mt-4 leading-7 text-[#5F6D67]">
              Ga direct naar de app van Wad&apos;n Verhaal en kies de tour die past bij jouw wandeling of fietstocht.
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
                className="inline-flex rounded-2xl border border-[#CCC3B4] bg-[#F8F4EC] px-5 py-3 font-medium text-[#2F4A4A] transition hover:bg-[#F2ECE1]"
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