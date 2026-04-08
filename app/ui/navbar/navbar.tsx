"use client";

import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa';
import { CiDark } from "react-icons/ci";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScroll, setScroll] = useState(false);

  function toggleMenu() {
    setOpen((open) => !open);
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
    <>
      <nav
        className={clsx(
          "w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50",
          isScroll && "bg-white/50 backdrop-blur-lg shadow-sm",
        )}
      >
        <Link href="#home" className="w-28 text-3xl">
          Felix Chen
        </Link>

        <ul
          className={clsx(
            "hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3",
            !isScroll && "bg-white/50 backdrop-blur-lg shadow-sm",
          )}
        >
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button>
            <CiDark className="h-7 w-7" />
          </button>
          <a
            className="group hidden lg:flex items-center gap-1 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition-all duration-300 hover:bg-blue-100 hover:-translate-y-0.5 hover:shadow-light-mode"
            href="https://www.linkedin.com/in/felix-chen1/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <FaLinkedin className="transition-transform duration-300 group-hover:rotate-15"/>
          </a>
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <IoMenu className="h-7 w-7" />
          </button>
        </div>

        {/* -------------------------Mobile Menu------------------------- */}

        <ul
          className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition-all duration-500 ${
            open ? "right-0" : "-right-64"
          }`}
        >
          <div className="absolute right-6 top-6 list-none">
            <button type="button" onClick={closeMenu}>
              <IoCloseOutline className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
