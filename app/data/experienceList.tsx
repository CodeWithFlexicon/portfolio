export type Experience = {
  image?: string;
  role: string;
  company: string;
  companyLocation: string;
  date: string;
  location: string;
  technology: string;
};

export const experienceList: Experience[] = [
  {
    image: "/images/charitynavigatorlogo.png",
    role: "Software Engineer Intern",
    company: "Charity Navigator",
    companyLocation: "Saddle Brook, NJ",
    date: "May 2024 - Aug 2024",
    location: "Remote",
    technology:
      "TypeScript, BullMQ (Message Queue), Knex, PostgreSQL, IBM Cloudant",
  },
  {
    image: "/images/techtalentpipelinelogo.jpeg",
    role: "Software Engineer Fellow",
    company: "NYC Tech Talent Pipeline",
    companyLocation: "Staten Island, NY",
    date: "June 2023 - Aug 2023",
    location: "Hybrid",
    technology:
      "JavaScript, React, Node.js, Express.js, PosgreSQL, Jest, AWS(EC2)",
  },
  {
    image: "/images/rfcunylogo.jpg",
    role: "Web Developer Intern",
    company: "RFCUNY (Research Foundation of CUNY)",
    companyLocation: "New York, NY",
    date: "February 2023 - May 2023",
    location: "Remote",
    technology: "HTML, CSS, JavaScript, DataTables(JS Library)",
  },
];
