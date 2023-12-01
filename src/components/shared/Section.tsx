import { Dispatch, SetStateAction, useRef } from 'react'
import styled from 'styled-components'
import useMediaQuery from '../../hooks/use-media-query'
import useOnScreen from '../../hooks/use-on-screen'
import { breakpoints, text } from './styles'

export const SectionWrapper = styled.div<{
  ref: any
  center?: boolean
  isVisible?: boolean
}>`
  width: 100%;
  height: calc(100vh - 32px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 0 48px;
  transition: 0.25s;
  margin-bottom: 48px;
  scroll-snap-align: start;

  ${(props) =>
    props.center &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 0;
    height: unset;
    overflow: visible;
  }
`

const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${breakpoints.mobile}) {
    max-height: 848px;
    max-width: 1040px;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
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
  showTitle?: boolean
}

const Section: React.FC<SectionProps> = ({
  title,
  setSection,
  Component,
  center,
  showTitle,
}) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  const ref = useRef()
  const threshold = title === 'experience' && isMobile ? 0.25 : 0.5
  const isVisible: boolean = useOnScreen(ref, threshold)
  if (isVisible) {
    setSection(title)
  }

  const getBody = () => {
    if (typeof Component === 'function') return <Component />
    return Component
  }

  return (
    <SectionWrapper id={title} ref={ref} center={center}>
      <SectionContentWrapper>
        {showTitle && <SectionTitle isVisible={isVisible}>{title}</SectionTitle>}
        {getBody()}
      </SectionContentWrapper>
    </SectionWrapper>
  )
}

export default Section
