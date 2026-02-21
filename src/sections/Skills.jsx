import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  SiReact, SiNextdotjs, SiJavascript,
  SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiDocker,
  SiTailwindcss, SiFigma, SiGit
} from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
        { name: 'Tailwind', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
        { name: 'Python', icon: SiPython, level: 80, color: '#3776AB' },
        { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#4169E1' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ED' },
        { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-dark-200/50 dark:via-dark-300 dark:to-dark-200/50" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)' }}
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%)' }}
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        {/* Skill Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 0.15}>
              {/* Category Header */}
              <motion.div
                className="flex items-center gap-4 mb-10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: categoryIndex * 0.3 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-3xl font-display font-bold">
                  <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent bg-300% animate-gradient">
                    {category.title}
                  </span>
                </h3>
                <motion.div
                  className="flex-1 h-px bg-gradient-to-r from-primary-500/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isHovered={hoveredSkill === skill.name}
                    onHover={() => setHoveredSkill(skill.name)}
                    onLeave={() => setHoveredSkill(null)}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Additional Skills Tags */}
        <AnimatedSection delay={0.3} className="mt-20">
          <motion.h3
            className="text-3xl font-display font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-500 bg-clip-text text-transparent">
              Also Familiar With
            </span>
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.03 }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'MERN Stack', 'REST APIs', 'Redux', 'SASS', 'Webpack',
              'Supabase', 'Vercel', 'Linux', 'Git', 'GitHub',
              'Agile/Scrum', 'CI/CD', 'Responsive Design', 'SEO'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 rounded-xl text-sm font-medium cursor-default
                           bg-white/5 dark:bg-dark-100/40 border border-gray-200 dark:border-white/10
                           text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400
                           hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function SkillCard({ skill, index, isHovered, onHover, onLeave }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    onLeave()
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="relative p-6 rounded-2xl text-center overflow-hidden backdrop-blur-md"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        whileHover={{
          y: -15,
          boxShadow: `0 25px 50px ${skill.color}30`,
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${skill.color}20 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(135deg, ${skill.color}40, transparent, ${skill.color}40)`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-xl"
          style={{
            background: `${skill.color}15`,
          }}
          whileHover={{
            rotate: [0, -10, 10, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <skill.icon
              className="w-12 h-12 transition-all duration-300 drop-shadow-lg"
              style={{ color: skill.color }}
            />
          </motion.div>

          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, (i - 1) * 20],
                    y: [0, -30 - i * 10],
                  }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                />
              ))}
            </>
          )}
        </motion.div>

        <h4 className="font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-primary-500 transition-colors">
          {skill.name}
        </h4>

        <div className="relative w-full h-2.5 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: `${skill.color}30`,
              filter: 'blur(4px)',
            }}
          />

          <motion.div
            className="relative h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>
        </div>

        <motion.span
          className="text-sm font-medium mt-3 inline-block"
          style={{ color: skill.color }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {skill.level}%
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
