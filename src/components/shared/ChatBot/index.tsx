import { useState } from 'react'
import useChatShortcut from '../../../hooks/use-chat-shortcut'
import FloatingActionButton from './FloatingActionButton'
import ChatWindow from './ChatWindow'
import { AnimatePresence } from 'framer-motion'

const ChatBot: React.FC = () => {
  const [isVisible, setVisibile] = useState(false)
  const show = () => setVisibile(true)
  const hide = () => setVisibile(false)
  useChatShortcut(show)

  return (
    <>
      <AnimatePresence>
        {isVisible ? <ChatWindow hide={hide} /> : null}
      </AnimatePresence>
      <FloatingActionButton show={show} />
    </>
  )
}

export default ChatBot
