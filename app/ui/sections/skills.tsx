import { techList } from "@/app/data/techList";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-center text-4xl mt-6">Current Skills</h1>
        <h4 className="text-center text-lg">
          Commited to continuous learning and improvement
        </h4>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {techList.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <a
                key={index}
                className="flex items-center gap-3 p-4 bg-white border border-gray-400 text-black rounded-lg
                hover:bg-light-hover hover:-translate-y-1 hover:shadow-light-mode
                dark:border-dark-broder dark:text-text-dark
                dark:bg-dark-surface dark:hover:bg-dark-hover dark:hover:shadow-dark-mode
                transition-all duration-300"
                href={tech.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 mt-1 shrink-0 ${tech.color}`}
                />

                <div className="flex flex-col text-left">
                  <span className="font-semibold text-gray-800 dark:text-text-dark">
                    {tech.name}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-text-dark-muted">
                    {tech.description}
                  </p>
                </div>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
