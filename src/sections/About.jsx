import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiDatabase, FiCpu, FiBarChart2, FiLayers } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import { TiltCard, MorphingBlob } from '../components/AnimatedEffects'




export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const stats = [
    { value: 'Fresher', label: 'Career Status', icon: '🚀' },
    { value: '5', label: 'Projects Completed', icon: '💼' },
    { value: '5+', label: 'Technologies', icon: '⚡' },
  ]

  const services = [
    {
      icon: FiLayers,
      title: 'MERN Stack Development',
      description: 'Building full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiDatabase,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Python, and scalable databases.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiBarChart2,
      title: 'Data Analytics',
      description: 'Extracting insights from complex data sets using statistical methods and visualization tools.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiCpu,
      title: 'Artificial Intelligence & ML',
      description: 'Implementing intelligent systems and predictive models using deep learning and algorithms.',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-64 h-64 opacity-30"
          style={{ y }}
        >
          <MorphingBlob className="w-full h-full" colors={['#0ea5e9', '#06b6d4', '#22d3ee']} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 -right-32 w-80 h-80 opacity-20"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        >
          <MorphingBlob className="w-full h-full" colors={['#d946ef', '#a855f7', '#ec4899']} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better and what I can do for you"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image with 3D tilt effect */}
          <AnimatedSection direction="left">
            <TiltCard className="relative">
              <div className="relative group">
                {/* Animated border */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-70 blur group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />

                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  {/* Profile photo */}
                  <img
                    src="/Omkar main.png"
                    alt="About me"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300/60 via-transparent to-transparent" />

                  {/* Floating badges */}
                  {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className="absolute px-3 py-1 bg-dark-100/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary-400 border border-primary-500/20"
                      style={{
                        top: `${20 + i * 30}%`,
                        right: i % 2 === 0 ? '5%' : 'auto',
                        left: i % 2 !== 0 ? '5%' : 'auto',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              <motion.h3
                className="text-3xl md:text-4xl font-display font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                A creative engineer building{' '}
                <motion.span
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  intelligent systems
                </motion.span>
              </motion.h3>

              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm an MCA student and Full Stack Developer based in India, driven by a passion for creating robust, scalable applications that merge modern web architectures with state-of-the-art artificial intelligence. My technical journey is defined by a desire to tackle complex, real-world challenges—whether it's architecting intelligent platforms that empower users or developing sophisticated data-driven engines.
              </motion.p>

              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I thrive in fast-paced environments like hackathons, where rapid prototyping and innovative thinking are essential. By focusing on critical aspects like system design, real-time data handling, and seamless user experiences, I strive to build solutions that are not only performant but also highly impactful. I believe in shipping fast, maintaining high architectural standards, and constantly pushing the boundaries of what web technology can achieve.
              </motion.p>

              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats with counter animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <motion.div
                className="glass-card text-center group cursor-pointer overflow-hidden relative"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <motion.span
                  className="text-3xl mb-2 inline-block"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.icon}
                </motion.span>

                <motion.div
                  className="text-4xl md:text-5xl font-display font-bold gradient-text relative z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 relative z-10">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Services with enhanced animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                className="glass-card h-full group cursor-pointer relative overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon container */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 relative`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                  />
                  <service.icon className="w-7 h-7 relative z-10" />
                </motion.div>

                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors relative z-10">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
