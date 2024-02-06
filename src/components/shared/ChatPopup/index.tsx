import { useRef, useState } from 'react'
import useChatShortcut from '../../../hooks/use-chat-shortcut'
import styled from 'styled-components'
import { colour, shadow, text } from '../styles'
import useClickOutside from '../../../hooks/use-click-outside'
import { Field, Form, Formik } from 'formik'
import { Mono } from '../text'

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
  padding: 16px;
  border-radius: 8px;
  background: ${colour.cardBackground};
  box-shadow: 0px 0px 32px 0px ${shadow.inset};
`

const PopupHeader = styled.div`
  padding: 16px;
  text-align: center;
  color: ${text.light};
`

const ChatArea = styled.div`
  padding: 16px;
`

const Input = styled(Field)`
  width: 100%;
  padding: 16px 16px;
  font-size: 18px;
  border: 1px solid ${colour.cardHighlighted};
  background-color: ${colour.cardHeader};
  color: ${text.light};
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`

const renderChat = (chat: Array<string>) => {
  return chat.map((elem) => (
    <div>{`> ${elem}`}</div>
  ))
}

const ChatPopup: React.FC = () => {
  const [isVisible, setVisibile] = useState(false)
  const [chat, setChat] = useState<Array<string>>([])
  const popupRef = useRef(null)
  const show = () => setVisibile(true)
  const hide = () => setVisibile(false)
  useChatShortcut(show)
  useClickOutside(popupRef, hide)

  const handleSubmit = (message: string) => {
    setChat([...chat, message])
  }

  if (isVisible) {
    return (
      <Container>
        <PopupWrapper ref={popupRef}>
          <PopupHeader>
            <Mono>Hey, welcome to my AI-powered chat-bot, ask me anything!</Mono>
          </PopupHeader>
          <ChatArea>{renderChat(chat)}</ChatArea>
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
                autoFocus
              />
            </Form>
          </Formik>
        </PopupWrapper>
      </Container>
    )
  }

  return null
}

export default ChatPopup
