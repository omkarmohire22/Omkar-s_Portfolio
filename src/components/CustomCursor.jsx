import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const hiddenRef = useRef(false)

  useEffect(() => {
    // Check if it's a touch device
    if ('ontouchstart' in window) return

    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    // Show the cursors
    cursor.style.display = 'block'
    trail.style.display = 'block'

    // Use CSS variables for position — GPU-accelerated, zero React re-renders
    let curX = 0, curY = 0
    let trailX = 0, trailY = 0
    let targetX = 0, targetY = 0
    let rafId = null

    function tick() {
      // Smoothly interpolate the trail position
      trailX += (targetX - trailX) * 0.15
      trailY += (targetY - trailY) * 0.15

      cursor.style.transform = `translate3d(${targetX - 8}px, ${targetY - 8}px, 0)`
      trail.style.transform = `translate3d(${trailX - 20}px, ${trailY - 20}px, 0)`

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const handleMouseMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY

      const target = e.target
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')

      cursor.style.width = isClickable ? '8px' : '16px'
      cursor.style.height = isClickable ? '8px' : '16px'
      trail.style.width = isClickable ? '60px' : '40px'
      trail.style.height = isClickable ? '60px' : '40px'
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = '0'
      trail.style.opacity = '0'
    }
    const handleMouseEnter = () => {
      cursor.style.opacity = '1'
      trail.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 bg-primary-500 rounded-full pointer-events-none mix-blend-difference"
        style={{
          display: 'none',
          width: 16,
          height: 16,
          zIndex: 9999,
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s',
        }}
      />

      {/* Cursor trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 border-2 border-accent-500 rounded-full pointer-events-none"
        style={{
          display: 'none',
          width: 40,
          height: 40,
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  )
}
