import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className={`space-y-4 max-w-5xl mx-auto transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">
        <span className="heading-multicolor">About</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <aside className="md:col-span-1 pr-2 flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-2">Who I am</h3>
          <p className="text-sm text-gray-400">Full-stack Web Developer</p>
        </aside>

        <div className="md:col-span-2">
          <motion.div
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-sm border-l-4 border-indigo-500/40 transform transition-all duration-300 hover:-translate-y-1"
            variants={aboutVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-gray-300 leading-relaxed text-justify">
              I'm a full-stack web developer seeking internship or full-time opportunities where I can
              contribute immediately and grow professionally. I aim for a win-win partnership —
              delivering measurable value to the company while expanding my skills and ownership. I'm
              comfortable working across the stack and enjoy building reliable, maintainable web
              applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}