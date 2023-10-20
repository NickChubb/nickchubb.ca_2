import React from 'react'
import useMediaQuery from '../../../../hooks/use-media-query'
import { breakpoints } from '../../../shared/styles'
import MobileMap from './MobileMap'
import DesktopMap from './DesktopMap'

const MapSection: React.FC<{}> = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  return isMobile ? <MobileMap /> : <DesktopMap />
}

export default MapSection