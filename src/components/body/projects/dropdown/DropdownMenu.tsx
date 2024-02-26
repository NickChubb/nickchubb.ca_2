import React, { useEffect, useRef } from 'react'
import { Link } from '../ProjectTypes'
import { usePresence } from 'framer-motion'
import styled from 'styled-components'
import { FaExternalLinkAlt } from 'react-icons/fa'
import gsap from 'gsap'
import { colour, shadow, text } from '../../../shared/styles'

const Wrapper = styled.div`
  position: absolute;
  background-color: ${colour.cardHeader};
  box-shadow: ${shadow.tooltip};
  border: 1px solid ${shadow.inset};
  margin-top: 4px;
  padding: 4px 0;
  border-radius: 4px;
  right: 0px;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${text.light};
  width: 100%;

  &:hover {
    color: ${text.normal};
    background: ${colour.cardBackground};
  }
`

const DropdownMenu: React.FC<{ data: Array<Link> }> = ({ data }) => {
  const ref = useRef(null)
  const [isPresent, safeToRemove] = usePresence()
  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        translateY: '-5px',
        opacity: 0,
        duration: 0.1,
        ease: 'power.in',
      })
    } else {
      gsap.to(ref.current, {
        translateY: '5px',
        opacity: 1,
        duration: 0.1,
        ease: 'power.out',
      })
    }
  }, [isPresent, safeToRemove])

  return (
    <Wrapper ref={ref}>
      {data.map((item, key) => (
        <>
          {key !== 0 && <HorizontalLine />}
          <DropdownMenuItem
            key={key}
            href={!isPresent ? undefined : item.url}
            target="_blank"
          >
            {item.Icon ? item.Icon : <FaExternalLinkAlt />}
            {item.title}
          </DropdownMenuItem>
        </>
      ))}
    </Wrapper>
  )
}

export default DropdownMenu
