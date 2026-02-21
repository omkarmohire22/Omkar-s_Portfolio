import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Certs', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.4 }
    })
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'py-3'
        : 'py-5'
        }`}
      style={{
        background: scrolled
          ? 'rgba(15, 23, 42, 0.8)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.a
            href="#home"
            className="relative text-2xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #d946ef, #22d3ee)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              Omkar.dev
            </motion.span>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 blur-lg opacity-0"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #d946ef)',
              }}
              whileHover={{ opacity: 0.5 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                link={link}
                index={i}
                isActive={activeSection === link.href.substring(1)}
              />
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiSun className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMoon className="w-5 h-5 text-primary-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 rounded-xl text-gray-700 dark:text-gray-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <HiMenuAlt3 className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-4 p-6 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl font-medium transition-all ${activeSection === link.href.substring(1)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Enhanced NavLink Component with magnetic effect
function NavLink({ link, index, isActive }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / 5)
    y.set((e.clientY - centerY) / 5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={link.href}
      className="relative px-4 py-2 rounded-xl font-medium text-sm transition-colors"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.08 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          layoutId="activeNav"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(217, 70, 239, 0.15))',
            border: '1px solid rgba(14, 165, 233, 0.3)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}

      <span className={`relative z-10 ${isActive
        ? 'text-primary-400'
        : 'text-gray-400 hover:text-white'
        }`}>
        {link.name}
      </span>

      {/* Hover underline */}
      <motion.div
        className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full"
        style={{
          background: 'linear-gradient(90deg, #0ea5e9, #d946ef)',
        }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  )
}
