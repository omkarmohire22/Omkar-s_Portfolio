import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import Modal from '../components/Modal'
import { FiExternalLink, FiGithub, FiFolder, FiArrowRight, FiCheckCircle, FiCpu, FiLayers } from 'react-icons/fi'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Imagify AI',
      description: 'An AI-powered application that generates stunning visual art from textual descriptions.',
      longDescription: 'Imagify AI is a sophisticated image generation platform that leverages OpenAI\'s DALL-E models to provide users with a seamless creative experience. It features a community showcase where users can share their prompt-engineered masterpieces.',
      challenges: [
        'Optimizing API calls to manage high computation costs.',
        'Implementing a robust cloud-based image search and storage system.',
        'Ensuring responsive UI for complex AI interactions.'
      ],
      image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop',
      tags: ['React', 'OpenAI', 'Node.js', 'Tailwind'],
      category: 'fullstack',
      github: 'https://github.com/omkarmohire22/Imagify_AI.git',
      live: '#',
      featured: true,
    },
    {
      title: 'Fitmate - Smart Gym Companion',
      description: 'A comprehensive gym companion app for tracking workouts and monitoring progress.',
      longDescription: 'Fitmate is a data-driven fitness ecosystem designed to replace the traditional paper logging. It provides users with automated volume calculations, progressive overload tracking, and intuitive chart visualizations of their fitness journey.',
      challenges: [
        'Developing a complex state management system for multi-set activities.',
        'Integrating real-time charts with high performance.',
        'Designing an offline-first architecture for gym environments.'
      ],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      tags: ['MERN Stack', 'Redux', 'Chart.js', 'Firebase'],
      category: 'fullstack',
      github: 'https://github.com/omkarmohire22/FITMATE-Companion.git',
      live: '#',
      featured: true,
    },
    {
      title: 'Weather Snap',
      description: 'A fast and lightweight weather application providing real-time forecasts and localized weather alerts with a minimal user interface.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tags: ['React', 'OpenWeather API', 'Framer Motion'],
      category: 'small',
      github: 'https://github.com/omkarmohire22',
      live: '#',
      featured: false,
    },
    {
      title: 'CodeQuiz Pro',
      description: 'An interactive coding quiz platform designed to test and improve technical knowledge across various programming languages.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      tags: ['JavaScript', 'HTML5', 'Tailwind CSS'],
      category: 'small',
      github: 'https://github.com/omkarmohire22/CodeQuiz-Pro.git',
      live: '#',
      featured: false,
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'small', label: 'Small Projects' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(217, 70, 239, 0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work and personal projects"
        />

        {/* Enhanced Filter Buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`relative px-8 py-3 rounded-full font-medium transition-all overflow-hidden ${filter === cat.id
                ? 'text-white'
                : 'text-gray-700 dark:text-gray-300'
                }`}
              style={{
                background: filter === cat.id
                  ? 'linear-gradient(135deg, #0ea5e9, #d946ef)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: filter === cat.id
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: filter === cat.id
                  ? '0 10px 30px rgba(14, 165, 233, 0.3)'
                  : 'none',
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: '0 10px 30px rgba(14, 165, 233, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Shimmer effect */}
              {filter === cat.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Enhanced Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isHovered={hoveredProject === project.title}
                onHover={() => setHoveredProject(project.title)}
                onLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-400/60 to-transparent" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold border border-primary-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary py-3 flex items-center justify-center gap-2"
                  >
                    <FiGithub /> Source Code
                  </a>
                  {selectedProject.live !== '#' && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary py-3 flex items-center justify-center gap-2"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-3">
                    <FiLayers className="text-primary-500" /> Project Overview
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.challenges && (
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
                      <FiCpu className="text-accent-500" /> Key Challenges & Solutions
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <FiCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal>

        {/* Enhanced View More Button */}
        <AnimatedSection className="text-center mt-16">
          <motion.a
            href="https://github.com/omkarmohire22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9, #d946ef)',
              boxShadow: '0 10px 40px rgba(14, 165, 233, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 50px rgba(14, 165, 233, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #d946ef, #0ea5e9)',
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <FiGithub className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View More on GitHub</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Enhanced Project Card Component
function ProjectCard({ project, index, isHovered, onHover, onLeave, onClick }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8])

  const springConfig = { damping: 20, stiffness: 300 }
  const smoothRotateX = useSpring(rotateX, springConfig)
  const smoothRotateY = useSpring(rotateY, springConfig)

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
      layout
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative overflow-hidden h-full flex flex-col rounded-2xl backdrop-blur-md"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        whileHover={{
          y: -10,
          boxShadow: '0 30px 60px rgba(14, 165, 233, 0.15)',
        }}
        onClick={onClick}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), transparent, rgba(217, 70, 239, 0.2))',
          }}
        />

        {/* Project Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6 }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 via-transparent to-transparent" />

          {/* Hover Overlay with Actions */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-dark-300/95 via-dark-300/50 to-transparent flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full text-white relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{
                  scale: 1.2,
                  background: 'rgba(14, 165, 233, 0.3)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
            )}
            {project.live && project.live !== '#' ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full text-white relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{
                  scale: 1.2,
                  background: 'rgba(217, 70, 239, 0.3)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FiExternalLink className="w-6 h-6" />
              </motion.a>
            ) : (
              <motion.div
                className="px-4 py-2 rounded-xl text-white text-sm font-bold bg-white/10 backdrop-blur-md border border-white/20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                Live Link Coming Soon
              </motion.div>
            )}
          </motion.div>

          {/* Featured Badge with animation */}
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-white text-xs font-semibold"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #d946ef)',
                boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)',
              }}
              animate={{
                boxShadow: [
                  '0 4px 15px rgba(14, 165, 233, 0.4)',
                  '0 4px 25px rgba(217, 70, 239, 0.5)',
                  '0 4px 15px rgba(14, 165, 233, 0.4)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐ Featured
            </motion.div>
          )}
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col p-6">
          <div className="flex items-start gap-3 mb-3">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FiFolder className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-400 text-sm mb-5 flex-1 leading-relaxed">
            {project.description}
          </p>

          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'rgba(14, 165, 233, 0.1)',
                  color: '#0ea5e9',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + tagIndex * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  background: 'rgba(14, 165, 233, 0.2)',
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
