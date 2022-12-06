import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '../../hooks/use-on-screen'
import { section } from '../body/sections'
import { text } from './styles'

export const SectionWrapper = styled.div<{ ref: any, center?: boolean }>`
  width: 100%;
  min-height: 100vh;
  padding: 48px 0;
  transition: 0.25s;

  ${props => props.center && `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
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
  center?: boolean
}

const Section: React.FC<SectionProps> = ({ title, setVisible, Component, center }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  if (isVisible) {
    console.log('setting visible ' + title)
    setVisible(title)
  }

  return (
    <SectionWrapper id={title} ref={ref} center={center}>
      <SectionTitle isVisible={isVisible}>{title}</SectionTitle>
      <Component />
    </SectionWrapper>
  )
}

export default Section
