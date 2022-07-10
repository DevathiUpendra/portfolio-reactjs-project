import aboutpic from "./components/Access/mephoto.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://github.com/DevathiUpendra',
  title: 'Portfolio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'DEVATHI UPENDRA',
  role: 'Software Engineer',
  description:
  'I am an enthusiastic fresher with complete knowledge and Understanding of Software Development and highly inspiring leadership skills. I am always ready to learn and enhance my skills in the IT Corporate flourishing my talent and to harness it in the best possible way has always been a sort of whim for me. I have a specialization in the field of Data Science andexpertise in Data Analysis.',
    linkedin: 'http://www.linkedin.com/in/upendra-devathi-6a21ba193',
  resume: '',
  social: {
    linkedin: 'http://www.linkedin.com/in/upendra-devathi-6a21ba193',
    WhatsApp: 'https://wa.me/919912131350?text=Hello Upendra',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'C++',
    description:
      ' This is a simple Bus Reservation System made using c++. This program allow you to add bus details after which you can reserve a bus seat according to vacant seats available',
    stack: ['C++'],

  },
  {
    name: 'Banking Application using Python ',
    description:
      'Built an interactive Banking application using Graphical User Interface in Python, it provides the details of withdraw, deposit and current balance.',
    stack: ['Python'],
    
  },
  {
    name: 'Calculator',
    description:
      'Created a website using basics of HTML, CSS and JavaScript.',
    stack: ['html-css-javascript'],
    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React JS',
  'Data Structures',
  'Python',
  'C++',
  'SQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'devathiupendra25@gmail.com',
}


export { header, about, projects, skills, contact }
