import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Mono } from '../../src/components/shared/text'
import QRCode from 'react-qr-code'
import { breakpoints, colour, text } from '../../src/components/shared/styles'
import Link from 'next/link'
import MobileLinkPage from '../../src/components/LinkPage/MobileLinkPage'
import { Link as LinkListItem } from '../../src/components/LinkPage/types'
import { links } from '../../src/components/LinkPage/links'
import useIsMobile from '../../src/hooks/use-is-mobile'

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
`

const QRCodeContainer = styled.div`
  height: 100%:
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderImage = styled(Image)`
  user-select: none;
`

const Body = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const LinkPageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Container>
    <Head>
      <title>Nick Chubb</title>
      <meta name="description" content="My Personal Links 🤓" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </Container>
)

const LinkPage: React.FC<{}> = () => {
  const isMobile = useIsMobile()

  const renderLinksList = (linksList: Array<LinkListItem>) => {
    return linksList.map((link, key) => (
      <LinksListItem key={key}>
        <Mono>
          <a href={link.href}>{link.title}</a>
        </Mono>
      </LinksListItem>
    ))
  }

  if (isMobile)
    return (
      <LinkPageWrapper>
        <MobileLinkPage renderLinksList={renderLinksList} />
      </LinkPageWrapper>
    )

  return (
    <LinkPageWrapper>
      <Wrapper>
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
        <Body>
          <Title>Nick Chubb</Title>
          <Content>
            <LinksListWrapper>{renderLinksList(links)}</LinksListWrapper>
            <HeaderImage
              src="/me_coding.png"
              width={160}
              height={160}
              alt="me"
              priority
            />
          </Content>
          <Footer>
            <Mono>
              <Link href="/">continue to full site...</Link>
            </Mono>
          </Footer>
        </Body>
      </Wrapper>
    </LinkPageWrapper>
  )
}

export default LinkPage
