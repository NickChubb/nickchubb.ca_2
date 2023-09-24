import { ExperienceData } from "../components/body/experience/ExperienceTypes";

export const volunteeringData: ExperienceData = [
  {
    display: true,
    company: 'Vancouver Startup Week',
    title: 'Software Developer, Account Manager',
    location: 'Vancouver, BC',
    startDate: '2021-02',
    finishDate: 'present',
    website: 'https://vanstartupweek.ca/',
    description: [
      'Developed features for the new website using ReactJS and Next.js, including completely redeveloping the blog',
      'Assisted in updating components to TypeScript and refactoring code to improve readability and maintainability',
      'Co-ordinated and hosted weekly panels with a range of companies within the local start-up community',
      'Hosted more than 15 panels throughout the week of the event',
    ],
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
      'Organized and chaired weekly team meetings to plan events and advocacy',
      'Formalized process and procedure with management practices, such as a Kanban board for designating work',
      'Effectively led and managed a team of 10 students to completely re-write society By-Laws and Policy',
    ],
    image: '/sus_logo.png',
    paid: false
  },
  {
    display: false,
    company: 'Simon Fraser Student Society',
    title: 'Board Member',
    location: 'Burnaby, BC',
    startDate: '2019-05',
    finishDate: '2020-04',
    website: 'https://sfss.ca/',
    description: ['', '', ''],
    paid: false
  },
];