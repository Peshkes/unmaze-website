'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { t } from '@/lib/i18n'

interface LanguageSwitcherProps {
  locale: Locale
}

const locales: Locale[] = ['ru', 'en', 'he']

function getLocalizedPath(pathname: string, currentLocale: Locale, targetLocale: Locale): string {
  // Strip current locale prefix
  const path = pathname.replace(new RegExp(`^/${currentLocale}`), '') || '/'

  // Add target locale prefix
  return `/${targetLocale}${path === '/' ? '' : path}`
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const dict = t(locale)

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={getLocalizedPath(pathname, locale, loc)}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            loc === locale
              ? 'bg-black text-white'
              : 'text-text-muted hover:text-text'
          }`}
          hrefLang={loc}
        >
          {dict.languageSwitcher[loc]}
        </Link>
      ))}
    </div>
  )
}
