import React, { useContext } from 'react'
import styled from 'styled-components'
import { colour, text } from '../styles'
import { Mono } from '../text'
import { ChatbotContext } from './ChatbotProvider'

const Wrapper = styled.div`
  padding: 12px 18px 12px 16px;
  background: ${colour.cardHeader};
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #111;
  color: ${text.light};
  display: flex;
  flex-direction: row;
  gap: 12px;
  font-size: 20px;
  line-height: 20px;

  transition: 0.25s all;

  &:hover {
    background-color: ${colour.cardHighlighted};
    color: ${text.normal};
  }
`

const ChatbotButton: React.FC = () => {
  const { show } = useContext(ChatbotContext)
  return (
    <Wrapper onClick={show}>{'✨'} <Mono>chatbot</Mono></Wrapper>
  )
}

export default ChatbotButton