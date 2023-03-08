import { useRef, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FaCaretRight } from 'react-icons/fa'
// @ts-ignore
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import SocialLinks from '../shared/SocialLinks'
import { breakpoints, colour, shadow, text } from '../shared/styles'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { Section, sections } from '../body/sections'
import useClickOutside from '../../hooks/use-click-outside'

const NavContainer = styled.div`
  width: 35vw;
`

const NavWrapper = styled.div<{ isHidden: boolean }>`
  position: sticky;
  height: 100%;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9;
    transition: 0.5s;
    visibility: ${(props) => (props.isHidden ? 'hidden' : 'visible')};
    ${(props) =>
      !props.isHidden &&
      `
      display: block;
      background: rgba(0, 0, 0, 0.5);
    `}
  }
`

const NavMenuWrapper = styled.div<{ isHidden: boolean }>`
  height: 100vh;
  padding: 64px 142px 64px 0;
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
    box-shadow: 0px 0px 32px 0px ${shadow.inset};

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

const MenuButton = styled.a<{ isHidden: boolean }>`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  position: fixed;
  bottom: 48px;
  right: 48px;
  color: ${text.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #383838;
  cursor: pointer;
  box-shadow: 1px 2px 8px #181818;
  border: 1px solid #181818;
  z-index: 15;

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

  console.log('isHidden', isHidden)

  const hide = () => {
    enableBodyScroll(navBarRef.current)
    setHidden(true)
  }

  const show = () => {
    disableBodyScroll(navBarRef.current)
    setHidden(false)
  }

  // const toggle = isHidden ? show : hide

  const toggle = () => {
    console.log('isHidden', isHidden)
    return isHidden ? show() : hide()
  }

  useClickOutside(navBarRef, hide)

  const renderSubmenu = (
    sectionTitle: string,
    content: Array<Section>,
    key: number
  ) => {
    return (
      <SubMenu title={sectionTitle} currentSection={section}>
        {content.map(({ title: subtitle }, submenuKey) => {
          return (
            <MenuItem
              key={`${key}-${submenuKey}`}
              sectionName={subtitle}
              className="menu-item"
              section={section}
              setSection={setSection}
              hideNav={hide}
              fontSize={18}
            />
          )
        })}
      </SubMenu>
    )
  }

  const renderMenu = () => {
    return sections.map(({ title, Content }, key) => {
      if (Array.isArray(Content)) return renderSubmenu(title, Content, key)
      return (
        <MenuItem
          key={key}
          sectionName={title}
          className="menu-item"
          section={section}
          setSection={setSection}
          hideNav={hide}
        />
      )
    })
  }

  return (
    <NavContainer ref={navBarRef}>
      <NavWrapper isHidden={isHidden}>
        <NavMenuWrapper isHidden={isHidden}>
          <HeaderImage
            src="/me.png"
            width={200}
            height={200}
            alt="me"
            priority
          />
          <HeaderTitle>Nick Chubb</HeaderTitle>
          <MenuItemContainer>{renderMenu()}</MenuItemContainer>
          <SocialLinks />
        </NavMenuWrapper>
      </NavWrapper>
      <MenuButton onClick={toggle} isHidden={isHidden}>
        <MenuButtonIcon isHidden={isHidden} fontSize={24} />
      </MenuButton>
    </NavContainer>
  )
}

export default NavBar
