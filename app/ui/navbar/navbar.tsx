'use client';

import Link from "next/link";
import { HiArrowCircleRight } from "react-icons/hi";
import { CiDark } from "react-icons/ci";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((open) => !open);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link
          href="#home"
        >
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About me</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact me</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <CiDark className="h-7 w-7"/>
          </button>
          <Link className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4" href="#contact">Contact <HiArrowCircleRight/></Link>
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <IoMenu className="h-7 w-7"/>
          </button>
        </div>

        {/* -------------------------Mobile Menu------------------------- */}

        <ul className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition-all duration-500 ${
          open ? "right-0" : "-right-64"
        }`}>
          <div className="absolute right-6 top-6 list-none">
            <button type='button' onClick={closeMenu}>
              <IoCloseOutline className="h-6 w-6 cursor-pointer" />
            </button>
          </div>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About me</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact me</Link></li>
        </ul>
      </nav>
    </>
  )
}