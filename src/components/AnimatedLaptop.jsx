import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedLaptop() {
  const [currentLine, setCurrentLine] = useState(0)
  
  const codeLines = [
    { text: 'const developer = {', color: '#c678dd' },
    { text: '  name: "Your Name",', color: '#98c379' },
    { text: '  role: "Full Stack Dev",', color: '#98c379' },
    { text: '  skills: [', color: '#c678dd' },
    { text: '    "React", "Node.js",', color: '#e5c07b' },
    { text: '    "TypeScript", "Python"', color: '#e5c07b' },
    { text: '  ],', color: '#c678dd' },
    { text: '  passion: "Building",', color: '#98c379' },
    { text: '  available: true', color: '#56b6c2' },
    { text: '};', color: '#c678dd' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (codeLines.length + 3))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Laptop glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Laptop container */}
      <motion.div
        className="relative"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Screen */}
        <div className="relative w-72 md:w-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-1 shadow-2xl">
          {/* Screen bezel */}
          <div className="bg-gray-950 rounded-t-xl overflow-hidden">
            {/* Menu bar */}
            <div className="bg-gray-800 px-3 py-1.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-400 font-mono">portfolio.jsx</span>
              </div>
            </div>

            {/* Code editor */}
            <div className="p-3 h-48 md:h-56 font-mono text-xs md:text-sm overflow-hidden bg-[#282c34]">
              {/* Line numbers */}
              <div className="flex">
                <div className="text-gray-600 pr-3 select-none border-r border-gray-700 mr-3">
                  {codeLines.map((_, i) => (
                    <div key={i} className="leading-5">{i + 1}</div>
                  ))}
                </div>

                {/* Code content */}
                <div className="flex-1">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className="leading-5 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: i <= currentLine ? 1 : 0.3,
                        x: 0,
                      }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <span style={{ color: line.color }}>{line.text}</span>
                      {i === currentLine && i < codeLines.length && (
                        <motion.span
                          className="w-2 h-4 bg-primary-500 ml-0.5"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal at bottom */}
            <div className="bg-gray-900 border-t border-gray-700 p-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-green-400">➜</span>
                <span className="text-cyan-400">~/portfolio</span>
                <motion.span
                  className="text-white"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  npm run awesome
                </motion.span>
                <motion.span
                  className="w-2 h-3 bg-white"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base/keyboard */}
        <div className="relative">
          {/* Hinge */}
          <div className="h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b" />
          
          {/* Keyboard base */}
          <motion.div
            className="w-80 md:w-96 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mx-auto"
            style={{ perspective: '500px', transformStyle: 'preserve-3d' }}
          >
            {/* Trackpad indicator */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
          </motion.div>
        </div>

        {/* Reflection */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent rounded-full blur-sm"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating notifications */}
      <motion.div
        className="absolute -top-4 -right-4 px-3 py-1.5 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ● Online
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-4 px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-full shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: 'spring' }}
      >
        <motion.span
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Building magic ✨
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
