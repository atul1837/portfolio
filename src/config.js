module.exports = {
  siteTitle: 'Atul Thakur',
  siteDescription:
    'Atul Thakur is currently a sophomore at UIET, Panjab University pursuing my bachelors in Information Technology who share a keen interest in Web development and Competitive programming.',
  siteKeywords:
    'Atul Thakur, Atul, Thakur, atul1837, software engineer, web developer, javascript, hikup, chandigarh, panjab university, uiet, punjab, ludhiana',
  siteUrl: 'https://atul1837.github.io/portfolio/',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Atul Thakur',
  location: 'Chandigarh, India',
  email: 'atul.thakur1837@gmail.com',
  github: 'https://github.com/atul1837',
  // twitterHandle: '@chandrikadeb7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/atul1837',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/atulthakur1/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/chandrikadeb7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/atul.thakur1837/',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/chandrikadeb7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
