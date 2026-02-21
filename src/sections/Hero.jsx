import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring, useMotionValue } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown, FiMail, FiCode, FiZap, FiPlus } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiPython, SiMongodb } from 'react-icons/si'

export default function Hero() {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig)

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const techStack = [
    { Icon: SiReact, label: 'React', color: '#61DAFB' },
    { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
    { Icon: SiPython, label: 'Python', color: '#3776AB' },
    { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/omkarmohire22', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/omkarmohire', label: 'LinkedIn' },
  ]

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-dark-400 py-20 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* --- Advanced Background Layer --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Dynamic floating blobs */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* --- Left: Advanced Typography & Content --- */}
          <motion.div
            className="lg:col-span-8"
            style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
          >
            {/* Reveal status with premium badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 dark:bg-dark-200/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-sm relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>

            {/* Main Headline with multi-layer effect */}
            <div className="relative mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-xl md:text-2xl font-display text-gray-400 dark:text-gray-500 mb-2 font-medium tracking-tight"
              >
                Creative Developer & Student
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tighter"
              >
                <span className="text-gray-900 dark:text-white block">Building</span>
                <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent bg-300% animate-gradient">
                  Experiences.
                </span>
              </motion.h1>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -left-6 top-1/2 w-1 h-24 bg-primary-500 hidden lg:block"
              />
            </div>

            {/* Interactive Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mb-10 font-medium"
            >
              I specialize in{' '}
              <TypeAnimation
                sequence={[
                  'Modern Web Apps', 2000,
                  'AI Integration', 2000,
                  'Full Stack Systems', 2000,
                  'Seamless Design', 2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-primary-500 dark:text-primary-400 font-bold border-b-2 border-primary-500/20"
              />
            </motion.div>

            {/* CTAs with glassmorphism and advanced shadows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 mb-12"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden shadow-xl shadow-primary-500/25"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 transition-all group-hover:scale-110" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  Connect With Me <FiMail className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                className="group px-8 py-4 rounded-2xl font-bold bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  View Projects <FiZap className="text-primary-500 group-hover:scale-125 transition-transform" />
                </span>
              </motion.a>
            </motion.div>

            {/* Social Proof / Stats inside Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-10"
            >
              <div className="flex -space-x-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.label}
                    className="w-12 h-12 rounded-full bg-white dark:bg-dark-100 border-4 border-gray-50 dark:border-dark-400 flex items-center justify-center text-primary-500 shadow-md"
                    whileHover={{ y: -10, zIndex: 10, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <tech.Icon className="w-6 h-6" style={{ color: tech.color }} />
                  </motion.div>
                ))}
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 dark:text-white">100%</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Commitment</span>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Right: God-tier Image Presentation --- */}
          <motion.div
            className="lg:col-span-4 relative"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative group cursor-none">
              {/* Massive background glow */}
              <motion.div
                className="absolute -inset-10 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-transparent rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Floating tech nodes */}
              <motion.div
                className="absolute -top-10 -right-10 p-4 rounded-3xl bg-white/80 dark:bg-dark-200/80 backdrop-blur-xl border border-white/20 shadow-2xl z-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary-500/10 text-primary-500">
                    <FiCode className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Status</div>
                    <div className="text-sm font-black dark:text-white leading-none">Coding...</div>
                  </div>
                </div>
              </motion.div>

              {/* Inner 3D Container */}
              <motion.div
                className="relative z-10 w-full max-w-[380px] mx-auto aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-200 dark:bg-dark-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{
                  transform: 'translateZ(50px)',
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <img
                  src="/omkar.png"
                  alt="Omkar Mohire"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-dark-400 via-dark-400/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-display font-black text-white">Omkar Mohire</h3>
                      <p className="text-primary-400 font-bold uppercase tracking-widest text-[10px]">MCA Student @ BVIMIT</p>
                    </div>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                          whileHover={{ y: -5 }}
                        >
                          <social.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating abstract shapes for depth */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-500/20 rounded-[2rem] blur-2xl z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 w-20 h-20 border-4 border-primary-500/30 rounded-full z-0"
                style={{ transform: 'translateZ(-20px)' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- Advanced Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400 dark:text-gray-500">Scroll Down</span>
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-primary-500 to-transparent relative origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>
  )
}
