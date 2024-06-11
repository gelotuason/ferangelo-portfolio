import Image from "next/image";
import About from "./components/home/about";

export default function Home() {

  return (
    <main className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center lg:h-5/6 gap-[32px] p-[32px]">
      <section className="grid gap-[16px] content-center justify-center mt-[32px] md:m-0">
        <About />
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
