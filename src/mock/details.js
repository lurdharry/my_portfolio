const { nanoid } = require('nanoid');
const { path } = require('path');
const fitAppVideo = '../videos/FitApp.mp4';

const projectDetails = [
  {
    img: 'grab-n-go/1.png',
    title: `Grab&Go`,
    info:
      'This is a react-native app for a US-based architecture firm for a US-based  grocery delivery startup, to notify clients of their ordered Item state',
    info2:
      'I was responsible for developing the app, implemented animations using react-native and lottie, setup google maps and places API for iOS and Android, setup state management(Redux).',
    url: '',
    repo: '', // if no repo, the button will not show up
    video: 'Grab and Go.mp4',
    screenshots: [
      {
        src: 'grab-n-go/1.png',
        label: 'Choose Location',
      },
      {
        src: 'grab-n-go/2.png',
        label: 'Login Screen',
      },
      {
        src: 'grab-n-go/3.png',
        label: 'Register Car Screen',
      },
      {
        src: 'grab-n-go/4.png',
        label: 'Accept/Decline Order',
      },
    ],
  },

  {
    img: 'FitApp/1.png',
    title: 'Fit App',
    info:
      'This is a food-delivery app that is built for fitness, to help user track his orders and customise them on a daily basis.',
    info2:
      'I was responsible for for developing the whole app, implemented shared transition effects for picked item, creating reusable components.',
    url: '',
    repo: '', // if no repo, the button will not show up.
    video: 'FitApp.mp4',
    screenshots: [
      {
        src: 'FitApp/1.png',
        label: 'Onboarding Screen',
      },
      {
        src: 'FitApp/2.png',
        label: 'Home Screen',
      },
      {
        src: 'FitApp/3.png',
        label: 'Customise',
      },
      {
        src: 'FitApp/4.png',
        label: 'Choose Menu',
      },
    ],
  },

  {
    img: 'edacious/1.png',
    title: 'Edacious',
    info:
      'This is a react-native app for daily recipe with location based search and chat feature, and also rating the best recipe.',
    info2: 'I was responsible for developing the app, and also writing extensive tests with jest',
    url: '',
    repo: '', // if no repo, the button will not show up
    video: 'edacious.mp4',
    screenshots: [
      {
        src: 'edacious/1.png',
        label: 'Home Screen',
      },
      {
        src: 'edacious/2.png',
        label: 'Review Section',
      },
      {
        src: 'edacious/3.png',
        label: 'Chat Screen',
      },
      {
        src: 'edacious/4.png',
        label: 'Ingredient Screen',
      },
    ],
  },
];

module.exports = projectDetails;
