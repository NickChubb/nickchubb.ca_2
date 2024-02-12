import React from 'react'
import { HeaderImage, HeaderTitle } from '../src/components/nav/nav.styled'
import styled from 'styled-components'
import Link from 'next/link'
import { Mono } from '../src/components/shared/text'
import { text } from '../src/components/shared/styles'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
`

const HeaderContent = styled.div``

const HeaderSubtitle = styled.div`
  color: ${text.light};
  margin-top: 24px;

  &:hover {
    color: ${text.green};
  }
`

const Custom404 = () => {
  return (
    <Container>
      <HeaderImage
        src="/me_shrugging.png"
        width={200}
        height={200}
        alt="me"
        priority
      />
      <HeaderContent>
        <HeaderTitle>404: Page Not Found</HeaderTitle>
        <HeaderSubtitle>
          <Link href="/"><Mono>👉 take me back home...</Mono></Link>
        </HeaderSubtitle>
      </HeaderContent>
    </Container>
  )
}

export default Custom404