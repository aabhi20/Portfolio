// src/components/ProjectSection.jsx
import ProjectCard from "./ProjectCard";
import todo from "../assets/images/todo.jpeg";
import movie from "../assets/images/1st.jpeg";
import food from "../assets/images/3rd.jpeg";

const projects = [
  {
    title: "Food-Delivery Frontend Website",
    description:
      "A frontend UI for a food delivery app with animated categories and restaurant sections.",
    image: food,
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://food-delivery-by-abhay.vercel.app/",
    github: "https://github.com/aabhi20/Food-Delivery",
  },
  {
    title: "moovy",
    description:
      "Moovy is a responsive movie discovery app built with React.js and Tailwind CSS. It integrates the TMDB API to display trending titles, genre filters, ratings, trailers, and cast info. Features include real-time search, dynamic routing, and modular components with state management using React Hooks or Context API.",
    image: movie,
    stack: ["React", "API", "Responsive"],
    live: "https://moovy-abhay.vercel.app/",
    github: "https://github.com/aabhi20/moovy",
  },
  {
    title: "Task Manager",
    description:
      "A simple task manager app with full CRUD functionality using Appwrite and React.",
    image: todo,
    stack: ["React", "Appwrite", "Tailwind"],
    live: "https://to-to-list-by-abhay.vercel.app/",
    github: "https://github.com/aabhi20/to-to-list",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 snap-start min-h-screen bg-[#0d0a1c] text-[#c3cad9] px-6 pb-16 pt-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 border-b border-[#1f2a45] pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full max-w-sm mx-auto">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
