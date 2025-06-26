import { motion } from "framer-motion";
import avatar from "../assets/images/Avatar.jpeg";
import resume from "../assets/images/Resume.pdf";
import { FaDownload } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 snap-start min-h-screen bg-[#0d0a1c] text-[#c3cad9] px-6 lg:px-24 pb-24 pt-0 md:py-0 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center justify-between lg:-mt-25">
        {/* Avatar with blur glow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-60 h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#5d88f7]"
        >
          <img
            src={avatar}
            alt="Abhay Mishra"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute -inset-3 blur-3xl bg-gradient-to-tr from-[#5d88f7] to-[#00c4ff] opacity-25 rounded-full animate-pulse z-[-1]" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Hey! I'm{" "}
            <span className="text-white font-semibold">Abhay Mishra</span>, a
            frontend developer who mixes creativity with code. I care deeply
            about the user experience and love building fast, responsive, and
            visually polished apps.
            <br />
            <br />
            I'm fun to work with, but I take my work seriously — every pixel and
            line of code matters. I mostly work with{" "}
            <span className="text-[#5d88f7] font-medium">
              React.js
            </span> and{" "}
            <span className="text-[#5d88f7] font-medium">Tailwind CSS</span>,
            and I’m always looking to learn and do more.
          </p>

          <motion.a
            href={resume}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#5d88f7] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#3e61c4] transition"
          >
            <FaDownload /> Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
