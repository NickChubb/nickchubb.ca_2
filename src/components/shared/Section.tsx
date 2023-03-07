import { Dispatch, SetStateAction, useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '../../hooks/use-on-screen'
import { scrollToSection } from '../../utils/scroll'
import { breakpoints, text } from './styles'

export const SectionWrapper = styled.div<{
  ref: any
  center?: boolean
  isVisible?: boolean
}>`
  width: 100%;
  min-height: 100vh;
  padding: 0 0 48px;
  transition: 0.25s;
  margin-bottom: 48px;

  ${(props) =>
    props.center &&
    `
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
  padding: 0;
`

type SectionProps = {
  title: string
  setSection: Dispatch<SetStateAction<string>>
  Component: React.FC<any> | React.ReactNode
  center?: boolean
}

const Section: React.FC<SectionProps> = ({
  title,
  setSection,
  Component,
  center,
}) => {
  const ref = useRef()
  const isVisible: boolean = useOnScreen(ref, 0.5)
  if (isVisible) {
    setSection(title)
  }

  const getLink = () => {
    scrollToSection(title)
    // Copy fragment link to clipboard
  }

  const getBody = () => {
    if (typeof Component === 'function') return <Component />
    return Component
  }

  return (
    <SectionWrapper
      id={title}
      ref={ref}
      center={center}
    >
      <SectionHeader onClick={getLink}>
        <SectionTitle isVisible={isVisible}>{title}</SectionTitle>
        <FragmentLink>
          <small> #</small>
        </FragmentLink>
      </SectionHeader>
      {getBody()}
    </SectionWrapper>
  )
}

export default Section
