import { motion, useScroll, useTransform } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBookOpen } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import { useRef, useState } from 'react'



export default function Experience() {
  const sectionRef = useRef(null)

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: 'Bharati Vidyapeeth Institute of Management and Information Technology (BVIMIT)',
      location: 'Navi Mumbai',
      duration: '2025 - 2027',
      description: 'Currently pursuing 1st year. Focusing on advanced software development, digital transformation, and information technology management.',
      status: 'Ongoing'
    },
    {
      degree: "B.Sc Computer Science",
      school: 'D.U.B.S.S.C. College',
      location: 'Ratnagiri',
      duration: '2021 - 2024',
      description: 'Completed Bachelor of Science in Computer Science with a focus on core computing fundamentals, programming languages, and system architecture.',
      status: 'Completed'
    },
  ]



  return (
    <section ref={sectionRef} id="education" className="py-24 bg-gray-50 dark:bg-dark-200/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-accent-500/5 to-primary-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Education"
          subtitle="My academic journey and professional certifications"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Education Timeline */}
          <div className="lg:col-span-8 space-y-10">
            <AnimatedSection>
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <motion.div
                  className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FiBookOpen className="text-white w-5 h-5" />
                </motion.div>
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  Academic History
                </span>
              </h3>
            </AnimatedSection>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <AnimatedSection key={edu.degree} delay={index * 0.1}>
                  <motion.div
                    className="relative glass-card overflow-hidden group p-8"
                    whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.2)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${edu.status === 'Ongoing'
                        ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                        : 'bg-green-500/10 text-green-500 border border-green-500/20'
                        }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Decorative background number */}
                    <div className="absolute -right-4 -bottom-8 text-9xl font-bold opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
                      {index + 1}
                    </div>

                    <h4 className="text-2xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{edu.degree}</h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 font-bold text-lg mb-4">
                      {edu.school}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-primary-500/10 text-primary-500">
                          <FiCalendar className="w-4 h-4" />
                        </span>
                        <span className="font-medium">{edu.duration}</span>
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-accent-500/10 text-accent-500">
                          <FiMapPin className="w-4 h-4" />
                        </span>
                        <span className="font-medium">{edu.location}</span>
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed relative z-10">
                      {edu.description}
                    </p>

                    {/* Bottom Progress Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            {/* Quote or Motivation Card */}
            <AnimatedSection delay={0.3}>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-accent-600 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />

                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎓</span> Learning Goals
                </h4>
                <p className="text-white/80 leading-relaxed italic">
                  "As a first-year MCA student, I am dedicated to mastering the modern tech stack and applying my BSC Computer Science foundation to build intelligent, scalable solutions."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

