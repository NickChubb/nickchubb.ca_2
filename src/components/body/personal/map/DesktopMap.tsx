import React, { useState } from 'react'
import styled from 'styled-components'
import { ComposableMap, Geographies } from 'react-simple-maps'
import { breakpoints, text } from '../../../shared/styles'
import { find, includes, prop, propEq, map as rMap } from 'ramda'
import { visitedCountries } from './data'
import map from './map.json'
import { GreenText } from '../../../shared/text'
import MapItem from './MapItem'

const countryList = rMap((item) => prop('name', item), visitedCountries)
const geoUrl = map

const MapSectionWrapper = styled.div``

const MapInfo = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  margin: 1rem 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;

  & > div {
    flex: 1;
    text-align: start;
    &:nth-child(2n - 1) {
      text-align: end;
    }
  }
`

const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const MapLegend = styled.div`
  position: absolute;
  width: 150px;
  overflow: hidden;

  &:hover {
    & > * {
      translate: 0;
    }
  }
`

const CountryList = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  max-height: 525px;
  overflow-y: scroll;
  overscroll-behavior: contain;
  translate: -150px;
  transition: 0.5s translate;
  color: ${text.light};

  &::-webkit-scrollbar {
    display: none;
  }
`

const CountryListItem = styled.div<{ current: boolean }>`
  cursor: pointer;

  ${(props) =>
    props.current &&
    `
    color: ${text.green};
  `}

  &:hover {
    color: white;
  }
`

const ComposableMapWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0 -36px;
  }
`

const DesktopMap: React.FC<{}> = () => {
  const [current, setCurrent] = useState('Canada')
  return (
    <MapSectionWrapper>
      <MapInfo>
        <div>
          Selected:
        </div>
        <div>
          <GreenText><b>{current}</b></GreenText>
        </div>
        <div>
          Visited:
        </div>
        <div>
          <GreenText><b>{prop('visited', find(propEq('name', current), visitedCountries))}</b></GreenText>
        </div>
        <div>
          Total:
        </div>
        <div>
          <GreenText>{visitedCountries.length}</GreenText>/195
        </div>
      </MapInfo>
      <MapWrapper>
        <MapLegend>
          <CountryList>
            {countryList.map((item) => (
              <CountryListItem
                current={item === current}
                onClick={() => setCurrent(item)}
              >
                {item}
              </CountryListItem>
            ))}
          </CountryList>
        </MapLegend>
        <ComposableMapWrapper>
          <ComposableMap projection="geoMercator" width={1100} height={900}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(
                  (geo) => (
                    <MapItem
                      visited={includes(geo.properties.name, countryList)}
                      selected={current === geo.properties.name}
                      geo={geo}
                      onClick={() => setCurrent(geo.properties.name)}
                    />
                  )
                )
              }
            </Geographies>
          </ComposableMap>
        </ComposableMapWrapper>
      </MapWrapper>
    </MapSectionWrapper>
  )
}

export default DesktopMap
