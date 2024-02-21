import styled from 'styled-components'
import DropdownMenu from '../../shared/DropdownMenu'
import {
  breakpoints,
  colour,
  fontSize,
  shadow,
  text,
} from '../../shared/styles'
import { Project } from './ProjectTypes'
import Gallery from './Gallery'
import { useEffect, useRef } from 'react'
import { motion, usePresence } from 'framer-motion'
import { gsap } from 'gsap'
import Slideshow from './Slideshow'
import { Mono } from '../../shared/text'

const ProjectDisplayWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colour.cardBackground};
  color: ${text.light};
  border-radius: 0 4px 4px 0;

  animation: all 0.35s ease-in;
  transition: all 0.2s;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: fit-content;
    margin: 0 -2rem;
    color: ${text.normal};
    box-shadow: 2px 2px 5px ${shadow.inset} inset;
  }
`

const ProjectDisplayHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    background: ${colour.cardHeader};
    margin: -24px -32px 0;
    padding: 16px 32px;
  }
`

const Title = styled.h3`
  margin: 0;
  color: ${text.normal};
`

const Summary = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Paragraph = styled.p<{ type?: string; fontSize?: string }>`
  margin: 0;

  ${(props) =>
    props.type === 'quote' &&
    `
    border-left: 3px solid ${colour.cardHighlighted};
    padding-left: 12px;
  `}

  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
`

const DescriptionWrapper = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 0;
  padding-left: 24px;
  list-style-position: outside;
  // list-style: none;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding-left: 16px;
    gap: 16px;
  }
`

const DescriptionListItem = styled.li`
  // &:before {
  //   font-family: 'Roboto Mono', monospace;
  //   content: '>  ';
  // }
  font-size: ${fontSize.small};
  text-align: justify;
`

const Alert = styled.div`
  font-size: 14px;
  padding: 4px;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #eed3d7;
  background-color: #f2dede;
  color: #b94a48;
`

const MadeWith = styled.strong`
  border-bottom: 1px solid ${text.fade};
`

const ProjectDisplay: React.FC<{ project: Project; isMobile: boolean }> = ({
  project,
  isMobile,
}) => {
  // Generate fade on window leaving and entering DOM with framer-motion
  const projectDisplayRef = useRef(null)
  const [isPresent, safeToRemove] = usePresence()
  useEffect(() => {
    if (!isPresent) {
      gsap.to(projectDisplayRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => safeToRemove?.(),
      })
    } else {
      gsap.to(projectDisplayRef.current, {
        opacity: 1,
        duration: 0.2,
      })
    }
  }, [isPresent, safeToRemove])

  return (
    <ProjectDisplayWrapper ref={projectDisplayRef}>
      <Summary>
        <ProjectDisplayHeader>
          <Title>
            {isMobile ? <>{project?.icon}&nbsp;&nbsp;&nbsp;&nbsp;</> : ``}
            {project?.title}
          </Title>
          <DropdownMenu data={project.links} />
        </ProjectDisplayHeader>
        <Paragraph type="quote">
          <i>{project?.summary}</i>
        </Paragraph>
        <DescriptionWrapper>
          {project.description.map((item, key) => (
            <DescriptionListItem key={key}>{item}</DescriptionListItem>
          ))}
        </DescriptionWrapper>
        <Paragraph fontSize="16">
          <Mono>
            <MadeWith>Made with</MadeWith>: {project?.technologies}
          </Mono>
        </Paragraph>
        {project?.alert && <Alert>{project?.alert}</Alert>}
      </Summary>
      {/* <Gallery images={project.image} /> */}
      <Slideshow images={project.image} />
    </ProjectDisplayWrapper>
  )
}

export default ProjectDisplay
