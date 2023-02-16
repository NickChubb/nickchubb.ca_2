type Link = {
  title: string
  url: string
}

export type ImageDetails = {
  path: string
  title: string
  description: string
}

export type Project = {
  display?: boolean
  title: string
  summary: string
  technologies: string
  description: Array<string>
  github: string
  links: Array<Link>
  image: Array<ImageDetails>
  icon: string
}

export type ProjectData = Array<Project>