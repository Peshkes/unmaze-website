import { Manrope, Noto_Sans_Hebrew } from 'next/font/google'
import localFont from 'next/font/local'

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

export const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ['hebrew'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-hebrew',
})

export const emotical = localFont({
  src: '../../public/fonts/MyEmoticalTypeface.ttf',
  variable: '--font-emotical',
  display: 'swap',
})
