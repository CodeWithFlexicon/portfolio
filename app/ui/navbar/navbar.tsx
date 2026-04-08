"use client";

import Link from "next/link";
import { FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import clsx from "clsx";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300",
        isScroll
          ? "bg-white shadow-sm border-gray-200 dark:bg-dark-hover dark:border-dark-border"
          : "bg-transparent",
      )}
    >
      <Link
        href="#home"
        className="text-2xl sm:text-3xl font-semibold text-black dark:text-text-dark"
      >
        Felix Chen
      </Link>

      <ul className={clsx(
        "hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3",
        !isScroll
          ? "bg-white border border-gray-200 shadow-sm dark:bg-dark-surface dark:border-dark-border"
          : "",
      )}>
        <li>
          <Link className="text-black dark:text-text-dark" href="#home">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-black dark:text-text-dark" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-black dark:text-text-dark" href="#experience">
            Experience
          </Link>
        </li>
        <li>
          <Link className="text-black dark:text-text-dark" href="#skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="text-black dark:text-text-dark" href="#projects">
            Projects
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          className="flex items-center justify-center rounded-full border border-gray-300 cursor-pointer dark:border-dark-border p-2 text-black dark:text-text-dark transition-all duration-300 hover:bg-gray-300 dark:hover:bg-dark-hover"
          aria-label="Toggle dark mode"
        >
          <span
            suppressHydrationWarning={true}
            className="relative h-6 w-6 flex items-center justify-center overflow-hidden"
          >
            <FaMoon
              className={clsx(
                "absolute transition-all duration-300",
                darkMode
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100",
              )}
            />
            <FaSun
              className={clsx(
                "absolute transition-all duration-300",
                darkMode
                  ? "rotate-90 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0",
              )}
            />
          </span>
        </button>

        <a
          className="group hidden lg:flex items-center px-10 py-2.5 border border-gray-300 dark:border-dark-border rounded-full ml-4 text-black dark:text-text-dark transition-all duration-300 hover:bg-blue-100 dark:hover:bg-dark-hover hover:-translate-y-0.5 hover:shadow-light-mode dark:hover:shadow-dark-mode"
          href="https://www.linkedin.com/in/felix-chen1/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <FaLinkedin className="transition-transform duration-300 group-hover:rotate-12" />
        </a>

        <button className="block md:hidden ml-3" onClick={toggleMenu}>
          <IoMenu className="h-7 w-7 text-black dark:text-text-dark" />
        </button>
      </div>

      <ul
        className={clsx(
          "md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen transition-all duration-500",
          "bg-white text-black dark:bg-dark-surface dark:text-text-dark border-l border-gray-200 dark:border-dark-border",
          open ? "right-0" : "-right-64",
        )}
      >
        <div className="absolute right-6 top-6 list-none">
          <button type="button" onClick={closeMenu}>
            <IoCloseOutline className="h-6 w-6 cursor-pointer text-black dark:text-text-dark" />
          </button>
        </div>

        <li>
          <Link href="#home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="#experience" onClick={closeMenu}>
            Experience
          </Link>
        </li>
        <li>
          <Link href="#skills" onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
