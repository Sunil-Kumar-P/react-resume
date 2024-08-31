import React, { forwardRef } from 'react';
import './Hero.css'; // Import a CSS file for styling

const Hero = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="hero-container">
      <h1 className="hero-heading">Hello, I'm Sunil Kumar P</h1>
      <p className="hero-subheading">
        A passionate Computer Science graduate with expertise in various programming languages and technologies.
      </p>
      <p className="hero-description">
        I specialize in developing interactive web applications, managing projects, and continuously learning new skills to stay updated with the latest technologies. My goal is to leverage my skills and experience in challenging roles to contribute to innovative projects and support organizational growth.
      </p>
      <div className="hero-buttons">
        <a href="#projects" className="hero-button">View My Projects</a>
        <a href="#contact" className="hero-button">Get in Touch</a>
      </div>
    </div>
  );
});

export default Hero;
