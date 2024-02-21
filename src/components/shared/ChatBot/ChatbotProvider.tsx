import React, { createContext, useState } from 'react'

type ChatbotProviderValue = {
  isChatOpen: boolean
  setChatOpen: React.Dispatch<React.SetStateAction<boolean>>
  show: () => void
  hide: () => void
  toggle: () => void
}

export const ChatbotContext = createContext<ChatbotProviderValue>(
  null as unknown as ChatbotProviderValue
)

const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isChatOpen, setChatOpen] = useState(false)
  const show = () => setChatOpen(true)
  const hide = () => setChatOpen(false)
  const toggle = () => setChatOpen(!isChatOpen)
  return (
    <ChatbotContext.Provider
      value={{
        isChatOpen: isChatOpen,
        setChatOpen: setChatOpen,
        show: show,
        hide: hide,
        toggle: toggle,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  )
}

export default ChatbotProvider
