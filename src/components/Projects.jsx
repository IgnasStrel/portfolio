import React from "react";
import "./Projects.css";
import Cars from "./cars.JPG";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "",
      imageUrl: { Cars },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "",
      imageUrl: "#",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageURL}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveUrl} className="project-link">
                  Live Demo
                </a>
                <a href={project.githubUrl} className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
