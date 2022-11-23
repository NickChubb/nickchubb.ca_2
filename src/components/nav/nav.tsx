import Image from 'next/image'
import styled from 'styled-components'
import SocialLinks from '../shared/SocialLinks'
import { text } from '../shared/styles'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

const NavWrapper = styled.div`
  height: 100vh;
  width: 20vw;
  padding: 64px 112px 64px 64px;
  position: sticky;
  top: 0px;

  &:hover {
    & > * {
      color: ${text.fade};
    }
    & .submenu-children {
      max-height: 200px;
      visibility: visible;
    }
  }
  &:hover > * > * {
    color: ${text.fade};
  }
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

const nav = () => {
  return (
    <NavWrapper>
      <Image src="/me.png" width={200} height={200} alt="me" />
      <MenuItemContainer>
        <MenuItem sectionName="bio" />
        <SubMenu title="projects">
          <MenuItem sectionName="dockerman" fontSize={18} />
          <MenuItem sectionName="hawking" fontSize={18} />
          <MenuItem sectionName="ReversiRust" fontSize={18} />
        </SubMenu>
        <MenuItem sectionName="experience" />
        <MenuItem sectionName="courses" />
        <MenuItem sectionName="personal" />
        <SocialLinks />
      </MenuItemContainer>
    </NavWrapper>
  )
}

export default nav
