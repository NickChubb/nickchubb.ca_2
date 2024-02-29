import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { VscRefresh } from 'react-icons/vsc'
import { CgZoomIn, CgZoomOut } from 'react-icons/cg'
import { ComposableMap, Geographies, ZoomableGroup } from 'react-simple-maps'
import { breakpoints, text } from '../../../shared/styles'
import {
  find,
  includes,
  prop,
  propEq,
  map as rMap,
  pathEq,
  pathOr,
} from 'ramda'
import { visitedCountries } from './data'
import map from './countries-50m.json'
// import map from './map.json'
import { GreenText } from '../../../shared/text'
import MapItem from './MapItem'
import { GeoPermissibleObjects, geoPath } from 'd3-geo'
import { geoTimes } from 'd3-geo-projection'

const countryList = rMap((item) => prop('name', item), visitedCountries)
const geoUrl = map

const MapSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MapInfo = styled.div`
  font-family: ${text.mono};
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
  position: relative;

  &:hover {
    & > div > .legend-icon {
      animation: mapLegendIcon 2s ease-out infinite;
    }
  }
`

const MapLegend = styled.div`
  position: absolute;
  overflow: hidden;

  &:hover {
    & > * {
      translate: 0;
    }
    & > .legend-icon {
      animation: unset;
      opacity: 0 !important;
      translate: 100px;
    }
  }
`

const LegendIcon = styled.span`
  font-size: 48px;
  position: absolute;
  top: 50%;
  right: 60%;
  color: ${text.light};
  opacity: 0;
  transition: translate 0.5s, opacity 0.5s;
  mix-blend-mode: difference;
`

const CountryList = styled.div`
  font-family: ${text.mono};
  font-size: 16px;
  max-height: calc( 848px - 132px - 62px - 74px );
  overflow-y: scroll;
  overscroll-behavior: contain;
  translate: -100%;
  transition: 0.5s translate;
  color: ${text.light};
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.8);
  user-select: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: ${breakpoints.large}) {
    max-height: 700px;
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

const ComposableMapWrapper = styled.div<{ isMoved: boolean }>`
  width: 100%;
  height: calc(848px - 132px - 62px - 64px);

  ${(props) => props.isMoved && 'cursor: grab;'}

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin: 0 -36px;
  }
`

const MapControls = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  color: white;
  display: flex;
`

const MapControlButton = styled.div<{ disabled: boolean }>`
  font-family: ${text.mono};
  font-size: 20px;
  line-height: 20px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 8px;
  cursor: pointer;
  transition: 0.5s background-color;
  user-select: none;

  ${(props) =>
    props.disabled &&
    `
    opacity: 0.3;
    pointer-events: none;

  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const DesktopMap: React.FC<{}> = () => {
  const [current, setCurrent] = useState('Canada')
  const [zoom, setZoom] = useState(1)
  const [center, setCenter] = useState<[number, number]>([0, 0])
  const zoomIn = () => setZoom(Math.min(zoom + 1, 10))
  const zoomOut = () => {
    if (zoom <= 2) resetPan()
    setZoom(Math.max(zoom - 1, 1))
  }
  const isZoomed = zoom > 1
  const isPanned = center[0] !== 0 || center[1] !== 0
  const isMoved = isZoomed || isPanned
  const resetZoom = () => setZoom(1)
  const resetPan = () => setCenter([0, 0])
  const resetMap = () => {
    setZoom(1)
    setCenter([0, 0])
  }

  const projection = () =>
    geoTimes()
      .translate([800 / 2, 450 / 2])
      .scale(160)

  const handleGeographyClick = (
    geography: GeoPermissibleObjects,
    event: { persist: () => void }
  ) => {
    event.persist()
    const path = geoPath().projection(projection())
    const centroid = projection().invert(path.centroid(geography))
    setCenter([centroid[0], centroid[1] - 5])
    const size = path.area(geography)
    const zoom = Math.log(200000 / size)
    setZoom(zoom)
  }

  const handleMoveEnd = (event: {
    coordinates: [number, number]
    zoom: number
  }) => {
    const { coordinates, zoom } = event
    setCenter(coordinates)
    setZoom(zoom)
  }

  const handleZoomFilter = (element: SVGElement): boolean => {
    const disableTypes = ['wheel']
    return !disableTypes.includes((element as unknown as Event).type)
  }

  return (
    <MapSectionWrapper>
      <MapInfo>
        <div>Selected:</div>
        <div>
          <GreenText>
            <b>{current}</b>
          </GreenText>
        </div>
        <div>Visited:</div>
        <div>
          <GreenText>
            <b>
              {prop('visited', find(propEq('name', current), visitedCountries))}
            </b>
          </GreenText>
        </div>
        <div>Total:</div>
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
                onClick={(event) => {
                  const geo = find(
                    pathEq(['properties', 'name'], item),
                    pathOr([], ['features'], geoUrl)
                  )
                  handleGeographyClick(
                    geo as unknown as GeoPermissibleObjects,
                    event
                  )
                  setCurrent(item)
                }}
              >
                {item}
              </CountryListItem>
            ))}
          </CountryList>
          <LegendIcon className="legend-icon">
            <IoIosArrowForward />
          </LegendIcon>
        </MapLegend>
        <ComposableMapWrapper isMoved={isMoved}>
          <ComposableMap projection="geoMercator" width={1100} height={900}>
            <ZoomableGroup
              center={center}
              zoom={zoom}
              minZoom={1}
              maxZoom={10}
              translateExtent={[
                [0, 0],
                [1100, 900],
              ]}
              onMoveEnd={handleMoveEnd}
              filterZoomEvent={handleZoomFilter}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <MapItem
                      visited={includes(geo.properties.name, countryList)}
                      selected={current === geo.properties.name}
                      geo={geo}
                      onClick={(event) => {
                        handleGeographyClick(geo, event)
                        setCurrent(geo.properties.name)
                      }}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </ComposableMapWrapper>
        <MapControls>
          <MapControlButton onClick={zoomOut} disabled={zoom === 1}>
            <CgZoomOut />
          </MapControlButton>
          <MapControlButton onClick={zoomIn} disabled={zoom === 10}>
            <CgZoomIn />
          </MapControlButton>
          <MapControlButton onClick={resetMap} disabled={!isMoved}>
            <VscRefresh />
          </MapControlButton>
        </MapControls>
      </MapWrapper>
    </MapSectionWrapper>
  )
}

export default DesktopMap
