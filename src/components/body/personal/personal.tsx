import React, { useState } from 'react'
import styled from 'styled-components'
import Section from '../../shared/section'
import { text } from '../../shared/styles'
import AboutSection from './AboutSection'
import BookshelfSection from './BookshelfSection'

const PersonalSectionWrapper = styled(Section)`
  &:hover {
    &.navwrapper {
      color: ${text.fade}
    }
  }
`

const NavWrapper = styled.div`
  display: flex;
  gap: 48px;
`

const NavItem = styled.h3`
  cursor: pointer;
  transition: 0.25s;
  color: ${text.normal};

  &:hover {
    color: ${text.normal} !important;
  }
`

const PersonalSection = () => {
  const [page, setPage] = useState(1)

  const getBodyContent = () => {
    switch (page) {
      case 1: return <AboutSection />
      case 2: return <BookshelfSection />
    }
  }

  return (
    <PersonalSectionWrapper title="personal">
      <NavWrapper className="navwrapper">
        <NavItem onClick={() => setPage(1)}>About</NavItem>
        <NavItem onClick={() => setPage(2)}>Bookshelf</NavItem>
      </NavWrapper>

      {getBodyContent()}
    </PersonalSectionWrapper>
  )
}

export default PersonalSection