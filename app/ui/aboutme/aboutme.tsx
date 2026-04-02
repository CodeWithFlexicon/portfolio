import Image from 'next/image';

export default function AboutMe() {
    return (
        <div id='about' className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg">
                Introduction
            </h4>
            <h2 className="text-center text-5xl">
                About Me
            </h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div>
                    <Image 
                        width={640}
                        height={640}
                        src='/images/profilepic.jpg'
                        alt=""
                        className="w-full rounded-3xl"
                    />
                </div>
                <div className="flex-1">

                </div>
            </div>
        </div>
    )
}