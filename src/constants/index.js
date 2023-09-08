import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  postgresql,
  python,
  flask,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  docker,
  lfa,
  bump,
  food,
  electrician
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  { 
    name: "flask", 
    icon: flask 
  },
];

const experiences = [
  {
    title: "Tech Trainee",
    company_name: "La Fosse Academy",
    icon: lfa,
    iconBg: "#383E56",
    date: "Mar 2023 - Present",
    points: [
      "Recognized as the top student among a cohort of 36 for technical proficiency, work ethic, and enthusiasm for learning.",
      "Conducted daily stand-ups and facilitated agile meetings, contributing to a 15% improvement in project delivery times.",
      "Spearheaded the implementation of a code library, reducing code redundancy by 25% and collaboration bottlenecks by 20%.",
      "Demonstrated expertise in JavaScript, SQL, and Python; delivered three major projects on-time and 100% error-free.",
    ],
  },
  {
    title: "Electrical Improver",
    company_name: "Self Employed",
    icon: electrician,
    iconBg: "#E6DEDD",
    date: "Nov 2015 - Mar 2023",
    points: [
      "Adapted to various team dynamics and work methods, consistently meeting project specifications for over 50 projects.",
      "Achieved a 95% on-time completion rate in both supporting and leading roles through strategic problem-solving, clear communication, and task delegation.",
      "Conducted periodic upskilling to maintain compliance with revised industry regulations and best practices.",
      "Liaised with clients to define project scopes, achieving a 98% client satisfaction rate.",
      "Mentored five junior electricians, leading to a 30% increase in team productivity and ensuring 100% safe, quality workmanship.",
      "Successfully completed complex electrical installations, maintaining a 99.9% safety and quality compliance rate."     
    ],
  },
];

const projects = [
  {
    name: "Bump",
    description:
      "A pregnancy tracking app that allows users to track their pregnancy, view weekly updates, and connect with other users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: bump,
    source_code_link: "https://github.com/Chey-DB/bump-backend",
  },
  {
    name: "Favorite Food",
    description:
      "Web application that enables users to add and view their favourite food items.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sqlalchemy",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Chey-DB/Favourite_Food",
  },
  // {
  //   name: "Chat App",
  //   description:
  //     "Coming soon...",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "stream",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: lfa,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };
