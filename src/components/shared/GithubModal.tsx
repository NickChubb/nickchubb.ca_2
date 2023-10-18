import React, { useEffect, useMemo, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { breakpoints, colour, text } from './styles'
import useMediaQuery from '../../hooks/use-media-query'

const Wrapper = styled.div`
  position: fixed;
  top: 32px;
  right: 48px;
  display: flex;
  gap: 12px;
  font-size: 24px;
`

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
`

const PopupButton = styled.span`
  color: ${text.fade};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ModalLink = styled.a<{ fade: boolean }>`
  color: white;
  opacity: 0.5;
  transition: opacity 0.25s;

  ${(props) =>
    !props.fade &&
    `
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
  const [showPopup, setShowPopup] = useState(false)
  const [triggeredPopup, setTriggered] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  const link = useMemo(
    () => `https://github.com/NickChubb/nickchubb.ca_2/tree/main/src/components/body/${section}`,
    [section]
  )

  useEffect(() => {
    if (section === 'experience' && triggeredPopup === false) {
      setShowPopup(true)
      setTriggered(true)
    }
  }, [section])

  if (isMobile) return null

  return (
    <Wrapper>
      {showPopup && (
        <Popup>
          <PopupButton>
            <AiFillCloseCircle onClick={() => setShowPopup(false)}/>
          </PopupButton>
          <span>
            Click this button to explore the current section on Github
          </span>
          <span>👉</span>
        </Popup>
      )}
      <ModalLink href={link} target="_blank" fade={!showPopup}>
        <FaGithub
          width="32px"
          height="32px"
          onClick={() => setShowPopup(false)}
        />
      </ModalLink>
    </Wrapper>
  )
}

export default GithubModal
