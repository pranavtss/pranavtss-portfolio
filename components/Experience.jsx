import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
    {
        title: "Internship at Crayon'D",
        description: [
            "Gained hands-on experience in software development",
            "Worked on UI design and implementation"
        ],
        date: "2023",
    },
    {
        title: "Competition: Circuitrix (Pragyan)",
        description: [
            "Showcased technical skills in circuit design",
            "Worked with embedded systems"
        ],
        date: "2023",
    },
    {
        title: "Competition: Hardwired (Infotsav)",
        description: [
            "Competed in hardware challenges",
            "Solved embedded systems problems under time constraints"
        ],
        date: "2023",
    },
    {
        title: "Certifications",
        description: [
            "Create Your First Python Program (UST – Coursera)",
            "SQL (Advanced) – HackerRank",
            "Java (Intermediate) – HackerRank",
            "CSS (Basic) – HackerRank",
            "Frontend Developer (React)"
        ],
        date: "2023",
    },
];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  const [open, setOpen] = useState({});

  function toggle(key) {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <section id="experience" className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">
        Experience & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map(({ title, description, date }) => {
          const key = title;
          const isOpen = !!open[key];
          const summary = Array.isArray(description) ? description[0] : description;
          const extras = Array.isArray(description) ? description.slice(1) : [];

          return (
            <motion.article
              key={key}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-5 shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 border-l-4 border-indigo-500/30 cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => toggle(key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(key); } }}
              aria-expanded={isOpen}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{summary}</p>

                  <motion.div
                    className="overflow-hidden mt-3"
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {extras.length > 0 && (
                      <ul className="mt-2 text-sm text-gray-300 list-disc list-inside space-y-1">
                        {extras.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-xs text-indigo-300 font-medium ml-4">{date}</span>
                  <button className="mt-2 text-sm text-indigo-300/80 hover:text-indigo-300" onClick={(e) => { e.stopPropagation(); toggle(key); }} aria-label={isOpen ? 'Collapse' : 'Expand'}>
                    {isOpen ? 'Collapse' : 'Expand'}
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}