import { useState } from 'react'
import useChatShortcut from '../../../hooks/use-chat-shortcut'
import FloatingActionButton from './FloatingActionButton'
import ChatWindow from './ChatWindow'

const ChatPopup: React.FC = () => {
  const [isVisible, setVisibile] = useState(false)
  const show = () => setVisibile(true)
  const hide = () => setVisibile(false)
  useChatShortcut(show)

  if (isVisible) return (
    <ChatWindow hide={hide} />
  )
  return <FloatingActionButton show={show} />
}

export default ChatPopup
