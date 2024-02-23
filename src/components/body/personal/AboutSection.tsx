import React from 'react'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import { aboutData } from '../../../data/about'
import { breakpoints, text } from '../../shared/styles'
import { Subtitle } from '../../shared/text'

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

const EducationSection = styled.div``

const EducationItem = styled.div``

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
            <Subtitle>Education</Subtitle>
            <EducationItem>
              <div>
                BSc. in Computer Science and Molecular Biology and Biochemistry
              </div>
              <div>Simon Fraser University</div>
              <div>Completed: 2023</div>
            </EducationItem>
            <EducationItem>
              <div>
                BSc. in Computer Science and Molecular Biology and Biochemistry
              </div>
              <div>Simon Fraser University</div>
              <div>Completed: 2023</div>
            </EducationItem>
          </EducationSection>
        </Fade>
      </AboutSectionWrapper>
    </Container>
  )
}

export default AboutSection
