import styled from 'styled-components'
import { filter } from 'ramda'
import { experienceData } from '../../../data/experience'
import { Experience } from './ExperienceTypes'
import ExperienceCard from './ExperienceCard'
import { SectionTitle } from '../../shared/Section'

const ExperienceContentWrapper = styled.div``

const ExperienceCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`

const ExperienceContent: React.FC = () => {
  // Separate experienceData into volunteer and paid experiences
  const volunteerExperience = filter((experience: Experience) => !experience.paid, experienceData)
  const paidExperience = filter((experience: Experience) => experience.paid, experienceData)

  const getExperienceList = (experience: Experience[]) => {
    return (
      <ExperienceCardList>
        {experience &&
          experience.length > 0 &&
          experience.map((experience: Experience, key) => {
            if (!experience.display) return null
            return <ExperienceCard key={key} experience={experience} />
          })}
      </ExperienceCardList>
    )
  }

  return (
    <ExperienceContentWrapper>
      {getExperienceList(paidExperience)}
      <SectionTitle isVisible={true}>Volunteer Experience</SectionTitle>
      {getExperienceList(volunteerExperience)}
    </ExperienceContentWrapper>
  )
}

export default ExperienceContent
