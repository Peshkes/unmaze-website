import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n'
import { t, getLocalePrefix } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)

  return (
    <footer id="footer" className="wrapper pb-8">
      {/* Top row */}
      <div className="reveal-group grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Contact */}
        <div className="space-y-1">
          <p className="text-sm text-text-muted">{dict.footer.businessEmail}</p>
          <a
            href={`mailto:${dict.footer.email}`}
            className="clickable block text-sm text-black no-underline hover:underline"
          >
            {dict.footer.email}
          </a>
          <p className="pt-3 text-sm text-text-muted">{dict.footer.callUs}</p>
          <a
            href={`tel:${dict.footer.phone.replace(/\s/g, '')}`}
            className="clickable block text-sm text-black no-underline hover:underline"
          >
            {dict.footer.phone}
          </a>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2">
          {[
            { label: dict.nav.about, href: `${prefix}/#about` },
            { label: dict.nav.conditions, href: `${prefix}/#conditions` },
            { label: dict.nav.test, href: `${prefix}/test`, isLink: true },
            { label: dict.nav.blog, href: `${prefix}/blog`, isLink: true },
            { label: dict.nav.faq, href: `${prefix}/#faq` },
          ].map((item) =>
            item.isLink ? (
              <Link
                key={item.href}
                href={item.href}
                className="clickable text-sm text-black no-underline hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="clickable text-sm text-black no-underline hover:underline"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Social */}
        <div className="flex flex-col gap-2">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="clickable text-sm text-black no-underline hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noreferrer"
            className="clickable text-sm text-black no-underline hover:underline"
          >
            Telegram
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-1">
          <Link
            href={`${prefix}/privacy`}
            className="clickable text-xs text-text-muted no-underline hover:underline"
          >
            {dict.footer.privacy}
          </Link>
          <p className="text-xs text-text-muted">{dict.footer.rights}</p>
        </div>
        <Image
          src="/images/logo147black.webp"
          alt="Unmaze"
          width={147}
          height={20}
          className="h-auto w-[120px]"
        />
      </div>
    </footer>
  )
}
