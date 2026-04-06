import { IconType } from "react-icons";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { SiSpringboot, SiPostgresql, SiExpress, SiNextdotjs } from "react-icons/si";

export type Tech = {
  name: string;
  icon: IconType;
  description?: string;
  color: string;
};

export const techList: Tech[] = [
  {
    name: "React",
    icon: FaReact,
    description: "JavaScript Library",
    color: "text-blue-500",
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
    description: "Full-Stack Web Framework",
    color: "text-black-500",
  },
  {
    name: "TypeScript",
    icon: BsTypescript,
    description: "Programming Language",
    color: "text-blue-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description: "Backend Framework for Node.js",
    color: "text-black-500"
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "Backend Runtime Environment",
    color: "text-green-500",
  },
  {
    name: "Java",
    icon: FaJava,
    description: "Programming Language",
    color: "text-red-500",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    description: "Java Framework",
    color: "text-green-600",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Relational Database",
    color: "text-indigo-500",
  },
];
