import BioContent from './bio/BioContent'
import CoursesContent from './courses/CoursesContent'
import ExperienceContent from './experience/ExperienceContent'
import PersonalContent from './personal/PersonalContent'

export type section = {
  title: string
  Content: React.FC<any> // | Array<section>
  center?: boolean
}

export const sections: Array<section> = [
  {
    title: 'bio',
    Content: BioContent,
    center: true
  },
  // {
  //   title: 'projects',
  //   Content: [
  //     {
  //       title: 'dockerman',
  //       Content: DockermanContent
  //     },
  //     {
  //       title: 'hawking',
  //       Content: HawkingContent
  //     }
  //   ]
  // },
  {
    title: 'experience',
    Content: ExperienceContent,
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
