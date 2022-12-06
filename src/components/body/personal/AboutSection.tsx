import React from "react"
import styled from "styled-components"
import { aboutData } from "../../../data/about"

const AboutSectionWrapper = styled.div`
  text-align: justify;
`

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      {aboutData && aboutData.length > 0 ? (
        aboutData.map((p, key) => {
          return <p key={key}>{p}</p>
        })
      ) : (
        <p>Error loading bio</p>
      )}
    </AboutSectionWrapper>
  )
}

export default AboutSection
