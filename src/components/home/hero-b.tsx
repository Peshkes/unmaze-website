import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'

interface HeroBProps {
  dict: Dictionary
  locale: Locale
}

export function HeroB({ dict, locale }: HeroBProps) {
  const prefix = getLocalePrefix(locale)

  return (
    <section className="relative overflow-hidden pt-[75px] lg:pt-[100px]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-alt to-bg" aria-hidden="true" />

      <div className="wrapper relative z-10">
        {/* Centered heading */}
        <div className="mx-auto max-w-[800px] text-center reveal">
          <h1 className="mb-4">
            {dict.hero.greeting}{' '}
            <span className="brand-font">un</span>maze
          </h1>
          <p className="mx-auto max-w-[600px] text-[length:var(--text-subheading)] leading-snug text-text-body">
            {dict.hero.subtitle}
          </p>
        </div>

        {/* CTAs centered */}
        <div className="mt-8 flex flex-col items-center gap-4 lg:mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="cta-button">
              <Link href={`${prefix}/test`}>
                {dict.hero.cta}
                <span className="arrow">→</span>
              </Link>
            </div>
            <Link
              href={`${prefix}#features`}
              className="rounded-lg border border-border px-6 py-3 text-[length:var(--text-small)] font-medium text-text transition-colors hover:bg-bg-light"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>
          <p className="text-[length:var(--text-small)] tracking-wide text-text-muted">
            {dict.hero.trust}
          </p>
        </div>
      </div>

      {/* Phone visual — overlapping with deco */}
      <div className="relative z-10 mx-auto mt-10 flex justify-center lg:mt-16">
        <Image
          src="/images/mess1.webp"
          alt=""
          width={400}
          height={400}
          className="deco !z-0 end-[10%] top-0 w-[30%] max-w-[350px] -translate-y-[20%] object-contain"
          aria-hidden="true"
        />
        <Image
          src="/images/mess2.webp"
          alt=""
          width={400}
          height={400}
          className="deco !z-0 bottom-[10%] start-[5%] w-[25%] max-w-[300px] object-contain"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Image
            src="/images/iphone.webp"
            alt="Unmaze app"
            width={300}
            height={600}
            className="h-auto w-[220px] lg:w-[300px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}