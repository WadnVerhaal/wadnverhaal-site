export default function FaqPage() {
  const faqItems = [
    {
      question: 'Moet ik een app downloaden?',
      answer: 'Nee, je opent de tour eenvoudig op je telefoon via de browser.'
    },
    {
      question: 'Kan ik starten wanneer ik wil?',
      answer: 'Ja, je kiest zelf het moment waarop je op pad gaat.'
    },
    {
      question: 'Zijn de tours geschikt voor gezinnen?',
      answer: 'Ja, Maak kennis met Hollum is ook geschikt voor gezinnen die op een rustige manier samen het dorp willen ontdekken.'
    },
    {
      question: 'Kan ik kiezen tussen wandelen en fietsen?',
      answer: 'Ja, afhankelijk van de tour kies je een route die beter past bij wandelen of fietsen.'
    },
    {
      question: 'Hoe bestel ik een tour?',
      answer: 'Via de app kies je jouw tour, rond je bestelling af en kun je direct starten.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-16 text-[#2F4A4A]">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-medium text-[#6E7B75] hover:text-[#2F4A4A]">
          ← Terug naar home
        </a>

        <div className="mt-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7B8780]">FAQ</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">Veelgestelde vragen</h1>
          <p className="mt-4 text-lg leading-8 text-[#5F6D67]">
            Alles wat je wilt weten over de audiotours van Wad&apos;n Verhaal.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((faq) => (
            <div key={faq.question} className="rounded-[1.5rem] border border-[#DDD4C7] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold">{faq.question}</h2>
              <p className="mt-3 leading-7 text-[#5F6D67]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}