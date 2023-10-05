import React from 'react'
import styled from 'styled-components'
import technologiesData from './data'
import { colour, text } from '../styles'
import Marquee from 'react-fast-marquee'

const Container = styled.div`
  height: 40px;
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
`

const ScrollerWrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  gap: 120px;
  width: 100%;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

type ScrollerProps = {}

const Scroller: React.FC<ScrollerProps> = ({}) => {

  return (
    <Container>
      <Marquee>
        <ScrollerWrapper>
            {technologiesData &&
              technologiesData.map((tech, key) => (
                <Logo>
                  <tech.image fill="black" height={24}/>
                  {tech.showName && <>{tech.name}</>}
                </Logo>
              ))}
        </ScrollerWrapper>
      </Marquee>
    </Container>
  )
}

export default Scroller
