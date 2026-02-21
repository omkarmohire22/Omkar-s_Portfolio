import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

// ✅ Generate star data ONCE at module level so positions/timing are stable across renders
// This fixes the flicker glitch caused by Math.random() re-running on each re-render
const STAR_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(Math.random() * 100).toFixed(2)}%`,
  top: `${(Math.random() * 100).toFixed(2)}%`,
  duration: 2 + Math.random() * 3,
  delay: Math.random() * 2,
}))

export default function AuroraBackground() {
  const { isDark } = useTheme()

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Base gradient */}
      <div className={`absolute inset-0 ${isDark
        ? 'bg-gradient-to-b from-dark-400 via-dark-300 to-dark-200'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
        }`} />

      {/* Aurora layers */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 0.5 : 0.3 }}
        transition={{ duration: 2 }}
      >
        {/* First aurora wave */}
        <motion.div
          className="absolute w-[200%] h-[50%] -top-[10%] -left-[50%]"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(14, 165, 233, 0.15) 25%,
              rgba(217, 70, 239, 0.15) 50%,
              rgba(14, 165, 233, 0.15) 75%,
              transparent 100%
            )`,
            filter: 'blur(60px)',
            borderRadius: '50%',
          }}
          animate={{
            x: ['-25%', '25%', '-25%'],
            scaleY: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Second aurora wave */}
        <motion.div
          className="absolute w-[150%] h-[40%] top-[5%] -left-[25%]"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(217, 70, 239, 0.1) 30%,
              rgba(34, 211, 238, 0.15) 50%,
              rgba(217, 70, 239, 0.1) 70%,
              transparent 100%
            )`,
            filter: 'blur(80px)',
            borderRadius: '50%',
          }}
          animate={{
            x: ['25%', '-25%', '25%'],
            scaleY: [1.2, 1, 1.2],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Third aurora wave */}
        <motion.div
          className="absolute w-[180%] h-[35%] top-[15%] -left-[40%]"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(34, 197, 94, 0.1) 20%,
              rgba(14, 165, 233, 0.15) 50%,
              rgba(168, 85, 247, 0.1) 80%,
              transparent 100%
            )`,
            filter: 'blur(70px)',
            borderRadius: '50%',
          }}
          animate={{
            x: ['-20%', '30%', '-20%'],
            scaleX: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Animated stars (only in dark mode) — stable positions via pre-generated data */}
      {isDark && (
        <div className="absolute inset-0">
          {STAR_DATA.map((star) => (
            <motion.div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay for better text readability */}
      <div className={`absolute inset-0 ${isDark
        ? 'bg-gradient-to-t from-dark-300/90 via-transparent to-transparent'
        : 'bg-gradient-to-t from-white/80 via-transparent to-transparent'
        }`} />
    </div>
  )
}
