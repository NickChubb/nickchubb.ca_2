import React from 'react'
import styled from 'styled-components'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { text } from '../../../shared/styles'
import { includes, propSatisfies } from 'ramda'
import { visited } from './data'
import map from './map.json'

const geoUrl = map

const MapSectionWrapper = styled.div``

const MapSection: React.FC<{}> = () => {
  return (
    <MapSectionWrapper>
      <div>Travel is a big part of my life</div>
      <div>Countries Visited: {visited.length}/195</div>
      <ComposableMap projection="geoMercator" width={1200} height={900}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              console.log(geo.properties.name)
              const fill = includes(geo.properties.name, visited)
                ? text.green
                : 'white'
              return <Geography fill={fill} key={geo.rsmKey} geography={geo} />
            })
          }
        </Geographies>
      </ComposableMap>
    </MapSectionWrapper>
  )
}

export default MapSection
