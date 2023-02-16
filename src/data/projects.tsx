import { ProjectData } from '../components/body/projects/ProjectTypes'

export const projectData: ProjectData = [
  {
    title: 'dockerman',
    display: true,
    summary: 'A React app for controlling and hosting docker containers.',
    technologies: 'ReactJS, Node.js, Express.js, Docker',
    description: [
      'Modular server back-end which utilizes Node.js and Docker to serve containers on the same web domain',
      'Uses Node.js as the backend to manage routing private and public routes',
      'Utilizes SQLite3 database to store information about containers, logs, and more',
      'Log screen shows login history and more for Dockerman app',
      'Config screen allows users to simply change app configuration parameters',
    ],
    github: 'https://github.com/NickChubb/dockerman',
    links: [
      {
        title: '',
        url: '',
      },
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
    summary: 'The Science Undergraduate Society Multi-purpose Discord Bot.',
    technologies: 'ReactJS, Node.js',
    description: [
      'Discord bot built with Discord.js API and React to solve multiple needs for Science Undergraduate Society',
      'React control-panel utilizes SQL to allow users to easily manage database of events at Simon Fraser University',
      'Uses GIPHY SDK to get gifs in response to user query',
    ],
    github: 'https://github.com/NickChubb/hawking',
    links: [
      {
        title: '',
        url: '',
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
    github: 'https://github.com/NickChubb/ReversiRust',
    links: [
      {
        title: 'Crates.io (installation)',
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
