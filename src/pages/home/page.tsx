import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import SystemNote from "./components/SystemNote";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <SystemNote />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
