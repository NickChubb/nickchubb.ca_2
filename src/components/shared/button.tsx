import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.a`
  padding: 8px 16px;
  background: lightgrey;
  border-radius: 4px;

  &:hover {
    background: grey;
  }

  &:active {
    
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
