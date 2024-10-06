import { StaticImageData } from 'next/image';
import ecommerceImage from '../assets/1.png';
import dashboardImage from '../assets/2.png';
import inOrbitImage from '../assets/3.png';
import goldPriceImage from '../assets/4.png';
import scissorsImage from '../assets/5.png';
import todoListImage from '../assets/6.png';
import pomodoroImage from '../assets/7.png';
import pyflaskTodoImage from '../assets/6.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce",
    description: "project made with medusa, nextjs, prisma, typescript, nodejs, shacdnui and more",
    image: ecommerceImage,
    technologies: ["next", "node", "prisma", "typescript"],
    link: "https://github.com/Trickqz/ecommerce"
  },
  {
    id: 2,
    title: "Dashboard",
    description: "template dashboard made with react, prisma, typescript, nodejs, shacdnui and more",
    image: dashboardImage,
    technologies: ["react", "node", "prisma", "typescript"],
    link: "https://github.com/Trickqz/dashboard"
  },
  {
    id: 3,
    title: "In-orbit Rockeatseat",
    description: "rocketseat project made with react, prisma, typescript, docker, shadcn and more",
    image: inOrbitImage,
    technologies: ["react", "docker", "typescript"],
    link: "https://github.com/Trickqz/in.orbit-rocketseat"
  },
  {
    id: 4,
    title: "Gold-price-api",
    description: "simple gold quote project made with javascript",
    image: goldPriceImage,
    technologies: ["javascript"],
    link: "https://github.com/Trickqz/gold-price-api"
  },
  {
    id: 5,
    title: "Scissors",
    description: "rockeatseat's simple scheduling project, the technology used was only TypeScript, React, Shacdn",
    image: scissorsImage,
    technologies: ["react", "typescript"],
    link: "https://github.com/Trickqz/scissors"
  },
  {
    id: 6,
    title: "To do List",
    description: "rockeat simple task project, the technology used was only TypeScript, React, Shacdn",
    image: todoListImage,
    technologies: ["react", "typescript"],
    link: "https://github.com/Trickqz/react-t-todolist"
  },
  {
    id: 7,
    title: "pomodoro-timer",
    description: "simple timer project by rocketseat, the technology used was only TypeScript, React, Shadcn",
    image: pomodoroImage,
    technologies: ["react", "typescript"],
    link: "https://github.com/Trickqz/pomodoro-timer"
  },
  {
    id: 8,
    title: "to do list pyflask",
    description: "simple list made with python, flask",
    image: pyflaskTodoImage,
    technologies: ["python", "flask", "css"],
    link: "https://github.com/Trickqz/to-do-list-pyflask"
  }
];
