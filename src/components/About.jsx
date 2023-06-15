import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vestibulum nibh a turpis mattis, eu consectetur nisl tristique. Sed
          auctor justo vitae facilisis suscipit. In hac habitasse platea
          dictumst. Curabitur bibendum, mi nec molestie viverra, ante leo
          pellentesque lorem, a finibus turpis leo sed turpis. Integer pharetra
          massa in consequat egestas. Proin auctor metus eu lacus facilisis
          lacinia. Fusce sollicitudin sollicitudin arcu, id interdum est
          vestibulum a. Nam sed purus at urna facilisis consectetur et vitae
          sem. Morbi dapibus interdum libero, ac facilisis lacus.
        </p>
        <p className="about-description">My CV</p>
      </div>
    </div>
  );
};

export default About;
