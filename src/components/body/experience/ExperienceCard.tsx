import { DateTime } from 'luxon'
import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../shared/link'
import { breakpoints, text } from '../../shared/styles'
import { Experience } from './ExperienceTypes'
import { Mono } from '../../shared/text'

const ExperienceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ExperienceCardHeader = styled.div<{ index: number }>`
  display: flex;
  gap: 24px;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: row-reverse;
  }
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

  @media only screen and (max-width: ${breakpoints.mobile}) {
    min-width: 100px;
    min-height: 100px;
  }
`

const ExperienceCardDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding-left: 16px;
  color: ${text.light};
  list-style-position: outside;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    gap: 16px;
  }
`

const ExperienceListItem = styled.li`
  // &:before {
  //   content: '>  ';
  // }
`

const ExperienceCardTitle = styled.h3`
  margin: 0 0 4px;
  width: fit-content;
`

const ExperienceCardSubtitle = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 4px;
  }
`

const SkillsTitle = styled.strong`
  border-bottom: 1px solid ${text.fade};
`

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({
  experience,
  index,
}) => {
  return (
    <ExperienceCardWrapper>
      <ExperienceCardHeader index={index}>
        {experience.image && (
          <ExperienceCardHeaderImage src={experience.image} />
        )}
        <ExperienceCardHeaderTitle>
          <ExperienceCardTitle>
            <ExternalLink href={experience.website} style={{ opacity: 1 }}>
              {experience.company}
            </ExternalLink>
          </ExperienceCardTitle>

          <ExperienceCardSubtitle>
            <b>{experience.title}</b>
            <Mono>
              <small>
                {DateTime.fromISO(experience.startDate).toFormat('LLL yyyy')} —{' '}
                {experience.finishDate != 'present'
                  ? DateTime.fromISO(experience.finishDate).toFormat('LLL yyyy')
                  : experience.finishDate}
              </small>
            </Mono>
          </ExperienceCardSubtitle>
        </ExperienceCardHeaderTitle>
      </ExperienceCardHeader>
      <ExperienceCardDescription>
        {experience.description.map((description, key) => {
          return (
            <ExperienceListItem key={key}>{description}</ExperienceListItem>
          )
        })}
        {experience.skills && experience.skills.length > 0 && (
          <small style={{ marginTop: '6px' }}>
            <Mono>
              <SkillsTitle>Skills</SkillsTitle>: {experience.skills.join(', ')}
            </Mono>
          </small>
        )}
      </ExperienceCardDescription>
    </ExperienceCardWrapper>
  )
}

export default ExperienceCard
