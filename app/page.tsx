import Hero from "@/Components/Hero";


export default function Home() {
  return (
    <main className="relative text-white flex bg-black-100 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5"> 
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
