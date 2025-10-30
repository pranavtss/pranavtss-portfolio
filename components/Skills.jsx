import { motion } from "framer-motion";

const skills = {
  Programming: ["C", "Python", "Java"],
  Web: ["React", "Node.js", "HTML", "CSS"],
  Embedded: ["8051", "TIVA C", "Arduino"],
  Tools: ["Git", "VS Code", "Keil", "Proteus", "Figma"],
  SoftSkills: ["Teamwork", "Problem-solving", "Creativity"],
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">
        <span className="heading-multicolor">Skills & Expertise</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <motion.div
            key={category}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 shadow-sm border-l-4 border-indigo-500/30 hover:shadow-md transition-shadow duration-200"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}