import React from 'react'
import styled from 'styled-components'
import { projectData } from '../../../data/projects'
import { SectionProps } from '../../shared/types'

const ProjectCard = styled.div``

const ProjectTitle = styled.div``

const ProjectTechnologies = styled.div``

const ProjectsSection: React.FC<SectionProps> = ({ setVisible }) => {
  return (
    <>
      {/* {projectData &&
        projectData.length > 0 &&
        projectData.map((project, key) => {
          if (!project.display) return null
          return (
            <ProjectCard title={project.title} key={key} setVisible={setVisible}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectTechnologies>{project.technologies}</ProjectTechnologies>
            </ProjectCard>
          )
        })} */}
    </>
  )
}

export default ProjectsSection
