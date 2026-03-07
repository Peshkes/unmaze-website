import { t } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { generateOrganizationJsonLd, generateWebSiteJsonLd, generateFAQJsonLd } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { HeroA } from '@/components/home/hero-a'
import { Features } from '@/components/home/features'
import { Conditions } from '@/components/home/conditions'
import { Videos } from '@/components/home/videos'
import { Guide } from '@/components/home/guide'
import { ArticlesPreview } from '@/components/sections/articles-preview'
import { Faq } from '@/components/sections/faq'

interface HomePageContentProps {
  locale: Locale
}

export function HomePageContent({ locale }: HomePageContentProps) {
  const dict = t(locale)

  return (
    <main>
      <JsonLd data={generateOrganizationJsonLd()} />
      <JsonLd data={generateWebSiteJsonLd()} />
      <JsonLd
        data={generateFAQJsonLd(
          dict.faq.items.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))
        )}
      />
      <HeroA dict={dict} locale={locale} />
      <Features dict={dict} />
      <Videos dict={dict} />
      <Conditions dict={dict} locale={locale} />
      <Guide dict={dict} locale={locale} />
      <ArticlesPreview dict={dict} locale={locale} />
      <Faq dict={dict} />
    </main>
  )
}