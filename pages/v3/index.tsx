import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from '../../src/components/shared/ChatBot/TextInput'
import GenerativeField from '../../src/components/shared/v3/GenerativeField'
import {
  getStoredContent,
  storeContent,
} from '../../src/components/shared/v3/helpers'
import { Grid } from 'react-loader-spinner'
import { text } from '../../src/components/shared/styles'

const Wrapper = styled.main`
  position: relative;
  transition: 0.5s all;
`

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const v3Home: React.FC = () => {
  const [content, setContent] = useState(getStoredContent())
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (message: string) => {
    setLoading(true)
    const theme = 'wikipedia'
    const style = { height: 'calc(100vh - 55px)' }
    const query = `style: ${JSON.stringify(style)}, theme: ${theme}, topic: ${message}`
    // fetch from API
    const response = await fetch('/api/v3', {
      method: 'POST',
      body: JSON.stringify({ message: query }),
    })
    const data = await response.json()
    const html = data.content//.slice(7, -3)
    setContent(html)
    storeContent({ html, query: message, theme, style })
    setLoading(false)
  }

  return (
    <Wrapper>
      <TextInput
        onSubmit={handleSubmit}
        isLoading={isLoading}
        // style={{ position: 'fixed', top: '0px', width: '100%' }}
      />
      {isLoading ? (
        <LoadingWrapper>
          <Grid
            visible={true}
            height="160"
            width="160"
            color={text.green}
            ariaLabel="grid-loading"
            radius="12.5"
          />
        </LoadingWrapper>
      ) : (
        <GenerativeField content={content} />
      )}
    </Wrapper>
  )
}

export default v3Home
