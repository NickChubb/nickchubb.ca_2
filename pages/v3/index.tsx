import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from '../../src/components/shared/ChatBot/TextInput'
import GenerativeField from '../../src/components/shared/v3/GenerativeField'

const Wrapper = styled.main``

const v3Home: React.FC = () => {
  const [content, setContent] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (message: string) => {
    setLoading(true)
    // fetch from API
    const response = await fetch('/api/v3')
    const data = await response.json()
    setContent(JSON.stringify(data))
    setLoading(false)
  }

  return (
    <Wrapper>
      <TextInput onSubmit={handleSubmit} isLoading={isLoading} />
      <GenerativeField content={content} />
    </Wrapper>
  )
}

export default v3Home
