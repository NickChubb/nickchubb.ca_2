import styled from 'styled-components'
import { Experience } from './ExperienceTypes'
import ExperienceCard from './ExperienceCard'

const ExperienceContentWrapper = styled.div``

const ExperienceCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`

type ExperienceContentData = {
  data: Array<Experience>
}

const ExperienceContent: React.FC<ExperienceContentData> = ({ data }) => {
  const getExperienceList = (experience: Experience[]) => {
    return (
      <ExperienceCardList>
        {experience &&
          experience.length > 0 &&
          experience.map((experience: Experience, key) => {
            if (!experience.display) return null
            return (
              <ExperienceCard key={key} index={key} experience={experience} />
            )
          })}
      </ExperienceCardList>
    )
  }

  return (
    <ExperienceContentWrapper>
      {getExperienceList(data)}
    </ExperienceContentWrapper>
  )
}

export default ExperienceContent
