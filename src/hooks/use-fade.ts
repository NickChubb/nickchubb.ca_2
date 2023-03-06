import { useState, useEffect } from 'react'

export default function useFade(ref: any) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOpacity(Math.round(entry.intersectionRatio * 100)/10), 
      { threshold: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1]}
    )

    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return opacity
}