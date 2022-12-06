import { DateTime } from 'luxon'
import styled from 'styled-components'
import { FiGlobe } from 'react-icons/fi'
import { experienceData } from '../../../data/experience'
import { Experience } from './ExperienceTypes'
import { ExternalLink } from '../../shared/link'

const ExperienceCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`

const ExperienceCard = styled.div``

const ExperienceCardHeader = styled.div``

const ExperienceCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ExperienceCardTitle = styled.h3`
  margin: 0 0 4px;
`

const ExperienceCardSubtitle = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 12px;
`

const ExperienceFooter = styled.div`
  padding-top: 16px;
`

const Link = styled(ExternalLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
`

const ExperienceContent: React.FC = () => {
  return (
    <ExperienceCardList>
      {experienceData &&
        experienceData.length > 0 &&
        experienceData
          .map((experience: Experience, key) => {
            if (!experience.display) return null
            return (
              <ExperienceCard key={key}>
                <ExperienceCardHeader>
                  <ExternalLink href={experience.website}>
                    <ExperienceCardTitle>
                      {experience.company}
                    </ExperienceCardTitle>
                  </ExternalLink>
                  <ExperienceCardSubtitle>
                    <i>{experience.title}</i>
                    <i>
                      {DateTime.fromISO(experience.startDate).toFormat(
                        'LLL yyyy'
                      )}{' '}
                      --{' '}
                      {experience.finishDate != 'present'
                        ? DateTime.fromISO(experience.finishDate).toFormat(
                            'LLL yyyy'
                          )
                        : experience.finishDate}
                    </i>
                  </ExperienceCardSubtitle>
                </ExperienceCardHeader>
                <ExperienceCardDescription>
                  {experience.description.map((description, key) => {
                    return <li key={key}>{description}</li>
                  })}
                </ExperienceCardDescription>
              </ExperienceCard>
            )
          })}
    </ExperienceCardList>
  )
}

export default ExperienceContent
