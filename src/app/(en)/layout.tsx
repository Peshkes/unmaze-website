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
    default: 'Unmaze — Help for Children with Dyslexia',
    template: '%s | Unmaze',
  },
}

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${manrope.variable} ${emotical.variable}`}>
      <body>
        <Cursor />
        <RevealProvider />
        <Header locale="en" />
        <div className="lg:pt-16">{children}</div>
        <Footer locale="en" />
      </body>
    </html>
  )
}
