import React from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Mono } from './text'
import styled from 'styled-components'
import { text } from './styles'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${text.red};
  gap: 16px;
`

const Error: React.FC = () => {
  return (
    <Wrapper>
      <RiErrorWarningLine fontSize={84} />
      <Mono>Error fetching data...</Mono>
    </Wrapper>
  )
}

export default Error
