import React from 'react'
import { Dna } from 'react-loader-spinner'
import styled from 'styled-components'
import { Mono } from './text'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <Mono>Loading...</Mono>
    </Wrapper>
  )
}

export default Loading
