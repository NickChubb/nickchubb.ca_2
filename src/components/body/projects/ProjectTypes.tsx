type Link = {
  title: string
  url: string
}

type Image = {
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
  image: Array<Image>
}

export type ProjectData = Array<Project>