import React from "react";
import "./Projects.css";
import Photo from "./cars.JPG";
import Photo2 from "./antras.JPG";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "HTML & CSS Website",
      description: "Simple HTML & CSS Website with bootstrap framework",
      imageUrl: Photo,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "API COUNTRIES",
      description: "Simple API project with filters by continents",
      imageUrl: Photo2,
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
              src={project.imageUrl}
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
