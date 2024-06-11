import About from "./components/home/about";

export default function Home() {

  return (
    <main className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center lg:h-5/6 gap-[32px] p-[32px]">
      <About />
    </main>
  );
}
