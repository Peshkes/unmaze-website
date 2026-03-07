export type { Dictionary, Locale } from './types'
export { ru } from './ru'
export { en } from './en'
export { he } from './he'

import { ru } from './ru'
import { en } from './en'
import { he } from './he'
import type { Locale } from './types'

const dict = { ru, en, he } as const

export function t(locale: Locale) {
  return dict[locale]
}

export function getLocalePrefix(locale: Locale): string {
  return `/${locale}`
}

export function isRtl(locale: Locale): boolean {
  return locale === 'he'
}
