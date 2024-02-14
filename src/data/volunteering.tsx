import { ExperienceData } from "../components/body/experience/ExperienceTypes";

export const volunteeringData: ExperienceData = [
  {
    display: true,
    company: 'Vancouver Startup Week',
    title: 'Software Developer',
    location: 'Vancouver, BC',
    startDate: '2021-02',
    finishDate: 'present',
    website: 'https://vanstartupweek.ca/',
    description: [
      'Developed features for the new website using ReactJS and TypeScript, including completely redeveloping the blog',
      'Enhanced code maintainability and scalability by refactoring components to TypeScript, minimizing potential errors',
      'Integrated Contentful CRM to dynamically update site content, bypassing bottleneck on development team',
      'Collaborated closely with design team to to implement Figma mockups and ensure a cohesive user interface',
    ],
    skills: ['TypeScript', 'JavaScript', 'ReactJS', 'CSS'],
    image: '/vsw_logo.jpeg',
    paid: false
  },
  {
    display: true,
    company: 'SFU Science Undergraduate Society',
    title: 'President',
    location: 'Burnaby, BC',
    startDate: '2020-05',
    finishDate: '2021-04',
    website: 'https://sfusus.com/',
    description: [
      'Led a 10-member executive team overseeing a student society with 3000+ members, ensuring efficient operations',
      'Planned and orchestrated weekly team meetings, facilitating event planning and advocacy efforts',
      'Spearheaded rewriting of By-Laws and Policy, implementing formalized processes like a Kanban board for task delegation',
    ],
    skills: ['Leadership', 'Communication', 'Project Management', 'Team Management'],
    image: '/sus_logo.png',
    paid: false
  },
  {
    display: true,
    company: 'Simon Fraser Student Society',
    title: 'Board Member',
    location: 'Burnaby, BC',
    startDate: '2019-05',
    finishDate: '2020-04',
    website: 'https://sfss.ca/',
    description: [
      'Represented the Faculty of Applied Science as an integral part of the student society for all of SFU',
      'Established and led a team as chair of the Surrey Campus Committee to successfully host over 15 events'
    ],
    skills: ['Leadership', 'Communication', 'Project Management', 'Team Management' ],
    image: '/sfss_logo.jpeg',
    paid: false
  },
];