import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { manrope, emotical, notoSansHebrew } from '@/lib/fonts'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Cursor } from '@/components/layout/cursor'
import { RevealProvider } from '@/components/ui/reveal-provider'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Unmaze — עזרה לילדים עם דיסלקציה',
    template: '%s | Unmaze',
  },
}

export default function HeLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${manrope.variable} ${emotical.variable} ${notoSansHebrew.variable}`}
    >
      <body>
        <Cursor />
        <RevealProvider />
        <Header locale="he" />
        <div className="lg:pt-16">{children}</div>
        <Footer locale="he" />
      </body>
    </html>
  )
}
