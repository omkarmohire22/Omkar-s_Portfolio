import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// ✅ Stable particle data — generated once at module level to prevent glitch
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  color: i % 2 === 0 ? '#0ea5e9' : '#d946ef',
  left: `${(Math.random() * 100).toFixed(2)}%`,
  top: `${(Math.random() * 100).toFixed(2)}%`,
  xDrift: Math.random() * 20 - 10,
  duration: 2 + Math.random() * 2,
  delay: Math.random() * 2,
}))

export default function Loader() {
  const text = "PORTFOLIO"
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)

  const loadingPhrases = [
    "Initializing magic...",
    "Loading awesomeness...",
    "Crafting experience...",
    "Almost there..."
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const phraseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % loadingPhrases.length)
    }, 500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(phraseInterval)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-dark-300 flex items-center justify-center z-[9999] overflow-hidden"
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: 'blur(10px)'
      }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] -top-40 -left-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-40 -right-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(217, 70, 239, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              left: '50%',
              top: '50%',
              marginLeft: `-${(150 + i * 80) / 2}px`,
              marginTop: `-${(150 + i * 80) / 2}px`,
              border: `1px solid rgba(14, 165, 233, ${0.2 - i * 0.02})`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
            }}
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              scale: { duration: 0.5, delay: i * 0.1 },
              opacity: { duration: 0.5, delay: i * 0.1 },
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: p.color,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, p.xDrift, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* Animated Logo with 3D effect */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
        >
          {/* Outer glowing rings */}
          <motion.div
            className="absolute -inset-8 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #0ea5e9, #d946ef, #22d3ee, #0ea5e9)',
              filter: 'blur(20px)',
              opacity: 0.5,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          <motion.div
            className="absolute -inset-6 rounded-full border-2 border-dashed border-primary-500/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-dotted border-accent-500/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {/* Logo container with holographic effect */}
          <motion.div
            className="w-28 h-28 rounded-3xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 50%, #22d3ee 100%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              boxShadow: [
                '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(217, 70, 239, 0.3)',
                '0 0 50px rgba(217, 70, 239, 0.6), 0 0 80px rgba(14, 165, 233, 0.4)',
                '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(217, 70, 239, 0.3)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Shine sweep effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Inner glow */}
            <motion.div
              className="absolute inset-2 rounded-2xl bg-dark-300/30 backdrop-blur-sm"
            />

            <motion.span
              className="text-5xl font-display font-bold text-white relative z-10"
              animate={{
                scale: [1, 1.1, 1],
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8), 0 0 60px rgba(14, 165, 233, 0.5)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              P
            </motion.span>
          </motion.div>

          {/* Orbiting elements */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#d946ef' : '#22d3ee',
                boxShadow: `0 0 10px ${i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#d946ef' : '#22d3ee'}`,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transformOrigin: `${60 + i * 8}px center`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>

        {/* Animated text with wave effect */}
        <div className="flex gap-1 perspective-1000">
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              className="text-3xl font-display font-bold"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #d946ef, #22d3ee)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
                rotateX: 0,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.08 },
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                },
                rotateX: { duration: 0.5, delay: i * 0.08 },
                backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Loading phrase */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentPhase}
            className="text-gray-400 text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {loadingPhrases[currentPhase]}
          </motion.p>
        </AnimatePresence>

        {/* Enhanced loading bar */}
        <div className="relative w-64">
          <div className="h-1.5 bg-dark-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full relative"
              style={{
                background: 'linear-gradient(90deg, #0ea5e9, #d946ef, #22d3ee, #0ea5e9)',
                backgroundSize: '300% 100%',
              }}
              initial={{ width: '0%' }}
              animate={{
                width: `${loadingProgress}%`,
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                width: { duration: 0.1 },
                backgroundPosition: { duration: 2, repeat: Infinity, ease: 'linear' }
              }}
            >
              {/* Shimmer effect on progress bar */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Progress percentage */}
          <motion.div
            className="mt-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-2xl font-bold font-mono gradient-text">
              {loadingProgress}%
            </span>
          </motion.div>
        </div>
      </div>

      {/* Animated corner decorations */}
      {[
        { pos: 'top-8 left-8', rotate: 0 },
        { pos: 'top-8 right-8', rotate: 90 },
        { pos: 'bottom-8 right-8', rotate: 180 },
        { pos: 'bottom-8 left-8', rotate: 270 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.pos} w-16 h-16`}
          style={{ rotate: `${corner.rotate}deg` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <motion.div
            className="w-full h-full border-l-2 border-t-2 border-primary-500/30"
            animate={{
              borderColor: ['rgba(14, 165, 233, 0.3)', 'rgba(217, 70, 239, 0.3)', 'rgba(14, 165, 233, 0.3)'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(14, 165, 233, 0.02) 2px, rgba(14, 165, 233, 0.02) 4px)',
        }}
      />
    </motion.div>
  )
}
