import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiHeart, FiArrowUp, FiMail, FiCode } from 'react-icons/fi'
import { useRef, useState } from 'react'

// Magnetic social link component
function MagneticSocialLink({ social, index }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-4 rounded-2xl bg-gray-100/80 dark:bg-dark-100/80 backdrop-blur-sm
                 text-gray-700 dark:text-gray-300 overflow-hidden group"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2 + index * 0.1,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
      title={social.label}
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />

      {/* Icon */}
      <social.icon className="relative z-10 w-5 h-5 transition-colors duration-300 group-hover:text-white" />

      {/* Tooltip */}
      <motion.span
        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium
                   bg-gray-900 dark:bg-white text-white dark:text-gray-900 whitespace-nowrap"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      >
        {social.label}
        {/* Tooltip arrow */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
      </motion.span>
    </motion.a>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/omkarmohire22', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/omkarmohire', label: 'LinkedIn' },
  ]

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 bg-gray-50 dark:bg-dark-200/50 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FiCode className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-2xl font-display font-bold gradient-text">
                Portfolio
              </span>
            </motion.a>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              Building digital experiences that make a difference.
              Let's create something amazing together.
            </p>

            {/* Email quick link */}
            <motion.a
              href="mailto:omkarmohire22@gmail.com"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 group"
              whileHover={{ x: 5 }}
            >
              <FiMail className="w-4 h-4" />
              <span>omkarmohire22@gmail.com</span>
              <motion.span
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 
                           transition-colors group flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary-500 transition-all duration-300" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
              Connect With Me
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <MagneticSocialLink key={social.label} social={social} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200/50 dark:border-dark-100/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
              © {currentYear}
              <span className="font-medium bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Omkar Mohire
              </span>
            </p>

            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />

            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
              Made with
              <motion.span
                className="inline-block"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              >
                <FiHeart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              and lots of
              <motion.span
                className="text-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                ☕
              </motion.span>
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white 
                     shadow-lg shadow-primary-500/25 overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            {/* Arrow icon with animation */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowUp className="relative z-10 w-5 h-5" />
            </motion.div>

            {/* Tooltip */}
            <motion.span
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium
                       bg-gray-900 dark:bg-white text-white dark:text-gray-900 whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Back to top
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white" />
            </motion.span>
          </motion.button>
        </div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-500/50 rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-br from-primary-500 to-accent-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-500/50 rounded-full"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
