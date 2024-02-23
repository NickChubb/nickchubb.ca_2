import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ProjectImageProps = {
  src: StaticImageData | string
  alt: string
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  )
}

export default ProjectImage
