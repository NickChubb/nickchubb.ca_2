import styled from "styled-components"
import { colour, fontSize, text } from "./styles"

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

export const Code = styled.span`
  font-family: "Roboto Mono", monospace;
  padding: 2px 8px;
  border-radius: 4px;
  background: ${colour.cardHeader};
`