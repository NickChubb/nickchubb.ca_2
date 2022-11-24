import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '../../hooks/use-on-screen'
import { text } from './styles'

export const SectionWrapper = styled.div<{ ref: any }>`
  width: 100%;
  min-height: 100vh;
  padding: 48px 48px 48px 0;
  transition: 0.25s;
`

export const SectionTitle = styled.h2<{ isVisible: boolean }>`
  font-family: 'Roboto Mono', monospace;
  transition: color 0.5s;
  padding-bottom: 8px;
  margin: 48px 0;
  max-width: fit-content;
  border-bottom: 1px solid ${text.fade};
`

type SectionProps = {
  title: string
  setVisible: Dispatch<SetStateAction<string>>
  Component: React.FC<any>
}

const Section: React.FC<SectionProps> = ({ title, setVisible, Component }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  if (isVisible) {
    console.log('setting visible ' + title)
    setVisible(title)
  }

  return (
    <SectionWrapper id={title} ref={ref}>
      <SectionTitle isVisible={isVisible}>{title}</SectionTitle>
      <Component />
    </SectionWrapper>
  )
}

export default Section
