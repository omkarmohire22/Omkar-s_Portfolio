import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'omkarmohire22@gmail.com',
      href: 'mailto:omkarmohire22@gmail.com',
      color: '#0ea5e9',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 7559239079',
      href: 'tel:+917559239079',
      color: '#22d3ee',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'India',
      href: 'https://maps.google.com/?q=India',
      color: '#d946ef',
    },
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(217, 70, 239, 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together to bring your ideas to life"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <AnimatedSection direction="left">
            <div className="space-y-10">
              <div>
                <motion.h3
                  className="text-3xl font-display font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Let's talk about your{' '}
                  <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-500 bg-clip-text text-transparent">
                    project
                  </span>
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision. Feel free to reach out!
                </motion.p>
              </div>

              {/* Enhanced Contact Cards */}
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-5 p-5 rounded-2xl group relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                    whileHover={{
                      x: 10,
                      boxShadow: `0 20px 40px ${info.color}20`,
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}10 0%, transparent 50%)`,
                      }}
                    />

                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`,
                        boxShadow: `0 8px 20px ${info.color}40`,
                      }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <info.icon className="w-6 h-6 relative z-10" />
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-semibold text-lg group-hover:text-primary-500 transition-colors">
                        {info.value}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-primary-500"
                    >
                      <FiArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Enhanced Map or Decorative Element */}
              <motion.div
                className="relative h-72 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
                  }}
                >
                  {/* Animated rings */}
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full border border-primary-500/20"
                      style={{
                        width: `${ring * 80}px`,
                        height: `${ring * 80}px`,
                      }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: ring * 0.5 }}
                    />
                  ))}

                  <motion.div
                    className="text-center relative z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #0ea5e9, #d946ef)',
                        boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)',
                      }}
                      animate={{
                        boxShadow: [
                          '0 10px 30px rgba(14, 165, 233, 0.4)',
                          '0 10px 40px rgba(217, 70, 239, 0.5)',
                          '0 10px 30px rgba(14, 165, 233, 0.4)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiMapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="text-xl font-bold text-white">India</p>
                    <p className="text-gray-400 mt-1">Available for remote work worldwide</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Enhanced Contact Form */}
          <AnimatedSection direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), transparent, rgba(217, 70, 239, 0.1))',
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: focusedField === 'name'
                        ? '0 0 30px rgba(14, 165, 233, 0.2)'
                        : '0 0 0px transparent',
                    }}
                  >
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-gray-100/50 dark:bg-dark-200/50 backdrop-blur-sm 
                               border-2 border-transparent focus:border-primary-500 
                               outline-none transition-all"
                      placeholder="Enter your name"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: focusedField === 'email'
                        ? '0 0 30px rgba(14, 165, 233, 0.2)'
                        : '0 0 0px transparent',
                    }}
                  >
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-gray-100/50 dark:bg-dark-200/50 backdrop-blur-sm 
                               border-2 border-transparent focus:border-primary-500 
                               outline-none transition-all"
                      placeholder="Enter your email"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: focusedField === 'subject'
                        ? '0 0 30px rgba(14, 165, 233, 0.2)'
                        : '0 0 0px transparent',
                    }}
                  >
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-gray-100/50 dark:bg-dark-200/50 backdrop-blur-sm 
                               border-2 border-transparent focus:border-primary-500 
                               outline-none transition-all"
                      placeholder="What is this regarding?"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: focusedField === 'message'
                        ? '0 0 30px rgba(14, 165, 233, 0.2)'
                        : '0 0 0px transparent',
                    }}
                  >
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-gray-100/50 dark:bg-dark-200/50 backdrop-blur-sm 
                               border-2 border-transparent focus:border-primary-500 
                               outline-none transition-all resize-none"
                      placeholder="Write your message here..."
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden"
                  style={{
                    background: isSubmitted
                      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                      : 'linear-gradient(135deg, #0ea5e9, #d946ef)',
                    boxShadow: isSubmitted
                      ? '0 10px 30px rgba(34, 197, 94, 0.4)'
                      : '0 10px 30px rgba(14, 165, 233, 0.3)',
                  }}
                  whileHover={{
                    scale: isSubmitting || isSubmitted ? 1 : 1.02,
                    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)',
                  }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  {/* Shimmer effect */}
                  {!isSubmitting && !isSubmitted && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <span className="text-white">Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <motion.div
                      className="flex items-center gap-2 text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.5 }}
                    >
                      <FiCheck className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </motion.div>
                  ) : (
                    <motion.div className="flex items-center gap-2 text-white relative z-10">
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiSend className="w-5 h-5" />
                      </motion.span>
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
