import styled from "styled-components"
import { text } from "./styles"

export const StyledLink = styled.a`
  transiition: 0.25s;

  &:hover {
    opacity: 1 !important;
    color: white;
  }

  &:active {
    color: limegreen;
  }
`

export const ExternalLink = styled.a`
  font-weight: 800;
  opacity: 0.8;

  &:hover {
    color: ${text.green};
  }
`