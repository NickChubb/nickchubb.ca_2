import React from 'react'
import styled from 'styled-components'
import { colour, text } from './styles'

const ButtonWrapper = styled.a<{
  width?: string
}>`
  padding: 12px 20px;
  background: ${colour.cardHeader};
  border-radius: 8px;
  color: ${text.light};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: 0.25s;
  cursor: pointer;
  width: ${(props) => props.width || 'auto'};
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  line-height: 18px;
  border: 1px solid #111;

  &:hover {
    background: ${colour.cardHighlighted};
    color: ${text.normal};
  }
`

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  width?: string
}

const Button: React.FC<ButtonProps> = ({ href, children, onClick, width }) => {
  return (
    <ButtonWrapper href={href} width={width} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
