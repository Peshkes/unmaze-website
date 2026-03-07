import type { ru } from './ru'

type DeepString<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { [K in keyof T]: DeepString<T[K]> }
    : T extends object
      ? { [K in keyof T]: DeepString<T[K]> }
      : T

export type Dictionary = DeepString<typeof ru>
export type Locale = 'ru' | 'en' | 'he'
