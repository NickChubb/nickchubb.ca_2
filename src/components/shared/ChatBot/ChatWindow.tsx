import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import {
  commands,
  getHelpMessage,
  getSuggestionsMessage,
  storeLocalChat,
  getUserId,
} from './chat'
import { AiFillCloseCircle } from 'react-icons/ai'
import { ChatItem } from './types'
import useClickOutside from '../../../hooks/use-click-outside'
import styled from 'styled-components'
import { breakpoints, colour, shadow, text } from '../styles'
import { Field, Form, Formik } from 'formik'
import { Code, Mono } from '../text'
import ChatLoading from './ChatLoading'
import useKeyPress from '../../../hooks/use-key-press'
import { usePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { useUserInfo } from '../../../hooks/use-user-info'
import useIsMobile from '../../../hooks/use-is-mobile'

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
  max-width: 720px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${colour.cardBackground};
  box-shadow: ${shadow.drop};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: 100vh;
    border-radius: 0;
  }
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
  margin-bottom: 16px;
`

const ChatArea = styled.div`
  margin: 0 16px;
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;
  background-color: ${colour.cardBackground};
  background-image: url('/grainy_background.png');
  padding: 24px 16px;
  text-align: justify;
  border-radius: 4px;
  border: 1px solid rgb(20, 20, 20);

  @media only screen and (max-width: ${breakpoints.mobile}) {
    max-height: calc(100% - 360px);
    height: 100%;
  }
`

const chatElementStyles = `
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
  padding: 10px 20px;
  border: 1px solid;
  width: fit-content;
`

const UserChatElement = styled.div`
  ${chatElementStyles}
  color: ${colour.cardHeader};
  background: ${colour.lightGreen};
  border-bottom-right-radius: 0px;
  border-color: ${colour.lightGreenBorder};
  margin-left: 24px;
  align-self: flex-end;
`

const BotChatItem = styled.div<{ error?: boolean }>`
  ${chatElementStyles}
  padding: 12px 20px; /* Override for specific padding */
  color: ${text.fade};
  background-color: ${colour.cardHeader};
  border-bottom-left-radius: 0px;
  border-color: ${colour.cardBackground};
  margin-right: 24px;
  align-self: flex-start;

  ${(props) =>
    props.error &&
    `
    color: ${text.red};
  `}
`

const ChatLine = styled.p`
  margin: 4px;
`

const Input = styled(Field)<{ disabled: boolean }>`
  width: 100%;
  padding: 16px 16px;
  font-size: 18px;
  border: 1px solid rgb(20, 20, 20);
  background-color: ${colour.cardHeader};
  color: ${text.light};
  border-radius: 4px;
  margin-top: 16px;
  &:focus {
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: wait;
  `}
`

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right 16px;
  font-size: 22px;
  cursor: pointer;
  color: ${colour.cardHighlighted};
  transition: 0.2s all;

  &:hover {
    color: ${text.fade};
  }
`

const renderChat = (chat: Array<ChatItem>) => {
  return chat.map((elem) => {
    if (elem.user) {
      return <UserChatElement>{`${elem.message}`}</UserChatElement>
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
  const isMobile = useIsMobile()
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
        translateY: isMobile ? 0 : '-25px',
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
        translateY: isMobile ? 0 : '25px',
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
    message = message.trim()

    const localCommand = (callback: () => Array<string>) => {
      return updateChat([
        { message: callback(), user: false },
        { message: message, user: true },
        ...chat,
      ])
    }

    // Local Commands
    const messageLower = message.toLowerCase()
    if (commands[0].command.includes(messageLower)) return hide()
    if (commands[1].command.includes(messageLower)) return clear()
    if (commands[2].command.includes(messageLower))
      return localCommand(getHelpMessage)
    if (commands[3].command.includes(messageLower))
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
            <Mono>Hey, welcome to my AI-powered chatbot! 🤖</Mono>
          </PopupHeaderTitle>
          <PopupHeaderSubtitle>
            <small>
              {'> '}
              <Code>exit</Code> to exit or <Code>help</Code> for a list of
              commands
            </small>
          </PopupHeaderSubtitle>
        </PopupHeader>
        {chat.length > 0 && (
          <ChatArea>
            {isLoading && <ChatLoading />}
            {renderChat(chat)}
          </ChatArea>
        )}
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
                isLoading
                  ? 'Generating response... 🤔'
                  : '✨ Ask me anything! ✨'
              }
              disabled={isLoading}
              autoComplete="off"
              autoFocus
            />
          </Form>
        </Formik>

        <CloseButton onClick={hide}>
          <AiFillCloseCircle width={24} height={24} />
        </CloseButton>
      </PopupWrapper>
    </Container>
  )
}

export default ChatWindow
