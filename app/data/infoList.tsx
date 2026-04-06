import { IconType } from "react-icons";
import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { projects } from "./projects";

export type Info = {
    name: string;
    icon: IconType;
    description: string;
};

export const infoList: Info[] = [
    {
        name: "Languages & Frameworks",
        icon: FaCode,
        description: "HTML, CSS, JavaScript, TypeScript, NextJs, Java, Spring Boot"
    },
    {
        name: "Education",
        icon: FaGraduationCap,
        description: "BS in Computer Science",
    },
    {
        name: "Projects",
        icon: FaBriefcase,
        description: `Built ${projects.length} so far`,
    }
]