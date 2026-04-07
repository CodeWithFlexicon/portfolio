import { projects } from "@/app/data/projects";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl mt-6">My Projects</h1>
        <h4 className="text-lg">An assortment of projects I have worked on</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="h-full overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm hover:-translate-y-1 hover:shadow-light-mode transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/2 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="min-h-10">
                  <h2 className="text-xl font-semibold text-black">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-gray-400 px-4 py-2 text-sm hover:bg-light-hover transition"
                  >
                    GitHub
                    <FaGithub />
                  </a>

                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm text-white hover:opacity-90 transition"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-500">
                      Demo Unavailable
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}