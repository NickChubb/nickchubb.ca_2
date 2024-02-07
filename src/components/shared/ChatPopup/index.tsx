import { useRef, useState } from 'react'
import useChatShortcut from '../../../hooks/use-chat-shortcut'
import styled from 'styled-components'
import { colour, shadow, text } from '../styles'
import useClickOutside from '../../../hooks/use-click-outside'
import { Field, Form, Formik } from 'formik'
import { Code, Mono } from '../text'
import FloatingActionButton from './FloatingActionButton'
import ChatLoading from './ChatLoading'
import { ChatItem } from './types'
import { commands, getHelpMessage, getSuggestionsMessage } from './chat'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  position: fixed;
  top: 0px;
  transition: 0.5s;
  backdrop-filter: blur(2px);
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

const exitQuery = ['exit', 'quit', ':wq']

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

const ChatPopup: React.FC = () => {
  const [isVisible, setVisibile] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [chat, setChat] = useState<Array<ChatItem>>([])
  const popupRef = useRef(null)
  const show = () => setVisibile(true)
  const hide = () => setVisibile(false)
  const clear = () => setChat([])
  useChatShortcut(show)
  useClickOutside(popupRef, hide)

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

  if (isVisible) {
    return (
      <Container>
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

  return <FloatingActionButton show={show} />
}

export default ChatPopup
