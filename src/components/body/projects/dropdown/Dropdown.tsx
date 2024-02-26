import { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import styled from 'styled-components'
import useClickOutside from '../../../../hooks/use-click-outside'
import useOnScroll from '../../../../hooks/use-on-scroll'
import { Link } from '../ProjectTypes'
import { breakpoints, colour, shadow, text } from '../../../shared/styles'
import DropdownMenu from './DropdownMenu'

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

const Dropdown: React.FC<{ data: Array<Link> }> = ({ data }) => {
  const ref = useRef(null)
  const [isHidden, setIsHidden] = useState(true)
  const toggle = () => setIsHidden(!isHidden)
  const hide = () => setIsHidden(true)
  useClickOutside(ref, hide)
  useOnScroll(hide)

  return (
    <DropdownWrapper ref={ref}>
      <DropdownButton onClick={toggle} isHidden={isHidden}>
        <AiOutlineMenu />
      </DropdownButton>
      {!isHidden && <DropdownMenu data={data} />}
    </DropdownWrapper>
  )
}

export default Dropdown
