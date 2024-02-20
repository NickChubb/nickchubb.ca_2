import { FaGithub } from 'react-icons/fa'
import { RiComputerLine } from 'react-icons/ri'
import { ProjectData } from '../components/body/projects/ProjectTypes'

export const projectData: ProjectData = [
  {
    title: 'Communities',
    display: true,
    summary: 'Social Network built on a Blockchain Backend',
    technologies: 'JavaScript, ReactJS, Next.js, MongoDB, Solidity',
    description: [
      'ReactJS front-end for a social network with a backend built on the blockchain',
      'Access to different user-created communities are controlled by Solidity smart contracts',
      'Uses MongoDB for database of community posts',
      'Currenly operational on the Ethereum Sepolia testnetwork (See dropdown meu for link)',
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/Communities',
        Icon: <FaGithub />,
      },
      {
        title: 'Demo',
        url: 'https://communities-mocha.vercel.app/',
        Icon: <RiComputerLine />,
      },
    ],
    image: [
      {
        path: '/img/projects/communities-1.png',
        title: 'Explore Communities',
      },
      {
        path: '/img/projects/communities-2.png',
        title: 'Create a new Community',
      },
      {
        path: '/img/projects/communities-3.png',
        title: "User's page",
      },
    ],
    icon: '🦄',
  },
  {
    title: 'Chatbot',
    display: true,
    summary:
      'Python Bot uses OpenAI API to ask questions about me with my own data',
    technologies: 'TypeScript, Python, ReactJs, PostgreSQL, Docker',
    description: [
      'TypeScript chat popup frontend allows visitors to my site to ask questions',
      'Dockerized Python Flask server and Python Retrieval-Augmented Generation (RAG) library LlamaIndex',
      'User cookie authentication and rate-limiting by integration with PostgreSQL database',
      'CORS enabled and shared secret authorization allows only API calls from frontend to chatbot API'
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/chatbot',
        Icon: <FaGithub />,
      },
    ],
    image: [
      {
        path: '/img/projects/chatbot-1.png',
        title: 'React Popup Chat Window',
        description:
          'Start/Stop/Restart individual containers or all containers.  Serve port from container at URL endpoint to quickly host GUI and API apps.',
      },
    ],
    icon: '✨',
  },
  {
    title: 'dockerman',
    display: true,
    summary: 'A React app for controlling and hosting docker containers.',
    technologies: 'JavaScript, ReactJS, Node.js, Express.js, Docker, SQL',
    description: [
      'Modular server back-end which utilizes Node.js and Docker to serve containers on the same web domain',
      'Uses Node.js as the backend to manage routing private and public routes',
      'Utilizes SQLite3 database to store information about containers, logs, and more',
      // 'Log screen shows login history and more for Dockerman app',
      'Config screen allows users to simply change app configuration parameters',
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/dockerman',
        Icon: <FaGithub />,
      },
    ],
    image: [
      {
        path: '/img/projects/dockerman-1.png',
        title: 'Container Control Panel',
        description:
          'Start/Stop/Restart individual containers or all containers.  Serve port from container at URL endpoint to quickly host GUI and API apps.',
      },
      {
        path: '/img/projects/dockerman-2.png',
        title: 'Config Screen',
        description:
          'Change configuration options and manage security features.',
      },
      {
        path: '/img/projects/dockerman-3.png',
        title: 'Log Screen',
        description:
          'View logs from database of performed actions, login requests, and more.',
      },
    ],
    icon: '🐳',
  },
  {
    title: 'hawking',
    display: true,
    summary: 'The SFU Science Discord Multi-purpose Bot.',
    technologies: 'JavaScript, ReactJS, Node.js, Express.js, SQL',
    description: [
      'Discord bot built with Discord.js API and React to solve multiple needs for Science Undergraduate Society',
      'Node.js and Express.js backend integrates with SQLite3 database',
      'React control-panel utilizes SQL to allow users to easily manage database of events at Simon Fraser University',
      'Uses GIPHY SDK to get gifs in response to user query',
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/hawking',
        Icon: <FaGithub />,
      },
    ],
    image: [
      {
        path: '/img/projects/hawking-1.png',
        title: '',
        description: '',
      },
      {
        path: '/img/projects/hawking-2.png',
        title: '',
        description: '',
      },
      {
        path: '/img/projects/hawking-3.png',
        title: '',
        description: '',
      },
    ],
    icon: '🤖',
  },
  {
    title: 'ReversiRust',
    display: false,
    summary:
      'A Rust implementation of the popular board game Reversi (Othello), using AI algorithms.',
    technologies: 'Rust',
    description: [
      'Learned Rust to implement game objects and high performance AI algorithms from scratch',
      'AI uses Monte Carlo Tree Search algorithm with two different heuristics for multiple bot difficulties',
      'Created for Artifical Intelligence Survey (CMPT 310) final project - Final Mark: 18/18',
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/ReversiRust',
        Icon: <FaGithub />,
      },
      {
        title: 'Crates.io',
        url: 'https://crates.io/crates/reversi',
      },
    ],
    image: [
      {
        path: 'https://github.com/NickChubb/ReversiRust/raw/master/game_example.gif',
        title: '',
        description: '',
      },
    ],
    icon: '🦀',
  },
]
