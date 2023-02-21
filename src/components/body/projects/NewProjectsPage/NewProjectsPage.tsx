import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { projectData } from '../../../../data/projects'
import { breakpoints, colour, text } from '../../../shared/styles'
import { Project, ProjectData } from '../ProjectTypes'
import ProjectDisplay from './ProjectDisplay'
import { scrollToSection } from '../../../../utils/scroll'
import useMediaQuery from '../../../../hooks/use-media-query'

const ProjectContent = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  background: ${colour.cardHeader};
  border-radius: 8px;
`

const ProjectNavWrapper = styled.div`
  text-align: right;
  background: ${colour.cardHeader};
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
`

const MobileProjectDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

const ProjectsContent = () => {
  const [project, setProject] = useState(0)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

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
        <ProjectDisplay project={projectData[project]} isMobile={isMobile} />
      </ProjectDisplayWrapper>
    </ProjectContent>
  )
}

export default ProjectsContent