import React from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa"
import styled from "styled-components"
import { StyledLink } from "./link"
import { text } from '../shared/styles'

type SocialLink = {
  title: string
  href: string
  icon: React.ReactNode
}

type SocialLinksType = Array<SocialLink>

export const socialLinks: SocialLinksType = [
  {
    title: "Github",
    href: "https://github.com/NickChubb",
    icon: <FaGithub />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nickrchubb/",
    icon: <FaLinkedin />,
  },
  {
    title: "Resume",
    href: "https://nickchubb.github.io/resume/",
    icon: <FaFileAlt />,
  },
  {
    title: "Email Me",
    href: "mailto://nick@nickchubb.ca",
    icon: <FaEnvelope />,
  },
]

const SocialLinkWrapper = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: ${text.normal};

  &:hover > * {
    color: ${text.fade};
  }
  
  & > * {
    transition: 0.25s;
  }
  & > *:hover {
    color: ${text.green} !important;
    font-size: 24px;
  }
`

const SocialLink: React.FC<{ link: SocialLink }> = ({ link }) => {
  return (
    <StyledLink href={link.href} target="_blank">
      {link.icon}
    </StyledLink>
  )
}

const SocialLinks = () => {
  return (
    <SocialLinkWrapper>
      {socialLinks && socialLinks.map((link, key) => {
        return <SocialLink key={key} link={link}/>
      })}
    </SocialLinkWrapper>
  )
}

export default SocialLinks
