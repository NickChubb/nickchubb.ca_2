import React from 'react'
import { Fade, FadeProps } from 'react-awesome-reveal'
import { breakpoints } from './styles'
import useMediaQuery from '../../hooks/use-media-query'

type DesktopFadeProps = FadeProps & {
  chidlren?: React.ReactNode
}

const DesktopFade: React.FC<DesktopFadeProps> = ({ children, ...rest }) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  if (isMobile) {
      return <>{children}</> // Render children directly if isMobile is true
  } else {
      return <Fade {...rest}>{children}</Fade> // Apply Fade component if isMobile is false
  }
}

export default DesktopFade