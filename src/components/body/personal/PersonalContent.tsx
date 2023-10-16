import TabbedContentSlider from '../../shared/TabbedContentSlider'
import TabbedContent, { Page } from '../../shared/TabbedContent'
import AboutSection from './AboutSection'
import BookshelfSection from './BookshelfSection'
import MapSection from './map'

const pages: Array<Page> = [
  {
    title: 'about',
    Content: <AboutSection />,
  },
  {
    title: 'bookshelf',
    Content: <BookshelfSection />,
  },
  {
    title: 'map',
    Content: <MapSection />,
  },
]

const PersonalContent: React.FC = () => {
  return <TabbedContentSlider pages={pages} sectionTitle="personal" />
}

export default PersonalContent
