import { infoList } from '@/app/data/infoList';

export default function AboutMe() {
    return (
        <div id='about' className="w-full px-[10%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg">
                Introduction
            </h4>
            <h2 className="text-center text-5xl">
                About Me
            </h2>

            <div className="w-full flex flex-col items-center text-center my-20">
                <div className="max-w-2xl w-full">
                    <p className="mb-10 max-w-2xl">
                        I'm a recent graduate from the City University of New York - College of Staten Island. My experience lies in full-stack development
                        and I am passionate about creating and improving technology that improve the lives of people around us. Whenever I am not working on skills
                        or projects, I am usually found in the gym, watching shows, perusing mystery novels, or playing games. My favorite movie series as of this moment 
                        is Knives Out. A few of my favorite shows include From, True Detective (Season 1), Wonder Man.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map((info, index) => {
                            const Icon = info.icon; 

                            return (
                                <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 transition hover:shadow-light-mode">
                                    <Icon className="w-5 h-5 mx-auto mt-3" />
                                    <h3 className="my-4 font-semibold text-gray-700">{info.name}</h3>
                                    <p className="text-gray-600 text-sm">{info.description}</p>
                                </li>
                            )
                        })}
                    </ul>

                    
                </div>
            </div>
        </div>
    )
}