const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hamburjare.github.io/',
  title: 'KS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kalle Suikkari',
  role: 'Game Developer Student',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/kalle-suikkari-1b89a2234/',
    github: 'https://github.com/Hamburjare',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Programming Theory Project',
    description:
      'The idea of the game is to survive as long as possible by shooting at the boxes you come across, the boxes do different amounts of damage and move at different speeds. The time of the longest survivor is displayed on the scoreboard which can be found on the start screen',
    stack: ['C#', 'Unity'],
    sourceCode: 'https://github.com/Hamburjare/Programming-Theory-Project',
    livePreview: 'https://play.unity.com/mg/other/programming-theory-project-3',
  },
  {
    name: 'Ruby Adventure',
    description:
      'A town is in peril after their friendly robots become broken! Its Rubys quest to fix them!',
    stack: ['C#', 'Unity 2D'],
    sourceCode: 'https://learn.unity.com/project/ruby-s-2d-rpg',
    livePreview: 'https://play.unity.com/mg/other/ruby-adventure-1',
  },
  {
    name: 'Kurpitsapoika',
    description:
      '(Game is Finnish only) Someone has torn up the Pumpkin Pie recipe from Pumpkin Boy and scattered the pieces all over the game world. Help him find the missing pieces of the recipe. Be quick!',
    stack: ['Unity', 'C#', 'Tiled'],
    sourceCode: '',
    livePreview: 'https://play.unity.com/mg/other/kurpitsapoika-1',
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
  'C#',
  'Unity',
  'Python',
  'Microsoft Word',
  'Microsoft PowerPoint',
  'Microsoft Excel',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kalle.suikkari@gmail.com',
}

export { header, about, projects, certificates, skills, contact }