import { useState } from 'react'
import styled from 'styled-components'
import { RiCheckboxCircleFill, RiErrorWarningLine } from 'react-icons/ri'
import useMediaQuery from '../../../hooks/use-media-query'
import { breakpoints, colour, text } from '../../shared/styles'
import { Mono, Paragraph } from '../../shared/text'
import { State } from './types'
import ContactForm from './ContactForm'
import { Dna } from 'react-loader-spinner'
import Spacer from '../../shared/Spacer'
import FooterSection from '../../FooterSection'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const ContactWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PanelWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: ${breakpoints.mobile}) {
    height: 470px;
  }
`

const Panel = styled.div<{ type: State }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  animation: color, border 0.35s ease-in;
  padding: 84px;
  text-align: center;

  ${(props) =>
    props.type === 'ERROR' &&
    `
    border: 2px solid ${text.red};
    color: ${text.red};
    `}
  ${(props) =>
    props.type === 'SENDING' &&
    `
    border: 2px solid ${text.normal};
    color: ${text.normal};
  `}
  ${(props) =>
    props.type === 'SENT' &&
    `
    border: 2px solid ${text.green}; 
    color: ${text.green};
  `}
`

const Link = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-weight: 800;
`

const SendingPanel: React.FC = () => (
  <Panel type="SENDING">
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
    <Mono>Sending...</Mono>
  </Panel>
)

const SentPanel: React.FC = () => (
  <Panel type="SENT">
    <RiCheckboxCircleFill fontSize={84} />
    <Mono>Sent!</Mono>
    <Spacer height="2rem" />
    <Paragraph>
      Thank you for your message! I will get back to you as soon as possible.
    </Paragraph>
  </Panel>
)

const ErrorPanel: React.FC = () => (
  <Panel type="ERROR">
    <RiErrorWarningLine fontSize={84} />
    <Mono>Error</Mono>
    <Spacer height="2rem" />
    <Paragraph>
      Oops! There seems to be a problem sending a contact request at this
      time...
    </Paragraph>
    <Paragraph>
      Send me an email directly instead by clicking 👉{' '}
      <Link href="mailto:nick@nickchubb.ca">here.</Link>
    </Paragraph>
  </Panel>
)

const ContactContent: React.FC = () => {
  const [state, setState] = useState<State>('DEFAULT')
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  const getContactPanel = () => {
    switch (state) {
      case 'SENDING': {
        return <SendingPanel />
      }
      case 'SENT': {
        return <SentPanel />
      }
      case 'ERROR': {
        return <ErrorPanel />
      }
      default: {
        return <ContactForm state={state} setState={setState} />
      }
    }
  }

  return (
    <ContactWrapper>
      <ContactContainer>
        <Paragraph>
          I am currently seeking{' '}
          <b>
            Full-Stack employment opportunities
          </b>
          . If you have any questions or would like to get in touch, please use
          the form below to send me an email!
        </Paragraph>
        <PanelWrapper>{getContactPanel()}</PanelWrapper>
      </ContactContainer>
      <FooterSection />
    </ContactWrapper>
  )
}

export default ContactContent
