import { StaticImageData } from 'next/image'

export type Link = {
  title: string
  url: string
  Icon?: JSX.Element
}

export type ImageDetails = {
  src: StaticImageData
  title: string
  description?: string
  priority?: boolean
}

export type Project = {
  id: string
  display?: boolean
  title: string
  summary: string
  technologies: string
  description: Array<string>
  links: Array<Link>
  image: Array<ImageDetails>
  icon: string
  alert?: string
}

export type ProjectData = Array<Project>