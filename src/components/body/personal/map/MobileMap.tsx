import React from 'react'
import styled from 'styled-components'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { breakpoints, text } from '../../../shared/styles'
import { includes, map as rMap, prop } from 'ramda'
import { visitedCountries } from './data'
import map from './map.json'
import { GreenText } from '../../../shared/text'

const countryList = rMap((item) => prop('name', item), visitedCountries)
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

const MobileMap: React.FC<{}> = () => {
  return (
    <MapSectionWrapper>
      <TotalCount>
        Countries Visited: <GreenText>{countryList.length}</GreenText>/195
      </TotalCount>
      <MapWrapper>
        <ComposableMap projection="geoMercator" width={1100} height={900}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const fill = includes(geo.properties.name, countryList)
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

export default MobileMap