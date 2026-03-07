import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'

interface GuideProps {
  dict: Dictionary
  locale: Locale
}

export function Guide({ dict, locale }: GuideProps) {
  const prefix = getLocalePrefix(locale)

  return (
    <section className="wrapper">
      <div className="reveal relative overflow-hidden rounded-3xl bg-black px-6 py-12 text-white md:px-16 md:py-20">
        <div className="relative z-10 max-w-[700px]">
          <h2 className="mb-6 text-white md:mb-10">
            {dict.guide.heading}
          </h2>
          <p className="m-0 text-[length:var(--text-subheading)] leading-[1.2] text-white/80">
            {dict.guide.subtext}
            <Link
              href={`${prefix}/test`}
              className="clickable font-bold text-white underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {dict.guide.linkText}
            </Link>
            {dict.guide.subtextEnd}
          </p>
        </div>
        <div className="relative z-10 mt-8 w-fit rounded-lg bg-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgb(255_255_255/0.15)] md:mt-12">
          <Link
            href={`${prefix}/test`}
            className="clickable block px-10 py-3 text-[length:var(--text-small)] font-medium text-black no-underline md:px-14 md:py-4"
          >
            {dict.guide.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}