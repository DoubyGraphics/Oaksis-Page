import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WorkTeaser from "@/components/WorkTeaser";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <WorkTeaser />
      <About />
      <CtaBand />
      <Footer />
    </main>
  );
}
