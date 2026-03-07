import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'

type ConditionKey = 'dyslexia' | 'dyscalculia' | 'adhd'

interface ConditionPageProps {
  dict: Dictionary
  locale: Locale
  condition: ConditionKey
}

export function ConditionPage({ dict, locale, condition }: ConditionPageProps) {
  const prefix = getLocalePrefix(locale)
  const page = dict.conditionPages[condition]

  return (
    <main>
      <section className="wrapper pt-[75px] lg:pt-0">
        <h1 className="reveal">{page.heading}</h1>
      </section>

      {/* What is it */}
      <section className="wrapper">
        <div className="reveal rounded-2xl bg-bg-light p-5 md:p-7 xl:p-10">
          <h2 className="!text-[length:var(--text-subheading)] !mb-4">{page.whatIs.heading}</h2>
          <p className="m-0 text-[length:var(--text-body)] leading-relaxed">
            {page.whatIs.text}
          </p>
        </div>
      </section>

      {/* Signs */}
      <section className="wrapper">
        <h2 className="reveal">{page.signs.heading}</h2>
        <div className="reveal-group grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
          {page.signs.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-bg-light p-5 transition-all duration-300 hover:shadow-[0_8px_24px_rgb(0_0_0/0.08)] md:p-7"
            >
              <p className="m-0 text-[length:var(--text-body)] leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How Unmaze helps */}
      <section className="wrapper">
        <h2 className="reveal">{page.howHelps.heading}</h2>
        <p className="reveal text-[length:var(--text-body)] leading-relaxed">
          {page.howHelps.text}
        </p>
        <ul className="reveal list-disc ps-5 md:ps-8">
          {page.howHelps.items.map((item, i) => (
            <li key={i} className="mb-2 text-[length:var(--text-body)] leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <div className="cta-button">
          <Link href={`${prefix}/test`}>
            {page.cta}
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
