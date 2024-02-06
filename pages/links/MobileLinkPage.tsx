import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Mono } from '../../src/components/shared/text'
import { breakpoints, colour, text } from '../../src/components/shared/styles'
import Link from 'next/link'
import { Link as LinkListItem } from './types'
import { links } from './links'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 12px;
  gap: 96px;
  width: 100vw;
  height: 100vh;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  gap: 64px;
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
  gap: 16px;
`

const Footer = styled.small`
  color: ${text.fade};
`

type MobileLinkPageProps = {
  renderLinksList: (linksList: Array<LinkListItem>) => any
}

const MobileLinkPage: React.FC<MobileLinkPageProps> = ({ renderLinksList }) => {
  return (
    <Wrapper>
      <Header>
        <HeaderImage src="/me.png" width={200} height={200} alt="me" priority />
        <Title>Nick Chubb.</Title>
      </Header>
      <Body>
        <Content>
          <LinksListWrapper>{renderLinksList(links)}</LinksListWrapper>
        </Content>
        <Footer>
          <Mono>
            <Link href="/">continue to full site...</Link>
          </Mono>
        </Footer>
      </Body>
    </Wrapper>
  )
}

export default MobileLinkPage
