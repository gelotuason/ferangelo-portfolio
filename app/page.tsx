import { About } from "./components/home/about";

export default function Home() {

  return (
    <main className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center h-full w-full p-[32px] md:gap-10 lg:gap-0 m-0 md:mt-32 lg:m-0">
      <About />
    </main>
  );
}
