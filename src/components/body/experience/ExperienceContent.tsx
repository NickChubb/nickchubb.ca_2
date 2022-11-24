import { DateTime } from 'luxon'
import styled from 'styled-components'
import { FiGlobe } from 'react-icons/fi'
import Section from '../../shared/Section'
import { experienceData } from '../../../data/experience'
import { Experience } from './ExperienceTypes'
import { SectionProps } from '../../shared/types'

const ExperienceCard = styled.div``

const ExperienceCardHeader = styled.div``

const ExperienceCardDescription = styled.div``

const ExperienceCardTitle = styled.h3`
  margin: 0 0 4px;
`

const ExperienceCardSubtitle = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 12px;
`

const ExperienceContent: React.FC = () => {
  return (
    <>
      {experienceData &&
        experienceData.length > 0 &&
        experienceData
          .sort((a: Experience, b: Experience) => {
            return a.finishDate > b.finishDate
          })
          .map((experience: Experience, key) => {
            if (!experience.display) return null
            return (
              <ExperienceCard key={key}>
                <ExperienceCardHeader>
                  <ExperienceCardTitle>
                    {experience.company}
                  </ExperienceCardTitle>
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
                <p
                  style={{
                    textAlign: 'end',
                  }}
                >
                  <small>
                    <a href={experience.website}>
                      Website <FiGlobe />
                    </a>
                  </small>
                </p>
              </ExperienceCard>
            )
          })}
    </>
  )
}

export default ExperienceContent
