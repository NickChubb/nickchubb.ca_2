import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'
import Button from '../../shared/button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { SectionProps } from '../../shared/types'
import { ExternalLink } from '../../shared/link'
import { breakpoints, fontSize } from '../../shared/styles'

const HeaderWrapper = styled.div`
  padding: 32px 0;
  width: 100%;
`

const BioWrapper = styled.div`
  font-size: ${fontSize.large};
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 740px;
`

const HeaderImageWrapper = styled.div`
  width: 100%;
`

const HeaderImage = styled(Image)`
  margin: 0 auto;
  display: none;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`

const BioParagraph = styled.div`
  text-align: justify;
`

const BioTitle = styled.h2`
  padding: 48px 0;
`

const RolesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0;
    padding-left: 16px;
  }
`

const RolesListItem = styled.li``

const RolesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 1rem 0;
  padding-left: 40px;

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

  @media only screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

const BioContent: React.FC<SectionProps> = () => {
  return (
    <>
      <BioWrapper>
        <HeaderImageWrapper>
          <HeaderImage src="/me.png" width={200} height={200} alt="me" />
        </HeaderImageWrapper>
        <Fade direction="up" triggerOnce>
          <BioParagraph>Hi, my name is Nick Chubb.</BioParagraph>
        </Fade>
        <RolesSection>
          <Fade direction="up" delay={100} triggerOnce>
            <RoleItem>
              <RoleIcon>👨‍💻&nbsp;&nbsp;{'>'} </RoleIcon>
              <RoleItemDescription>
                <RoleItemWrapper>
                  <b>1+ years Front-end Development Experience</b> with React,
                  Next.js, HTML, and CSS
                </RoleItemWrapper>
              </RoleItemDescription>
            </RoleItem>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <RoleItem>
              <RoleIcon>🖥&nbsp;&nbsp;{'>'} </RoleIcon>
              <RoleItemDescription>
                <RoleItemWrapper>
                  Computer Science & Molecular Biology student at{' '}
                  <b>Simon Fraser University</b>
                </RoleItemWrapper>
              </RoleItemDescription>
            </RoleItem>
          </Fade>
          <Fade direction="up" delay={300} triggerOnce>
          <RoleItem>
            <RoleIcon>👨🏼‍💼&nbsp;&nbsp;{'>'} </RoleIcon>
            <RoleItemDescription>
              <RoleItemWrapper>
                Account Manager for{' '}
                <ExternalLink href="https://vanstartupweek.ca/">
                  Vancouver Startup Week
                </ExternalLink>
              </RoleItemWrapper>
            </RoleItemDescription>
          </RoleItem>
          </Fade>
        </RolesSection>
        <Fade direction='up' delay={400} triggerOnce>
          <BioParagraph>
            I am an aspiring <b>full-stack developer</b> and I am currently
            seeking full-time employment opportunities starting in Summer/Fall
            2023. If you or someone you know are hiring, I would love to hear from
            you!
          </BioParagraph>
        </Fade>
        <ButtonContainer>
          <Fade direction='up' delay={1400} triggerOnce>
            <Button href={'https://nickchubb.github.io/resume/'}>
              Resume <FaFileAlt />
            </Button>
          </Fade>
          <Fade direction='up' delay={1500} triggerOnce>
            <Button href={'https://www.linkedin.com/in/nickrchubb/'}>
              Linkedin <FaLinkedin />
            </Button>
          </Fade>
          <Fade direction='up' delay={1600} triggerOnce>
            <Button href={'mailto://nick@nickchubb.ca'}>
              Email Me <FaEnvelope />
            </Button>
          </Fade>
        </ButtonContainer>
      </BioWrapper>
    </>
  )
}

export default BioContent
