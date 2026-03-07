import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { manrope, emotical } from '@/lib/fonts'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Cursor } from '@/components/layout/cursor'
import { RevealProvider } from '@/components/ui/reveal-provider'
import '../globals.css'

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: {
    default: 'Unmaze — помощь детям с дислексией',
    template: '%s | Unmaze',
  },
}

export default function RuLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" dir="ltr" className={`${manrope.variable} ${emotical.variable}`}>
      <body>
        <Cursor />
        <RevealProvider />
        <Header locale="ru" />
        <div className="lg:pt-16">{children}</div>
        <Footer locale="ru" />
      </body>
    </html>
  )
}
