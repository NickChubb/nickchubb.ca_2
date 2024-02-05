import styled from "styled-components"
import { fontSize, text } from "./styles"

export const Blink = styled.span`
  animation: blinker 1.12s linear infinite;
`

export const Large = styled.span`
  font-size: ${fontSize.large};
`

export const Mono = styled.span`
  font-family: "Roboto Mono", monospace;
`

export const Paragraph = styled.div`
  text-align: justify;
`

export const GreenText = styled.span`
  color: ${text.green};
`