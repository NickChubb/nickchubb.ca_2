import { useState, useEffect } from 'react'

export default function useOnScreen(ref, threshold) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: threshold }
    )

    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
