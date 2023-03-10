import React from "react"
import styled from "styled-components"
import { text } from "./styles"

const ButtonWrapper = styled.a<{ width?: string }>`
  padding: 10px 20px;
  background: #1F1F1F;
  border-radius: 4px;
  color: ${text.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: 0.25s;
  width: ${(props) => props.width || "auto"};

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
  width?: string
}

const Button: React.FC<ButtonProps> = ({ href, children, onClick, width }) => {
  return <ButtonWrapper href={href} width={width}>{children}</ButtonWrapper>
}

export default Button
