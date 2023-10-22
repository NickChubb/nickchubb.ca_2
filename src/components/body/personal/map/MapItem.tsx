import React, { useState } from 'react'
import { Geography } from 'react-simple-maps'
import { colour, text } from '../../../shared/styles'
import styled from 'styled-components'

const MapItemWrapper = styled(Geography)<{ visited: boolean }>`
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline-style: none;

  ${(props) =>
    props.visited &&
    `
    cursor: pointer;
  `}
`

type MapItemProps = {
  visited: boolean
  selected: boolean
  geo: any
  onClick: React.MouseEventHandler<SVGPathElement>
}

const MapItem: React.ForwardRefRenderFunction<SVGPathElement, MapItemProps> = (
  { visited, selected, geo, onClick },
  ref: React.ForwardedRef<SVGPathElement>
) => {
  const fill = visited ? (selected ? text.green : 'white') : colour.cardHighlighted
  return (
    <MapItemWrapper
      onClick={visited ? onClick : undefined}
      visited={visited}
      fill={fill}
      key={geo.rsmKey}
      geography={geo}
      tabIndex={-1}
      ref={ref}
    />
  )
}

export default React.forwardRef<SVGPathElement, MapItemProps>(MapItem)
