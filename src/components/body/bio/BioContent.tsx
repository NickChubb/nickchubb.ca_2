import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import Button from '../../shared/Button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { SectionProps } from '../../shared/types'
import { ExternalLink } from '../../shared/link'
import { breakpoints, fontSize, text } from '../../shared/styles'
import { Blink, Large, Paragraph } from '../../shared/text'
import useScrollToSection from '../../../hooks/use-scroll-to-section'
import DesktopFade from '../../shared/DesktopFade'
import Technologies from '../../shared/technologies'

const BioWrapper = styled.div`
  font-size: ${fontSize.normal};
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 740px;
  align-self: center;

  @media only screen and (min-width: ${breakpoints.mobile}) {
    padding-top: 44px;
  }
`

const HeaderImageWrapper = styled.div`
  width: 100%;
  display: none;
  text-align: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    display: block;
    margin-top: 32px;
  }
`

const HeaderImage = styled(Image)``

const TitleParagraph = styled.div`
  font-family: 'Roboto Mono', monospace;
  text-align: justify;
  display: flex;
  align-items: baseline;
  gap: 32px;
  font-size: ${fontSize.xlarge};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`

const ContentParagraph = styled(Paragraph)`
  margin-bottom: -8px;
`

const TitleLarge = styled.span`
  font-size: 42px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${text.fade};
  text-align: center;
`

const RolesSection = styled.div`
  margin: 3rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0;
    margin-top: 24px;
  }
`

const RoleItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const RoleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`

const RoleItemDescription = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const RoleItemWrapper = styled.div`
  margin: 0;
`
const Subtitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  padding-bottom: 8px;
  border-bottom: 1px solid ${text.fade};
`

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px 0 20px;
`

const SkillsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

const ButtonContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  & > * {
    flex: 1;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

const BioContent: React.FC<SectionProps> = () => {
  const scrollToSection = useScrollToSection('contact')

  const handleContactClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    scrollToSection()
  }

  return (
    <BioWrapper>
      <HeaderImageWrapper>
        <HeaderImage src="/me.png" width={200} height={200} alt="me" priority />
      </HeaderImageWrapper>
      <DesktopFade direction="down" duration={600} triggerOnce>
        <TitleParagraph>
          Hi, my name is
          <TitleLarge>
            <Fade duration={400} cascade triggerOnce>
              Nick Chubb
            </Fade>
            <Blink>.</Blink>
          </TitleLarge>
        </TitleParagraph>
      </DesktopFade>
      <RolesSection>
        <DesktopFade delay={2400} cascade triggerOnce>
          <RoleItem>
            <RoleIcon>👨‍💻&nbsp;&nbsp;{'>'} </RoleIcon>
            <RoleItemDescription>
              <RoleItemWrapper>
                <b>1+ years Software Experience</b> including React,
                TypeScript, Java and CSS
              </RoleItemWrapper>
            </RoleItemDescription>
          </RoleItem>
          <RoleItem>
            <RoleIcon>🖥&nbsp;&nbsp;{'>'} </RoleIcon>
            <RoleItemDescription>
              <RoleItemWrapper>
                BSc. in Computer Science & Molecular Biology from{' '}
                <b>Simon Fraser University</b>
              </RoleItemWrapper>
            </RoleItemDescription>
          </RoleItem>
          <RoleItem>
            <RoleIcon>👨🏼‍💼&nbsp;&nbsp;{'>'} </RoleIcon>
            <RoleItemDescription>
              <RoleItemWrapper>
                Software Developer for{' '}
                <ExternalLink href="https://vanstartupweek.ca/">
                  Vancouver Startup Week
                </ExternalLink>
              </RoleItemWrapper>
            </RoleItemDescription>
          </RoleItem>
        </DesktopFade>
      </RolesSection>
      <SkillsSection>
        <DesktopFade delay={4000} triggerOnce>
          <Subtitle>Skills</Subtitle>
        </DesktopFade>
        <DesktopFade direction="up" delay={4200} cascade triggerOnce>
          <SkillsListWrapper>
              <Technologies fill="white" />
          </SkillsListWrapper>
        </DesktopFade>
      </SkillsSection>
      <DesktopFade direction="up" delay={4500} cascade triggerOnce>
        <ContentParagraph>
          I am{' '}
          <Large>
            <b>Full-Stack Developer</b>
          </Large>{' '}
          who is currently seeking employment opportunities in Toronto or Vancouver, Canada. If you are hiring, I would love to hear from you!
        </ContentParagraph>
      </DesktopFade>
      <ButtonContainer>
        <DesktopFade
          direction="up"
          delay={5000}
          duration={300}
          cascade
          triggerOnce
        >
          <Button href={'https://nickchubb.github.io/resume/'} width="100%">
            Resume <FaFileAlt />
          </Button>
          <Button href={'https://www.linkedin.com/in/nickrchubb/'} width="100%">
            Linkedin <FaLinkedin />
          </Button>
          <Button onClick={handleContactClick} width="100%">
            Contact
            <FaEnvelope />
          </Button>
        </DesktopFade>
      </ButtonContainer>
    </BioWrapper>
  )
}

export default BioContent
