'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    function observeTargets() {
      const targets = document.querySelectorAll('.reveal:not(.visible), .reveal-group:not(.visible)')
      for (const target of targets) {
        const rect = target.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          target.classList.add('visible')
        } else {
          observer.observe(target)
        }
      }
    }

    observeTargets()

    const mutationObserver = new MutationObserver(() => {
      observeTargets()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
