import { MapPin, Headphones, Clock3, Users, ChevronRight, Mail, Phone, Compass, Star } from 'lucide-react'

export default function WadnVerhaalHomepage() {
  const tours = [
    {
      title: 'Historische Dorpswandeling',
      subtitle: 'Ontdek het verhaal achter straatjes, huizen en bijzondere plekken.',
      duration: '45–60 min',
      audience: 'Voor volwassenen & gezinnen',
      points: ['Vol lokale verhalen', 'Rustig tempo', 'Ideaal als eerste kennismaking'],
      badge: 'Populair'
    },
    {
      title: 'Familietour',
      subtitle: 'Speels, toegankelijk en leuk voor jong en oud.',
      duration: '30–45 min',
      audience: 'Voor gezinnen met kinderen',
      points: ['Luchtig en verrassend', 'Leuke weetjes onderweg', 'Samen beleven'],
      badge: 'Gezinnen'
    },
    {
      title: 'Natuur & Duinen',
      subtitle: 'Hoor meer over het landschap, het wad en het eilandgevoel.',
      duration: '60–90 min',
      audience: 'Voor natuurliefhebbers',
      points: ['Meer rust en natuur', 'Prachtige omgeving', 'Verhalen met sfeer'],
      badge: 'Buitenfavoriet'
    }
  ]

  const benefits = [
    {
      icon: Headphones,
      title: 'Audiotours met beleving',
      text: 'Niet alleen kijken, maar ook luisteren en echt iets meekrijgen van de plek waar je bent.'
    },
    {
      icon: Compass,
      title: 'Zelfstandig en eenvoudig',
      text: 'Bezoekers kunnen op eigen moment starten en de route volgen op hun telefoon.'
    },
    {
      icon: Star,
      title: 'Origineel uitje op Ameland',
      text: 'Perfect voor vakantiegangers die iets willen doen dat leuk, laagdrempelig en nét even anders is.'
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
      title: 'Open op je telefoon',
      text: 'Geen gedoe: start eenvoudig en ga op pad wanneer het jou uitkomt.'
    },
    {
      number: '03',
      title: 'Beleef het eiland',
      text: 'Onderweg luister je naar verhalen, sfeer en bijzondere weetjes op de juiste plekken.'
    }
  ]

  const faqs = [
    {
      question: 'Moet ik een app downloaden?',
      answer: 'Nee, de tours zijn eenvoudig te openen op je telefoon. Zo blijft het laagdrempelig voor bezoekers.'
    },
    {
      question: 'Kan ik de tour starten wanneer ik wil?',
      answer: 'Ja, bezoekers kunnen zelf bepalen wanneer ze beginnen. Dat maakt het ideaal voor een ontspannen dag op het eiland.'
    },
    {
      question: 'Zijn de tours ook geschikt voor gezinnen?',
      answer: 'Ja, er zijn routes die juist goed passen bij gezinnen en kinderen.'
    },
    {
      question: 'Hoe boek of start ik een tour?',
      answer: 'Via de contactknop of het aanvraagformulier kun je informatie opvragen of direct starten zodra de tours live staan.'
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group">
            <p className="text-2xl font-black tracking-tight">Wad&apos;n Verhaal</p>
            <p className="text-sm text-slate-600">Audiotours op Ameland</p>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#tours" className="transition hover:text-slate-600">Tours</a>
            <a href="#hoe-werkt-het" className="transition hover:text-slate-600">Hoe het werkt</a>
            <a href="#faq" className="transition hover:text-slate-600">FAQ</a>
            <a href="#contact" className="rounded-2xl bg-slate-900 px-4 py-2 font-medium text-white transition hover:opacity-90">Start tour</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
              <MapPin className="h-4 w-4" />
              Beleef Ameland op een verrassende manier
            </div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Tours die van een wandeling een verhaal maken.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Wad&apos;n Verhaal biedt toegankelijke audiotours voor bezoekers van Ameland. Ideaal voor toeristen, gezinnen en eilandliefhebbers die méér willen zien, horen en beleven.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#tours" className="inline-flex items-center rounded-2xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:opacity-90">
                Bekijk de tours
              </a>
              <a href="#contact" className="inline-flex items-center rounded-2xl border border-stone-300 bg-white px-6 py-3 font-medium transition hover:bg-stone-100">
                Start tour
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <Clock3 className="h-5 w-5" />
                <p className="mt-3 font-semibold">Flexibel</p>
                <p className="mt-1 text-sm text-slate-600">Start wanneer het uitkomt</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <Headphones className="h-5 w-5" />
                <p className="mt-3 font-semibold">Eenvoudig</p>
                <p className="mt-1 text-sm text-slate-600">Direct op je telefoon</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200">
                <Users className="h-5 w-5" />
                <p className="mt-3 font-semibold">Voor iedereen</p>
                <p className="mt-1 text-sm text-slate-600">Gezinnen, stellen en bezoekers</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-stone-200">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="relative flex h-full items-end p-6">
              <div className="max-w-sm rounded-[1.75rem] bg-white/92 p-6 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold text-slate-500">Een origineel uitje</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Meer dan alleen wandelen</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Met audio, sfeer en lokale verhalen krijgen bezoekers een ervaring die beter blijft hangen dan een gewone route.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Waarom kiezen voor Wad&apos;n Verhaal</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Laagdrempelig, sfeervol en perfect voor bezoekers van het eiland</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {benefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                    <div className="inline-flex rounded-2xl bg-white p-3 ring-1 ring-stone-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="tours" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tours</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Welke tour past bij jouw bezoek aan Ameland?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Iedere tour is eenvoudig te volgen en ontworpen om bezoekers op een leuke, informatieve manier het eiland te laten beleven.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                Start tour <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {tours.map((tour) => (
                <div key={tour.title} className="flex h-full flex-col rounded-[1.9rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">{tour.badge}</span>
                    <span className="text-sm text-slate-500">{tour.duration}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight">{tour.title}</h3>
                  <p className="mt-3 text-slate-600">{tour.subtitle}</p>
                  <p className="mt-4 text-sm font-medium text-slate-500">{tour.audience}</p>

                  <div className="mt-5 space-y-3">
                    {tour.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90">
                    Start tour
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hoe-werkt-het" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Hoe het werkt</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Binnen een paar stappen op pad</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.number} className="rounded-[1.75rem] bg-white/10 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-slate-300">Stap {item.number}</p>
                  <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2rem] bg-stone-50 p-8 ring-1 ring-stone-200">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Voor wie</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">Perfect voor toeristen die iets bijzonders willen doen</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Wad&apos;n Verhaal is gemaakt voor mensen die Ameland niet alleen willen zien, maar ook willen voelen en begrijpen. Ideaal als activiteit tijdens een vakantie, weekend of dagtrip.
                </p>
              </div>

              <div className="rounded-[2rem] bg-amber-100 p-8 ring-1 ring-amber-200">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-900">Klaar om te starten?</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">Start tour</h2>
                <p className="mt-4 leading-7 text-slate-700">
                  Klaar om op pad te gaan? Start je tour of neem contact op voor meer informatie over de beschikbare routes.
                </p>
                <a href="#contact" className="mt-6 inline-flex rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90">
                  Start tour
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Veelgestelde vragen</h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black tracking-tight">Wad&apos;n Verhaal</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Informatieve audiotours die bezoekers van Ameland op een originele, toegankelijke en sfeervolle manier meenemen langs verhalen van het eiland.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> <span>info@wadnverhaal.nl</span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> <span>06 13 67 83 10</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> <span>Ameland, Nederland</span></div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-stone-50 p-8 ring-1 ring-stone-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Interesse?</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight">Start tour</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Wil je direct starten of eerst kort overleggen welke tour het beste past? Neem contact op via e-mail of telefoon.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="mailto:info@wadnverhaal.nl" className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:opacity-90">
                Mail ons
              </a>
              <a href="tel:+31613678310" className="inline-flex rounded-2xl border border-stone-300 bg-white px-5 py-3 font-medium transition hover:bg-stone-100">
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}