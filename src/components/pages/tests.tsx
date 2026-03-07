import Link from 'next/link'
import { t, getLocalePrefix } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'

interface TestsPageContentProps {
  locale: Locale
}

export function TestsPageContent({ locale }: TestsPageContentProps) {
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)

  return (
    <main>
      <section className="wrapper">
        <h1 className="reveal">{dict.tests.heading}</h1>
        <p className="reveal mb-10 max-w-[700px] text-[length:var(--text-subheading)] leading-[1.2] text-text-body md:mb-14">
          {dict.tests.description}
        </p>

        <div className="reveal-group flex flex-col gap-4 md:gap-6">
          {dict.tests.items.map((item, i) => (
            <div key={i}>
              <Link
                href={`${prefix}/test/${item.key}`}
                className="clickable group block overflow-hidden rounded-2xl border border-border no-underline transition-all duration-500 hover:border-black hover:shadow-[0_16px_48px_rgb(0_0_0/0.08)]"
              >
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-10">
                  <div className="flex flex-1 items-start gap-5 md:gap-8">
                    <span className="shrink-0 text-[length:var(--text-heading)] font-normal leading-none text-border transition-colors duration-500 group-hover:text-black">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="m-0 text-[length:var(--text-subheading)] font-medium leading-tight md:text-[length:var(--text-heading)] md:font-normal md:leading-[0.95]">
                        {item.title}
                      </h2>
                      <p className="mb-0 mt-1 text-[length:var(--text-small)] font-medium uppercase tracking-widest text-text-muted">
                        {item.subtitle}
                      </p>
                      <p className="mb-0 mt-3 max-w-[500px] text-[length:var(--text-body)] leading-relaxed text-text-body md:mt-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 ps-14 md:ps-0">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-2.5 text-[length:var(--text-small)] text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_24px_rgb(0_0_0/0.15)] md:px-8 md:py-3">
                      {dict.conditions.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}