import React from 'react'
import styled from 'styled-components'
import Button from '../shared/button'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 72px 48px 48px;
`

const HeaderWrapper = styled.div`
  padding: 32px 0;
  width: 100%;
`

const HeaderTitle = styled.h1``

const BioWrapper = styled.div``

const BioTitle = styled.h2`
  padding: 48px 0;
`

const RolesList = styled.ul`
  list-style: none;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 48px;
`

const BioSection = () => {
  return (
    <Wrapper id="bio">
      <HeaderWrapper>
        <HeaderTitle>Nick Chubb</HeaderTitle>
      </HeaderWrapper>
      <BioWrapper>
        <BioTitle>bio</BioTitle>
        <p>Hi, my name is Nick Chubb. I am a...</p>
        <RolesList>
          <li>
            🖥 Computer Science & Molecular Biology student at Simon Fraser
            University
          </li>
          <li>
            🐻 Junior Frontend Developer at{' '}
            <a href="https://machobear.ca/">Machobear Studios</a>
          </li>
          <li>
            👨🏼‍💼 Account Manager for{' '}
            <a href="https://https://vanstartupweek.ca/">
              Vancouver Startup Week
            </a>
          </li>
        </RolesList>
        <p>
          I am an aspiring <b>full-stack developer</b> and I will be seeking
          employment opportunities for Summer 2023. If you or someone you know
          are hiring, I would love to hear from you!
        </p>
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
    </Wrapper>
  )
}

export default BioSection
