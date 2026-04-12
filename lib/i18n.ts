export const locales = ['nl', 'en', 'de'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'nl'

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

type Tour = {
  title: string
  badge: string
  duration: string
  image: string
  points: string[]
  cta: string
  featured: boolean
  available: boolean
}

type Step = {
  number: string
  title: string
  text: string
}

type FaqItem = {
  question: string
  answer: string
}

type Translation = {
  meta: {
    title: string
    description: string
  }
  site: {
    name: string
    tagline: string
  }
  nav: {
    tours: string
    howItWorks: string
    faq: string
    orderNow: string
  }
  languageSwitcher: {
    label: string
    nl: string
    en: string
    de: string
  }
  home: {
    heroBadge: string
    heroTitle: string
    heroText: string
    viewTours: string
    orderNow: string
    toursEyebrow: string
    toursTitle: string
    toursText: string
    howItWorksId: string
    ctaTitle: string
    ctaText: string
    goToApp: string
  }
  footer: {
    description: string
    location: string
    quickStart: string
    chooseAndOrder: string
    quickText: string
    openApp: string
    viewFaq: string
  }
  faq: {
    backToHome: string
    eyebrow: string
    title: string
    intro: string
    items: FaqItem[]
  }
  tours: Tour[]
  steps: Step[]
}

export const translations: Record<Locale, Translation> = {
  nl: {
    meta: {
      title: "Wad'n Verhaal | Audiotours op Ameland",
      description:
        "Ontdek Ameland met rustige, sfeervolle audiotours voor wandelen en fietsen.",
    },
    site: {
      name: "Wad'n Verhaal",
      tagline: 'Audiotours op Ameland',
    },
    nav: {
      tours: 'Tours',
      howItWorks: 'Hoe het werkt',
      faq: 'FAQ',
      orderNow: 'Bestel direct',
    },
    languageSwitcher: {
      label: 'Taal',
      nl: 'NL',
      en: 'EN',
      de: 'DE',
    },
    home: {
      heroBadge: 'Audiotours voor wandelen en fietsen op Ameland',
      heroTitle: 'Audiotours voor wandelen en fietsen op Ameland',
      heroText:
        'Geen drukke excursie, maar een rustige manier om het eiland te ontdekken. Kies jouw route en beleef dorp, duin en landschap met verhalen in je oor.',
      viewTours: 'Bekijk de tours',
      orderNow: 'Bestel direct',
      toursEyebrow: 'Tours',
      toursTitle: 'Kies jouw eilandervaring',
      toursText:
        'Overzichtelijk en rustig gepresenteerd. Kies de tour die het beste past bij jouw bezoek aan Ameland.',
      howItWorksId: 'hoe-werkt-het',
      ctaTitle: 'Bestel jouw tour direct online',
      ctaText:
        'Kies je route, rond je bestelling af en ga direct op pad door dorp, duin en landschap.',
      goToApp: 'Ga naar de app',
    },
    footer: {
      description:
        "Audiotours die bezoekers van Ameland op een rustige, toegankelijke en sfeervolle manier meenemen langs verhalen van het eiland.",
      location: 'Ameland, Nederland',
      quickStart: 'Direct starten',
      chooseAndOrder: 'Kies en bestel online',
      quickText:
        'Ga direct naar de app en kies de tour die past bij jouw wandeling of fietstocht.',
      openApp: 'Open de app',
      viewFaq: 'Bekijk FAQ',
    },
    faq: {
      backToHome: '← Terug naar home',
      eyebrow: 'FAQ',
      title: 'Veelgestelde vragen',
      intro: "Alles wat je wilt weten over de audiotours van Wad'n Verhaal.",
      items: [
        {
          question: 'Moet ik een app downloaden?',
          answer: 'Nee, je opent de tour eenvoudig op je telefoon via de browser.',
        },
        {
          question: 'Kan ik starten wanneer ik wil?',
          answer: 'Ja, je kiest zelf het moment waarop je op pad gaat.',
        },
        {
          question: 'Zijn de tours geschikt voor gezinnen?',
          answer:
            'Ja, Maak kennis met Hollum is ook geschikt voor gezinnen die op een rustige manier samen het dorp willen ontdekken.',
        },
        {
          question: 'Kan ik kiezen tussen wandelen en fietsen?',
          answer:
            'Ja, afhankelijk van de tour kies je een route die beter past bij wandelen of fietsen.',
        },
        {
          question: 'Hoe bestel ik een tour?',
          answer:
            'Via de app kies je jouw tour, rond je bestelling af en kun je direct starten.',
        },
      ],
    },
    tours: [
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
    ],
    steps: [
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
    ],
  },

  en: {
    meta: {
      title: "Wad'n Verhaal | Audio tours on Ameland",
      description:
        'Discover Ameland with calm, atmospheric audio tours for walking and cycling.',
    },
    site: {
      name: "Wad'n Verhaal",
      tagline: 'Audio tours on Ameland',
    },
    nav: {
      tours: 'Tours',
      howItWorks: 'How it works',
      faq: 'FAQ',
      orderNow: 'Order now',
    },
    languageSwitcher: {
      label: 'Language',
      nl: 'NL',
      en: 'EN',
      de: 'DE',
    },
    home: {
      heroBadge: 'Audio tours for walking and cycling on Ameland',
      heroTitle: 'Audio tours for walking and cycling on Ameland',
      heroText:
        'No crowded excursion, just a calm way to discover the island. Choose your route and experience village, dunes and landscape through stories along the way.',
      viewTours: 'View tours',
      orderNow: 'Order now',
      toursEyebrow: 'Tours',
      toursTitle: 'Choose your island experience',
      toursText:
        'Clear, calm and easy to browse. Choose the tour that best fits your visit to Ameland.',
      howItWorksId: 'how-it-works',
      ctaTitle: 'Order your tour online right away',
      ctaText:
        'Choose your route, complete your order and start exploring village, dunes and landscape right away.',
      goToApp: 'Go to the app',
    },
    footer: {
      description:
        'Audio tours that guide visitors around Ameland in a calm, accessible and atmospheric way through the stories of the island.',
      location: 'Ameland, The Netherlands',
      quickStart: 'Start now',
      chooseAndOrder: 'Choose and order online',
      quickText:
        'Go straight to the app and choose the tour that matches your walk or bike ride.',
      openApp: 'Open the app',
      viewFaq: 'View FAQ',
    },
    faq: {
      backToHome: '← Back to home',
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      intro: "Everything you want to know about Wad'n Verhaal audio tours.",
      items: [
        {
          question: 'Do I need to download an app?',
          answer: 'No, you simply open the tour on your phone in the browser.',
        },
        {
          question: 'Can I start whenever I want?',
          answer: 'Yes, you decide yourself when you want to begin.',
        },
        {
          question: 'Are the tours suitable for families?',
          answer:
            'Yes, Meet Hollum is also suitable for families who want to discover the village together in a relaxed way.',
        },
        {
          question: 'Can I choose between walking and cycling?',
          answer:
            'Yes, depending on the tour you can choose a route that is better suited for walking or cycling.',
        },
        {
          question: 'How do I order a tour?',
          answer:
            'In the app you choose your tour, complete your order and can start right away.',
        },
      ],
    },
    tours: [
      {
        title: 'Historic Village Walk',
        badge: 'Explore at ease',
        duration: '45–60 min',
        image: '/images/tour-fietsen.jpg',
        points: [
          'Stories about the village and its history',
          'Easy to follow on your own',
          'Ideal as a first introduction',
        ],
        cta: 'Available soon',
        featured: false,
        available: false,
      },
      {
        title: 'Meet Hollum',
        badge: 'Most popular',
        duration: '90 min',
        image: '/images/tour-duinen.jpg',
        points: [
          'A relaxed walk past special places',
          'Live map and audio at exactly the right location',
          'Perfect as a first introduction to Hollum',
        ],
        cta: 'Order now',
        featured: true,
        available: true,
      },
      {
        title: 'Cycling Route through Dunes & Village',
        badge: 'For nature lovers',
        duration: '60–90 min',
        image: '/images/tour-fietsen.jpg',
        points: [
          'Route through landscape and village',
          'Listen at special locations',
          'A complete island experience',
        ],
        cta: 'Available soon',
        featured: false,
        available: false,
      },
    ],
    steps: [
      {
        number: '1',
        title: 'Choose your tour',
        text: 'Choose the route that fits your day on Ameland.',
      },
      {
        number: '2',
        title: 'Order online',
        text: 'Open the tour easily on your phone and start whenever you like.',
      },
      {
        number: '3',
        title: 'Head out',
        text: 'Discover village, dunes and landscape through stories along the way.',
      },
    ],
  },

  de: {
    meta: {
      title: "Wad'n Verhaal | Audiotouren auf Ameland",
      description:
        'Entdecke Ameland mit ruhigen, stimmungsvollen Audiotouren zum Wandern und Radfahren.',
    },
    site: {
      name: "Wad'n Verhaal",
      tagline: 'Audiotouren auf Ameland',
    },
    nav: {
      tours: 'Touren',
      howItWorks: 'So funktioniert es',
      faq: 'FAQ',
      orderNow: 'Jetzt buchen',
    },
    languageSwitcher: {
      label: 'Sprache',
      nl: 'NL',
      en: 'EN',
      de: 'DE',
    },
    home: {
      heroBadge: 'Audiotouren zum Wandern und Radfahren auf Ameland',
      heroTitle: 'Audiotouren zum Wandern und Radfahren auf Ameland',
      heroText:
        'Keine hektische Exkursion, sondern eine ruhige Art, die Insel zu entdecken. Wähle deine Route und erlebe Dorf, Dünen und Landschaft mit Geschichten unterwegs.',
      viewTours: 'Touren ansehen',
      orderNow: 'Jetzt buchen',
      toursEyebrow: 'Touren',
      toursTitle: 'Wähle dein Inselerlebnis',
      toursText:
        'Übersichtlich und ruhig präsentiert. Wähle die Tour, die am besten zu deinem Besuch auf Ameland passt.',
      howItWorksId: 'so-funktioniert-es',
      ctaTitle: 'Buche deine Tour direkt online',
      ctaText:
        'Wähle deine Route, schließe deine Bestellung ab und starte direkt durch Dorf, Dünen und Landschaft.',
      goToApp: 'Zur App',
    },
    footer: {
      description:
        'Audiotouren, die Besucher Amelands auf ruhige, zugängliche und stimmungsvolle Weise entlang der Geschichten der Insel führen.',
      location: 'Ameland, Niederlande',
      quickStart: 'Direkt starten',
      chooseAndOrder: 'Online wählen und buchen',
      quickText:
        'Gehe direkt zur App und wähle die Tour, die zu deinem Spaziergang oder deiner Fahrradtour passt.',
      openApp: 'App öffnen',
      viewFaq: 'FAQ ansehen',
    },
    faq: {
      backToHome: '← Zurück zur Startseite',
      eyebrow: 'FAQ',
      title: 'Häufig gestellte Fragen',
      intro: "Alles, was du über die Audiotouren von Wad'n Verhaal wissen möchtest.",
      items: [
        {
          question: 'Muss ich eine App herunterladen?',
          answer:
            'Nein, du öffnest die Tour ganz einfach auf deinem Handy im Browser.',
        },
        {
          question: 'Kann ich starten, wann ich möchte?',
          answer: 'Ja, du entscheidest selbst, wann du losgehst.',
        },
        {
          question: 'Sind die Touren für Familien geeignet?',
          answer:
            'Ja, Hollum kennenlernen ist auch für Familien geeignet, die das Dorf gemeinsam in ruhiger Atmosphäre entdecken möchten.',
        },
        {
          question: 'Kann ich zwischen Wandern und Radfahren wählen?',
          answer:
            'Ja, je nach Tour wählst du eine Route, die besser zum Wandern oder Radfahren passt.',
        },
        {
          question: 'Wie buche ich eine Tour?',
          answer:
            'In der App wählst du deine Tour, schließt die Bestellung ab und kannst direkt starten.',
        },
      ],
    },
    tours: [
      {
        title: 'Historischer Dorfrundgang',
        badge: 'In Ruhe entdecken',
        duration: '45–60 Min.',
        image: '/images/tour-fietsen.jpg',
        points: [
          'Geschichten über das Dorf und seine Geschichte',
          'Selbstständig und einfach zu folgen',
          'Ideal als erste Einführung',
        ],
        cta: 'Bald verfügbar',
        featured: false,
        available: false,
      },
      {
        title: 'Hollum kennenlernen',
        badge: 'Am beliebtesten',
        duration: '90 Min.',
        image: '/images/tour-duinen.jpg',
        points: [
          'Ein ruhiger Spaziergang entlang besonderer Orte',
          'Live-Karte und Audio genau am richtigen Ort',
          'Perfekt als erster Eindruck von Hollum',
        ],
        cta: 'Jetzt buchen',
        featured: true,
        available: true,
      },
      {
        title: 'Fahrradroute durch Dünen & Dorf',
        badge: 'Für Naturliebhaber',
        duration: '60–90 Min.',
        image: '/images/tour-fietsen.jpg',
        points: [
          'Route durch Landschaft und Dorf',
          'An besonderen Orten zuhören',
          'Ein vollständiges Inselerlebnis',
        ],
        cta: 'Bald verfügbar',
        featured: false,
        available: false,
      },
    ],
    steps: [
      {
        number: '1',
        title: 'Wähle deine Tour',
        text: 'Wähle die Route, die zu deinem Tag auf Ameland passt.',
      },
      {
        number: '2',
        title: 'Direkt online buchen',
        text: 'Öffne die Tour einfach auf deinem Handy und starte, wann du möchtest.',
      },
      {
        number: '3',
        title: 'Unterwegs gehen',
        text: 'Entdecke Dorf, Dünen und Landschaft mit Geschichten unterwegs.',
      },
    ],
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale]
}