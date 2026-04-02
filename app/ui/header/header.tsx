import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <div>
                <Image 
                    width={300}
                    height={300}
                    src="/images/profilepic.jpg"
                    alt="Profile picture"
                    className="rounded-full w-32"
                />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
                Hello! I'm Felix Chen
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
                Full-Stack Developer from NYC.
            </h1>
            <p className="max-w-2xl mx-auto">
                I am a recent graduate from CUNY - College of Staten Island
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <Link href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
                    Contact Me!
                </Link>
                <Link href="/ChenFelix_Resume.pdf" download
                className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                >
                    My Resume
                </Link>
            </div>
        </div>
    )
}