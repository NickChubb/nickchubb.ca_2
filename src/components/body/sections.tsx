import { projectData } from '../../data/projects'
import BioContent from './bio/BioContent'
import CoursesContent from './courses/CoursesContent'
import ExperienceContent from './experience/ExperienceContent'
import PersonalContent from './personal/PersonalContent'
import ProjectPage from './projects/ProjectPage/ProjectPage'

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
    Content: ExperienceContent,
  },
  {
    title: 'projects',
    Content: [
      {
        title: 'dockerman',
        Content: <ProjectPage project={projectData[0]} />
      },
      {
        title: 'hawking',
        Content: <ProjectPage project={projectData[1]} />
      }
    ]
  },
  {
    title: 'courses',
    Content: CoursesContent,
  },
  {
    title: 'personal',
    Content: PersonalContent,
  },
]
