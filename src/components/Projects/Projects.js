import React from "react";
import "./Projects.css";
import bankImg from "../../Assets/bankimg.png";
import movieImg from "../../Assets/movieimg.png";
import cropImg from "../../Assets/cropimg.png";

const Projects = () => {
  const moreLink = () => {
    window.open("https://github.com/anudeepeloori?tab=repositories", "_blank");
  };

  const projects = [
    {
      title: "Bank Management System",
      description:
        "Built with Node.js, Express, Angular, and Oracle DB. Supports JWT-secured user operations like account creation, fund transfers, and history viewing with robust backend services.",
      image: bankImg,
      github: "https://github.com/nithishchowdam/BankManagementSystem",
      demo: "https://drive.google.com/file/d/19Cr2VGgFNW571Fdv1F-mcxU51I7B1t8I/view?usp=sharing",
    },
    {
      title: "Movie Review Website",
      description:
        "A full-stack MERN application with Angular frontend and Node/MongoDB backend. Implements user auth, real-time ratings, secure reviews, and personalized movie suggestions.",
      image: movieImg,
      github: "https://wicked-movies-865526f62882.herokuapp.com/#/home",
      demo: "https://github.com/anudeepeloori/Crop-Recommendation-and-Disease-prediction",
    },
    {
      title: "Crop Recommendation System",
      description:
        "Implemented image fusion and ML (SVM, Decision Trees) to predict plant disease and suggest crops. GUI in Django. Achieved 95% accuracy and secured a patent for the recommendation logic.",
      image: cropImg,
      github:
        "https://github.com/anudeepeloori/Crop-Recommendation-and-Disease-prediction",
      demo:
        "https://drive.google.com/file/d/1kyfKbfz38AbRroXdnsL_vs6wXamU5B4U/view?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>Some of the work I've built with passion and purpose.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Demo / Report</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-more">
        <button onClick={moreLink}>More on GitHub</button>
      </div>
    </section>
  );
};

export default Projects;
