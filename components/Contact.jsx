import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <section id="contact" className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block pb-1">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <motion.div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-sm border-l-4 border-indigo-500/30" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="text-gray-300 mb-3">📧 <a href="mailto:pranavsubburaj@gmail.com" className="text-indigo-300 hover:underline">pranavsubburaj@gmail.com</a></p>
          <p className="text-gray-300 mb-3">📞 +91 99448 21970</p>
        </motion.div>

        <motion.div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-sm border-l-4 border-indigo-500/30" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <h3 className="text-lg font-semibold text-white mb-2">Find me on</h3>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/pranavtss" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:scale-105 transition transform">GitHub</a>
            <a href="https://www.linkedin.com/in/pranav-t-s-s-964b6a292/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:scale-105 transition transform">LinkedIn</a>
            <a href="https://www.hackerrank.com/profile/pranav_tss" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:scale-105 transition transform">HackerRank</a>
            <a href="https://leetcode.com/u/s9jjnATnZw/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:scale-105 transition transform">LeetCode</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}