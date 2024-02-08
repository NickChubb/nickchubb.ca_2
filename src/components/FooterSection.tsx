import React from "react"
import styled from "styled-components"
import SocialLinks from "./shared/SocialLinks";
import { breakpoints, text } from "./shared/styles";
import DesktopFade from "./shared/DesktopFade";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 36px;
    padding: 112px 0 20px;
  }
`

const Copyright = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${text.fade};
`

const FooterSection: React.FC = () => {
  return (
    <FooterWrapper>
      <DesktopFade delay={2000} duration={400} triggerOnce>
        <Copyright>
          copyright &copy; Nick Chubb 2024
        </Copyright>
        <SocialLinks />
      </DesktopFade>
    </FooterWrapper>
  )
}

export default FooterSection
