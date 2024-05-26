import Image from "next/image";
import { DownloadCVResume } from "../ui/about/downloadcv";
import Images from "../ui/about/images";

export default function About() {
    return (
        <main className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-[640px]">
                <section className="mx-auto my-auto hidden lg:block p-[16px]">
                    <Image
                        src="/my-pic.jpg"
                        width={400}
                        height={760}
                        className='rounded-3xl'
                        alt='my photo'
                    />
                </section>
                <section className="grid content-center gap-[16px] p-[16px]">
                    <h1 className="font-bold text-5xl lg:text-6xl">About Me</h1>
                    <div className="tracking-wide break-normal">
                        <h1>I'm a <strong>Full Stack Developer</strong> with a passion passion for turning ideas into reality. 
                        I specialized in serverless back-end development and building scalable, efficient, and user-friendly web applications using cutting-edge technologies like <strong>React</strong>, <strong>Firebase</strong>, and more.</h1>
                    </div>
                    <DownloadCVResume />
                </section>
            </div>
            <section className="bg-gradient-to-r from-[#fea82f] rounded-3xl p-[32px] mb-[16px]">
                <div className="grid place-items-center gap-2 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold">Tech Stack</h1>
                    <h1 className="tracking-wide leading-relaxed lg:ps-48 lg:pe-48">My tech stack is a strategic blend of advanced tools designed to deliver high-quality, scalable, and efficient solutions.
                        It’s more than just a collection of technologies; it’s a competitive advantage that elevates your web development experience to new heights.
                        Harness the power of my tech stack and step into the future of web development.</h1>
                </div>
                <div className="mt-[64px]">
                    <Images />
                </div>
            </section>
        </main>
    )
}