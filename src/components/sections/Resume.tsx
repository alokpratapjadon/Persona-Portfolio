import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle modal

  return (
    <section className="relative w-full py-20 flex justify-center items-center">
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className="bg-[#1d1836] rounded-3xl shadow-lg p-10">
          <div className="flex flex-col items-center text-center">
            <h1 className={`${styles.heroHeadText} text-white font-extrabold`}>
              My <span className="text-[#FFF]">Resume</span>
            </h1>
            <p className={`${styles.heroSubText} text-gray-300 mt-2`}>
              A quick overview of my <span className="text-[#FFD]">experience</span>, 
              <span className="text-[#FFD]"> skills</span>, and <span className="text-[#FFD]">education</span>.
            </p>
          </div>

          {/* Resume Content */}
          <div className="mt-10 flex flex-col items-center justify-center text-white">
            <div className="bg-[#232631] shadow-xl rounded-2xl p-6 max-w-3xl w-full">
              <h2 className="text-2xl font-semibold text-[#FFf]">Education</h2>
              <p className="text-gray-300 mt-2">B.Tech in Computer Science & Engineering</p>
              <p className="text-gray-400 text-sm">GLA University, 2022 - 2026</p>
            </div>

            <div className="bg-[#232631] shadow-xl rounded-2xl p-6 max-w-3xl w-full mt-6">
              <h2 className="text-2xl font-semibold text-[#fff]">Skills</h2>
              <p className="text-gray-300 mt-2">Web Development, React, JavaScript, Node.js, SQL</p>
            </div>

            <div className="bg-[#232631] shadow-xl rounded-2xl p-6 max-w-3xl w-full mt-6">
              <h2 className="text-2xl font-semibold text-[#FFf]">Experience</h2>
              <p className="text-gray-300 mt-2">Software Developer Intern at Mern Corp</p>
              <p className="text-gray-400 text-sm">Jan 2025 - Present</p>
            </div>
          </div>

          {/* View Resume Button */}
          <div className="mt-10 flex flex-col items-center">
            <motion.button
              onClick={() => setIsOpen(true)} // Open modal on click
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#009000] text-black font-bold px-8 py-3 rounded-lg shadow-lg transition-all hover:bg-[#009090]"
            >
              View Resume
            </motion.button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white p-6 rounded-xl max-w-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-black text-2xl"
            >
              ✖
            </button>
            <img
  src={config.resume.image}
  alt="Resume Preview"
  className="rounded-lg w-full h-auto max-h-[800px]"
  onError={() => console.error("Image failed to load:", config.resume.image)}
/>

          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
