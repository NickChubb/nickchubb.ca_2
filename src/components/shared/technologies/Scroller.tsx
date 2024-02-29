import React, { useContext } from 'react'
import styled from 'styled-components'
import { breakpoints, colour, text } from '../styles'
import Marquee from 'react-fast-marquee'
import Technologies from '.'
import useScrollToSection from '../../../hooks/use-scroll-to-section'
import { ChatbotContext } from '../ChatBot/ChatbotProvider'
import useIsMobile from '../../../hooks/use-is-mobile'

const Container = styled.div`
  height: 32px;
  width: 100%;
  position: sticky;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${text.green};
  color: ${colour.cardBackground};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
`

const ScrollerWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  width: 100%;
  justify-content: space-between;

  & > div {
    margin-left: 120px;
    @media only screen and (max-width: ${breakpoints.mobile}) {
      margin-left: 60px;
    }
  }
`

const ScrollerItem = styled.div<{ onClick?: () => void }>`
  font-family: 'Roboto Mono', monospace;
  margin-left: 60px !important;
  user-select: none;

  ${(props) => !!props.onClick && `
    cursor: pointer;
  `}
`

const Divider: React.FC = () => <ScrollerItem>•</ScrollerItem>

type ScrollerProps = {}

const Scroller: React.FC<ScrollerProps> = ({}) => {
  const isMobile = useIsMobile()
  const scrollToContact = useScrollToSection('contact')
  const { show } = useContext(ChatbotContext)

  const messages = [
    {
      content:
        'I am currently seeking Fullstack Development Roles! Click here to Contact Me :)',
      onClick: scrollToContact,
    },
    {
      content: 'Try out my new AI Chatbot -> Click Here!',
      onClick: show,
    },
  ]

  return (
    <Container>
      <Marquee>
        <ScrollerWrapper>
          <Technologies />
          {messages.map((message, key) => {
            if (isMobile) return null
            return (
              <>
                {key === 0 && <Divider />}
                <ScrollerItem onClick={message.onClick}>
                  {message.content}
                </ScrollerItem>
                <Divider />
              </>
            )
          })}
        </ScrollerWrapper>
      </Marquee>
    </Container>
  )
}

export default Scroller
