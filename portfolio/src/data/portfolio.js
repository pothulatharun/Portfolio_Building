export const portfolio = {
  name: 'Tharun',
  role: 'Computer Science Engineering Student',
  headline: 'Aspiring Software Developer',
  intro: 'I build practical web applications and enjoy solving problems through code.',
  about:
    'I’m a Computer Science and Engineering student interested in building useful software and learning how systems work end to end. I’ve worked on web application projects and enjoy turning ideas into practical, collaborative experiences.',
  learning:
    'Alongside web development, I’m strengthening my data structures and algorithms foundation with Java. I’m curious, open to learning new technologies, and value thoughtful teamwork.',
  email: '',
  profiles: {
    github: '',
    linkedin: '',
  },
  resumeUrl: '',
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    university: 'REVA University',
    graduationYear: '2026',
  },
  skills: [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
    { category: 'Databases', items: ['MongoDB', 'SQL'] },
    {
      category: 'Programming & CS',
      items: ['Java', 'Data Structures and Algorithms', 'Object-Oriented Programming'],
    },
    { category: 'Tools & Technologies', items: ['Git', 'GitHub', 'WebSockets', 'WebRTC'] },
  ],
  projects: [
    {
      name: 'StudySphere',
      number: '01',
      type: 'Collaborative learning platform',
      description:
        'A collaborative student study platform with study rooms, room joining through codes, discussions, video calling, a real-time whiteboard, a Pomodoro timer, to-do lists, and JWT-based authentication.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'WebRTC', 'WebSockets'],
      demoUrl: 'https://studysphere.vercel.app/',
      repoUrl: '',
    },
    {
      name: 'ParentO',
      number: '02',
      type: 'Parent–teacher collaboration',
      description:
        'A parent-teacher collaboration platform where teachers manage tasks and attendance, parents verify student progress, and students earn points through a leaderboard.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
      demoUrl: 'https://parento.vercel.app/',
      repoUrl: '',
    },
    {
      name: 'Decentralized AI-Powered Social Welfare Distribution System',
      number: '03',
      type: 'Concept · In progress',
      description:
        'A project concept focused on transparent welfare distribution using web technologies, AI-powered services, and blockchain-based transparency.',
      technologies: ['MERN', 'Python Flask', 'Blockchain'],
      demoUrl: '',
      repoUrl: '',
      inProgress: true,
    },
  ],
  achievements: [],
}
