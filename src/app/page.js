import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className=" container mx-auto flex min-h-screen flex-col py-4 px-8 ">
      <Hero/>
      <Navbar/>
    </main>
  );
}
