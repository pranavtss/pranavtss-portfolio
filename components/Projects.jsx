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

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300">Projects</span>
      </h2>
      <div className="space-y-8">
        {projects.map(({ title, description, tech, role, github, demo }) => (
          <motion.div
            key={title}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500/30"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-1">{title}</h3>
            <p className="mb-2">{description}</p>
            <p className="text-sm text-indigo-400 mb-1"><strong>Tech:</strong> {tech}</p>
            <p className="text-sm text-indigo-400 mb-3"><strong>Role:</strong> {role}</p>
            <div className="flex space-x-6">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline transition-colors duration-200"
              >
                View on GitHub
              </a>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline transition-colors duration-200"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}