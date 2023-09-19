import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className=" container mx-auto flex min-h-screen flex-col px-4 py-2">
      <Navbar />
      <div className="container mx-auto mt-20  ">
        <Hero />
      </div>
    </main>
  );
};
export default Home;
