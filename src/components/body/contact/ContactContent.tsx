import { useState } from 'react'
import styled from 'styled-components'
import { RiCheckboxCircleFill, RiErrorWarningLine } from 'react-icons/ri'
import useMediaQuery from '../../../hooks/use-media-query'
import { breakpoints, colour, text } from '../../shared/styles'
import { Mono, Paragraph } from '../../shared/text'
import { State } from './ContactTypes'
import ContactForm from './ContactForm'
import { Dna } from 'react-loader-spinner'

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const PanelWrapper = styled.div`
  width: 100%;
  height: 470px;
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
    `border: 2px solid ${text.green}; 
    color: ${text.green};
  `}
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
  </Panel>
)

const ErrorPanel: React.FC = () => (
  <Panel type="ERROR">
    <RiErrorWarningLine fontSize={84} />
    <Mono>Error</Mono>
    <Paragraph>
      It seems like there is a problem sending the email... Trying sending me an
      email directly instead by clicking here!
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
      <Paragraph>
        If you have any questions or would like to get in touch, please use the form below to send me an email!
      </Paragraph>
      <PanelWrapper>{getContactPanel()}</PanelWrapper>
    </ContactWrapper>
  )
}

export default ContactContent
