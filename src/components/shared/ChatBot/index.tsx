import { useState } from 'react'
import useChatShortcut from '../../../hooks/use-chat-shortcut'
import FloatingActionButton from './FloatingActionButton'
import ChatWindow from './ChatWindow'
import { AnimatePresence } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip'
import styled from 'styled-components'
import { colour, shadow } from '../styles'

const TooltipPopup = styled.div`
  background: ${colour.cardHeader};
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${colour.cardBackground};
  font-size: 14px;
  user-select: none;
  box-shadow: ${shadow.tooltip};
`

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
      <Tooltip initialOpen={true}>
        <TooltipContent>
          <TooltipPopup>Check out my new AI chatbot!</TooltipPopup>
        </TooltipContent>
        <TooltipTrigger asChild={true}>
          <FloatingActionButton show={show} />
        </TooltipTrigger>
      </Tooltip>
    </>
  )
}

export default ChatBot
