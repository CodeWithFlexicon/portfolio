import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl mb-2">Want to Connect?</h1>
        <h4 className="text-lg text-gray-600 mb-6">
          Always interested in collaboration and different perspectives
        </h4>

        <a
          href="mailto:felixx.chenn@gmail.com"
          className="group inline-flex items-center gap-2 text-lg border rounded-full px-5 py-3 shadow-sm hover:bg-light-hover hover:-translate-y-1 hover:shadow-light-mode transition-all duration-300"
        >
          <span>Felixx.Chenn@gmail.com</span>
          <IoIosMail className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      <div className="border-t border-gray-300 w-full">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Felix Chen. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-lg">
            <a
              href="https://github.com/CodeWithFlexicon"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/felix-chen1/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
