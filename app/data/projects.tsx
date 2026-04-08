export type Project = {
    name: string;
    description: string;
    github: string;
    image: string;
    website?: string;
}

export const projects : Project[] = [
    {
        name: "Car-Catalog",
        description: "Catalog of cars from 2015-2020 with makes,trims and more!",
        github: "https://github.com/CodeWithFlexicon/Car-Catalog",
        image: "/images/carcatalog.png",
    },
    {
        name: "ChitChat",
        description: "Forum-based social media app",
        github: "https://github.com/CodeWithFlexicon/chitchat-capstone",
        image: "/images/chitchat.png",
    },
]