import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary, Locale } from '@/lib/i18n'
import { getLocalePrefix } from '@/lib/i18n'

interface HeroProps {
  dict: Dictionary
  locale: Locale
}

export function Hero({ dict, locale }: HeroProps) {
  const prefix = getLocalePrefix(locale)

  return (
    <section className="pt-[75px] lg:pt-0">
      <h1 className="wrapper relative z-10 reveal">
        {dict.hero.greeting}{' '}
        <span className="brand-font">un</span>maze — {dict.hero.subtitle}
      </h1>

      <div className="relative flex h-[45vh] items-end justify-center bg-bg-alt xl:h-[80vh] xl:max-h-[900px]">
        <Image
          src="/images/iphone.webp"
          alt="Unmaze app"
          width={300}
          height={600}
          className="z-10 h-[90%] w-auto xl:h-[95%]"
          priority
        />
        <Image
          src="/images/mess1.webp"
          alt=""
          width={400}
          height={400}
          className="deco !z-0 right-0 top-0 w-[40%] max-w-[500px] -translate-y-[25%] object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="cta-button">
        <Link href={`${prefix}/test`}>
          {dict.hero.cta}
          <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}
