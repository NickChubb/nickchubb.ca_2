import styled from 'styled-components'
import { breakpoints, colour } from '../../../shared/styles'
import { Project } from '../ProjectTypes'
import Gallery from './Gallery'

const ProjectDisplayWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colour.cardBackground};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: fit-content;
  }
`

const Summary = styled.div`
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Paragraph = styled.p`
  margin: 0;
`

const DescriptionWrapper = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  margin-left: 0;
  padding-left: 8px;
`

const DescriptionListItem = styled.li`
  &:before {
    content: '>  ';
  }
`

const ProjectDisplay: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <ProjectDisplayWrapper>
      <Summary>
        <Paragraph><i>{project?.summary}</i></Paragraph>
        <Paragraph><b>Made with:</b> {project?.technologies}</Paragraph>
        <DescriptionWrapper>
          {project.description.map((item, key) => (
            <DescriptionListItem key={key}>{item}</DescriptionListItem>
          ))}
        </DescriptionWrapper>
      </Summary>
      <Gallery images={project.image} />
    </ProjectDisplayWrapper>
  )
}

export default ProjectDisplay
