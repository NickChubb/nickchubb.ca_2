import React from "react"
import styled from "styled-components"
import { text } from "./styles"

const ButtonWrapper = styled.a`
  padding: 10px 20px;
  background: #1F1F1F;
  border-radius: 4px;
  color: ${text.normal};
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.25s;

  &:hover {
    background: #292929;
    transform: scale(0.98);
  }

  &:active {
    background: #333333;
    color: ${text.green};
  }
`

type ButtonProps = {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEvent<HTMLElement>
}

const Button: React.FC<ButtonProps> = ({ href, children, onClick }) => {
  return <ButtonWrapper href={href}>{children}</ButtonWrapper>
}

export default Button
