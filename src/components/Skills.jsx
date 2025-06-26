import React from "react";
import { FaHtml5, FaCss3, FaReact, FaLinux } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    description: "Semantic structure and SEO-friendly markup.",
  },
  {
    name: "CSS",
    icon: FaCss3,
    description: "Responsive design, animations & layout control.",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    description: "Dynamic functionality and logic implementation.",
  },
  {
    name: "React",
    icon: FaReact,
    description: "Component-based UI development with hooks.",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    description: "Rapid UI styling with utility-first classes.",
  },
  {
    name: "Linux",
    icon: FaLinux,
    description: "Terminal commands, file systems, and deployment.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 snap-start min-h-screen bg-[#0d0a1c] text-[#c3cad9] px-6 pb-16 pt-4 flex items-center justify-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl p-4 sm:p-8 md:p-16 rounded-2xl border border-[#1f2a45] bg-[#10152b]/70 backdrop-blur-lg shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          My Skills
        </h2>
        <p className="text-slate-400 mb-12 max-w-3xl text-lg">
          I specialize in crafting sleek, scalable web interfaces using modern
          technologies. These are the tools I use to design and develop
          high-performance web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {skills.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center bg-[#0e1325]/80 backdrop-blur-md border border-[#1f2a45] rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-[0_0_15px_#5d88f7]/50 hover:-translate-y-1 transition duration-300"
              >
                <div className="relative mb-3 sm:mb-4">
                  <div className="bg-gradient-to-tr from-[#5d88f7] to-[#00c4ff] p-1 rounded-full animate-pulse ring-2 ring-[#202a44]">
                    <div className="bg-[#10152b] p-3 sm:p-4 rounded-full">
                      <Icon className="text-3xl sm:text-4xl md:text-5xl text-[#5d88f7]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
