"use client";

import Header from "./ui/sections/header";
import AboutMe from "./ui/sections/aboutme";
import Skills from "./ui/sections/skills";
import Experience from "./ui/sections/experience";
import Projects from "./ui/sections/projects";
import Footer from "./ui/sections/footer";
import Navbar from "./ui/navbar/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}