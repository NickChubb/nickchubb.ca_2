import React from "react"
import { aboutData } from "../../../data/about"

const AboutSection = () => {
  return (
    <>
      {aboutData && aboutData.length > 0 ? (
        aboutData.map((p, key) => {
          return <p key={key}>{p}</p>
        })
      ) : (
        <p>Error loading bio</p>
      )}
    </>
  )
}

export default AboutSection
