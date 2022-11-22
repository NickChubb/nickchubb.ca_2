import React, { useState } from 'react'
import styled from 'styled-components'
import Section from '../../shared/section'
import AboutSection from './AboutSection'
import BookshelfSection from './BookshelfSection'

const BodyWrapper = styled.div`
  height: 1200px;
  min-width: 60%;
`

const NavWrapper = styled.div`
  display: flex;
  gap: 48px;
`

const NavItem = styled.h3`
  cursor: pointer;
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
    <Section title="personal">
      <NavWrapper>
        <NavItem onClick={() => setPage(1)}>About</NavItem>
        <NavItem onClick={() => setPage(2)}>Bookshelf</NavItem>
      </NavWrapper>

      {getBodyContent()}
    </Section>
  )
}

export default PersonalSection