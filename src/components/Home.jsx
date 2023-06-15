import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">
          Hello, my name is Ignas
          <br /> Welcome to My Portfolio
        </h1>
        <p className="hero-description">Discover my projects and skills</p>
        <a href="/projects" className="hero-button">
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home;
