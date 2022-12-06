import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Button from '../../shared/button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { SectionProps } from '../../shared/types'
import { ExternalLink } from '../../shared/link'
import { breakpoints } from '../../shared/styles'

const HeaderWrapper = styled.div`
  padding: 32px 0;
  width: 100%;
`

const HeaderTitle = styled.h1``

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
        <BioParagraph>Hi 👋  my name is Nick Chubb. I am a...</BioParagraph>
        <RolesList>
          <RolesListItem>
            🖥{'\t'}Computer Science & Molecular Biology student at Simon Fraser
            University
          </RolesListItem>
          <RolesListItem>
            🐻 Junior Frontend Developer at{' '}
            <ExternalLink href="https://machobear.ca/">Machobear Studios</ExternalLink>
          </RolesListItem>
          <RolesListItem>
            👨🏼‍💼 Account Manager for{' '}
            <ExternalLink href="https://vanstartupweek.ca/">
              Vancouver Startup Week
            </ExternalLink>
          </RolesListItem>
        </RolesList>
        <BioParagraph>
          I am an aspiring <b>full-stack developer</b> and I will be seeking
          employment opportunities starting Summer 2023. If you or someone you know
          are hiring, I would love to hear from you!
        </BioParagraph>
        <ButtonContainer>
          <Button href={'https://nickchubb.github.io/resume/'}>
            Resume <FaFileAlt />
          </Button>
          <Button href={'https://www.linkedin.com/in/nickrchubb/'}>
            Linkedin <FaLinkedin />
          </Button>
          <Button href={'mailto://nick@nickchubb.ca'}>
            Email Me <FaEnvelope />
          </Button>
        </ButtonContainer>
      </BioWrapper>
    </>
  )
}

export default BioContent
