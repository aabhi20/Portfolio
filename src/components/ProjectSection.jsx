// src/components/ProjectSection.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Food-Delivery Frontend Website",
    description: "",
    image: "/project1.jpg", // add actual image in /public or /assets
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://food-delivery-by-abhay.vercel.app/",
    github: "https://github.com/aabhi20/Food-Delivery",
  },
  {
    title: "moovy",
    description: "Search and display weather info using OpenWeather API.",
    image: "/project2.jpg",
    stack: ["React", "API", "Responsive"],
    live: "https://moovy-abhay.vercel.app/",
    github: "https://github.com/aabhi20/moovy",
  },
  {
    title: "Task Manager",
    description: "A simple task manager with CRUD features.",
    image: "/project3.jpg",
    stack: ["React", "Appwrite", "Tailwind"],
    live: "https://your-task-app.com",
    github: "https://github.com/aabhi20/TO-do",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen bg-[#0d0a1c] text-[#c3cad9] px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 border-b border-[#1f2a45] pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
