import React from 'react'
import styled from 'styled-components'
import Button from '../../shared/button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { SectionProps } from '../../shared/types'
import { ExternalLink } from '../../shared/link'

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

const BioParagraph = styled.div`

`

const BioTitle = styled.h2`
  padding: 48px 0;
`

const RolesList = styled.ul`
  list-style: none;
`

const ButtonContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 8px;
`

const BioContent: React.FC<SectionProps> = () => {
  return (
    <>
      <BioWrapper>
        <BioParagraph>Hi, my name is Nick Chubb. I am a...</BioParagraph>
        <RolesList>
          <li>
            🖥{'\t'}Computer Science & Molecular Biology student at Simon Fraser
            University
          </li>
          <li>
            🐻 Junior Frontend Developer at{' '}
            <ExternalLink href="https://machobear.ca/">Machobear Studios</ExternalLink>
          </li>
          <li>
            👨🏼‍💼 Account Manager for{' '}
            <ExternalLink href="https://https://vanstartupweek.ca/">
              Vancouver Startup Week
            </ExternalLink>
          </li>
        </RolesList>
        <BioParagraph>
          I am an aspiring <b>full-stack developer</b> and I will be seeking
          employment opportunities for Summer 2023. If you or someone you know
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
