import { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'
import useClickOutside from '../../hooks/use-click-outside'
import useOnScroll from '../../hooks/use-on-scroll'
import { Link } from '../body/projects/ProjectTypes'
import Button from './button'
import { colour, shadow, text } from './styles'

const DropdownWrapper = styled.div`
  position: relative;
  user-select: none;
`

const DropdownButton = styled.div<{ isHidden: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #1f1f1f;
  border-radius: 4px;
  color: ${text.normal};
  transition: 0.25s;
  border: 1px solid transparent;
  font-size: 20px;

  &:hover {
    ${(props) => props.isHidden && `
      transition: 0s;
      background: #292929;
      transform: scale(0.98);
    `}
  }

  &:active {
    background: #333333;
    color: ${text.green};
  }

  ${(props) =>
    !props.isHidden &&
    `
    background-color: ${colour.cardHighlighted};
    color: ${text.green};
    box-shadow: 4px 4px 16px 0 ${shadow.inset};
    border: 1px solid ${shadow.inset};
  `}
`

const DropdownMenuWrapper = styled.div<{ isHidden: boolean }>`
  position: absolute;
  background-color: ${colour.cardHighlighted};
  box-shadow: 4px 4px 16px 0 ${shadow.inset};
  border: 1px solid ${shadow.inset};
  margin-top: 4px;
  padding: 4px 0;
  border-radius: 4px;
  right: 0px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition-duration: 0.5s, 0.2s;
  transition-property: max-height, opacity;
  transition-timing-function: ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    !props.isHidden &&
    `
    opacity: 1;
    max-height: 200px;
  `}
`

const DropdownMenuHeader = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${text.normal};
  font-size: 16px;
  padding-top: 2px;
  padding-bottom: 6px;
  width: 100%;
`

const HorizontalLine = styled.div`
  width: 90%;
  height: 1px;
  background: ${colour.cardHeader};
  border-radius: 4px;
`

const DropdownMenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 32px;
  transition: 0.25s;
  color: ${text.normal};

  &:hover {
    color: white;
    background: ${colour.cardHeader};
  }
`

const DropdownMenu: React.FC<{ data: Array<Link> }> = ({ data }) => {
  const dropdownRef = useRef(null)
  const [isHidden, setIsHidden] = useState(true)
  const toggle = () => setIsHidden(!isHidden)
  const hide = () => setIsHidden(true)
  useClickOutside(dropdownRef, hide)
  useOnScroll(hide)

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={toggle} isHidden={isHidden}>
        <AiOutlineMenu />
      </DropdownButton>
      <DropdownMenuWrapper isHidden={isHidden}>
        <DropdownMenuHeader>links</DropdownMenuHeader>
        <HorizontalLine />
        {data.map((item, key) => (
          <DropdownMenuItem key={key} href={isHidden ? undefined : item.url}>
            {item.Icon ? item.Icon : <FaExternalLinkAlt />}
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuWrapper>
    </DropdownWrapper>
  )
}

export default DropdownMenu
