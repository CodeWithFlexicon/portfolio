import Header from "./ui/sections/header";
import AboutMe from "./ui/sections/aboutme";
import Skills from "./ui/sections/skills";
import Experience from "./ui/sections/experience";
import Projects from "./ui/sections/projects";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
