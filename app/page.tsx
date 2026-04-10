import { MapPin, Headphones, Clock3, Users, Mail, Phone, Check, Wind, Waves } from 'lucide-react'

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
      title: 'Natuur & Duinen',
      subtitle: 'Voor rust, ruimte en eilandgevoel',
      duration: '60–90 min',
      audience: 'Natuurliefhebbers',
      badge: 'Buitenfavoriet',
      highlight: false,
      points: ['Meer natuur en beleving', 'Prachtige routes', 'Sfeervolle audio onderweg'],
      cta: 'Ontdek deze tour'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Kies jouw tour',
      text: 'Bekijk welke route het beste past bij jouw dag op Ameland.'
    },
    {
      number: '02',
      title: 'Bestel direct online',
      text: 'Rond je bestelling eenvoudig af en open de tour meteen op je telefoon.'
    },
    {
      number: '03',
      title: 'Ga op pad',
      text: 'Start wanneer je wilt en beleef het eiland met verhalen, sfeer en bijzondere plekken.'
    }
  ]

  const faqItems = [
    {
      question: 'Moet ik een app downloaden?',
      answer: 'Nee, je opent de tour eenvoudig op je telefoon.'
    },
    {
      question: 'Kan ik starten wanneer ik wil?',
      answer: 'Ja, je kiest zelf het moment waarop je op pad gaat.'
    },
    {
      question: 'Is het geschikt voor gezinnen?',
      answer: 'Ja, vooral de Familietour is heel geschikt voor gezinnen.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2F3E46]">
      <header className="sticky top-0 z-30 border-b border-[#D9D2C3] bg-[#F5F1E8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <p className="text-2xl font-black tracking-tight text-[#2F4A4A]">Wad&apos;n Verhaal</p>
            <p className="text-sm text-[#5F6F6A]">Audiotours op Ameland</p>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tours" className="transition hover:text-[#2F4A4A]">Tours</a>
            <a href="#hoe-werkt-het" className="transition hover:text-[#2F4A4A]">Hoe het werkt</a>
            <a href="#faq" className="transition hover:text-[#2F4A4A]">FAQ</a>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,214,229,0.28),transparent_30%),radial-gradient(circle_at_left,rgba(231,198,106,0.18),transparent_28%)]" />
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E7C66A]/35 px-4 py-2 text-sm font-medium text-[#6A5832]">
                  <Wind className="h-4 w-4" />
                  Beleef Ameland op jouw tempo
                </div>

                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#2F4A4A] sm:text-5xl md:text-6xl">
                  Kies de tour die past bij jouw eilanddag.
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F6F6A]">
                  Wad&apos;n Verhaal brengt duin, dorp en eilandgevoel samen in toegankelijke audiotours.
                  Rustig, sfeervol en direct te starten op je telefoon.
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
                    className="inline-flex items-center rounded-2xl border border-[#CFC6B4] bg-white px-6 py-3 font-medium text-[#2F4A4A] transition hover:bg-[#F8F5EE]"
                  >
                    Bestel direct
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-[#DDD5C7] backdrop-blur">
                    <Clock3 className="h-5 w-5 text-[#2F4A4A]" />
                    <p className="mt-3 font-semibold text-[#2F4A4A]">Direct starten</p>
                    <p className="mt-1 text-sm text-[#6B746F]">Geen gedoe, meteen op je telefoon</p>
                  </div>
                  <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-[#DDD5C7] backdrop-blur">
                    <Headphones className="h-5 w-5 text-[#2F4A4A]" />
                    <p className="mt-3 font-semibold text-[#2F4A4A]">Met audioverhalen</p>
                    <p className="mt-1 text-sm text-[#6B746F]">Meer beleving dan een gewone route</p>
                  </div>
                  <div className="rounded-2xl bg-white/85 p-4 shadow-sm ring-1 ring-[#DDD5C7] backdrop-blur">
                    <Users className="h-5 w-5 text-[#2F4A4A]" />
                    <p className="mt-3 font-semibold text-[#2F4A4A]">Voor elk gezelschap</p>
                    <p className="mt-1 text-sm text-[#6B746F]">Van gezinnen tot rustzoekers</p>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#DDD5C7] shadow-xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4A4A]/65 via-[#2F4A4A]/20 to-transparent" />
                <div className="relative flex h-full items-end p-6">
                  <div className="max-w-sm rounded-[1.75rem] bg-[#F8F4EC]/92 p-6 shadow-xl backdrop-blur">
                    <p className="text-sm font-semibold text-[#6B746F]">Eilandgevoel in je oor</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#2F4A4A]">
                      Verhalen van duin, dorp en zee
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#5F6F6A]">
                      Geen drukke toeristische site, maar een rustige en sfeervolle manier om Ameland écht te beleven.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tours" className="pb-20 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A867F]">Tours</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2F4A4A] sm:text-4xl">
                Kies jouw eilandervaring
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5F6F6A]">
                Overzichtelijk, duidelijk en direct te boeken. Kies de tour die het beste past bij jouw bezoek aan Ameland.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {tours.map((tour) => (
                <div
                  key={tour.title}
                  className={`relative flex h-full flex-col rounded-[2rem] p-6 shadow-sm ${
                    tour.highlight
                      ? 'border-2 border-[#E7C66A] bg-white shadow-xl ring-2 ring-[#E7C66A]/20'
                      : 'border border-[#DDD5C7] bg-[#FCFAF6]'
                  }`}
                >
                  {tour.highlight && (
                    <div className="absolute -top-3 left-6 rounded-full bg-[#E7C66A] px-3 py-1 text-xs font-bold text-[#4F4630] shadow-sm">
                      Meest gekozen op Ameland
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#EDE8DB] px-3 py-1 text-xs font-semibold text-[#5C6864]">
                      {tour.badge}
                    </span>
                    <span className="text-sm text-[#7A867F]">{tour.duration}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#2F4A4A]">{tour.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#8A7A4D]">{tour.subtitle}</p>
                  <p className="mt-3 text-[#5F6F6A]">{tour.audience}</p>

                  <div className="mt-6 space-y-3">
                    {tour.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-[#4F5D59]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#6F8B79]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={APP_URL}
                    className={`mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition ${
                      tour.highlight
                        ? 'bg-[#2F4A4A] text-white hover:opacity-90'
                        : 'border border-[#CFC6B4] bg-white text-[#2F4A4A] hover:bg-[#F7F3EA]'
                    }`}
                  >
                    {tour.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="bg-[#F8F4EC] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A867F]">Hoe het werkt</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2F4A4A] sm:text-4xl">
                Binnen een paar stappen op pad
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.number} className="rounded-[1.75rem] border border-[#DED6C8] bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-[#7A867F]">Stap {item.number}</p>
                  <h3 className="mt-3 text-2xl font-bold text-[#2F4A4A]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#5F6F6A]">{item.text}</p>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8D7D1]">Klaar om te starten?</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    Bestel jouw tour direct online
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#D9E4E0]">
                    Geen mail of telefoontje nodig. Kies je tour, rond je bestelling af en ga direct op pad over Ameland.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center rounded-2xl bg-[#F5F1E8] px-6 py-3 font-medium text-[#2F4A4A] transition hover:bg-white"
                  >
                    Ga naar de app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A867F]">FAQ</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#2F4A4A] sm:text-4xl">
                Veelgestelde vragen
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] border border-[#DDD5C7] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#2F4A4A]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-[#5F6F6A]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#DDD5C7] bg-[#F8F4EC]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#2F4A4A]">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md leading-7 text-[#5F6F6A]">
              Informatieve audiotours die bezoekers van Ameland op een rustige, originele en toegankelijke manier meenemen langs verhalen van het eiland.
            </p>
            <div className="mt-6 space-y-3 text-[#4F5D59]">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> <span>info@wadnverhaal.nl</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> <span>06 13 67 83 10</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> <span>Ameland, Nederland</span></div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#DED6C8] bg-white p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DDECF1] px-3 py-1 text-sm font-medium text-[#4F6B75]">
              <Waves className="h-4 w-4" />
              Direct starten
            </div>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-[#2F4A4A]">Kies en bestel online</h3>
            <p className="mt-4 leading-7 text-[#5F6F6A]">
              Ga direct naar de app van Wad&apos;n Verhaal en kies de tour die het beste bij jouw bezoek past.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={APP_URL}
                className="inline-flex rounded-2xl bg-[#2F4A4A] px-5 py-3 font-medium text-white transition hover:opacity-90"
              >
                Open de app
              </a>
              <a
                href={APP_URL}
                className="inline-flex rounded-2xl border border-[#CFC6B4] bg-[#F8F4EC] px-5 py-3 font-medium text-[#2F4A4A] transition hover:bg-[#F2ECE0]"
              >
                Bekijk tours
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}