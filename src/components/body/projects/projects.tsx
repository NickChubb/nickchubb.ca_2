import React from 'react'
import styled from 'styled-components'
import { projectData } from '../../../data/projects'
import Section from '../../shared/section'

const ProjectCard = styled.div``

const ProjectTitle = styled.div``

const ProjectsSection = () => {
  return (
    <Section title="projects">
      {projectData &&
        projectData.length > 0 &&
        projectData.map((project, key) => {
          if (!project.display) return null
          return (
            <ProjectCard key={key}>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectCard>
          )
        })}
    </Section>
  )
}

export default ProjectsSection
