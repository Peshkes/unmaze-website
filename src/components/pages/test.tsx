import { t, getLocalePrefix } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { generateWebPageJsonLd } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { DyslexiaTest } from '@/components/test/dyslexia-test'

interface TestPageContentProps {
  locale: Locale
}

export function TestPageContent({ locale }: TestPageContentProps) {
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)

  return (
    <main className="px-4 pt-24 pb-16 md:px-8 md:pt-32">
      <JsonLd
        data={generateWebPageJsonLd({
          title: dict.test.heading,
          description: dict.test.description,
          url: `https://unmaze.app${prefix}/test`,
          breadcrumb: [
            { name: 'Unmaze', url: `https://unmaze.app${prefix}` },
            { name: dict.test.heading, url: `https://unmaze.app${prefix}/test` },
          ],
        })}
      />
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-2xl font-normal md:text-4xl lg:text-6xl">
          {dict.test.heading}
        </h1>
        <p className="mb-10 text-text-body md:text-lg">{dict.test.description}</p>
        <DyslexiaTest locale={locale} dict={dict} />
      </div>
    </main>
  )
}