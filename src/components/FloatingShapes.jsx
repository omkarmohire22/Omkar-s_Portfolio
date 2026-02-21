import { motion } from 'framer-motion'

export default function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 60, color: 'from-primary-500/20 to-cyan-500/20', x: '10%', y: '20%', duration: 8 },
    { type: 'square', size: 40, color: 'from-accent-500/20 to-pink-500/20', x: '85%', y: '15%', duration: 10 },
    { type: 'circle', size: 30, color: 'from-green-500/20 to-emerald-500/20', x: '15%', y: '75%', duration: 9 },
    { type: 'circle', size: 45, color: 'from-blue-500/20 to-indigo-500/20', x: '50%', y: '5%', duration: 10 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 10, -10, 0],
              rotate: shape.type === 'square' ? [0, 90, 180, 270, 360] : [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {shape.type === 'circle' && (
              <div
                className={`rounded-full bg-gradient-to-br ${shape.color} backdrop-blur-sm`}
                style={{ width: shape.size, height: shape.size }}
              />
            )}
            {shape.type === 'square' && (
              <div
                className={`rounded-lg bg-gradient-to-br ${shape.color} backdrop-blur-sm`}
                style={{ width: shape.size, height: shape.size }}
              />
            )}
            {shape.type === 'triangle' && (
              <div
                className={`bg-gradient-to-br ${shape.color}`}
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${shape.size / 2}px solid transparent`,
                  borderRight: `${shape.size / 2}px solid transparent`,
                  borderBottom: `${shape.size}px solid rgba(234, 179, 8, 0.2)`,
                }}
              />
            )}
            {shape.type === 'donut' && (
              <div
                className={`rounded-full border-4 border-${shape.color}`}
                style={{ width: shape.size, height: shape.size }}
              />
            )}
            {shape.type === 'cross' && (
              <div className="relative" style={{ width: shape.size, height: shape.size }}>
                <div
                  className={`absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 bg-${shape.color} rounded-full`}
                />
                <div
                  className={`absolute left-1/2 top-0 w-2 h-full -translate-x-1/2 bg-${shape.color} rounded-full`}
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
