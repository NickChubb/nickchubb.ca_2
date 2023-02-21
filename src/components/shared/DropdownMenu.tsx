import { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'
import useClickOutside from '../../hooks/use-click-outside'
import useOnScroll from '../../hooks/use-on-scroll'
import { Link } from '../body/projects/ProjectTypes'
import Button from './button'
import { colour, text } from './styles'

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
  `}
`

const DropdownMenuWrapper = styled.div`
  position: absolute;
  background-color: ${colour.cardHighlighted};
  margin-top: 4px;
  padding: 4px 0;
  border-radius: 4px;
  left: -169%;
`

const DropdownMenuItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  transition: 0.25s;

  &:hover {
    color: white;
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
      {isHidden ? null : (
        <DropdownMenuWrapper>
          {data.map((item, key) => (
            <DropdownMenuItem key={key} href={item.url}>
              {item.Icon ? item.Icon : <FaExternalLinkAlt />}
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuWrapper>
      )}
    </DropdownWrapper>
  )
}

export default DropdownMenu
