import Link from "next/link"
import styled from "styled-components"
import SocialLinks from "../shared/SocialLinks"
import MenuItem from "./MenuItem"

const NavWrapper = styled.div`
  height: 100vh;
  width: 20vw;
  background: red;
  padding: 128px 64px;
  position: sticky;
  top: 0px;
`

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;

  &:hover > .menu-item {
    opacity: 0.3;
  }
`

const nav = () => {
  return (
    <NavWrapper>
      <MenuItemContainer>
        <MenuItem sectionName="bio" />
        <MenuItem sectionName="projects" />
        <MenuItem sectionName="experience" />
        <MenuItem sectionName="courses" />
        <MenuItem sectionName="personal" />
        <SocialLinks />
      </MenuItemContainer>
    </NavWrapper>
  )
}

export default nav
