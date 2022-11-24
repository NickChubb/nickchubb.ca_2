import BioContent from './bio/BioContent'
import CoursesContent from './courses/CoursesContent'
import ExperienceContent from './experience/ExperienceContent'
import PersonalContent from './personal/PersonalContent'

type section = {
  title: string
  Component: React.FC<any>
}

export const sections: Array<section> = [
  {
    title: 'bio',
    Component: BioContent
  },
  {
    title: 'experience',
    Component: ExperienceContent,
  },
  {
    title: 'courses',
    Component: CoursesContent,
  },
  {
    title: 'personal',
    Component: PersonalContent,
  },
]
