export type Experience = {
    display: boolean
    title: string
    company: string
    location: string
    startDate: string
    finishDate: string
    description: Array<string>
    website: string
    image?: string
  }
  
export type ExperienceData = Array<Experience>