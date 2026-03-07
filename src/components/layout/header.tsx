'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { LanguageSwitcher } from './language-switcher'
import type { Locale } from '@/lib/i18n'
import { t, getLocalePrefix } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { label: dict.nav.home, href: `${prefix}` },
    { label: dict.nav.about, href: `${prefix}/#about` },
    { label: dict.nav.conditions, href: `${prefix}/#conditions` },
    { label: dict.nav.test, href: `${prefix}/tests` },
    { label: dict.nav.blog, href: `${prefix}/blog` },
    { label: dict.nav.faq, href: `${prefix}/#faq` },
    { label: dict.nav.contact, href: `${prefix}/#footer` },
  ]

  return (
    <header>
      {/* ── Mobile: thin black bar (above overlay) ── */}
      <div className="fixed top-0 z-[1001] flex w-full items-center justify-between bg-black px-4 py-3 lg:hidden">
        <Link href={prefix || '/'} className="relative z-[1001]">
          <Logo className="h-5 w-auto text-white" />
        </Link>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="relative z-[1001] flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[2px] w-5 bg-white transition-all duration-300 ease-out ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-white transition-all duration-300 ease-out ${
              mobileOpen ? 'scale-x-0 opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-white transition-all duration-300 ease-out ${
              mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* ── Mobile: full-screen overlay ── */}
      <div
        className={`fixed inset-0 z-[1000] flex flex-col bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-light text-white no-underline transition-all duration-500 hover:opacity-70"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className="px-8 pb-10 transition-all duration-500"
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : '0ms',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <div className="mb-6">
            <LanguageSwitcher locale={locale} />
          </div>
          <div className="cta-button !mx-0 !mt-0">
            <a href="#" onClick={() => setMobileOpen(false)}>
              {dict.hero.cta}
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop: fixed black nav pill + language switcher ── */}
      <div className="hidden lg:fixed lg:top-0 lg:z-[999] lg:flex lg:w-full lg:items-center lg:justify-center lg:py-3">
        <nav className="flex items-center gap-12 rounded-2xl bg-black px-24 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="clickable text-base text-white no-underline transition-opacity hover:underline hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="absolute" style={{ right: 'var(--space-wrapper-x)' }}>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  )
}