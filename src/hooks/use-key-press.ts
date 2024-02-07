import { useEffect, useState } from "react"

const useKeyPress = (key: string) => {
  const [isActive, setActive] = useState(false)

  const handleKeyDown = (event: KeyboardEvent) => event.key === key && setActive(true)
  const handleKeyUp = (event: KeyboardEvent) => event.key === key && setActive(false)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    }
  }, [])

  return isActive
}

export default useKeyPress