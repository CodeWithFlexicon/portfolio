import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function Header() {
  return (
    <div className="w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold">
            Felix Chen
          </h1>
          <h2 className="text-xl sm:text-2xl mt-3 text-gray-600">
            Software Engineer from NYC
          </h2>
          <p className="mt-4 max-w-xl">
            Recent graduate from CUNY - College of Staten Island
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="https://github.com/CodeWithFlexicon"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-light-mode"
            >
              GitHub
              <SiGithub className="transition-all duration-200 group-hover:scale-140 group-hover:-rotate-6" />
            </a>
            <a
              href="/documents/ChenFelix_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 transition-all duration-300 hover:bg-blue-100 hover:-translate-y-0.5 hover:shadow-light-mode"
            >
              My Resume
              <FiArrowRight className="transition-transform duration-300 group-hover:-rotate-45" />
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/images/Profilepicture.jpeg"
            width={1000}
            height={1000}
            alt="Profile Picture"
            className="rounded-full ring-2 ring-gray-500 shadow-md w-56 sm:w-64 md:w-70 lg:w-90"
          />
        </div>
      </div>
    </div>
  );
}
