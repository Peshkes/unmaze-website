'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n'

interface VideosProps {
  dict: Dictionary
}

const VIDEO_KEYS = ['progress', 'catalog', 'game', 'error', 'control', 'articles'] as const
type VideoKey = (typeof VIDEO_KEYS)[number]

export function Videos({ dict }: VideosProps) {
  const [active, setActive] = useState<VideoKey>('progress')

  return (
    <section className="wrapper">
      <div className="reveal flex flex-col overflow-hidden rounded-2xl bg-bg-light md:flex-row">
        {/* Nav */}
        <div className="flex gap-2 overflow-x-auto p-4 md:w-[35%] md:flex-col md:justify-center md:gap-2 md:overflow-visible md:p-8 xl:w-[40%] xl:p-12">
          {VIDEO_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`clickable shrink-0 rounded-lg px-4 py-2 text-start text-[length:var(--text-small)] transition-all duration-250 md:w-full md:px-4 md:py-3 md:text-[length:var(--text-body)] ${
                active === key
                  ? 'bg-black text-white'
                  : 'text-text-body hover:bg-black/10'
              }`}
            >
              {dict.videos.items[VIDEO_KEYS.indexOf(key)]}
            </button>
          ))}
        </div>

        {/* Video area */}
        <div className="flex items-center justify-center p-8 md:w-[65%] md:p-12 xl:w-[60%]">
          <div className="aspect-[9/16] w-full max-w-[280px] rounded-2xl bg-white shadow-[0_4px_24px_rgb(0_0_0/0.06)] xl:max-w-[320px]">
            <div className="flex h-full items-center justify-center text-[length:var(--text-small)] text-text-muted">
              {dict.videos.placeholder}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
