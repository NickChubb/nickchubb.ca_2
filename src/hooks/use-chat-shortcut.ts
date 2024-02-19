import { useEffect } from 'react'

const handleKeyDown = (
  toggle: () => void,
  key: string,
  metaKey: boolean,
  ctrlKey: boolean
) => {
  if (key === 'k' && (metaKey || ctrlKey)) toggle()
}

const useChatShortcut = (toggle: () => void) => {
  useEffect(() => {
    window.addEventListener('keydown', (event) =>
      handleKeyDown(toggle, event.key, event.metaKey, event.ctrlKey)
    )
    return () => {
      window.removeEventListener('keydown', (event) =>
        handleKeyDown(toggle, event.key, event.metaKey, event.ctrlKey)
      )
    }
  }, [])
}

export default useChatShortcut
