'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SUPPORTED_LOCALES = ['ru', 'en', 'he'] as const
const DEFAULT_LOCALE = 'en'

function detectLocale(): string {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const languages = navigator.languages ?? [navigator.language]

  for (const lang of languages) {
    const code = lang.split('-')[0]?.toLowerCase()
    if (code && SUPPORTED_LOCALES.includes(code as (typeof SUPPORTED_LOCALES)[number])) {
      return code
    }
  }

  return DEFAULT_LOCALE
}

export default function DetectPage() {
  const router = useRouter()

  useEffect(() => {
    const locale = detectLocale()
    router.replace(`/${locale}`)
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-black/20 border-t-black" />
    </div>
  )
}
