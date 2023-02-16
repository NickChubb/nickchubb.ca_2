import styled from 'styled-components'
import { breakpoints, colour, text } from '../../../shared/styles'
import { Project } from '../ProjectTypes'
import Gallery from './Gallery'

const ProjectDisplayWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colour.cardBackground};
  color: ${text.light};

  animation: all 0.35s ease-in;
  transition: all 0.2s;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: fit-content;
    margin: 0 -2rem;
    color: ${text.normal};
  }
`

const Title = styled.h3`
  margin: 0;
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
  // list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 0;
  padding-left: 24px;
  list-style-position: outside;
`

const DescriptionListItem = styled.li`
  // &:before {
  //   content: '>  ';
  // }
`

const ProjectDisplay: React.FC<{ project: Project; isMobile: boolean }> = ({
  project,
  isMobile,
}) => {
  return (
    <ProjectDisplayWrapper>
      <Summary>
        <Title>
          {isMobile ? <>{project?.icon}&nbsp;&nbsp;&nbsp;&nbsp;</> : ``}
          {project?.title}
        </Title>
        <Paragraph>
          <i>{project?.summary}</i>
        </Paragraph>
        <Paragraph>
          <b>Made with:</b> {project?.technologies}
        </Paragraph>
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
