const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hamburjare.github.io/portfolio',
  title: 'KS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kalle Suikkari',
  role: 'Game Developer Student',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/kalle-suikkari-1b89a2234/',
    github: 'https://github.com/Hamburjare',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]
const certificates = [
  // certificates can be added an removed
  // if there are no certificates, Certificates section won't show up
  {
    name: 'Unity Junior Programmer',
    photo: "https://images.credly.com/size/340x340/images/28f94e97-1ac3-46cb-9384-e9c44f95758d/00-Junior_Programmer-Pathway.png",
    time:
      'April 02, 2022',
    link: 'https://www.credly.com/badges/0bc5dbd8-00d7-40e1-8b02-74cd89e1739c/public_url',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kalle.suikkari@gmail.com',
}

export { header, about, projects, certificates, skills, contact }
