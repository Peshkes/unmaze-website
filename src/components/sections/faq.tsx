'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface FaqProps {
  dict: Dictionary
}

export function Faq({ dict }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="wrapper">
      <h2 className="reveal">{dict.faq.heading}</h2>

      {/* ── Desktop: Spotlight layout ── */}
      <div className="reveal hidden md:flex md:gap-8 lg:gap-12">
        {/* Left — question list */}
        <div className="flex w-[40%] flex-col gap-2">
          {dict.faq.items.map((item, i) => {
            const isActive = activeIndex === i
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-xl px-5 py-4 text-start text-[length:var(--text-body)] transition-all duration-300 ${
                  isActive
                    ? 'bg-black text-white'
                    : 'bg-transparent text-text-body hover:bg-bg-light'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="shrink-0 text-[length:var(--text-small)] opacity-40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{item.question}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Right — answer display */}
        <div className="relative flex w-[60%] items-start">
          {dict.faq.items.map((item, i) => {
            const isActive = activeIndex === i
            return (
              <div
                key={i}
                className={`${isActive ? '' : 'pointer-events-none absolute inset-0'} transition-all duration-500 ${
                  isActive
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                aria-hidden={!isActive}
              >
                <div className="rounded-2xl bg-bg-light p-8 lg:p-10">
                  <p className="m-0 text-[length:var(--text-subheading)] leading-[1.2]">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Mobile: Minimal Accordion ── */}
      <div className="reveal-group md:hidden">
        {dict.faq.items.map((item, i) => {
          const isOpen = activeIndex === i
          return (
            <div
              key={i}
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-5 text-start"
              >
                <span className="flex items-center gap-3 pe-4">
                  <span className="shrink-0 text-[length:var(--text-small)] text-text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[length:var(--text-body)] font-medium">
                    {item.question}
                  </span>
                </span>

                {/* Plus/minus icon with morph animation */}
                <span
                  className="relative flex h-5 w-5 shrink-0 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="absolute h-[1.5px] w-full bg-black transition-transform duration-300" />
                  <span
                    className={`absolute h-[1.5px] w-full bg-black transition-transform duration-300 ${
                      isOpen ? 'rotate-0' : 'rotate-90'
                    }`}
                  />
                </span>
              </button>

              {/* Collapsible answer */}
              <div
                className="faq-answer"
                data-open={isOpen}
              >
                <div>
                  <div className="pb-5 ps-9">
                    <p className="m-0 text-[length:var(--text-body)] text-text-body">
                      {item.answer}
                    </p>
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
