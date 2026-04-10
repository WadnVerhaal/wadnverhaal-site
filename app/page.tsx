import { MapPin, Headphones, Clock3, Users, Mail, Phone, Check } from 'lucide-react'

const APP_URL = 'https://app.wadnverhaal.nl'

export default function WadnVerhaalHomepage() {
  const tours = [
    {
      title: 'Historische Dorpswandeling',
      subtitle: 'Rustig ontdekken',
      duration: '45–60 min',
      audience: 'Volwassenen & gezinnen',
      badge: 'Populair',
      highlight: false,
      points: ['Lokale verhalen en historie', 'Zelfstandig te lopen', 'Ideaal als eerste kennismaking'],
      cta: 'Kies deze tour'
    },
    {
      title: 'Familietour',
      subtitle: 'Meest gekozen',
      duration: '30–45 min',
      audience: 'Gezinnen met kinderen',
      badge: 'Meest gekozen',
      highlight: true,
      points: ['Speels en laagdrempelig', 'Leuk voor jong en oud', 'Perfect voor samen op pad'],
      cta: 'Start met deze tour'
    },
    {
      title: 'Natuur & Duinen',
      subtitle: 'Voor rustzoekers',
      duration: '60–90 min',
      audience: 'Natuurliefhebbers',
      badge: 'Buitenfavoriet',
      highlight: false,
      points: ['Meer natuur en beleving', 'Prachtige omgeving', 'Sfeervolle audio onderweg'],
      cta: 'Ontdek deze tour'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Kies een tour',
      text: 'Bekijk welke route past bij je dag, gezelschap en interesses.'
    },
    {
      number: '02',
      title: 'Bestel direct online',
      text: 'Rond je bestelling eenvoudig af en open de tour meteen op je telefoon.'
    },
    {
      number: '03',
      title: 'Ga op pad',
      text: 'Start wanneer het jou uitkomt en beleef Ameland met audio, verhalen en sfeer.'
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
      answer: 'Ja, vooral de Familietour is daar heel geschikt voor.'
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <p className="text-2xl font-black tracking-tight">Wad&apos;n Verhaal</p>
            <p className="text-sm text-slate-600">Audiotours op Ameland</p>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tours" className="transition hover:text-slate-600">Tours</a>
            <a href="#hoe-werkt-het" className="transition hover:text-slate-600">Hoe het werkt</a>
            <a href="#faq" className="transition hover:text-slate-600">FAQ</a>
            <a href={APP_URL} className="rounded-2xl bg-slate-900 px-4 py-2 font-medium text-white transition hover:opacity-90">
              Bestel je tour
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
              <MapPin className="h-4 w-4" />
              Ontdek Ameland op jouw tempo
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Kies de tour die past bij jouw dag op Ameland.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Duidelijke routes, sterke verhalen en direct te starten op je telefoon. Kies hieronder jouw favoriete tour en ga op pad.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#tours" className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90">
                Bekijk de tours
              </a>
              <a href={APP_URL} className="inline-flex items-center rounded-2xl border border-stone-300 bg-white px-6 py-3 font-medium transition hover:bg-stone-100">
                Bestel direct
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
              <Clock3 className="h-5 w-5" />
              <p className="mt-3 font-semibold">Direct starten</p>
              <p className="mt-1 text-sm text-slate-600">Geen gedoe, meteen op je telefoon</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
              <Headphones className="h-5 w-5" />
              <p className="mt-3 font-semibold">Met audioverhalen</p>
              <p className="mt-1 text-sm text-slate-600">Meer beleving dan een gewone route</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
              <Users className="h-5 w-5" />
              <p className="mt-3 font-semibold">Voor elk gezelschap</p>
              <p className="mt-1 text-sm text-slate-600">Van gezinnen tot rustzoekers</p>
            </div>
          </div>
        </section>

        <section id="tours" className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tours</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Onze populairste tours</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Vergelijk eenvoudig de tours en kies de ervaring die het beste past bij jouw bezoek.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {tours.map((tour) => (
                <div
                  key={tour.title}
                  className={`relative flex h-full flex-col rounded-[2rem] p-6 shadow-sm ring-1 ${
                    tour.highlight
                      ? 'border-2 border-amber-300 bg-white shadow-lg ring-amber-100'
                      : 'bg-white ring-stone-200'
                  }`}
                >
                  {tour.highlight && (
                    <div className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
                      Meest gekozen
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {tour.badge}
                    </span>
                    <span className="text-sm text-slate-500">{tour.duration}</span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight">{tour.title}</h3>
                  <p className="mt-2 text-sm font-medium text-amber-800">{tour.subtitle}</p>
                  <p className="mt-3 text-slate-600">{tour.audience}</p>

                  <div className="mt-6 space-y-3">
                    {tour.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={APP_URL}
                    className={`mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition ${
                      tour.highlight
                        ? 'bg-slate-900 text-white hover:opacity-90'
                        : 'border border-stone-300 bg-white text-slate-900 hover:bg-stone-100'
                    }`}
                  >
                    {tour.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Hoe het werkt</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">In drie simpele stappen</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.number} className="rounded-[1.75rem] bg-stone-50 p-6 ring-1 ring-stone-200">
                  <p className="text-sm font-semibold text-slate-500">Stap {item.number}</p>
                  <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] bg-slate-900 px-8 py-10 text-white">
              <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Klaar om te starten?</p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Bestel jouw tour direct online</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                    Geen mail of telefoontje nodig. Kies je tour, rond je bestelling af en start direct via de app.
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <a href={APP_URL} className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-stone-100">
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqItems.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Informatieve audiotours die bezoekers van Ameland op een originele en toegankelijke manier meenemen langs verhalen van het eiland.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> <span>info@wadnverhaal.nl</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> <span>06 13 67 83 10</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> <span>Ameland, Nederland</span></div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-stone-50 p-8 ring-1 ring-stone-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Direct starten?</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight">Kies en bestel online</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Ga direct naar de app van Wad&apos;n Verhaal en kies de tour die het beste bij jouw bezoek past.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href={APP_URL} className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90">
                Open de app
              </a>
              <a href={APP_URL} className="inline-flex rounded-2xl border border-stone-300 bg-white px-5 py-3 font-medium transition hover:bg-stone-100">
                Bekijk tours
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}