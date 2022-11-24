import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import SocialLinks from '../shared/SocialLinks'
import { text } from '../shared/styles'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
import { sections } from '../body/sections'

const NavWrapper = styled.div`
  height: 100vh;
  width: 30vw;
  padding: 64px 112px 64px 64px;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
`

const HeaderTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 0;
`

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  padding: 64px 0;
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
  margin-top: 48px;
`

const NavBar: React.FC<{ visible: string }> = ({ visible }) => {

  const renderMenu = () => {
    return sections.map((section, key) => (
      <MenuItem key={key} sectionName={section.title} visible={visible} className="menu-item" />
    ))
  }

  return (
    <NavWrapper>
      <Image src="/me.png" width={200} height={200} alt="me" />
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
    </NavWrapper>
  )
}

export default NavBar
