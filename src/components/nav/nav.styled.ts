import styled from "styled-components"
import Image from "next/image"
import { breakpoints } from "../shared/styles"

export const HeaderImage = styled(Image)`
  user-select: none;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const HeaderTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  line-height: 36px;
  margin-bottom: 0;
  white-space: nowrap;
  user-select: none;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0;
  }
`