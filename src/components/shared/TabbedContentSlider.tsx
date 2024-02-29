import { useState } from 'react'
import styled from 'styled-components'
import { scrollToSection } from '../../utils/scroll'
import { breakpoints, text } from './styles'

const TabbedContentWrapper = styled.div`
  overflow: hidden;
`

const BodyWrapper = styled.div<{ pageNum: number }>`
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.5s;
  left: calc(-${props => props.pageNum * 100}% - ${props => props.pageNum * 24}px);
`

const TabWrapper = styled.div`
  min-width: 100%;
  max-width: 100%;
  &:not(:first-child){
    margin-left: 24px;
  }

  @media only screen and (min-width: ${breakpoints.mobile}) {
    height: calc(
      848px - 132px - 62px
    ); // height of tabbed content slider - title - tab nav
    overflow-y: scroll;
  }
`

const NavWrapper = styled.div`
  font-family: ${text.mono};
  display: flex;
  gap: 48px;
  overflow-x: auto;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    justify-content: space-between;
  }
`

const NavItem = styled.h3<{ isActive: boolean }>`
  cursor: pointer;
  color: ${text.normal};
  margin: 0 0 24px;
  user-select: none;

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

const TabbedContentSlider: React.FC<TabbedContentProps> = ({
  pages,
  sectionTitle,
}) => {
  const [page, setPage] = useState(0)

  const getBodyContent = () => {
    return pages.map((item, key) => {
      return <TabWrapper>{item.Content}</TabWrapper>
    })
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
        <BodyWrapper pageNum={page}>
          {getBodyContent()}
        </BodyWrapper>
    </TabbedContentWrapper>
  )
}

export default TabbedContentSlider
