import React from 'react'
import styled from 'styled-components'
import { colour, shadow, text } from '../styles'

const Wrapper = styled.div`
  position: fixed;
  right: 120px;
  bottom: 120px;
  padding: 16px;
  background: ${colour.cardBackground};
  box-shadow: ${shadow.drop};
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s;
  border: 1px solid #111;
  color: ${text.light};

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

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ show }) => {
  return (
    <Wrapper onClick={show}>{'⌘ + k'}</Wrapper>
  )
}

export default FloatingActionButton