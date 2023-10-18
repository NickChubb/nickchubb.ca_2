import React, { Children, Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import useScrollToSection from '../../hooks/use-scroll-to-section'
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
  white-space: nowrap;
  user-select: none;

  &:before {
    content: "";
    font-size: 24px;
  }

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
  section: string
  setSection: Dispatch<SetStateAction<string>>
  hideNav: () => void
  fontSize?: number
}

const MenuItem: React.FC<MenuItemProps & React.HTMLAttributes<HTMLDivElement>> = ({
  sectionName,
  section,
  setSection,
  fontSize,
  hideNav
}) => {
  const isVisible = section === sectionName
  const scrollToSection = useScrollToSection(sectionName)

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setSection(sectionName)
    hideNav()
    scrollToSection()
  }

  return (
    <MenuItemWrapper
      href={`#${sectionName}`}
      onClick={handleClick}
      aria-label={`Scroll to ${sectionName}`}
      className="menu-item"
      visible={isVisible}
      clicked={section === sectionName}
      fontSize={fontSize}
    >
      {sectionName}
    </MenuItemWrapper>
  )
}

export default MenuItem
