import { motion } from 'framer-motion'

export default function MatrixRain() {
  const columns = 20
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]()=+-*&%$#@!'

  const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)]

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 text-primary-500 font-mono text-sm whitespace-nowrap"
          style={{
            left: `${(i / columns) * 100}%`,
            writingMode: 'vertical-rl',
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '100vh' }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          {[...Array(30)].map((_, j) => (
            <motion.span
              key={j}
              className="block"
              style={{
                opacity: 1 - j * 0.03,
                color: j === 0 ? '#fff' : j < 3 ? '#22d3ee' : '#0ea5e9',
              }}
              animate={{
                opacity: [1 - j * 0.03, 0.5 - j * 0.02, 1 - j * 0.03],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: j * 0.05,
              }}
            >
              {getRandomChar()}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  )
}
