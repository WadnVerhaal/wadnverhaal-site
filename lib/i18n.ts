export const locales = ['nl', 'en', 'de'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'nl'

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
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
  }
  nav: {
    tours: string
    howItWorks: string
    faq: string
  }
  faq: {
    backToHome: string
    eyebrow: string
    title: string
    intro: string
    items: FaqItem[]
  }
}

export const translations: Record<Locale, Translation> = {
  nl: {
    meta: {
      title: 'Ameland Audiotours | Wandel en luister door Ameland',
      description: 'Zelfgeleide audiowandelingen op Ameland. Volg de route, loop naar iedere stop en luister naar lokale verhalen op de plek waar ze thuishoren.',
    },
    site: { name: 'Ameland Audiotours' },
    nav: { tours: 'Tour', howItWorks: 'Hoe het werkt', faq: 'FAQ' },
    faq: {
      backToHome: 'Terug naar de website',
      eyebrow: 'Praktische informatie',
      title: 'Veelgestelde vragen',
      intro: 'Alles wat je vooraf wilt weten over bestellen, starten, lopen en luisteren.',
      items: [
        {
          question: 'Moet ik een app downloaden?',
          answer: 'Nee. De tour werkt rechtstreeks in de browser van je telefoon. Je hoeft geen account aan te maken of iets te installeren.',
        },
        {
          question: 'Wanneer begint de tour?',
          answer: 'De tour begint pas nadat je jouw persoonlijke link hebt geopend en zelf op Start de wandeling drukt. Daarna vraagt de app toestemming voor je locatie.',
        },
        {
          question: 'Hoe werkt de navigatie?',
          answer: 'De kaart toont steeds één volgende stop en maakt een wandelroute vanaf jouw huidige locatie. Bij aankomst wordt het verhaal beschikbaar.',
        },
        {
          question: 'Wat gebeurt er als GPS mij niet herkent?',
          answer: 'Bij iedere stop staat ook de knop Ik ben bij de stop. Daarmee kun je de audio handmatig vrijgeven wanneer je aantoonbaar op de juiste plek bent.',
        },
        {
          question: 'Kan ik pauzeren en later verdergaan?',
          answer: 'Ja. Je voortgang wordt op je telefoon bewaard. De persoonlijke toegang blijft 48 uur actief.',
        },
        {
          question: 'Heb ik een koptelefoon nodig?',
          answer: 'Dat hoeft niet, maar één oortje of open-ear audio geeft onderweg de prettigste en veiligste ervaring.',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Ameland Audiotours | Walk and listen across Ameland',
      description: 'Self-guided audio walks on Ameland. Follow the route, walk to each stop and hear local stories exactly where they belong.',
    },
    site: { name: 'Ameland Audiotours' },
    nav: { tours: 'Tour', howItWorks: 'How it works', faq: 'FAQ' },
    faq: {
      backToHome: 'Back to the website',
      eyebrow: 'Practical information',
      title: 'Frequently asked questions',
      intro: 'Everything you need to know about booking, starting, walking and listening.',
      items: [
        {
          question: 'Do I need to download an app?',
          answer: 'No. The tour works directly in your phone browser. No account or installation is required.',
        },
        {
          question: 'When does the tour start?',
          answer: 'The tour only starts after you open your personal link and press Start the walk yourself. The app then asks for location permission.',
        },
        {
          question: 'How does navigation work?',
          answer: 'The map shows one next stop at a time and creates a walking route from your current location. The story becomes available when you arrive.',
        },
        {
          question: 'What if GPS does not recognise me?',
          answer: 'Every stop also has an I am at the stop button. Use it to unlock the audio manually when you are at the correct location.',
        },
        {
          question: 'Can I pause and continue later?',
          answer: 'Yes. Your progress is saved on your phone. Your personal access remains active for 48 hours.',
        },
        {
          question: 'Do I need headphones?',
          answer: 'Not necessarily, but one earbud or open-ear audio gives the most comfortable and safest experience while walking.',
        },
      ],
    },
  },
  de: {
    meta: {
      title: 'Ameland Audiotours | Wandern und zuhören auf Ameland',
      description: 'Selbstgeführte Audiowanderungen auf Ameland. Folge der Route, gehe zu jedem Stopp und höre lokale Geschichten am passenden Ort.',
    },
    site: { name: 'Ameland Audiotours' },
    nav: { tours: 'Tour', howItWorks: 'So funktioniert es', faq: 'FAQ' },
    faq: {
      backToHome: 'Zurück zur Website',
      eyebrow: 'Praktische Informationen',
      title: 'Häufig gestellte Fragen',
      intro: 'Alles, was du über Buchung, Start, Wanderung und Audio wissen möchtest.',
      items: [
        {
          question: 'Muss ich eine App herunterladen?',
          answer: 'Nein. Die Tour funktioniert direkt im Browser deines Handys. Ein Konto oder eine Installation ist nicht nötig.',
        },
        {
          question: 'Wann beginnt die Tour?',
          answer: 'Die Tour beginnt erst, nachdem du deinen persönlichen Link geöffnet und selbst auf Wanderung starten gedrückt hast. Danach fragt die App nach der Standortfreigabe.',
        },
        {
          question: 'Wie funktioniert die Navigation?',
          answer: 'Die Karte zeigt immer nur den nächsten Stopp und erstellt eine Fußroute von deinem aktuellen Standort. Bei der Ankunft wird die Geschichte verfügbar.',
        },
        {
          question: 'Was mache ich, wenn GPS mich nicht erkennt?',
          answer: 'Bei jedem Stopp gibt es zusätzlich die Schaltfläche Ich bin am Stopp. Damit kannst du das Audio am richtigen Ort manuell freigeben.',
        },
        {
          question: 'Kann ich pausieren und später fortfahren?',
          answer: 'Ja. Dein Fortschritt wird auf deinem Handy gespeichert. Der persönliche Zugang bleibt 48 Stunden aktiv.',
        },
        {
          question: 'Brauche ich Kopfhörer?',
          answer: 'Nicht unbedingt. Ein Ohrhörer oder Open-Ear-Audio bietet unterwegs jedoch das angenehmste und sicherste Erlebnis.',
        },
      ],
    },
  },
}

export function getTranslation(locale: Locale) {
  return translations[locale]
}
