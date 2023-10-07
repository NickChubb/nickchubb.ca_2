import React from "react"
import styled from "styled-components"
import SocialLinks from "./shared/SocialLinks";
import { breakpoints, text } from "./shared/styles";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 36px;
    padding: 64px 0 32px;
  }
`

const Copyright = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${text.fade};
`

const FooterSection: React.FC = () => {
  return (
    <FooterWrapper>
      <Copyright>
        copyright &copy; Nick Chubb 2023
      </Copyright>
      <SocialLinks />
    </FooterWrapper>
  )
}

export default FooterSection
