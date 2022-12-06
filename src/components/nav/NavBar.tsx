import { useRef, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FaCaretRight } from 'react-icons/fa'
import SocialLinks from '../shared/SocialLinks'
import { breakpoints, colour, text } from '../shared/styles'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { sections } from '../body/sections'
import useClickOutside from '../../hooks/use-click-outside'

const NavWrapper = styled.div<{ isHidden: boolean }>`
  height: 100vh;
  width: 30vw;
  padding: 64px 112px 64px 64px;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 10;

  &:hover {
    & > .menu-item {
      color: ${text.fade};
    }
    & .submenu-children {
      max-height: 200px;
    }
  }
  &:hover > * > * {
    color: ${text.fade};
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: 100%;
    width: fit-content;
    max-width: 80vw;
    position: fixed;
    top: 0px;
    right: 0px;
    background: ${colour.navBackground};
    transition: 0.5s;
    padding: 48px;

    ${(props) => props.isHidden && `right: -100%;`}
  }
`

const HeaderImage = styled(Image)`
  @media only screen and (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const HeaderTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 0;
  white-space: nowrap;
`

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  padding: 64px 0;
  position: relative;
`

const ChildMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  text-align: right;
  & > * {
    font-size: 18px;
  }
`

const SocialLinksWrapper = styled.div`
  margin-top: 48px;s
`

const MenuButton = styled.a<{ isHidden: boolean }>`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border: 0px;
  color: ${text.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #292929;
  cursor: pointer;
  box-shadow: 2px 1px 1px #181818;

  &:hover {
    background: #383838;
    transform: scale(0.98);
  }

  &:active {
    background: #424242;
    color: ${text.green} !important;
  }

  @media only screen and (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`

const MenuButtonIcon = styled(FaCaretRight)<{ isHidden: boolean }>`
  transition: 0.5s;

  ${(props) =>
    props.isHidden &&
    `
    transform: rotate(180deg);
  `}
`

type NavBarProps = {
  section: string
  setSection: React.Dispatch<React.SetStateAction<string>>
}

const NavBar: React.FC<NavBarProps> = ({ section, setSection }) => {
  const [isHidden, setHidden] = useState(true)
  const navBarRef = useRef(null)
  const hide = () => setHidden(true)
  useClickOutside(navBarRef, hide)

  const renderMenu = () => {
    return sections.map(({ title }, key) => (
      <MenuItem
        key={key}
        sectionName={title}
        className="menu-item"
        section={section}
        setSection={setSection}
        setHidden={setHidden}
      />
    ))
  }

  return (
    <NavWrapper isHidden={isHidden} ref={navBarRef}>
      <HeaderImage src="/me.png" width={200} height={200} alt="me" />
      <HeaderTitle>Nick Chubb</HeaderTitle>
      <MenuItemContainer>
        {/* <SubMenu title="projects">
          <MenuItem sectionName="dockerman" visible={visible} fontSize={18} />
          <MenuItem sectionName="hawking" visible={visible} fontSize={18} />
          <MenuItem sectionName="ReversiRust" visible={visible} fontSize={18} />
        </SubMenu> */}
        {renderMenu()}
      </MenuItemContainer>
      <SocialLinks />
      <MenuButton onClick={() => setHidden(!isHidden)} isHidden={isHidden}>
        <MenuButtonIcon isHidden={isHidden} />
      </MenuButton>
    </NavWrapper>
  )
}

export default NavBar
