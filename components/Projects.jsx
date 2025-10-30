const projects = [
  {
    title: "Wireless Charging IoT System",
    description: "Hardware + Web Dashboard for wireless charging monitoring.",
    tech: "Embedded C, React, Node.js",
    role: "Designed hardware and developed dashboard",
    github: "https://github.com/pranavtss/wireless-charging-iot",
    demo: "https://wireless-charging-demo.example.com",
  },
  {
    title: "Personal Portfolio Website",
    description: "My portfolio built with React and Tailwind CSS.",
    tech: "React, Tailwind CSS",
    role: "Full-stack development",
    github: "https://github.com/pranavtss/portfolio",
    demo: "https://pranavtss.github.io/portfolio",
  },
  {
    title: "Smart Agriculture Monitor",
    description: "Embedded system with IoT cloud integration for agriculture.",
    tech: "Embedded C, IoT Cloud",
    role: "Hardware and firmware development",
    github: "https://github.com/pranavtss/smart-agriculture",
    demo: "https://smart-agriculture-demo.example.com",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [openProjects, setOpenProjects] = useState({});
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  function toggleProject(key) {
    setOpenProjects((prev) => ({ ...prev, [key]: !prev[key] }));
  }
  return (
    <section id="projects" className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">
        <span className="heading-multicolor">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map(({ title, description, tech, role, github, demo }) => {
          const key = title;
          const summary = Array.isArray(description) ? description[0] : description;
          return (
            <motion.article
              key={key}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-5 shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 border-l-4 border-indigo-500/30 cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => toggleProject(key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleProject(key); } }}
              aria-expanded={!!openProjects?.[key]}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{summary}</p>

                  <motion.div
                    className="overflow-hidden mt-3"
                    initial={{ height: 0, opacity: 0 }}
                    animate={openProjects?.[key] ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="mt-2 text-sm text-gray-300 space-y-2">
                      <p><strong>Tech:</strong> {tech}</p>
                      <p><strong>Role:</strong> {role}</p>
                      <div className="flex space-x-4 mt-2">
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">View on GitHub</a>
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Live Demo</a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col items-end">
                  <button className="mt-2 text-sm text-indigo-300/80 hover:text-indigo-300" onClick={(e) => { e.stopPropagation(); toggleProject(key); }} aria-label={openProjects?.[key] ? 'Collapse' : 'Expand'}>
                    {openProjects?.[key] ? 'Collapse' : 'Expand'}
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      {projects.length > 4 && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition-transform"
          >
            {showAll ? "Show less" : `Show all (${projects.length})`}
          </button>
        </div>
      )}
    </section>
  );
}