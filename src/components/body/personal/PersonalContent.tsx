import React, { useState } from 'react'
import styled from 'styled-components'
import { breakpoints, text } from '../../shared/styles'
import { SectionProps } from '../../shared/types'
import AboutSection from './AboutSection'
import BookshelfSection from './BookshelfSection'

const PersonalSectionWrapper = styled.div`
  &:hover {
    &.navwrapper {
      color: ${text.fade};
    }
  }
`

const NavWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  gap: 48px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    justify-content: space-between;
  }
`

const NavItem = styled.h3<{ isActive: boolean }>`
  cursor: pointer;
  color: ${text.normal};

  &:hover {
    color: ${text.normal} !important;
  }

  ${(props) =>
    props.isActive &&
    `
    color: ${text.green};
    &:hover {
      color: ${text.green} !important;
    }
  `}
`

const PersonalContent: React.FC<SectionProps> = ({ setVisible }) => {
  const [page, setPage] = useState(1)

  const getBodyContent = () => {
    switch (page) {
      case 1:
        return <AboutSection />
      case 2:
        return <BookshelfSection />
    }
  }

  const isActive = (pageNum: number) => pageNum === page

  return (
    <PersonalSectionWrapper>
      <NavWrapper className="navwrapper">
        <NavItem onClick={() => setPage(1)} isActive={isActive(1)}>
          About
        </NavItem>
        <NavItem onClick={() => setPage(2)} isActive={isActive(2)}>
          Bookshelf
        </NavItem>
      </NavWrapper>

      {getBodyContent()}
    </PersonalSectionWrapper>
  )
}

export default PersonalContent
