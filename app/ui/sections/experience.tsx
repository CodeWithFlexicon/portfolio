import { experienceList } from "@/app/data/experienceList";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-center text-4xl mt-6">Journey so far</h1>

        <ul className="mt-6 grid grid-cols-1 gap-4">
          {experienceList.map((exp, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-5 border border-gray-300 rounded-lg cursor-pointer
              hover:bg-light-hover hover:-translate-y-1 hover:shadow-light-mode
              transition-all duration-300"
            >
              {exp.image ? (
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={40}
                  height={40}
                  className="rounded shrink-0 border border-gray-200"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded bg-gray-200 text-gray-600 font-semibold">
                  {exp.company[0]}
                </div>
              )}

              <div className="flex flex-col w-full gap-2">
                <div className="grid grid-cols-[1fr_auto] items-center gap-x-4">
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">
                      {exp.company}
                      <span className="font-normal text-gray-600">
                        {" "}
                        - {exp.role}
                      </span>
                    </h3>
                  </div>

                  <div className="text-right text-sm text-gray-500">
                    {exp.date}
                  </div>

                  <div className="text-left text-sm text-gray-500">
                    {exp.companyLocation}
                  </div>

                  <div className="text-right text-sm text-gray-500">
                    {exp.location}
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-left">
                  {exp.technology}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
