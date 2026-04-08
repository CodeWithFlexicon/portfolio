import Header from "./ui/sections/header";
import AboutMe from "./ui/sections/aboutme";
import Skills from "./ui/sections/skills";
import Experience from "./ui/sections/experience";
import Projects from "./ui/sections/projects";
import Footer from "./ui/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
