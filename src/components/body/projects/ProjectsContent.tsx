import { useState } from 'react'
import styled from 'styled-components'
import { projectData } from '../../../data/projects'
import { colour, shadow, text } from '../../shared/styles'
import ProjectDisplay from './ProjectDisplay'
import { scrollToSection } from '../../../utils/scroll'
import { AnimatePresence } from 'framer-motion'
import useIsMobile from '../../../hooks/use-is-mobile'

const ProjectContent = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background: ${colour.cardHeader};
  border-radius: 8px;
  border: 1px solid ${shadow.inset};
`

const ProjectNavWrapper = styled.div`
  text-align: right;
  background: ${colour.cardHeader};
  border-radius: 4px 0 0 4px;

  & > :first-child {
    border-radius: 4px 0 0 0;
  }
`

const ProjectNavItem = styled.h3<{ isActive: boolean }>`
  margin: 0;
  padding: 24px 24px;
  cursor: pointer;
  transition: 0.25s;

  ${(props) =>
    props.isActive &&
    `
    background: ${colour.cardBackground} !important;
    color: ${text.green};
  `}

  &:hover {
    background: ${colour.cardHighlighted};
  }
`

const ProjectDisplayWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const MobileProjectDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

const ProjectsContent: React.FC = () => {
  const [project, setProject] = useState(0)
  const isMobile = useIsMobile()

  const handleClick = (key: number) => {
    scrollToSection('projects')
    setProject(key)
  }

  if (isMobile)
    return (
      <MobileProjectDisplayWrapper>
        {projectData.map((item, key) => {
          if (!item.display) return null
          return <ProjectDisplay project={item} key={key} isMobile={isMobile} />
        })}
      </MobileProjectDisplayWrapper>
    )

  return (
    <ProjectContent>
      <ProjectNavWrapper>
        {projectData.map(
          (item, key) =>
            item.display && (
              <ProjectNavItem
                onClick={() => handleClick(key)}
                isActive={project === key}
              >
                {item.icon}
              </ProjectNavItem>
            )
        )}
      </ProjectNavWrapper>
      <ProjectDisplayWrapper>
        <AnimatePresence>
          <ProjectDisplay key={project} project={projectData[project]} isMobile={isMobile} />
        </AnimatePresence>
      </ProjectDisplayWrapper>
    </ProjectContent>
  )
}

export default ProjectsContent
