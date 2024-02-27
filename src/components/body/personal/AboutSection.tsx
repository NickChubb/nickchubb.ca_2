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
  font-family: 'Roboto Mono', monospace;
  padding-bottom: 4px;
  border-bottom: 1px solid ${text.fade};
  font-weight: 400;
  color: ${text.normal};
  width: fit-content;
`

const EducationSection = styled.div``

const EducationItem = styled.div`
  margin-bottom: 24px;
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
              <div>
                <Mono>BSc. in Computer Science and Molecular Biology and Biochemistry</Mono>
              </div>
              <div>Simon Fraser University, 2023</div>
            </EducationItem>
            <EducationItem>
              <div>
                <Mono>Back-End Engineer Career Path</Mono>
              </div>
              <div>CodeCademy, 2024</div>
            </EducationItem>
          </EducationSection>
        </Fade>
      </AboutSectionWrapper>
    </Container>
  )
}

export default AboutSection
