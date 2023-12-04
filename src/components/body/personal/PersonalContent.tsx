import TabbedContentSlider from '../../shared/TabbedContentSlider'
import TabbedContent, { Page } from '../../shared/TabbedContent'
import AboutSection from './AboutSection'
import BookshelfSection from './bookshelf'
import MapSection from './map'

const pages: Array<Page> = [
  {
    title: 'about',
    Content: <AboutSection />,
  },
  {
    title: 'map',
    Content: <MapSection />,
  },
  {
    title: 'bookshelf',
    Content: <BookshelfSection />,
  },
]

const PersonalContent: React.FC = () => {
  return <TabbedContentSlider pages={pages} sectionTitle="personal" />
}

export default PersonalContent
