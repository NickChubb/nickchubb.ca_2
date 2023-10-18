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
  max-width: 880px;
  max-height: 500px;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0 -36px;
  }
`

const MapSection: React.FC<{}> = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  return (
    <MapSectionWrapper>
      <TotalCount>
        Countries Visited: <GreenText>{visited.length}</GreenText>/195
      </TotalCount>
      <MapWrapper>
        <ComposableMap projection="geoMercator" width={1100} height={900}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                console.log(geo.properties.name)
                const fill = includes(geo.properties.name, visited)
                  ? text.green
                  : 'white'
                return (
                  <Geography
                    fill={fill}
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={-1}
                  />
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
