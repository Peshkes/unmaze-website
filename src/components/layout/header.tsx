'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { LanguageSwitcher } from './language-switcher'
import { Icon } from '@/components/ui/icon'
import type { Locale } from '@/lib/i18n'
import { t, getLocalePrefix } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const dict = t(locale)
  const prefix = getLocalePrefix(locale)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileOpen])

  const navLinks = [
    { label: dict.nav.home, href: `${prefix}` },
    { label: dict.nav.about, href: `${prefix}/#about` },
    { label: dict.nav.conditions, href: `${prefix}/#conditions` },
    { label: dict.nav.test, href: `${prefix}/tests` },
    { label: dict.nav.blog, href: `${prefix}/blog` },
    { label: dict.nav.faq, href: `${prefix}/#faq` },
  ]

  return (
    <header ref={menuRef}>
      {/* ── Mobile: full-width black bar ── */}
      <div className="fixed top-0 z-[999] w-full bg-black p-5 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href={prefix || '/'}>
            <Logo className="h-5 w-auto text-white" />
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="clickable"
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6 text-white" />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col items-start gap-4 pt-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="clickable text-sm text-white no-underline transition-opacity hover:underline hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${prefix}/#footer`}
              onClick={() => setMobileOpen(false)}
              className="clickable text-sm text-white no-underline hover:underline"
            >
              {dict.nav.contact}
            </a>
          </nav>
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