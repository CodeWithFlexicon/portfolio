import { IconType } from "react-icons";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { SiSpringboot, SiPostgresql, SiExpress, SiNextdotjs } from "react-icons/si";

export type Tech = {
  name: string;
  icon: IconType;
  description: string;
  color: string;
  website?: string;
};

export const techList: Tech[] = [
  {
    name: "React",
    icon: FaReact,
    description: "JavaScript Library",
    color: "text-blue-500",
    website: "https://react.dev/"
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
    description: "Full-Stack Web Framework",
    color: "text-black-500",
    website: "https://nextjs.org/"
  },
  {
    name: "TypeScript",
    icon: BsTypescript,
    description: "Programming Language",
    color: "text-blue-500",
    website: "https://www.typescriptlang.org/"
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description: "Backend Framework for Node.js",
    color: "text-black-500",
    website: "https://expressjs.com/"
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "Backend Runtime Environment",
    color: "text-green-500",
    website: "https://nodejs.org/"
  },
  {
    name: "Java",
    icon: FaJava,
    description: "Programming Language",
    color: "text-red-500",
    website: "https://www.java.com/"
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    description: "Java Framework",
    color: "text-green-600",
    website: "https://spring.io/projects/spring-boot"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Relational Database",
    color: "text-indigo-500",
    website: "https://www.postgresql.org/"
  },
];
