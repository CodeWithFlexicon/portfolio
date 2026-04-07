export type Project = {
    name: string;
    description: string;
    github: string;
    website?: string;
    image?: string;
}

export const projects : Project[] = [
    {
        name: "Car-Catalog",
        description: "Catalog of cars from 2015-2020 with makes,trims and more!",
        github: "https://github.com/CodeWithFlexicon/Car-Catalog",
        image: "/images/carcatalogproject.png",
    },
    {
        name: "ChitChat",
        description: "Forum-based social media app",
        github: "https://github.com/CodeWithFlexicon/chitchat-capstone",
    },
]