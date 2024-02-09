import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colour, shadow, text } from '../styles'
import useKeyPress from '../../../hooks/use-key-press'

const Wrapper = styled.div<{ isActive: boolean }>`
  position: fixed;
  right: 64px;
  bottom: 84px;
  padding: 16px 18px;
  background: ${colour.cardBackground};
  box-shadow: ${shadow.drop};
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #111;
  color: ${text.light};

  ${props => props.isActive && `
    color: ${text.green};
  `}

  &:hover {
    color: ${text.normal};
    background-color: ${colour.cardHeader};
  }

  &:active {
    color: ${text.green};
    background-color: ${colour.cardHighlighted};
  }
`

type FloatingActionButtonProps = {
  show: () => void
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  show
}) => {
  const isActive = useKeyPress('Meta')

  return <Wrapper onClick={show} isActive={isActive}>{'⌘ + K'}</Wrapper>
}

export default FloatingActionButton
