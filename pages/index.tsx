import Head from 'next/head'
import styled from 'styled-components'
import NavBar from '../src/components/nav/NavBar'
import React, { useState } from 'react'
import Section from '../src/components/shared/Section'
import { sections } from '../src/components/body/sections'
import { breakpoints } from '../src/components/shared/styles'
import { useRouter } from 'next/router'
import Scroller from '../src/components/shared/technologies/Scroller'
import GithubModal from '../src/components/shared/GithubModal'
import useOnFocusChangeFavicon from '../src/hooks/use-on-focus-change-favicon'
import Chatbot from '../src/components/shared/ChatBot'

const Container = styled.div<{
  backgroundColor?: string
  textColor?: string
}>`
  width: 100vw;
  height: 100%;
  transition: background-color 0.5s, color 0.25s;

  @media only screen and (min-width: ${breakpoints.mobile}) {
    ${(props) =>
      props.backgroundColor &&
      `
      background-color: ${props.backgroundColor};
    `}
    ${(props) =>
      props.textColor &&
      `
      color: ${props.textColor};
    `}
  }
`

const AppWrapper = styled.div`
  min-height: 100%;
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    padding: 0 2rem;
  }
`

const Home: React.FC = () => {
  const { asPath } = useRouter()
  const currentSection = asPath.substring(2)
  const [section, setSection] = useState(currentSection ?? 'bio')
  useOnFocusChangeFavicon()

  const renderSections = () => {
    return sections.map((section, key) => {
      return (
        <Section
          key={key}
          //@ts-ignore
          Component={section.Content}
          title={section.title}
          setSection={setSection}
          center={section.center ?? false}
          showTitle={section.showTitle ?? false}
        />
      )
    })
  }

  return (
    <Container>
      <Head>
        <title>Nick Chubb</title>
        <meta name="description" content="My Personal Portfolio Site 🤓" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppWrapper>
        <NavBar section={section} setSection={setSection} />
        <MainWrapper id="main">{renderSections()}</MainWrapper>
      </AppWrapper>
      <GithubModal section={section} />
      <Scroller />
      <Chatbot />
    </Container>
  )
}

export default Home
