import type { Metadata } from 'next'
import BrandFaqPage from '@/components/brand-faq-page'
import { getTranslation, isValidLocale, locales, type Locale } from '@/lib/i18n'
import { getContactSettings, getFaqItems } from '@/lib/data/site-content'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ lang: string }> }

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) return { title: 'FAQ | Ameland Audiotours', description: 'Veelgestelde vragen' }
  const t = getTranslation(lang)
  return { title: `${t.faq.title} | ${t.site.name}`, description: t.faq.intro }
}

export default async function FaqPage({ params }: Props) {
  const { lang } = await params
  if (!isValidLocale(lang)) notFound()

  const locale = lang as Locale
  const t = getTranslation(locale)
  const [faqItems, contact] = await Promise.all([getFaqItems(locale), getContactSettings()])

  return (
    <BrandFaqPage
      locale={locale}
      siteName={t.site.name}
      nav={t.nav}
      title={t.faq.title}
      intro={t.faq.intro}
      items={faqItems.length > 0 ? faqItems : t.faq.items}
      footerText={t.footer.description}
      email={contact?.email || 'info@amelandaudiotours.nl'}
      phone={contact?.phone || ''}
    />
  )
}
