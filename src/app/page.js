import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import { Poppins } from "next/font/google";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const Home = () => {
  return (
    <main
      className={`container mx-auto flex min-h-screen flex-col px-4 py-2 ${poppins.variable} font-sans`}
    >
      <Navbar />
      <div className="container mx-auto mt-20  ">
        <Hero />
        <Achievements/>
        <AboutSection />
        <ProjectSection />
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
};
export default Home;
