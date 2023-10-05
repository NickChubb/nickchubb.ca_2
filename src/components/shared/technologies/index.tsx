import React from 'react'
import { Technology } from './types'
import tech from './data'
import styled from 'styled-components'

const Wrapper = styled.div``

type TechnologiesProps = Technology[] | Technology | null

const Technologies: React.FC<TechnologiesProps> = (data) => {

  // if data is null, return all

  // else, filter for selected names

  return (
    <Wrapper>
      {tech.map((item, key) => (
        <div>{item.name}</div>
      ))}
    </Wrapper>
  )
}

export default Technologies