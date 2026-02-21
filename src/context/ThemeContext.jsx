import { createContext, useContext, useEffect, useRef, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Initialize theme synchronously from localStorage (same logic as the blocking script in index.html)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })

  // Track if this is the first render (so we don't animate on load)
  const isFirstRender = useRef(true)

  useEffect(() => {
    const root = window.document.documentElement

    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

    if (isFirstRender.current) {
      // After the first paint, enable smooth color transitions for user-triggered toggles
      // Use requestAnimationFrame to ensure this runs after the browser has painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.add('theme-ready')
          isFirstRender.current = false
        })
      })
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
