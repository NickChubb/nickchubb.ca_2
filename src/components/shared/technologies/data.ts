import { Technology } from './types'
import TypeScriptLogo from './icons/typescript.svg'
import ReactLogo from './icons/reactjs.svg'
import NextLogo from './icons/nextjs.svg'
import NodeLogo from './icons/nodejs.svg'
import ExpressLogo from './icons/expressjs.svg'
import JavaLogo from './icons/java.svg'
import DockerLogo from './icons/docker.svg'
import CssLogo from './icons/css.svg'

const data: Technology[] = [
  {
    name: 'TypeScript',
    image: TypeScriptLogo,
  },
  {
    name: 'React.js',
    image: ReactLogo,
    showName: true,
  },
  {
    name: 'NextJS',
    image: NextLogo,
  },
  {
    name: 'Node.js',
    image: NodeLogo,
    showName: true,
  },
  {
    name: 'Express.js',
    image: ExpressLogo,
    showName: true
  },
  {
    name: 'Java',
    image: JavaLogo,
    showName: true,
  },
  {
    name: 'Docker',
    image: DockerLogo
  },
  {
    name: 'CSS3',
    image: CssLogo,
    showName: true,
  },
  // {
  //   name: 'HTML5',
  //   image: HtmlLogo,
  //   showName: true,
  // }
]

export default data
