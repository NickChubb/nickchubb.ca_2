import { useState } from 'react'
import styled from 'styled-components'
import { scrollToSection } from '../../utils/scroll'
import { breakpoints, text } from './styles'

const TabbedContentWrapper = styled.div``

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
  margin: 0 0 24px;

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

export type Page = {
  title: string
  Content: React.ReactNode
}

type TabbedContentProps = {
  pages: Array<Page>
  sectionTitle: string
}

const TabbedContent: React.FC<TabbedContentProps> = ({
  pages,
  sectionTitle,
}) => {
  const [page, setPage] = useState(0)

  const getBodyContent = () => {
    return pages[page].Content
  }

  const isActive = (pageNum: number) => pageNum === page

  const handleClick = (key: number) => {
    scrollToSection(sectionTitle)
    setPage(key)
  }

  return (
    <TabbedContentWrapper>
      <NavWrapper className="navwrapper">
        {pages.map((item, key) => (
          <NavItem
            onClick={() => handleClick(key)}
            isActive={isActive(key)}
            key={key}
          >
            {item.title}
          </NavItem>
        ))}
      </NavWrapper>
      {getBodyContent()}
    </TabbedContentWrapper>
  )
}

export default TabbedContent
