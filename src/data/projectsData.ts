import { StaticImageData } from 'next/image';
import ecommerceImage from '../assets/1.png';
import dashboardImage from '../assets/2.png';
import inOrbitImage from '../assets/3.png';
import goldPriceImage from '../assets/4.png';
import scissorsImage from '../assets/5.png';
import todoListImage from '../assets/6.png';
import pyflaskTodoImage from '../assets/6.png';
import pomodoroImage from '../assets/7.png';
import tripplannerImage from '../assets/8.png';

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
    title: "User-auth-token",
    description: "Template Go com autenticação JWT, rotas privadas e integração com PostgreSQL usando o Gin e Gorm.",
    image: ecommerceImage,
    technologies: ["golang", "docker", "postgresql"],
    link: "https://github.com/Trickqz/user-auth-token"
  },
  {
    id: 2,
    title: "Gin-api-rest",
    description: "CRUD em golang bem simples, utilizando gorm, postgres e gin",
    image: ecommerceImage,
    technologies: ["golang", "docker", "postgresql"],
    link: "https://github.com/Trickqz/gin-api-rest"
  },
  {
    id: 3,
    title: "barbershop-scheduling",
    description: "Sistema de agendamento para barbearias, desenvolvido em Go com Gin e GORM. Utiliza PostgreSQL para o banco de dados e JWT para autenticação. Permite registro de barbeiros, agendamento de atendiment…",
    image: ecommerceImage,
    technologies: ["golang", "postgresql"],
    link: "https://github.com/Trickqz/barbershop-scheduling"
  },
  {
    id: 4,
    title: "course-management-golang",
    description: "API RESTful para gerenciamento de cursos, usuários e progresso. Desenvolvida em Go com JWT, GORM, Gorilla Mux e Bcrypt.",
    image: ecommerceImage,
    technologies: ["golang", "postgresql"],
    link: "https://github.com/Trickqz/course-management-golang"
  },
  {
    id: 5,
    title: "E-commerce",
    description: "Projeto feito com stripe, mercado pago, nextjs, prisma, typescript, nodejs, shacdnui e mais",
    image: ecommerceImage,
    technologies: ["next", "node", "prisma", "postgresql", "typescript"],
    link: "https://github.com/Trickqz/ecommerce"
  },
  {
    id: 6,
    title: "Dashboard",
    description: "Template dashboard em react",
    image: dashboardImage,
    technologies: ["react", "node", "prisma", "typescript"],
    link: "https://github.com/Trickqz/dashboard"
  },
  {
    id: 7,
    title: "In-orbit Rockeatseat",
    description: "Projeto rocketseat feito com react, prisma, typescript, docker, shadcn e muito mais",
    image: inOrbitImage,
    technologies: ["react", "docker", "postgresql", "typescript"],
    link: "https://github.com/Trickqz/in.orbit-rocketseat"
  },
  {
    id: 8,
    title: "Gold-price-api",
    description: "Projeto simples de cotação de ouro feito com javascript",
    image: goldPriceImage,
    technologies: ["javascript"],
    link: "https://github.com/Trickqz/gold-price-api"
  },
  {
    id: 9,
    title: "Scissors",
    description: "Projeto de agendamento simples do rockeatseat, a tecnologia utilizada foi apenas TypeScript, React, Shacdn",
    image: scissorsImage,
    technologies: ["react", "typescript"],
    link: "https://github.com/Trickqz/scissors"
  },
  {
    id: 10,
    title: "To do List",
    description: "Projeto de tarefa simples rockeat, a tecnologia usada foi apenas TypeScript, React, Shacdn",
    image: todoListImage,
    technologies: ["react", "typescript"],
    link: "https://github.com/Trickqz/react-t-todolist"
  },
  {
    id: 11,
    title: "pomodoro-timer",
    description: "Projeto de timer simples da rocketseat, a tecnologia utilizada foi apenas TypeScript, React, ShadcnTypeScript, React, Shacdn",
    image: pomodoroImage,
    technologies: ["react", "typescript"],
    link: "https://github.com/Trickqz/pomodoro-timer"
  },
  {
    id: 12,
    title: "to do list pyflask",
    description: "Lista simples feita com python, flask",
    image: pyflaskTodoImage,
    technologies: ["python", "flask", "css"],
    link: "https://github.com/Trickqz/to-do-list-pyflask"
  },
  {
    id: 13,
    title: "Trip-planner",
    description: "Projeto feito com nextjs, prisma, typescript, next-auth, shacdnui e mais",
    image: tripplannerImage,
    technologies: ["next", "prisma", "typescript"],
    link: "https://github.com/Trickqz/trip-planner"
  }
];
