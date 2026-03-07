'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function Cursor() {
  const circleRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const circlePos = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)
  const [cursorSize, setCursorSize] = useState(20)
  const [isDesktop, setIsDesktop] = useState(false)

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth > 1024)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (!isDesktop) return

    function handleMouseMove(e: MouseEvent) {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    function handleMouseOver(e: MouseEvent) {
      if ((e.target as Element).closest('button, a, .clickable, .cta-button, .arrow')) {
        setCursorSize(100)
      }
    }

    function handleMouseOut(e: MouseEvent) {
      const related = e.relatedTarget as Element | null
      if (
        (e.target as Element).closest('button, a, .clickable, .cta-button, .arrow') &&
        !related?.closest('button, a, .clickable, .cta-button, .arrow')
      ) {
        setCursorSize(20)
      }
    }

    function animate() {
      if (circleRef.current) {
        circlePos.current.x +=
          (mousePos.current.x - cursorSize / 2 - circlePos.current.x) * 0.07
        circlePos.current.y +=
          (mousePos.current.y - cursorSize / 2 - circlePos.current.y) * 0.07
        circleRef.current.style.transform = `translate(${circlePos.current.x}px, ${circlePos.current.y}px)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationRef.current)
    }
  }, [isDesktop, cursorSize])

  if (!isDesktop) return null

  return (
    <div
      ref={circleRef}
      className="custom-cursor"
      style={{ width: cursorSize, height: cursorSize }}
    />
  )
}
