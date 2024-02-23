import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import Button from '../../shared/Button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { SectionProps } from '../../shared/types'
import { breakpoints, fontSize, text } from '../../shared/styles'
import { Blink, Mono, Paragraph } from '../../shared/text'
import useScrollToSection from '../../../hooks/use-scroll-to-section'
import DesktopFade from '../../shared/DesktopFade'
import Technologies from '../../shared/technologies'

const BioWrapper = styled.div`
  font-size: ${fontSize.normal};
  display: flex;
  flex-direction: column;
  gap: 84px;
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
  color: ${text.light};
`

const TitleLarge = styled.span`
  font-size: 42px;
  border-bottom: 1px solid ${text.fade};
  text-align: center;
  font-weight: 400;
`

const Subtitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  padding-bottom: 4px;
  border-bottom: 1px solid ${text.fade};
  font-weight: 400;
`

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`

const SkillsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

const InformationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
`

const ButtonContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
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
        <HeaderImage
          src="/me_coding.png"
          width={200}
          height={200}
          alt="me"
          priority
        />
      </HeaderImageWrapper>
      <DesktopFade direction="down" duration={500} triggerOnce>
        <TitleParagraph>
          Hi, my name is
          <TitleLarge>
            <Fade duration={300} cascade triggerOnce>
              Nick Chubb
            </Fade>
            <Blink>.</Blink>
          </TitleLarge>
        </TitleParagraph>
      </DesktopFade>
      <SkillsSection>
        <DesktopFade delay={1800} triggerOnce>
          <Subtitle>Skills</Subtitle>
        </DesktopFade>
        <DesktopFade direction="up" delay={2000} cascade triggerOnce>
          <SkillsListWrapper>
            <Technologies fill="white" />
          </SkillsListWrapper>
        </DesktopFade>
      </SkillsSection>
      <InformationSection>
        <DesktopFade direction="up" delay={2400} cascade triggerOnce>
          <ContentParagraph>
            I am a<Mono> Full-Stack Developer </Mono>
            who is currently seeking employment opportunities in Toronto or
            Vancouver, Canada. If you are hiring, I would love to hear from you!
          </ContentParagraph>
        </DesktopFade>
        <ButtonContainer>
          <DesktopFade
            direction="up"
            delay={2800}
            duration={300}
            cascade
            triggerOnce
          >
            <Button href={'https://nickchubb.github.io/resume/'} width="100%">
              resume <FaFileAlt />
            </Button>
            <Button
              href={'https://www.linkedin.com/in/nickrchubb/'}
              width="100%"
            >
              linkedin <FaLinkedin />
            </Button>
            <Button onClick={handleContactClick} width="100%">
              contact
              <FaEnvelope />
            </Button>
          </DesktopFade>
        </ButtonContainer>
      </InformationSection>
    </BioWrapper>
  )
}

export default BioContent
