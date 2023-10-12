export type Link = {
  title: string
  url: string
  Icon?: JSX.Element
}

export type ImageDetails = {
  path: string
  title: string
  description?: string
}

export type Project = {
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