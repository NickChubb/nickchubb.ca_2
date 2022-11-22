import React, { useEffect, useState } from "react"
import styled from "styled-components"
import StyledLink from "../shared/link"

const MenuItemWrapper = styled(StyledLink)`
  font-size: 20px;
  transition: 0.25s;

  &:hover {
    opacity: 1;
    font-size: 22px;

    &::before {
      content: "> ";
    }
  }
`

type MenuItemProps = {
  sectionName: string
}

const MenuItem: React.FC<MenuItemProps>  = ({ sectionName }) => {

  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(sectionName));
  }, [sectionName]);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    anchorTarget && anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <MenuItemWrapper
      href={`#${sectionName}`}
      onClick={handleClick}
      aria-label={`Scroll to ${sectionName}`}
      className="menu-item"
    >
      {sectionName}
    </MenuItemWrapper>
  )
}

export default MenuItem
