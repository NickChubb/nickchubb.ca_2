import Head from 'next/head'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../shared/styles'
import BlogNavigation from './BlogNavigation'

const Container = styled.main`
  width: 100vw;
  height: 100vh;
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

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Chubb.blog</title>
        <meta name="description" content="My Personal Blog 🤓" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppWrapper>
        <BlogNavigation />
        {children}
      </AppWrapper>
    </Container>
  )
}

export default Layout