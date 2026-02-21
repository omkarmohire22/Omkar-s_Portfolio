import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedAvatar() {
  const [isBlinking, setIsBlinking] = useState(false)

  // Mouse tracking for eyes — uses motion values only (no React state / no re-renders)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for eyes
  const springConfig = { damping: 30, stiffness: 200 }
  const eyeX = useSpring(useTransform(mouseX, [-500, 500], [-8, 8]), springConfig)
  const eyeY = useSpring(useTransform(mouseY, [-500, 500], [-5, 5]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set(clientX - innerWidth / 2)
      mouseY.set(clientY - innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <motion.div
      className="relative w-80 h-80 md:w-96 md:h-96"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
    >
      {/* Glow effect behind avatar */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main avatar container */}
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdd9b5" />
            <stop offset="100%" stopColor="#f5c6a5" />
          </linearGradient>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a3728" />
            <stop offset="100%" stopColor="#2d1f14" />
          </linearGradient>
          <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shadow filter */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#shirtGradient)"
          opacity="0.1"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Body/Shirt */}
        <motion.ellipse
          cx="200"
          cy="380"
          rx="100"
          ry="60"
          fill="url(#shirtGradient)"
          filter="url(#shadow)"
        />

        {/* Neck */}
        <rect x="175" y="280" width="50" height="40" fill="url(#skinGradient)" />

        {/* Head */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="100"
          ry="110"
          fill="url(#skinGradient)"
          filter="url(#shadow)"
        />

        {/* Hair */}
        <motion.path
          d="M100 180 Q100 80 200 80 Q300 80 300 180 Q300 140 250 120 Q200 100 150 120 Q100 140 100 180"
          fill="url(#hairGradient)"
          animate={{
            d: [
              "M100 180 Q100 80 200 80 Q300 80 300 180 Q300 140 250 120 Q200 100 150 120 Q100 140 100 180",
              "M100 182 Q100 78 200 78 Q300 78 300 182 Q300 142 250 118 Q200 98 150 118 Q100 142 100 182",
              "M100 180 Q100 80 200 80 Q300 80 300 180 Q300 140 250 120 Q200 100 150 120 Q100 140 100 180"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Ears */}
        <ellipse cx="100" cy="200" rx="15" ry="25" fill="url(#skinGradient)" />
        <ellipse cx="300" cy="200" rx="15" ry="25" fill="url(#skinGradient)" />

        {/* Glasses frame */}
        <motion.g filter="url(#glow)">
          <rect x="120" y="175" width="70" height="50" rx="10" fill="none" stroke="url(#glassGradient)" strokeWidth="6" />
          <rect x="210" y="175" width="70" height="50" rx="10" fill="none" stroke="url(#glassGradient)" strokeWidth="6" />
          <line x1="190" y1="200" x2="210" y2="200" stroke="url(#glassGradient)" strokeWidth="4" />
          <line x1="120" y1="195" x2="100" y2="190" stroke="url(#glassGradient)" strokeWidth="4" />
          <line x1="280" y1="195" x2="300" y2="190" stroke="url(#glassGradient)" strokeWidth="4" />
        </motion.g>

        {/* Glass lenses with reflection */}
        <rect x="125" y="180" width="60" height="40" rx="8" fill="rgba(200,230,255,0.1)" />
        <rect x="215" y="180" width="60" height="40" rx="8" fill="rgba(200,230,255,0.1)" />

        {/* Lens reflection */}
        <motion.rect
          x="130"
          y="182"
          width="20"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.3)"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="220"
          y="182"
          width="20"
          height="5"
          rx="2"
          fill="rgba(255,255,255,0.3)"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Eyes */}
        <g>
          {/* Left eye white */}
          <ellipse cx="155" cy="200" rx="20" ry={isBlinking ? 2 : 15} fill="white" />
          {/* Left pupil - follows mouse */}
          <motion.circle
            cx="155"
            cy="200"
            r={isBlinking ? 0 : 8}
            fill="#2d1f14"
            style={{ x: eyeX, y: eyeY }}
          />
          {/* Left eye shine */}
          <motion.circle
            cx="158"
            cy="195"
            r={isBlinking ? 0 : 3}
            fill="white"
            style={{ x: eyeX, y: eyeY }}
          />

          {/* Right eye white */}
          <ellipse cx="245" cy="200" rx="20" ry={isBlinking ? 2 : 15} fill="white" />
          {/* Right pupil - follows mouse */}
          <motion.circle
            cx="245"
            cy="200"
            r={isBlinking ? 0 : 8}
            fill="#2d1f14"
            style={{ x: eyeX, y: eyeY }}
          />
          {/* Right eye shine */}
          <motion.circle
            cx="248"
            cy="195"
            r={isBlinking ? 0 : 3}
            fill="white"
            style={{ x: eyeX, y: eyeY }}
          />
        </g>

        {/* Eyebrows */}
        <motion.path
          d="M130 165 Q155 155 180 165"
          stroke="url(#hairGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M130 165 Q155 155 180 165",
              "M130 162 Q155 152 180 162",
              "M130 165 Q155 155 180 165"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M220 165 Q245 155 270 165"
          stroke="url(#hairGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M220 165 Q245 155 270 165",
              "M220 162 Q245 152 270 162",
              "M220 165 Q245 155 270 165"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Nose */}
        <motion.path
          d="M195 220 Q200 240 205 220"
          stroke="#e5b89a"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Mouth - animated smile */}
        <motion.path
          d="M160 260 Q200 290 240 260"
          stroke="#c97878"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M160 260 Q200 290 240 260",
              "M160 265 Q200 295 240 265",
              "M160 260 Q200 290 240 260"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Cheek blush */}
        <motion.ellipse
          cx="125"
          cy="245"
          rx="20"
          ry="10"
          fill="#ffb6c1"
          opacity="0.4"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.ellipse
          cx="275"
          cy="245"
          rx="20"
          ry="10"
          fill="#ffb6c1"
          opacity="0.4"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.svg>

      {/* Floating elements around avatar */}
      <FloatingElement
        className="absolute -top-4 -right-4"
        delay={0}
      >
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
          💡
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute top-1/4 -left-8"
        delay={0.5}
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg">
          ⚡
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-1/4 -right-6"
        delay={1}
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-xl shadow-lg">
          🚀
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute -bottom-2 left-1/4"
        delay={1.5}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm shadow-lg">
          ✨
        </div>
      </FloatingElement>

      {/* Code brackets floating */}
      <motion.div
        className="absolute -left-12 top-1/2 text-4xl font-mono text-primary-500/60"
        animate={{ x: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {'<'}
      </motion.div>
      <motion.div
        className="absolute -right-12 top-1/2 text-4xl font-mono text-accent-500/60"
        animate={{ x: [5, -5, 5], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {'/>'}
      </motion.div>
    </motion.div>
  )
}

function FloatingElement({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay + 0.5, type: 'spring' }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
