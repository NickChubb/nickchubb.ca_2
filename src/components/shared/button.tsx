import React from "react"
import styled from "styled-components"
import { text } from "./styles"

const ButtonWrapper = styled.a`
  padding: 8px 16px;
  background: #383838;
  border-radius: 4px;
  color: ${text.normal};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.25s;

  &:hover {
    background: #525252;
    transform: scale(0.98);
  }

  &:active {
    background: #444444;
  }
`

type ButtonProps = {
  href: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return <ButtonWrapper href={href}>{children}</ButtonWrapper>
}

export default Button
