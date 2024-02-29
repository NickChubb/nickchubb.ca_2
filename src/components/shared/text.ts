import styled from "styled-components"
import { colour, fontSize, text } from "./styles"

export const Blink = styled.span`
  animation: blinker 1.12s linear infinite;
`

export const Large = styled.span`
  font-size: ${fontSize.large};
`

export const Mono = styled.span`
  font-family: ${text.mono};
`

export const Paragraph = styled.div`
  text-align: justify;
`

export const GreenText = styled.span`
  color: ${text.green};
`

export const Code = styled.span`
  font-family: ${text.mono};
  padding: 2px 8px;
  border-radius: 4px;
  background: ${colour.cardHeader};
`

export const Subtitle = styled.h3`
  font-family: ${text.mono};
  padding-bottom: 4px;
  border-bottom: 1px solid ${text.fade};
  font-weight: 400;
  color: ${text.normal};
`