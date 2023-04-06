import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import Button from '../../shared/button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { SectionProps } from '../../shared/types'
import { ExternalLink } from '../../shared/link'
import { breakpoints, fontSize, text } from '../../shared/styles'
import { Blink, Large, Paragraph } from '../../shared/text'
import useScrollToSection from '../../../hooks/use-scroll-to-section'
import useMediaQuery from '../../../hooks/use-media-query'

const BioWrapper = styled.div`
  font-size: ${fontSize.normal};
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 740px;
  align-self: center;
`

const BioMobileLanding = styled.div`
  @media only screen and (max-width: ${breakpoints.mobile}) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    padding: 0 0 48px;
  }
`

const BioMobileHeader = styled.div``

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

const TitleLarge = styled.span`
  font-size: 42px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${text.fade};
  text-align: center;
`

const RolesSection = styled.div`
  margin: 3rem 0;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0;
    padding-left: 16px;
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
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  const scrollToSection = useScrollToSection('contact')

  const handleContactClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    scrollToSection()
  }

  return (
    <BioWrapper>
      <BioMobileLanding>
        <BioMobileHeader>
          <HeaderImageWrapper>
            <HeaderImage
              src="/me.png"
              width={200}
              height={200}
              alt="me"
              priority
            />
          </HeaderImageWrapper>
          <Fade direction="down" duration={600} triggerOnce>
            <TitleParagraph>
              Hi, my name is
              <TitleLarge>
                <Fade duration={400} cascade triggerOnce>
                  Nick Chubb
                </Fade>
                <Blink>.</Blink>
              </TitleLarge>
            </TitleParagraph>
          </Fade>
        </BioMobileHeader>
        <RolesSection>
          <Fade delay={2400} cascade triggerOnce>
            <RoleItem>
              <RoleIcon>👨‍💻&nbsp;&nbsp;{'>'} </RoleIcon>
              <RoleItemDescription>
                <RoleItemWrapper>
                  <b>1+ years Front-end Development Experience</b> with React,
                  Next.js, HTML, and CSS
                </RoleItemWrapper>
              </RoleItemDescription>
            </RoleItem>
            <RoleItem>
              <RoleIcon>🖥&nbsp;&nbsp;{'>'} </RoleIcon>
              <RoleItemDescription>
                <RoleItemWrapper>
                  Computer Science & Molecular Biology student at{' '}
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
          </Fade>
        </RolesSection>
      </BioMobileLanding>
      <Fade direction="up" delay={isMobile ? 0 : 4000} cascade triggerOnce>
        <Paragraph>
          I am an aspiring{' '}
          <Large>
            <b>full-stack developer</b>
          </Large>{' '}
          and I am currently seeking front-end or full-stack employment
          opportunities starting in Summer/Fall 2023.
        </Paragraph>
        <Paragraph>
          If you or someone you know are hiring, I would love to hear from you!
        </Paragraph>
      </Fade>
      <ButtonContainer>
        <Fade
          direction="up"
          delay={isMobile ? 1000 : 4900}
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
        </Fade>
      </ButtonContainer>
    </BioWrapper>
  )
}

export default BioContent
