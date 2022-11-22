import React from "react"
import styled from "styled-components"
import SocialLinks from "./shared/SocialLinks";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Copyright = styled.div``

const FooterSection = () => {
  return (
    <FooterWrapper>
      <Copyright>
        copyright &copy; Nick Chubb 2022
      </Copyright>
      <SocialLinks />
    </FooterWrapper>
  );
};

export default FooterSection;
