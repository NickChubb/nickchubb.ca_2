import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Mono } from '../../src/components/shared/text'
import QRCode from 'react-qr-code'
import { breakpoints, colour, text } from '../../src/components/shared/styles'
import Link from 'next/link'
import useMediaQuery from '../../src/hooks/use-media-query'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.main`
  display: flex;
  background: ${colour.cardBackground};
  padding: 32px;
  border-radius: 12px;
  gap: 32px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    background-color: unset;
  }
`

const QRCodeContainer = styled.div`
  height: 100%:
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderImage = styled(Image)`
  user-select: none;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    align-self: center;
  }
`

const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    gap: 32px;
  }
`

const Content = styled.div`
  display: flex;
  gap: 16px;
`

const Title = styled(Mono)`
  font-size: 36px;
`

const LinksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`

const LinksListItem = styled.div`
  &:hover {
    color: ${text.green};
    // &::before {
    //   content: '> ';
    // }
  }
`

const Footer = styled.small`
  color: ${text.fade};
`

type Link = {
  title: string
  href: string
}

const links: Array<Link> = [
  {
    title: 'Github',
    href: 'https://github.com/NickChubb',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/nickrchubb/',
  },
  {
    title: 'Resume',
    href: 'https://nickchubb.github.io/resume/',
  },
  {
    title: 'Email Me',
    href: 'mailto://nick@nickchubb.ca',
  },
]

const Links: React.FC = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  const renderLinksList = () => {
    return links.map((link, key) => (
      <LinksListItem>
        <Mono>
          <a href={link.href}>{link.title}</a>
        </Mono>
      </LinksListItem>
    ))
  }

  return (
    <Container>
      <Head>
        <title>Nick Chubb</title>
        <meta name="description" content="My Personal Links 🤓" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        {!isMobile && (
          <QRCodeContainer>
            <QRCode
              value="https://nickchubb.ca"
              style={{
                height: '100%',
                width: 'auto',
                background: text.fade,
                padding: '16px',
                borderRadius: '12px',
              }}
              bgColor={text.fade}
            />
          </QRCodeContainer>
        )}
        <Body>
          {isMobile && (
            <HeaderImage
              src="/me.png"
              width={200}
              height={200}
              alt="me"
              priority
            />
          )}
          <Title>Nick Chubb</Title>
          <Content>
            <LinksListWrapper>{renderLinksList()}</LinksListWrapper>
            {!isMobile && (
              <HeaderImage
                src="/me.png"
                width={160}
                height={160}
                alt="me"
                priority
              />
            )}
          </Content>
          <Footer>
            <Mono>
              <Link href="/">continue to full site...</Link>
            </Mono>
          </Footer>
        </Body>
      </Wrapper>
    </Container>
  )
}

export default Links
