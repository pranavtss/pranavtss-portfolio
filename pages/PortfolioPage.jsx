import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Starfield from "../components/Starfield";

const pageVariants = {
  hidden: { opacity: 0, x: 60 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, x: -60, transition: { duration: 0.5 } },
};

export default function PortfolioPage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="enter" exit="exit">
      <Starfield />
      <Navbar />
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-20 space-y-20">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}