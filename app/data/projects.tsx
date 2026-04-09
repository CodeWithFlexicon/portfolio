export type Project = {
    name: string;
    description: string;
    github: string;
    image: string;
    website?: string;
}

export const projects : Project[] = [
    {
        name: "Card-catalyst",
        description: "Shuffle the deck and click on a card to go some place random!",
        github: "https://github.com/OracleFlow/CardCatalyst",
        image: "/images/cardcatalyst.png",
    },
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
    {
        name: "Dark Legions",
        description: "Competitive deck builder",
        github: "https://github.com/DarkLegionsCSGroup/dark-legions",
        image: "/images/darklegions.png"
    }
]