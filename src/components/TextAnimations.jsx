import { motion } from 'framer-motion'

// Text that reveals letter by letter
export function TextReveal({ text, className = '', delay = 0 }) {
  const letters = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Text that reveals word by word
export function WordReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-2 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Glitch text effect
export function GlitchText({ text, className = '' }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-primary-500 z-0"
        variants={{
          hover: {
            x: [0, -2, 2, -2, 0],
            opacity: [0, 1, 1, 1, 0],
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-accent-500 z-0"
        variants={{
          hover: {
            x: [0, 2, -2, 2, 0],
            opacity: [0, 1, 1, 1, 0],
          },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
    </motion.span>
  )
}

// Typewriter effect (alternative to react-type-animation)
export function Typewriter({ texts, className = '' }) {
  return (
    <motion.span
      className={className}
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      {texts[0]}
    </motion.span>
  )
}

// Marquee/Scrolling text
export function MarqueeText({ text, className = '', speed = 20 }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-flex gap-8">
            {text.split(' ').map((word, j) => (
              <span key={j} className="mx-4">{word}</span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// Counter animation
export function AnimatedCounter({ value, className = '', duration = 2 }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ count: 0 }}
        whileInView={{ count: parseInt(value) }}
        viewport={{ once: true }}
        transition={{ duration, ease: 'easeOut' }}
      >
        {({ count }) => Math.floor(count)}
      </motion.span>
    </motion.span>
  )
}

// Highlight text on scroll
export function HighlightText({ text, className = '' }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-3 bg-primary-500/30 -z-10"
        variants={{
          hidden: { width: 0 },
          visible: { width: '100%' },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.span>
  )
}
