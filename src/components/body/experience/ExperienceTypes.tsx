export type Experience = {
    display: boolean
    title: string
    company: string
    location: string
    startDate: string
    finishDate: string
    description: Array<string>
    website: string
    skills?: Array<string>
    image?: string
    paid: boolean
  }
  
export type ExperienceData = Array<Experience>