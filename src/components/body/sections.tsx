import { experienceData } from '../../data/experience'
import { volunteeringData } from '../../data/volunteering'
import ContactContent from './contact/ContactContent'
import ProjectsContent from './projects/ProjectsContent'
import HomeContent from './home/HomeContent'
import ExperienceContent from './experience/ExperienceContent'
import BioContent from './bio/BioContent'

export type Section = {
  title: string
  Content: React.FC<any>  | Array<Section> | React.ReactNode
  center?: boolean
  backgroundColor?: string
  textColor?: string
  showTitle?: boolean
}

export const sections: Array<Section> = [
  {
    title: 'home',
    Content: HomeContent,
    center: true,
  },
  {
    title: 'experience',
    Content: <ExperienceContent data={experienceData}/>,
    center: true,
    backgroundColor: 'rgb(60, 67, 64)',
    showTitle: true
  },
  {
    title: 'projects',
    Content: ProjectsContent,
    center: true,
    showTitle: true
  },
  {
    title: 'volunteering',
    Content: <ExperienceContent data={volunteeringData}/>,
    center: true,
    backgroundColor: 'rgb(60, 67, 64)',
    showTitle: true
  },
  {
    title: 'bio',
    Content: BioContent,
    center: true,
    showTitle: true
  },
  {
    title: 'contact',
    Content: ContactContent,
    center: true,
    showTitle: true
  }
]
