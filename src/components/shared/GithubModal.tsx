import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { breakpoints, colour, shadow, text } from './styles'
import useMediaQuery from '../../hooks/use-media-query'
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  inline,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingArrow,
} from '@floating-ui/react'

const Popup = styled.div`
  background: ${colour.cardHeader};
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${colour.cardBackground};
  font-size: 14px;
  user-select: none;
  box-shadow: ${shadow.tooltip};
  z-index: 12;
`

const PopupButton = styled.span`
  color: ${text.fade};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const PopupContent = styled.span`
  color: ${text.light};
`

const ModalLink = styled.a<{ fade: boolean }>`
  color: white;
  opacity: 0.5;
  transition: opacity 0.25s;
  position: fixed;
  top: 32px;
  right: 48px;
  font-size: 24px;

  ${(props) =>
    !props.fade &&
    `
    transition: opacity 0s;
    opacity: 1;
  `}

  &:hover {
    opacity: 1;
  }

  &:active {
    color: ${text.green};
  }
`

type GithubModalPops = {
  section: string
}

const GithubModal: React.FC<GithubModalPops> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [triggeredPopup, setTriggered] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  const link = useMemo(() => {
    // volunteering section usees same component as experience
    const slug = section === 'volunteering' ? 'experience' : section
    return `https://github.com/NickChubb/nickchubb.ca_2/tree/main/src/components/body/${slug}`
  }, [section])

  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    placement: 'left',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), shift(), inline()],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, {
    role: 'tooltip',
  })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  useEffect(() => {
    if (section === 'experience' && triggeredPopup === false) {
      setIsOpen(true)
      setTriggered(true)
    }
  }, [section])

  if (isMobile) return null

  return (
    <>
      {isOpen && (
        <Popup
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <PopupButton>
            <AiFillCloseCircle onClick={() => setIsOpen(false)} />
          </PopupButton>
          <PopupContent>
            Click this button to explore the current section on Github
          </PopupContent>
          <span>👉</span>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill={colour.cardHeader}
          />
        </Popup>
      )}
      <ModalLink
        href={link}
        target="_blank"
        fade={!isOpen}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <FaGithub width="32px" height="32px" onClick={() => setIsOpen(false)} />
      </ModalLink>
    </>
  )
}

export default GithubModal
