import { useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'
import useClickOutside from '../../hooks/use-click-outside'
import useOnScroll from '../../hooks/use-on-scroll'
import { Link } from '../body/projects/ProjectTypes'
import { breakpoints, colour, shadow, text } from './styles'

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

  @media only screen and (max-width: ${breakpoints.mobile}) {
    background: #292929;
  }

  &:hover {
    ${(props) =>
      props.isHidden &&
      `
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
    background: #343434 !important;
    color: ${text.green};
    box-shadow: 4px 4px 16px 0 ${shadow.inset};
    border: 1px solid ${shadow.inset};
  `}
`

const DropdownMenuWrapper = styled.div<{ isHidden: boolean }>`
  position: absolute;
  background-color: ${colour.cardHeader};
  box-shadow: ${shadow.tooltip};
  border: 1px solid ${shadow.inset};
  margin-top: 4px;
  padding: 4px 0;
  border-radius: 4px;
  right: 0px;
  overflow: hidden;
  opacity: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    !props.isHidden &&
    `
    opacity: 1;
  `}
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
  justify-content: center;
  gap: 8px;
  padding: 8px 32px;
  transition: 0.25s;
  color: ${text.normal};
  width: 100%;

  &:hover {
    color: white;
    background: ${colour.cardBackground};
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
        {data.map((item, key) => (
          <>
            {key !== 0 && <HorizontalLine />}
            <DropdownMenuItem key={key} href={isHidden ? undefined : item.url} target='_blank'>
              {item.Icon ? item.Icon : <FaExternalLinkAlt />}
              {item.title}
            </DropdownMenuItem>
          </>
        ))}
      </DropdownMenuWrapper>
    </DropdownWrapper>
  )
}

export default DropdownMenu
