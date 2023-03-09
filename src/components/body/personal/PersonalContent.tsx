import TabbedContent, { Page } from '../../shared/TabbedContent'
import AboutSection from './AboutSection'
import BookshelfSection from './BookshelfSection'

const pages: Array<Page> = [
  {
    title: 'about',
    Content: <AboutSection />,
  },
  {
    title: 'bookshelf',
    Content: <BookshelfSection />,
  },
]

const PersonalContent: React.FC = () => {
  return <TabbedContent pages={pages} sectionTitle="personal" />
}

export default PersonalContent
