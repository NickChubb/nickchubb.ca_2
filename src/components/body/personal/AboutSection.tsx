import React from 'react'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import { aboutData } from '../../../data/about'

const AboutSectionWrapper = styled.div`
  text-align: justify;
  overflow: hidden;
`

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <Fade>
        {aboutData && aboutData.length > 0 ? (
          aboutData.map((p, key) => {
            return <p key={key}>{p}</p>
          })
        ) : (
          <p>Error loading bio</p>
        )}
      </Fade>
    </AboutSectionWrapper>
  )
}

export default AboutSection
