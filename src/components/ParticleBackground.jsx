import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

// Lightweight canvas-based particle system — no heavy library needed
// Runs entirely on canvas off the main thread via requestAnimationFrame
export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const primaryColor = isDark ? '14, 165, 233' : '3, 105, 161'
    const accentColor = isDark ? '217, 70, 239' : '162, 28, 175'

    // Create particles
    const PARTICLE_COUNT = 35
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? primaryColor : accentColor,
    }))

    const MAX_DIST = 120

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, 0.5)`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.25
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${p.color}, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -10, opacity: isDark ? 0.6 : 0.3 }}
    />
  )
}
