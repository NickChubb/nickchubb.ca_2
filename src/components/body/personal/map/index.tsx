import React from 'react'
import styled from 'styled-components'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { breakpoints, text } from '../../../shared/styles'
import { includes, propSatisfies } from 'ramda'
import { visited } from './data'
import map from './map.json'
import useMediaQuery from '../../../../hooks/use-media-query'
import { GreenText } from '../../../shared/text'

const geoUrl = map

const MapSectionWrapper = styled.div``

const TotalCount = styled.h4`
  font-family: 'Roboto Mono', monospace;
`

const MapWrapper = styled.div`
  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0 -36px;
  }
`

const MapSection: React.FC<{}> = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  return (
    <MapSectionWrapper>
      <p>
        Travel is an important pastime for me, and a big part of my life. As of
        2023, I have spent nearly 6 months collectively solo-travelling
        throughout Europe and Southeast Asia.
      </p>
      <TotalCount>Countries Visited: <GreenText>{visited.length}</GreenText>/195</TotalCount>
      <MapWrapper>
        <ComposableMap projection="geoMercator" width={1200} height={900}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                console.log(geo.properties.name)
                const fill = includes(geo.properties.name, visited)
                  ? text.green
                  : 'white'
                return (
                  <Geography fill={fill} key={geo.rsmKey} geography={geo} />
                )
              })
            }
          </Geographies>
        </ComposableMap>
      </MapWrapper>
    </MapSectionWrapper>
  )
}

export default MapSection
