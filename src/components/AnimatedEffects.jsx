import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

// 3D Tilt Card that follows mouse
export function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: 'translateZ(75px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  )
}

// Morphing Blob Shape
export function MorphingBlob({ className = '', colors = ['#0ea5e9', '#d946ef', '#22d3ee'] }) {
  const pathVariants = {
    animate: {
      d: [
        'M440,320Q430,390,370,420Q310,450,250,440Q190,430,140,390Q90,350,80,280Q70,210,120,160Q170,110,230,90Q290,70,350,100Q410,130,430,200Q450,270,440,320Z',
        'M420,320Q390,390,330,430Q270,470,200,450Q130,430,100,360Q70,290,90,220Q110,150,170,100Q230,50,300,70Q370,90,410,160Q450,230,420,320Z',
        'M450,310Q440,370,390,410Q340,450,270,460Q200,470,150,420Q100,370,80,300Q60,230,100,170Q140,110,210,80Q280,50,340,90Q400,130,430,200Q460,270,450,310Z',
        'M440,320Q430,390,370,420Q310,450,250,440Q190,430,140,390Q90,350,80,280Q70,210,120,160Q170,110,230,90Q290,70,350,100Q410,130,430,200Q450,270,440,320Z',
      ],
    },
  }

  return (
    <motion.svg
      viewBox="0 0 500 500"
      className={className}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity="0.6" />
          <stop offset="50%" stopColor={colors[1]} stopOpacity="0.6" />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <motion.path
        fill="url(#blobGradient)"
        variants={pathVariants}
        animate="animate"
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  )
}

// Floating Elements Container
export function FloatingElements({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// Spotlight Effect
export function SpotlightCard({ children, className = '' }) {
  const divRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x}px ${y}px, rgba(14, 165, 233, 0.15), transparent 40%)`
          ),
        }}
      />
      {children}
    </motion.div>
  )
}

// Ripple Effect Button
export function RippleButton({ children, className = '', onClick }) {
  const handleClick = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const ripple = document.createElement('span')
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)

    if (onClick) onClick(e)
  }

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

// Staggered Grid Animation
export function StaggeredGrid({ children, className = '' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}

// Animated Border Gradient
export function GradientBorder({ children, className = '' }) {
  return (
    <div className={`relative p-[2px] rounded-xl overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative bg-white dark:bg-dark-200 rounded-xl">
        {children}
      </div>
    </div>
  )
}

// Parallax Scroll Container
export function ParallaxContainer({ children, speed = 0.5, className = '' }) {
  const y = useMotionValue(0)

  return (
    <motion.div
      className={className}
      style={{ y }}
      initial={{ y: 0 }}
      whileInView={{ y: -50 * speed }}
      viewport={{ once: false }}
      transition={{ type: 'tween', ease: 'linear' }}
    >
      {children}
    </motion.div>
  )
}
