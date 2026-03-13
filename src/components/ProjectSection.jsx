import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with React, Tailwind, and DaisyUI",
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "Full stack e-commerce app using Node.js, MongoDB, React",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "Web app for task management with CRUD functionality",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow rounded-lg"
            >
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn btn-sm btn-primary mt-4">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
