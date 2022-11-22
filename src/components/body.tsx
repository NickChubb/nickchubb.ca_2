import React, { useState } from "react"
import styled from "styled-components"
import AboutSection from "./body/personal/personal"
import CoursesSection from "./body/courses/courses"
import ExperienceSection from "./body/experience/experience"
import ProjectsSection from "./body/projects/projects"

const BodyWrapper = styled.div`
  height: 1200px;
  min-width: 60%;
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.a`
  cursor: pointer;
`

const BodySection = () => {

  const [page, setPage] = useState(1)

  const getBodyContent = () => {
    switch (page) {
      case 1: return <ProjectsSection />
      case 2: return <AboutSection />
      case 3: return <ExperienceSection />
      case 4: return <CoursesSection />
    }
  }

  return (
    <BodyWrapper>
      <NavWrapper>
        <NavItem onClick={() => setPage(1)}>Projects</NavItem>
        <NavItem onClick={() => setPage(2)}>About</NavItem>
        <NavItem onClick={() => setPage(3)}>Experiences</NavItem>
        <NavItem onClick={() => setPage(4)}>Courses</NavItem>
      </NavWrapper>

      {getBodyContent()}
    </BodyWrapper>
  );
};

export default BodySection
