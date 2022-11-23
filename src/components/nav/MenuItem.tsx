import React, { Children, useEffect, useState } from 'react'
import styled from 'styled-components'
import StyledLink from '../shared/link'
import { text } from '../shared/styles'

const MenuItemWrapper = styled(StyledLink)<{ fontSize: string }>`
  font-size: ${props => props.fontSize ?? '22'}px;
  transition: 0.5s;

  &:hover {
    color: ${text.normal} !important;
    font-size: ${props => props.fontSize ? props.fontSize + 2 : '24'}px;

    &::before {
      content: '> ';
    }
  }
`

type MenuItemProps = {
  sectionName: string
  fontSize?: number
}

const MenuItem: React.FC<MenuItemProps> = ({ sectionName, fontSize }) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setAnchorTarget(document.getElementById(sectionName))
  }, [sectionName])

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    anchorTarget &&
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <MenuItemWrapper
      href={`#${sectionName}`}
      onClick={handleClick}
      aria-label={`Scroll to ${sectionName}`}
      className="menu-item"
      fontSize={fontSize}
    >
      {sectionName}
    </MenuItemWrapper>
  )
}

export default MenuItem
