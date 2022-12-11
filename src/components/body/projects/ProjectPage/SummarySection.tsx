import styled from "styled-components"
import { Project } from "../ProjectTypes"

const SummaryWrapper = styled.p``

const TechnologiesWrapper = styled.p``

const DescriptionTitle = styled.h3``

const DescriptionWrapper = styled.ul`
  list-style: none;
`

const DescriptionListItem = styled.li``

const SummarySection: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div>
      <SummaryWrapper>{project.summary}</SummaryWrapper>
      <TechnologiesWrapper>Made With: {project.technologies}</TechnologiesWrapper>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionWrapper>
        {project.description.map((item, key) => (
          <DescriptionListItem key={key}>{item}</DescriptionListItem>
        ))}
      </DescriptionWrapper>
    </div>
  )
}

export default SummarySection