import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Website portfolio pribadi menggunakan React + Tailwind.",
      link: "https://github.com/username/portfolio",
    },
    {
      title: "Todo App",
      description: "Aplikasi Todo sederhana dengan React Hooks.",
      link: "https://github.com/username/todo-app",
    },
    {
      title: "Landing Page",
      description: "Landing page modern dengan TailwindCSS.",
      link: "https://github.com/username/landing-page",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6 px-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;
