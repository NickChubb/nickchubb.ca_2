import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  padding: 32px;
  width: 100%;
`

const HeaderTitle = styled.h1``

const HeaderSection = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Nick Chubb</HeaderTitle>
    </HeaderWrapper>
  )
}

export default HeaderSection