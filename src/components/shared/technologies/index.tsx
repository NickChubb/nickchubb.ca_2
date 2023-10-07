import React from 'react'
import { Technology } from './types'
import technologiesData from './data'
import styled from 'styled-components'

const Wrapper = styled.div``

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

type TechnologiesProps = {
  list?: Technology[] | Technology | null
  fill?: string
}

const Technologies: React.FC<TechnologiesProps> = ({ list, fill = 'black' }) => {
  // if data is null, return all

  // else, filter for selected names

  return (
    <>
      {technologiesData &&
        technologiesData.map((item, key) => (
          <Logo key={key}>
            <item.image fill={fill} height={24} />
            {item.showName && <>{item.name}</>}
          </Logo>
        ))}
    </>
  )
}

export default Technologies
