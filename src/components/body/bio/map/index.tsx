import React from 'react'
import MobileMap from './MobileMap'
import DesktopMap from './DesktopMap'
import useIsMobile from '../../../../hooks/use-is-mobile'

const MapSection: React.FC<{}> = () => {
  const isMobile = useIsMobile()
  return isMobile ? <MobileMap /> : <DesktopMap />
}

export default MapSection