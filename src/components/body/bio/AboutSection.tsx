import React from 'react'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import { aboutData } from '../../../data/about'
import { breakpoints, text } from '../../shared/styles'
import { Mono } from '../../shared/text'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const AboutSectionWrapper = styled.div`
  text-align: justify;
  overflow: hidden;
  color: ${text.light};
`

const Subtitle = styled.h4`
  font-family: ${text.mono};
  padding-bottom: 4px;
  border-bottom: 1px solid ${text.fade};
  font-weight: 400;
  color: ${text.normal};
  width: fit-content;
  margin-bottom: 8px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-bottom: 16px;
  }
`

const EducationSection = styled.div``

const EducationItem = styled.div`
  margin-bottom: 24px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

const EducationItemTitle = styled.div`
  padding-bottom: 4px;
  font-size: 16px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding-bottom: 8px;
  }
`

const EducationItemContent = styled.small`
  align-self: center;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    align-self: flex-start;
  }
`

const Paragraph = styled.p`
  @media only screen and (min-width: ${breakpoints.large}) {
    margin-bottom: 2rem;
  }
`

const AboutSection = () => {
  return (
    <Container>
      <AboutSectionWrapper>
        <Fade>
          {aboutData && aboutData.length > 0 ? (
            aboutData.map((p, key) => {
              return <Paragraph key={key}>{p}</Paragraph>
            })
          ) : (
            <p>Error loading bio</p>
          )}
          <EducationSection>
            <Subtitle>education</Subtitle>
            <EducationItem>
              <EducationItemTitle>
                <Mono>
                  BSc. Computer Science and Molecular Biology &
                  Biochemistry
                </Mono>
              </EducationItemTitle>
              <EducationItemContent><i>Simon Fraser University, 2023</i></EducationItemContent>
            </EducationItem>
            <Subtitle>certificates</Subtitle>
            <EducationItem>
              <EducationItemTitle>
                <Mono>Back-End Engineer Career Path</Mono>
              </EducationItemTitle>
              <EducationItemContent><i>CodeCademy, 2024</i></EducationItemContent>
            </EducationItem>
          </EducationSection>
        </Fade>
      </AboutSectionWrapper>
    </Container>
  )
}

export default AboutSection
