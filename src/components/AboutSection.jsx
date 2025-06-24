import { motion } from "framer-motion";
import avatar from "../assets/images/Avatar.jpeg"; // replace with your actual path
import resume from "../assets/images/Resume.pdf";

const lines = [
  "Hey there! I'm Abhay Mishra, a frontend developer who turns ideas into clean, performant web experiences.",
  "I love working with React.js and Tailwind CSS to create sleek, responsive designs with smooth animations.",
  "Whether it's building for speed, accessibility, or just making things feel alive — I'm all in.",
  "I’m constantly learning, experimenting, and refining — because great design is always evolving.",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center justify-center px-6 py-24 bg-[#0d0a1c] text-[#c3cad9]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 rounded-2xl border border-[#1f2a45] bg-[#10152b]/80 backdrop-blur-lg p-8 md:p-12 shadow-xl"
      >
        {/* Avatar */}
        <motion.img
          src={avatar}
          alt="Abhay Mishra"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-40 h-40 rounded-full object-cover border-4 border-[#5d88f7] shadow-lg hover:scale-105 transition duration-300"
        />

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b border-[#1f2a45] pb-2">
            About Me
          </h2>
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-4 text-lg leading-relaxed"
            >
              {line}
            </motion.p>
          ))}

          {/* Download Resume Button */}
          <motion.a
            href={resume}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 bg-[#5d88f7] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#3e61c4] transition"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
