import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '../../hooks/use-on-screen'
import { breakpoints, text } from './styles'

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

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`

const SectionHeader = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;

  &:hover > a {
    display: block;
  }
`

export const SectionTitle = styled.h2<{ isVisible: boolean }>`
  font-family: 'Roboto Mono', monospace;
  transition: color 0.5s;
  padding-bottom: 8px;
  margin: 48px 0;
  max-width: fit-content;
  border-bottom: 1px solid ${text.fade};
`

const FragmentLink = styled.a`
  display: none;
`

type SectionProps = {
  title: string
  setSection: Dispatch<SetStateAction<string>>
  Component: React.FC<any>
  center?: boolean
}

const Section: React.FC<SectionProps> = ({ title, setSection, Component, center }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  if (isVisible) {
    console.log('setting visible ' + title)
    setSection(title)
  }

  const getLink = () => {}

  return (
    <SectionWrapper id={title} ref={ref} center={center}>
      <SectionHeader onClick={getLink}>
        <SectionTitle isVisible={isVisible}>{title}</SectionTitle>
        <FragmentLink><small> #</small></FragmentLink>
      </SectionHeader>
      <Component />
    </SectionWrapper>
  )
}

export default Section
