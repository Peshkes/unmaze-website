'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'

const CONDITION_KEYS = ['dyslexia', 'dyscalculia', 'adhd'] as const
type ConditionKey = (typeof CONDITION_KEYS)[number]

interface ConditionsProps {
  dict: Dictionary
  locale: Locale
}

export function Conditions({ dict, locale }: ConditionsProps) {
  const [active, setActive] = useState<ConditionKey | null>(null)
  const prefix = getLocalePrefix(locale)

  return (
    <section id="conditions" className="wrapper">
      <h2 className="reveal">{dict.conditions.heading}</h2>

      <div className="reveal-group">
        {CONDITION_KEYS.map((key) => {
          const isActive = active === key
          const tab = dict.conditions[key]

          return (
            <div key={key}>
              <div className="border-b border-border">
                {/* Header row — always visible */}
                {/* Header row — clickable */}
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : key)}
                  className={`clickable flex w-full items-center justify-between py-6 text-start transition-all duration-300 md:py-8 ${
                    isActive ? '' : 'hover:ps-3'
                  }`}
                >
                  <span
                    className={`text-[length:var(--text-subheading)] transition-all duration-300 md:text-[length:var(--text-heading)] md:leading-[0.95] ${
                      isActive ? 'font-medium md:font-normal' : 'text-text-muted'
                    }`}
                  >
                    {tab.label.toUpperCase()}
                  </span>

                  {/* Plus/minus icon */}
                  <span
                    className="relative flex h-6 w-6 shrink-0 items-center justify-center md:h-8 md:w-8"
                    aria-hidden="true"
                  >
                    <span className="absolute h-[1.5px] w-full bg-current transition-transform duration-300" />
                    <span
                      className={`absolute h-[1.5px] w-full bg-current transition-transform duration-300 ${
                        isActive ? 'rotate-0' : 'rotate-90'
                      }`}
                    />
                  </span>
                </button>

                {/* Expandable content */}
                <div
                  className="faq-answer"
                  data-open={isActive}
                >
                  <div>
                    <div className="pb-8 md:pb-12">
                      <p className="mb-4 text-[length:var(--text-body)] leading-relaxed text-text-body md:mb-6 md:max-w-[700px]">
                        {tab.description}
                      </p>

                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:max-w-[900px] md:gap-4">
                        {tab.symptoms.map((symptom, i) => (
                          <div key={i} className="flex gap-4 rounded-xl bg-bg-light px-4 py-3 md:px-5 md:py-4">
                            <span className="shrink-0 text-[length:var(--text-subheading)] font-normal leading-none text-border">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-[length:var(--text-body)] leading-snug">
                              {symptom}
                            </span>
                          </div>
                        ))}

                        {/* Learn more — last list item, narrower */}
                        <div>
                          <Link
                            href={`${prefix}/${key}`}
                            className="clickable group/link inline-flex items-center gap-3 rounded-xl bg-text-muted px-5 py-3 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_8px_24px_rgb(0_0_0/0.15)] md:px-6 md:py-4"
                          >
                            <span className="text-[length:var(--text-small)] text-white/40 transition-transform duration-300 group-hover/link:-translate-y-0.5">
                              &uarr;
                            </span>
                            <span className="text-[length:var(--text-body)] font-medium leading-snug text-white">
                              {tab.learnMore}
                            </span>
                          </Link>
                        </div>
                      </div>

                      {/* Take test CTA */}
                      <div className="mt-8 md:mt-10">
                        <Link
                          href={`${prefix}/test/${key}`}
                          className="clickable inline-block rounded-lg bg-black px-8 py-3 text-[length:var(--text-small)] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(0_0_0/0.15)] md:px-10 md:py-4 md:text-[length:var(--text-body)]"
                        >
                          {dict.conditions.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}