import masterDispatchGif from '../assets/projects/master-dispatch-gif.gif'
import masterDispatchImg from '../assets/projects/master-dispatch-png.png'
import workUuImg from '../assets/projects/workEU-png.png'
import workUEGif from '../assets/projects/workEU-gif.gif'
import cloudImg from '../assets/projects/cloud-png.png'
import cloudGif from '../assets/projects/cloud-gif.gif'
import employeeImg from '../assets/projects/employee-png.png'
import employeeGif from '../assets/projects/employee-gif.gif'
import chatImg from '../assets/projects/chat-png.png'
import chatGif from '../assets/projects/chat-gif.gif'
import socialImg from '../assets/projects/social-png.png'
import socialGif from '../assets/projects/social-gif.gif'

export const HERO_CONTENT =
      `I am a frontend developer with react stack. I have experience working with various frameworks and projects, 
      such as developing a database administration system, a platform for business conferences, a music application, etc. 
      I also work with Node JS using the MERN stack in my projects. 
      My goal is to work in a good team with modern technologies and develop as a full stack developer. 
      I am ready for work with interesting and large projects, and development with new technologies.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Jan 2024",
    location: "Remote",
    role: "Strong Junior Frontend Developer",
    company: "Opora Solutions",
    description: `Development of a platform for business conferences, using Vue JS, creation of an interface and CRUD operations functionality.
                    Development of a music application using React Native for downloading and listening to music, with full authorization and registration with JWT token.`,
    technologies: ["React", "React Native", "TypeScript", "Node js", "JWT", "React i18n"]
  },
  {
    year: "Feb 2022 - Sep 2022",
    location: "Ternopil, Ukraine",
    role: "Junior Frontend Developer",
    company: "X-Inform",
    description: `Development of database administration for quick search of registered residents, to identify utility debts.`,
    technologies: ["HTML", "CSS", "Vue js", "RESTful API", "Quasar", "Swagger"],
  }
];

export const PROJECTS = [
  {
    title: "Master Dispatch",
    isImageHover: false,
    image: [masterDispatchImg, masterDispatchGif],
    description:
        "The landing website developed in Svelte js, is a universal extension to simplify the main tasks of the dispatcher.",
    technologies: ["HTML", "CSS", "JavaScript", "Svelte", "Express js"],
    githubLink: 'https://github.com/ArturHellpine/master-dispatch-sv',
    deployLink: 'https://master-dispatch.com/'
  },
  {
    title: "Realtime Chat",
    isImageHover: false,
    image: [chatImg, chatGif],
    description:
        "A full-stack chat application using socket.io for real-time messaging with user authentication.",
    technologies: ["React", "Express js", "MongoDB", "Socket.io", "JWT", "Zustand", "Tailwind"],
    githubLink: 'https://github.com/ArturHellpine/chat-app',
    deployLink: 'https://chat-app-syqy.onrender.com'
  },
  {
    title: "Social App",
    isImageHover: false,
    image: [socialImg, socialGif],
    description:
        "A fully functional application for creating posts, comments and subscriptions, with CRUD operations and full authentication.",
    technologies: ["React", "TypeScript", "RTK Query", "Express js", "MongoDB", "JWT", "Docker"],
    githubLink: 'https://github.com/ArturHellpine/social-app-frontend',
  },
  {
    title: "Work In Europe",
    isImageHover: false,
    image: [workUuImg, workUEGif],
    description:
        "The SPA for job search in Europe, using the Email JS library, which provided sending a contact form to the employer's email.",
    technologies: ["HTML", "CSS", "React", "Email js", "Ant Design"],
    githubLink: 'https://github.com/ArturHellpine/jobs-landind',
    deployLink: 'https://work-in-europe.vercel.app/home'
  },
  {
    title: "Employees App",
    isImageHover: false,
    image: [employeeImg, employeeGif],
    description:
        "An application for creating a table with employees, viewing detailed information, editing, and deleting. With middleware to protect routes from unauthorized users.",
    technologies: ["React", "TypeScript", "RTK Query", "JWT", "Prisma", "SQLite", "Node js"],
    githubLink: 'https://github.com/ArturHellpine/fullstack-employee',
  },
  {
    title: "Cloud Storage",
    isImageHover: false,
    image: [cloudImg, cloudGif],
    description:
        "A full-stack cloud storage app, where you can upload your photos and files, they will be sorted by their extension. Deleted files are moved to the trash.",
    technologies: ["React", "TypeScript", "Next js", "Swagger", "PostgreSQL", "Nest js", "JWT"],
    githubLink: 'https://github.com/ArturHellpine/cloud-storage',
  },
];

export const CONTACT = {
  phoneNo: "+380 67 790 3431 ",
  email: "artur.bachynskiy@gmail.com",
};
