import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ridwan Ajibola | Front-end Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Hi, I\'m Ridwan Ajibola. A react and react-native developer focused on building
  responsive cross-platform mobile applications that look the same across various
  devices and have buttery-smooth user experience.`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Ridwan Ajibola',
  subtitle: "I'm a Mobile Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lets-eat-base.png',
    title: 'Fit App',
    info:
      'This is a food-delivery app that had a market Australia, and wanted to expand to the Philippines',
    info2:
      "I was responsible for modifying and deploying the Swift app to have more features and meet Apple's requirements",
    url: '',
    repo: ' ', // if no repo, the button will not show up.
  },
  {
    id: nanoid(),
    img: 'FitApp/1.png',
    title: 'HLW Mobile',
    info:
      'This is a react-native app for a US-based architecture firm for their prospective clients to analyze and learn about structural ratings',
    info2:
      'I was responsible for developing the app, deploying the Android apk and iOS builds (via tesflight) for QA, and also writing extensive tests with jest and detox',
    url: '',
    repo: ' ', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sterling-base.png',
    title: 'Sterling OnePay',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'clane-app-base2.png',
    title: 'Clane app',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },

  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Edacious',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: ' ', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Fitapp',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: ' ', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
