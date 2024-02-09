import { useEffect } from 'react'

const handleKeyDown = (toggle: () => void, key: string, metaKey: boolean) => {
  if (key === 'k' && metaKey) toggle()
}

const useChatShortcut = (toggle: () => void) => {
  useEffect(() => {
    window.addEventListener('keydown', (event) =>
      handleKeyDown(toggle, event.key, event.metaKey)
    )
    return () => {
      window.removeEventListener('keydown', (event) =>
        handleKeyDown(toggle, event.key, event.metaKey)
      )
    }
  }, [])
}

export default useChatShortcut
