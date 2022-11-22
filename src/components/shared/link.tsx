import styled from "styled-components"

const StyledLink = styled.a`
  transiition: 0.25s;

  &:hover {
    opacity: 1 !important;
    color: white;
  }

  &:active {
    color: limegreen;
  }
`

export default StyledLink