import { DateTime } from 'luxon'
import styled from 'styled-components'
import { experienceData } from '../../../data/experience'
import { Experience } from './ExperienceTypes'
import { ExternalLink } from '../../shared/link'
import { breakpoints } from '../../shared/styles'
import Image from 'next/image'

const ExperienceCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ExperienceCardHeader = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`

const ExperienceCardHeaderTitle = styled.div`
  width: 100%;
`

const ExperienceCardHeaderImage = styled.div<{ src: string }>`
  min-width: 75px;
  min-height: 75px;
  border-radius: 4px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
`

const ExperienceCardDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding-left: 16px;
  // list-style: none;
  list-style-position: outside;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    text-align: justify;
    font-size: 16px;
  }
`

const ExperienceListItem = styled.li`
  // &:before {
  //   content: '>  ';
  // }
`

const ExperienceCardTitle = styled.h3`
  margin: 0 0 4px;
`

const ExperienceCardSubtitle = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 4px;
  }
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
        experienceData.map((experience: Experience, key) => {
          if (!experience.display) return null
          return (
            <ExperienceCard key={key}>
              <ExperienceCardHeader>
                {experience.image && (
                  <ExperienceCardHeaderImage src={experience.image} />
                )}
                <ExperienceCardHeaderTitle>
                  <ExternalLink
                    href={experience.website}
                    style={{ opacity: 1 }}
                  >
                    <ExperienceCardTitle>
                      {experience.company}
                    </ExperienceCardTitle>
                  </ExternalLink>
                  <ExperienceCardSubtitle>
                    <b>{experience.title}</b>
                    <i>
                      {DateTime.fromISO(experience.startDate).toFormat(
                        'LLL yyyy'
                      )}{' '}
                      —{' '}
                      {experience.finishDate != 'present'
                        ? DateTime.fromISO(experience.finishDate).toFormat(
                            'LLL yyyy'
                          )
                        : experience.finishDate}
                    </i>
                  </ExperienceCardSubtitle>
                </ExperienceCardHeaderTitle>
              </ExperienceCardHeader>
              <ExperienceCardDescription>
                {experience.description.map((description, key) => {
                  return (
                    <ExperienceListItem key={key}>
                      {description}
                    </ExperienceListItem>
                  )
                })}
              </ExperienceCardDescription>
            </ExperienceCard>
          )
        })}
    </ExperienceCardList>
  )
}

export default ExperienceContent
