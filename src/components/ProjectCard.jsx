// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#10152b] border border-[#1f2a45] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
    >
      {/* Project Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-slate-400 text-sm">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="bg-[#1f2a45] text-[#c3cad9] text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5d88f7] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#3e61c4] transition"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5d88f7] border border-[#5d88f7] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1a1f3c] transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
