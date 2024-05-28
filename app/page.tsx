import Image from "next/image";
import { SocialLinks, LetsTalk } from "./links";

export default function Home() {
  return (
    <main className="container flex flex-col-reverse md:grid md:grid-cols-2 justify-center h-[762px]">
      <section className="grid gap-[16px] content-center justify-center mt-[32px] md:m-0">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">Ferangelo Tuason</h1>
        <div className="flex items-center gap-[16px] lg:gap-[32px]">
          <hr className="w-[32px] lg:w-[86px] border border-black" />
          <h1 className="text-lg md:text-2xl lg:text-3xl font-light">Full Stack Developer 🧑‍💻</h1>
        </div>
        <h1 className="md:text-xl text-gray-500">Passionate and dedicated developer based in Philippines.</h1>
        <SocialLinks />
        <LetsTalk />
      </section>
      <section className="grid place-items-center mt-[16px] md:m-0">
        <Image
          src="/my-pic.jpg"
          width={320}
          height={760}
          className='animate-border-radius border-4 border-double border-black'
          alt='my photo'
        />
      </section>
    </main>
  );
}
