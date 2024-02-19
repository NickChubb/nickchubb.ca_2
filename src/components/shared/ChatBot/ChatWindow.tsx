import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import {
  commands,
  getHelpMessage,
  getSuggestionsMessage,
  storeLocalChat,
  getUserId
} from './chat'
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
import { useUserInfo } from '../../../hooks/use-user-info'

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
  opacity: 0;

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
  background: ${colour.cardBackground};
`

const UserChatElement = styled.div`
  color: ${text.light};
`

const BotChatItem = styled.div<{ error?: boolean }>`
  padding: 12px 20px;
  margin: 16px 0;
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
  color: ${text.fade};
  background-color: ${colour.cardHeader};

  ${(props) =>
    props.error &&
    `
    color: ${text.red};
  `}
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
        <BotChatItem error={elem.error}>
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
  chat: Array<ChatItem>
  setChat: React.Dispatch<SetStateAction<ChatItem[]>>
}

const ChatWindow: React.FC<ChatWindowProps> = ({ hide, chat, setChat }) => {
  const [isLoading, setLoading] = useState(false)
  const clear = () => updateChat([])
  const userData = useUserInfo()

  // Handle hiding chat window when clicking away from popup
  const popupRef = useRef(null)
  useClickOutside(popupRef, hide)

  // Handle close on escape key press
  const isEscapeActive = useKeyPress('Escape')
  if (isEscapeActive) hide()

  // Ref for input form to reset focus when API call is finished
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    // Check if the input is re-enabled
    if (inputRef.current && !isLoading) {
      inputRef.current.focus()
    }
  }, [isLoading])

  // Generate fade on window leaving and entering DOM with framer-motion
  const containerRef = useRef(null)
  const [isPresent, safeToRemove] = usePresence()
  useEffect(() => {
    if (!isPresent) {
      gsap.to(popupRef.current, {
        translateY: '-25px',
        duration: 0.35,
        ease: 'power.in',
      })
      gsap.to(containerRef.current, {
        opacity: 0,
        delay: 0.2,
        duration: 0.15,
        onComplete: () => safeToRemove?.(),
      })
    } else {
      gsap.to(popupRef.current, {
        translateY: '25px',
        duration: 0.35,
        ease: 'power.out',
      })
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.25,
      })
    }
  }, [isPresent, safeToRemove])

  const updateChat = (chat: Array<ChatItem>) => {
    setChat(chat)
    storeLocalChat(chat)
  }

  const handleSubmit = async (message: string) => {
    message = message.trim().toLowerCase()

    const localCommand = (callback: () => Array<string>) => {
      return updateChat([
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

    // Fetch response from backend API and update chat
    const newChat = [{ message: message, user: true }, ...chat]
    const userId = getUserId()
    updateChat(newChat)
    setLoading(true)
    const body = {
      message: message,
      userData: { ...userData, userId },
    }
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify(body),
    })
    const data = await response.json()
    updateChat([
      { message: data.message ?? data.error, user: false, error: !!data.error },
      ...newChat,
    ])
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
              innerRef={inputRef}
              type="text"
              name="message"
              id="message"
              placeholder={
                isLoading ? 'Generating response...' : '✨ Ask me anything! ✨'
              }
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
