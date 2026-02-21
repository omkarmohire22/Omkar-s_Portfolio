import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }

  return (
    <div className={`mb-20 ${alignClasses[align]}`}>
      {/* Decorative elements */}
      <motion.div
        className={`flex items-center gap-4 mb-6 ${
          align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="w-12 h-px bg-gradient-to-r from-transparent to-primary-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.span 
          className="text-primary-500 text-sm font-medium tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          ✦
        </motion.span>
        <motion.span
          className="w-12 h-px bg-gradient-to-l from-transparent to-accent-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span 
          className="inline-block"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9, #d946ef, #22d3ee, #0ea5e9)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-flow 8s ease infinite',
          }}
        >
          {title}
        </span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
          style={{ margin: align === 'center' ? '0 auto' : undefined }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Enhanced decorative line */}
      <motion.div
        className={`mt-8 flex items-center gap-2 ${
          align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-1 w-8 bg-primary-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        <motion.div
          className="h-1.5 w-16 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #0ea5e9, #d946ef)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.div
          className="h-1 w-8 bg-accent-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />
      </motion.div>
    </div>
  )
}
