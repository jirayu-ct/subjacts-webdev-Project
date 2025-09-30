export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://scontent.fnak2-1.fna.fbcdn.net/v/t39.30808-6/472851689_1559686738029329_7162501891964347993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WO-cXL1HosEQ7kNvwGneoo-&_nc_oc=AdmYtzBzCIuF_YAg3BiAF_B-6vI-LQPcG1mBoeO8xJv-E8hwQCJgUUt23KD2QylUn9A&_nc_zt=23&_nc_ht=scontent.fnak2-1.fna&_nc_gid=3gejmTDqujkGfyzlcPIong&oh=00_AfbYemoAMdlou4Q-MKeSMQJxy3UCzBd7Al2t5eqEdHDTZg&oe=68DF5D37',
      light: 'https://scontent.fnak2-1.fna.fbcdn.net/v/t39.30808-6/472851689_1559686738029329_7162501891964347993_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WO-cXL1HosEQ7kNvwGneoo-&_nc_oc=AdmYtzBzCIuF_YAg3BiAF_B-6vI-LQPcG1mBoeO8xJv-E8hwQCJgUUt23KD2QylUn9A&_nc_zt=23&_nc_ht=scontent.fnak2-1.fna&_nc_gid=3gejmTDqujkGfyzlcPIong&oh=00_AfbYemoAMdlou4Q-MKeSMQJxy3UCzBd7Al2t5eqEdHDTZg&oe=68DF5D37',
      alt: 'My profile picture'
    },
    email: 'jirayu.ct.dev@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Jirayu Chomthong 660112230038 • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/jirayu-ct',
      'target': '_blank',
      'aria-label': 'Jirayu UI on GitHub'
    }, {
      'icon': 'i-simple-icons-facebook',
      'to': 'https://www.facebook.com/jirayu.chomthong.2024/',
      'target': '_blank',
      'aria-label': 'Jirayu on Facebook'
    }]
  }
})
