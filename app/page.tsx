import About from "./components/home/about";

export default function Home() {

  return (
    <main className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center min-h-screen m-0 md:mt-[32px] lg:mt-0 gap-[32px] p-[32px]">
      <About />
    </main>
  );
}
