import Image from "next/image";
import { LetsTalk, DownloadCVResume } from "./links";
import TechstackLogos from "./techstack";

export default function Home() {

  return (
    <main className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center lg:h-5/6 gap-[32px] p-[32px]">
      <section className="grid gap-[16px] content-center justify-center mt-[32px] md:m-0">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">Ferangelo Tuason</h1>
        <div className="flex items-center gap-[16px] lg:gap-[32px]">
          <hr className="w-[32px] lg:w-[86px] border border-black" />
          <p className="text-lg md:text-2xl lg:text-3xl font-light">Full Stack Developer 🧑‍💻</p>
        </div>
        <p className="text-gray-500 break-normal">A hardworking <strong>Full Stack Developer</strong> with a passion for turning ideas into reality.
          I specialized in serverless back-end development and building scalable, efficient, and user-friendly web applications using cutting-edge technologies like <strong>React</strong>, <strong>Firebase</strong>, and more.
        </p>
        <div className="flex justify-between items-center h-24">
          <p className="font-semibold">Tech Stacks</p>
          <hr className="w-6 rotate-90 border-black" />
          <TechstackLogos />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-[16px]">
          <DownloadCVResume />
          <LetsTalk />
        </div>
      </section>
      <Image
        src="/my-pic.jpg"
        width={500}
        height={500}
        className='animate-border-radius border-4 border-double border-black my-auto mx-auto'
        alt='my photo'
        priority
      />
    </main>
  );
}
