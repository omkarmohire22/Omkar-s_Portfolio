import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Components (loaded immediately — needed on first paint)
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import AuroraBackground from './components/AuroraBackground'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import Hero from './sections/Hero'

// Context
import { ThemeProvider } from './context/ThemeContext'

// Lazy-load below-the-fold sections — they don't need to be in the initial bundle
const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))
const Certifications = lazy(() => import('./sections/Certifications'))
const GithubActivity = lazy(() => import('./sections/GithubActivity'))

// Minimal fallback that doesn't cause layout shift
const SectionFallback = () => (
  <div style={{ minHeight: '100vh' }} />
)

function App() {
  const [loading, setLoading] = useState(true)
  const [contentReady, setContentReady] = useState(false)

  // Lock scroll during loading
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    if (!loading) {
      // Allow the blur-fade-in animation to play before restoring scroll
      const t = setTimeout(() => {
        document.body.style.overflow = ''
        document.body.classList.add('theme-ready')
        setContentReady(true)
      }, 900)
      return () => clearTimeout(t)
    }
  }, [loading])

  useEffect(() => {
    // Loader shows for 2.2s — enough time for progress bar to reach 100%
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="relative"
          >
            <CustomCursor />
            <AuroraBackground />
            <ParticleBackground />
            <ScrollProgress />
            <Navbar />

            <main>
              {/* Hero is critical — loaded eagerly */}
              <Hero />

              {/* All below-the-fold sections are lazy-loaded */}
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Certifications />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <GithubActivity />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Experience />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </main>

            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
