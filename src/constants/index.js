import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  Solidity,
  threejs,
  Ethersjs,
  Hardhat,
  AndroidStudio,
  erc20,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Solidity",
    icon: Solidity,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Ethersjs",
    icon: Ethersjs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "Hardhat",
    icon: Hardhat,
  },
  
  {
    name: "AndroidStudio",
    icon: AndroidStudio,
  },
];

const experiences = [
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but George proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like George does.",
    name: "Sanderson Nyange",
    designation: "ICT Manager",
    company: "Voi ICT Department",
    image: "https://avatars.githubusercontent.com/u/101863068?v=4",
  },
  {
    testimonial:
      "After George optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Agnes Wakesho",
    designation: "Clerk",
    company: "Civil Registration",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "Erc20 token",
    description:
      "A crypto token, one can trade on crypto exchange plartforms",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
     
      
    ],
    image: erc20,
    source_code_link: "https://github.com/georgekimorijr/Aqua-token",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
