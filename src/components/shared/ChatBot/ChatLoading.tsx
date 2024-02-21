import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import styled from 'styled-components'
import { text } from '../styles'

const Container = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ChatLoading: React.FC = () => {
  return (
    <Container>
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color={text.green}
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </Container>
  )
}

export default ChatLoading
