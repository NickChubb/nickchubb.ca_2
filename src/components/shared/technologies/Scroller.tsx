import React from 'react'
import styled from 'styled-components'
import { breakpoints, colour, text } from '../styles'
import Marquee from 'react-fast-marquee'
import Technologies from '.'

const Container = styled.div`
  height: 32px;
  width: 100%;
  position: sticky;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${text.green};
  color: ${colour.cardBackground};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
`

const ScrollerWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  width: 100%;
  justify-content: space-between;

  & > div {

    margin-left: 120px;

    @media only screen and (max-width: ${breakpoints.mobile}) {
      margin-left: 60px;
    }
  }
`

type ScrollerProps = {}

const Scroller: React.FC<ScrollerProps> = ({}) => {

  return (
    <Container>
      <Marquee>
        <ScrollerWrapper>
          <Technologies />
        </ScrollerWrapper>
      </Marquee>
    </Container>
  )
}

export default Scroller
