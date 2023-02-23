import BioContent from './bio/BioContent'
import CoursesContent from './courses/CoursesContent'
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
    Content: ExperienceContent,
  },
  {
    title: 'projects',
    Content: ProjectsContent
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
