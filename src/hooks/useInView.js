import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!options.triggerOnce) {
          setIsInView(false)
        }
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, options.triggerOnce])

  return [ref, isInView]
}

export default useInView
