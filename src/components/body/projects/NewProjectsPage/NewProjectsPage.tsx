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
  background: ${colour.cardHighlighted};
  border-radius: 8px;
`

const ProjectNavWrapper = styled.div`
  text-align: right;
  background: ${colour.cardHighlighted};
`

const ProjectNavItem = styled.h3<{ isActive: boolean }>`
  margin: 0;
  padding: 24px 48px;
  cursor: pointer;

  ${props => props.isActive && `
    background: ${colour.cardBackground};
    color: ${text.green};
  `}
`

const ProjectDisplayWrapper = styled.div`
  height: 100%;
`

const ProjectsContent = () => {
  const [project, setProject] = useState(0)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  const handleClick = (key: number) => {
    scrollToSection('projects')
    setProject(key)
  }

  if (isMobile) return (
    <>
      {projectData.map((item, key) => (
        <>
          <h3>{item.title}</h3>
          <ProjectDisplay project={item} key={key} />
        </>
      ))}
    </>
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
                {item.title}
              </ProjectNavItem>
            )
        )}
      </ProjectNavWrapper>
      <ProjectDisplayWrapper>
        <ProjectDisplay project={projectData[project]} />
      </ProjectDisplayWrapper>
    </ProjectContent>
  )
}

export default ProjectsContent
