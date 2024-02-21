import { useEffect, useState } from 'react'

const useKeyPress = (key: string) => {
  const [isActive, setActive] = useState(false)

  const handleKeyDown = (e: KeyboardEvent) => e.key === key && setActive(true)
  const handleKeyUp = (e: KeyboardEvent) => e.key === key && setActive(false)

  // set the state to inactive when the page is blurred
  // prevents from getting stuck in an active state if the key is 
  // released the page is no longer in focus.
  const handleBlur = () => setActive(false)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
    }
  }, [])

  return isActive
}

export default useKeyPress
