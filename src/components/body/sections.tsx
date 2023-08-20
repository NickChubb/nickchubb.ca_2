import { experienceData } from '../../data/experience'
import { volunteeringData } from '../../data/volunteering'
import BioContent from './bio/BioContent'
import ContactContent from './contact/ContactContent'
import ExperienceContent from './experience/ExperienceContent'
import PersonalContent from './personal/PersonalContent'
import ProjectsContent from './projects/ProjectsContent'

export type Section = {
  title: string
  Content: React.FC<any>  | Array<Section> | React.ReactNode
  center?: boolean
}

export const sections: Array<Section> = [
  {
    title: 'bio',
    Content: BioContent,
    center: true
  },
  {
    title: 'experience',
    Content: <ExperienceContent data={experienceData}/>,
  },
  {
    title: 'projects',
    Content: ProjectsContent,
  },
  {
    title: 'Volunteering',
    Content: <ExperienceContent data={volunteeringData}/>,
  },
  {
    title: 'personal',
    Content: PersonalContent,
  },
  {
    title: 'contact',
    Content: ContactContent,
  }
]
