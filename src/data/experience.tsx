import { ExperienceData } from "../components/body/experience/ExperienceTypes";

export const experienceData: ExperienceData = [
  {
    display: true,
    company: 'Machobear Studios',
    title: 'Jr. Developer',
    location: 'Vancouver, BC',
    startDate: '2022-05',
    finishDate: '2022-12',
    website: 'https://machobear.ca/',
    description: [
      'Worked on liv.rent team: a full-service rental web app for managing listings, contracts, chats, payments, etc.',
      'Implemented several prominent features, including new user toaster and tour, custom contract builder, and more',
      'Developed, tested, and deployed functional components for React web apps in adherence to coding standards',
      'Troubleshooting and resolving complex front-end issues with Redux, Ramda, and other libraries',
    ],
    image: '/machobear_logo.png',
    paid: true
  },
  {
    display: true,
    company: 'Skyrocket Digital',
    title: 'Frontend Developer',
    location: 'Vancouver, BC',
    startDate: '2021-09',
    finishDate: '2022-02',
    website: 'https://skyrocket.is/',
    description: [
      'Utilized HTML, CSS, and JavaScript to build responsive front-end environments to match customer specifications',
      'Implemented front-end authentication and registration pages using Next.js for Paylancer app ',
      'Designed back-end API system to manage affiliate discount codes using the Shopify API'
    ],
    image: '/skyrocket_logo.png',
    paid: true
  },
  {
    display: true,
    company: 'Incognito Software Systems',
    title: 'QA Engineer',
    location: 'Vancouver, BC',
    startDate: '2020-09',
    finishDate: '2021-04',
    website: 'https://www.incognito.com/',
    description: [
      // 'Operated as part of an agile team to assist in the development of over 8 different software services',
      'Designed and implemented Selenium test suite for Firmware Management Service',
      // 'Wrote more than 100 tests across multiple services and stabilized Jenkins environment of over 600 tests',
      'Worked with Java, JUnit, Intellij, and Linux to effectively write and debug professional software tests',
      // 'Utilized Jenkins, Postman, Wireshark, and MongoDB to debug services and investigate networking problems',
    ],
    image: '/incognito_logo.jpeg',
    paid: true
  },
];
