import React, { Children, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledLink } from '../shared/link'
import { text } from '../shared/styles'

const MenuItemWrapper = styled(StyledLink)<{
  fontSize: number
  visible: boolean
  clicked: boolean
}>`
  font-size: ${(props) => props.fontSize ?? '22'}px;
  transition: 0.5s;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    color: ${text.normal} !important;
    font-size: ${(props) => (props.fontSize ? props.fontSize + 2 : '24')}px;

    &::before {
      content: '> ';
      ${(props) =>
        props.clicked &&
        `
        color: ${text.green} !important;
      `}
    }

    ${(props) =>
      props.clicked &&
      `
      color: ${text.green} !important;
  `}
  }

  &:active {
    color: ${text.green} !important;
  }

  ${(props) =>
    props.clicked &&
    `
    color: ${text.green} !important;
  `}

  ${(props) =>
    props.visible &&
    `
    color: ${text.green} !important;
    font-size: ${props.fontSize ? props.fontSize + 2 : '24'}px;
    
    ::before {
      content: '> ';
    }
  `}
`

type MenuItemProps = {
  sectionName: string
  visible: string
  fontSize?: number
}

const MenuItem: React.FC<MenuItemProps> = ({
  sectionName,
  visible,
  fontSize,
}) => {
  const isVisible = visible === sectionName
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setAnchorTarget(document.getElementById(sectionName))
  }, [sectionName])

  useEffect(() => {
    if (visible === sectionName) {
      setClicked(false)
    }
  }, [visible])

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setClicked(true)
    anchorTarget &&
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <MenuItemWrapper
      href={`#${sectionName}`}
      onClick={handleClick}
      aria-label={`Scroll to ${sectionName}`}
      className="menu-item"
      visible={isVisible}
      clicked={clicked}
      fontSize={fontSize}
    >
      {sectionName}
    </MenuItemWrapper>
  )
}

export default MenuItem
