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
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/Communities',
        Icon: <FaGithub />
      },
      {
        title: 'Demo',
        url: 'https://communities-mocha.vercel.app/',
        Icon: <RiComputerLine />
      }
    ],
    image: [
      {
        path: 'https://user-images.githubusercontent.com/4172020/274536375-a4a9b272-045f-4474-a975-60a3dde9fc7f.png',
        title: 'Container Control Panel',
      },
      {
        path: 'https://user-images.githubusercontent.com/4172020/274536408-d283b6f0-caea-4ddc-8cc3-d2cfae6a0c0d.png',
        title: 'Config Screen'
      }
    ],
    icon: '🦄',
    alert: 'Live demo currently non-functional since depreciation of Ropsten test network'
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
      'Log screen shows login history and more for Dockerman app',
      'Config screen allows users to simply change app configuration parameters',
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/dockerman',
        Icon: <FaGithub />
      }
    ],
    image: [
      {
        path: 'https://i.imgur.com/7I1RGFl.png',
        title: 'Container Control Panel',
        description:
          'Start/Stop/Restart individual containers or all containers.  Serve port from container at URL endpoint to quickly host GUI and API apps.',
      },
      {
        path: 'https://i.imgur.com/TDxDVSc.png',
        title: 'Config Screen',
        description:
          'Change configuration options and manage security features.',
      },
      {
        path: 'https://i.imgur.com/E3zizY1.png',
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
      'React control-panel utilizes SQL to allow users to easily manage database of events at Simon Fraser University',
      'Uses GIPHY SDK to get gifs in response to user query',
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/NickChubb/hawking',
        Icon: <FaGithub />
      },
    ],
    image: [
      {
        path: 'https://i.imgur.com/cG6rfkp.png',
        title: '',
        description: '',
      },
      {
        path: 'https://i.imgur.com/UourrNo.png',
        title: '',
        description: '',
      },
      {
        path: 'https://i.imgur.com/Rt2w2l2.png',
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
        Icon: <FaGithub />
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
