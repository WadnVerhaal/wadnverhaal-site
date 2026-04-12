import { createClient } from '@supabase/supabase-js'
import type { Locale } from '@/lib/i18n'

type SiteBlockTranslationRow = {
  eyebrow: string | null
  title: string | null
  subtitle: string | null
  body: string | null
  primary_cta_label: string | null
  primary_cta_url: string | null
  secondary_cta_label: string | null
  secondary_cta_url: string | null
  items: string[] | null
}

type FaqRow = {
  question: string
  answer: string
}

type ContactSettings = {
  email: string
  phone: string
  location: string
}

function getSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error('Missing Supabase server environment variables')
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

export async function getSiteBlock(
  key: string,
  locale: Locale
): Promise<SiteBlockTranslationRow | null> {
  const supabase = getSupabaseAdminClient()

  const { data, error } = await supabase
    .from('site_block_translations')
    .select(`
      eyebrow,
      title,
      subtitle,
      body,
      primary_cta_label,
      primary_cta_url,
      secondary_cta_label,
      secondary_cta_url,
      items,
      site_blocks!inner (
        key,
        is_active
      )
    `)
    .eq('block_key', key)
    .eq('locale', locale)
    .single()

  if (error) {
    return null
  }

  return {
    eyebrow: data.eyebrow,
    title: data.title,
    subtitle: data.subtitle,
    body: data.body,
    primary_cta_label: data.primary_cta_label,
    primary_cta_url: data.primary_cta_url,
    secondary_cta_label: data.secondary_cta_label,
    secondary_cta_url: data.secondary_cta_url,
    items: Array.isArray(data.items) ? data.items : [],
  }
}

export async function getFaqItems(locale: Locale): Promise<FaqRow[]> {
  const supabase = getSupabaseAdminClient()

  const { data, error } = await supabase
    .from('faq_items')
    .select(`
      sort_order,
      is_active,
      faq_item_translations!inner (
        locale,
        question,
        answer
      )
    `)
    .eq('is_active', true)
    .eq('faq_item_translations.locale', locale)
    .order('sort_order', { ascending: true })

  if (error || !data) {
    return []
  }

  return data
    .map((row: any) => {
      const translation = Array.isArray(row.faq_item_translations)
        ? row.faq_item_translations[0]
        : row.faq_item_translations

      if (!translation?.question || !translation?.answer) {
        return null
      }

      return {
        question: translation.question,
        answer: translation.answer,
      }
    })
    .filter(Boolean) as FaqRow[]
}

export async function getContactSettings(): Promise<ContactSettings | null> {
  const supabase = getSupabaseAdminClient()

  const { data, error } = await supabase
    .from('site_settings')
    .select('value_json')
    .eq('key', 'contact')
    .single()

  if (error || !data?.value_json) {
    return null
  }

  return {
    email: String(data.value_json.email || ''),
    phone: String(data.value_json.phone || ''),
    location: String(data.value_json.location || ''),
  }
}