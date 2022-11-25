import React, { Children, Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyledLink } from '../shared/link'
import { text } from '../shared/styles'

const MenuItemWrapper = styled(StyledLink)<{
  fontSize?: number
  visible: boolean
  clicked: boolean
}>`
  font-size: ${(props) => props.fontSize ?? '22'}px;
  transition: 0.5s;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    color: ${props => props.clicked ? text.green : text.normal} !important;
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
  clicked: string
  setClicked: Dispatch<SetStateAction<string>>
  fontSize?: number
}

const MenuItem: React.FC<MenuItemProps & React.HTMLAttributes<HTMLDivElement>> = ({
  sectionName,
  visible,
  clicked,
  setClicked,
  fontSize
}) => {
  const isVisible = visible === sectionName
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setAnchorTarget(document.getElementById(sectionName))
  }, [sectionName])

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setClicked(sectionName)
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
      clicked={clicked === sectionName}
      fontSize={fontSize}
    >
      {sectionName}
    </MenuItemWrapper>
  )
}

export default MenuItem
