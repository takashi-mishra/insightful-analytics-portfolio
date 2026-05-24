// Portfolio app root — plain Vite + React SPA
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";

export default function App() {
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster />
    </main>
  );
}
