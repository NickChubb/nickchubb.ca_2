import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ProjectImageProps = {
  src: StaticImageData | string
  alt: string
  priority?: boolean
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, priority }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      style={{ objectFit: 'cover', objectPosition: 'top' }}
      placeholder="blur"
      priority={priority}
    />
  )
}

export default ProjectImage
