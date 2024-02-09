import React, { useEffect, useRef, useState } from 'react'
import { commands, getHelpMessage, getSuggestionsMessage } from './chat'
import { ChatItem } from './types'
import useClickOutside from '../../../hooks/use-click-outside'
import styled from 'styled-components'
import { colour, shadow, text } from '../styles'
import { Field, Form, Formik } from 'formik'
import { Code, Mono } from '../text'
import ChatLoading from './ChatLoading'
import useKeyPress from '../../../hooks/use-key-press'
import { usePresence } from 'framer-motion'
import { gsap } from 'gsap'

const Container = styled.div<{ isPresent: boolean }>`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  position: fixed;
  top: 0px;

  ${(props) => props.isPresent && `backdrop-filter: blur(2px);`}
`

const PopupWrapper = styled.div`
  max-width: 640px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${colour.cardBackground};
  box-shadow: ${shadow.drop};
`

const PopupHeader = styled.div`
  padding: 16px 16px 0;
  text-align: center;
  color: ${text.light};
`

const PopupHeaderTitle = styled.div`
  margin-bottom: 12px;
`

const PopupHeaderSubtitle = styled.div`
  color: ${text.fade};
`

const Separator = styled.div`
  height: 1px;
  width: 100%:
  border-radius: 4px;
  margin: 16px;
  background-color: ${colour.cardHeader};
`

const ChatArea = styled.div`
  margin: 16px;
  max-height: 360px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
`

const UserChatElement = styled.div`
  color: ${text.light};
`

const BotChatItem = styled.div`
  padding: 8px 20px;
  margin: 12px 0;
  border-radius: 4px;
  color: ${text.light};
  background-color: ${colour.cardHeader};
`

const ChatLine = styled.p`
  margin: 4px;
`

const Input = styled(Field)`
  width: 100%;
  padding: 16px 16px;
  font-size: 18px;
  border: 1px solid rgb(20, 20, 20);
  background-color: ${colour.cardHeader};
  color: ${text.light};
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`

const renderChat = (chat: Array<ChatItem>) => {
  return chat.map((elem) => {
    if (elem.user) {
      return <UserChatElement>{`> ${elem.message}`}</UserChatElement>
    } else {
      return (
        <BotChatItem>
          {Array.isArray(elem.message)
            ? elem.message.map((line) => <ChatLine>{line}</ChatLine>)
            : elem.message}
        </BotChatItem>
      )
    }
  })
}

type ChatWindowProps = {
  hide: () => void
}

const ChatWindow: React.FC<ChatWindowProps> = ({ hide }) => {
  const [isLoading, setLoading] = useState(false)
  const [chat, setChat] = useState<Array<ChatItem>>([])
  const clear = () => setChat([])

  // Handle hiding chat window when clicking away from popup
  const popupRef = useRef(null)
  useClickOutside(popupRef, hide)

  // Handle close on escape key press
  const isActive = useKeyPress('Escape')
  if (isActive) hide()

  const containerRef = useRef(null)
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    if (!isPresent) {
      gsap.to(popupRef.current, {
        translateY: '-50px',
        duration: 0.4,
        ease: 'power.in',
      })
      gsap.to(containerRef.current, {
        opacity: 0,
        delay: 0.2,
        duration: 0.2,
        onComplete: () => safeToRemove?.(),
      })
    }
  }, [isPresent, safeToRemove])

  const handleSubmit = async (message: string) => {
    message = message.trim().toLowerCase()

    const localCommand = (callback: () => Array<string>) => {
      return setChat([
        { message: callback(), user: false },
        { message: message, user: true },
        ...chat,
      ])
    }

    // Local Commands
    if (commands[0].command.includes(message)) return hide()
    if (commands[1].command.includes(message)) return clear()
    if (commands[2].command.includes(message))
      return localCommand(getHelpMessage)
    if (commands[3].command.includes(message))
      return localCommand(getSuggestionsMessage)

    // Fetch response from backend API
    const newChat = [{ message: message, user: true }, ...chat]
    setChat(newChat)
    setLoading(true)
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: message,
    })
    const data = await res.json()
    setChat([{ message: data, user: false }, ...newChat])
    setLoading(false)
  }

  return (
    <Container isPresent={isPresent} ref={containerRef}>
      <PopupWrapper ref={popupRef}>
        <PopupHeader>
          <PopupHeaderTitle>
            <Mono>Hey, welcome to my AI-powered chat-bot! 🤖</Mono>
          </PopupHeaderTitle>
          <PopupHeaderSubtitle>
            <small>
              {'> '}
              <Code>exit</Code> to exit or <Code>help</Code> for a list of
              commands
            </small>
          </PopupHeaderSubtitle>
        </PopupHeader>
        <Separator />
        <ChatArea>
          {isLoading && <ChatLoading />}
          {renderChat(chat)}
        </ChatArea>
        <Formik
          initialValues={{ message: '' }}
          onSubmit={({ message }, { resetForm }) => {
            handleSubmit(message)
            resetForm()
          }}
        >
          <Form>
            <Input
              type="text"
              name="message"
              id="message"
              placeholder="✨ Ask me anything! ✨"
              disabled={isLoading}
              autoComplete="off"
              autoFocus
            />
          </Form>
        </Formik>
      </PopupWrapper>
    </Container>
  )
}

export default ChatWindow
