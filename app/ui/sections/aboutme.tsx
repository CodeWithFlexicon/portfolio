import { infoList } from "@/app/data/infoList";

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h4 className="mb-2 text-lg text-gray-600 dark:text-text-dark-muted">
          Introduction
        </h4>
        <h2 className="text-5xl text-black dark:text-text-dark">About Me</h2>

        <p className="mt-10 mb-12 max-w-3xl mx-auto text-lg leading-8 text-gray-700 dark:text-text-dark-muted">
          I&apos;m a recent graduate from the City University of New York - College
          of Staten Island with a strong foundation in full-stack development. I
          enjoy building and improving technology that makes a meaningful impact
          on people&apos;s lives. My experience includes developing scalable backend
          services, working with APIs, and creating user friendly applications.
          I&apos;m particularly interested in backend development and continuously
          improving my skills in building efficient, reliable systems. Outside
          of coding, I enjoy going to the gym, watching shows, reading mystery
          novels, and playing games. I&apos;m currently a fan of the Knives Out
          series, and some of my favorite shows include From, True Detective
          (Season 1), and Wonder Man.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoList.map((info, index) => {
            const Icon = info.icon;

            return (
              <li
                key={index}
                className="border border-gray-400 rounded-xl p-6
                bg-white text-black
                hover:bg-light-hover hover:-translate-y-1 hover:shadow-light-mode
                dark:bg-dark-surface dark:border-dark-border dark:text-text-dark
                dark:hover:bg-dark-hover dark:hover:shadow-dark-mode
                transition-all duration-300"
              >
                <Icon className="w-5 h-5 mx-auto mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-text-dark">
                  {info.name}
                </h3>
                <p className="text-gray-600 text-sm dark:text-text-dark-muted">
                  {info.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
