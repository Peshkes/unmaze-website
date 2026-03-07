import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'

interface HeroAProps {
  dict: Dictionary
  locale: Locale
}

export function HeroA({ dict, locale }: HeroAProps) {
  const prefix = getLocalePrefix(locale)

  return (
    <section className="wrapper relative overflow-hidden pt-[75px] lg:pt-[120px]">
      <div className="mx-auto flex max-w-[var(--max-width)] flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
        {/* Text column */}
        <div className="relative z-10 flex-1 reveal">
          <p className="mb-2 text-[length:var(--text-body)] font-medium uppercase tracking-widest text-text-muted">
            {dict.hero.greeting}
          </p>
          <h1 className="!mb-0 !text-[length:clamp(2.5rem,1rem+7vw,7.5rem)] !leading-[0.85]">
            <span className="brand-font !text-[length:clamp(4rem,1rem+11vw,11rem)]">un</span>maze
          </h1>
          <p className="mt-2 max-w-[520px] text-[length:var(--text-body)] font-medium uppercase tracking-widest text-text-muted">
            {dict.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="mt-12 lg:mt-16">
            <div className="cta-button !mx-0">
              <Link href={`${prefix}/test`}>
                {dict.hero.cta}
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Trust line */}
          <p className="mt-2 text-[length:var(--text-small)] tracking-wide text-text-muted">
            {dict.hero.trust}
          </p>
        </div>

        {/* Visual column */}
        <div className="relative flex flex-1 items-end justify-center">
          <Image
            src="/images/mess1.webp"
            alt=""
            width={400}
            height={400}
            className="deco !z-20 right-4 w-[55%] max-w-[320px] object-contain"
            style={{ top: 'clamp(-80px, -5vw, -40px)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 rounded-[2.5rem] bg-bg-alt px-10 pt-10 pb-0 lg:px-16 lg:pt-14">
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
      </div>

      {/* Scroll down indicator */}
      <a href="#about" className="mt-12 flex flex-col items-center gap-2 lg:mt-16">
        <span className="text-[length:var(--text-small)] text-text-muted">
          {dict.hero.ctaSecondary}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce text-text-muted"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
