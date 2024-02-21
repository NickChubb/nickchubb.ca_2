import { useContext, useState } from 'react'
import useChatShortcut from '../../../hooks/use-chat-shortcut'
import ChatWindow from './ChatWindow'
import { AnimatePresence } from 'framer-motion'
import { ChatItem } from './types'
import { getLocalChat } from './chat'
import { ChatbotContext } from './ChatbotProvider'

const ChatBot: React.FC = () => {
  const [chat, setChat] = useState<Array<ChatItem>>(getLocalChat())
  const { isChatOpen, show, hide } = useContext(ChatbotContext)
  useChatShortcut(show)

  return (
    <AnimatePresence>
      {isChatOpen ? <ChatWindow hide={hide} chat={chat} setChat={setChat} /> : null}
    </AnimatePresence>
  )
}

export default ChatBot
