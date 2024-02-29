import React from 'react'
import { Fade, FadeProps } from 'react-awesome-reveal'
import useIsMobile from '../../hooks/use-is-mobile'

type DesktopFadeProps = FadeProps & {
  chidlren?: React.ReactNode
}

const DesktopFade: React.FC<DesktopFadeProps> = ({ children, ...rest }) => {
  const isMobile = useIsMobile()
  if (isMobile) {
      return <>{children}</> // Render children directly if isMobile is true
  } else {
      return <Fade {...rest}>{children}</Fade> // Apply Fade component if isMobile is false
  }
}

export default DesktopFade