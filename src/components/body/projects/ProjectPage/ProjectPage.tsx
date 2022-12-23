import TabbedContent from '../../../shared/TabbedContent'
import { Project } from '../ProjectTypes'
import GallerySection from '../NewProjectsPage/Gallery'
import SummarySection from './SummarySection'

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
  const pages = [
    {
      title: 'summary',
      Content: <SummarySection project={project} />
    },
    {
      title: 'gallery',
      Content: <GallerySection images={project.image} />
    }
  ]

  return (
    <TabbedContent pages={pages} sectionTitle={project.title}/>
  )
}

export default ProjectPage