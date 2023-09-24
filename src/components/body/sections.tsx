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
  showTitle?: boolean
  backgroundColor?: string
  textColor?: string
}

export const sections: Array<Section> = [
  {
    title: 'bio',
    Content: BioContent,
    center: true,
    showTitle: false,
  },
  {
    title: 'experience',
    Content: <ExperienceContent data={experienceData}/>,
    center: true,
    backgroundColor: 'rgb(60, 67, 64)'
  },
  {
    title: 'projects',
    Content: ProjectsContent,
  },
  {
    title: 'volunteering',
    Content: <ExperienceContent data={volunteeringData}/>,
    center: true,
    backgroundColor: 'rgb(60, 67, 64)'
  },
  {
    title: 'personal',
    Content: PersonalContent,
    center: true,
  },
  {
    title: 'contact',
    Content: ContactContent,
  }
]
