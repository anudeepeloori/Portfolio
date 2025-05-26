import React from "react";
import "./Projects.css";
import bankImg from "../../Assets/bankimg.png";
import movieImg from "../../Assets/movieimg.png";
import cropImg from "../../Assets/cropimg.png";
import llmImg from "../../Assets/llm.png";
import arImg from "../../Assets/arlabelImg.png";
import twitterImg from "../../Assets/twitter.png"

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
      demo: "https://drive.google.com/file/d/1gihoTezcy2A_hyrdNbNkNa85yJxW0Fie/view?usp=sharing",
    },
    {
      title: "Movie Review Website",
      description:
        "A full-stack MEAN application with Angular frontend and Node/MongoDB backend. Implements user auth, real-time ratings, secure reviews, and personalized movie suggestions.",
      image: movieImg,
      github: "https://wicked-movies-865526f62882.herokuapp.com/#/home",
      demo: "https://wicked-movies-865526f62882.herokuapp.com/#/home",
    },
    {
      title: "Crop Recommendation System",
      description:
        "Implemented image fusion and ML (SVM, Decision Trees) to predict plant disease and suggest crops. GUI in Django. Achieved 95% accuracy and secured a patent for the recommendation logic.",
      image: cropImg,
      github:
        "https://github.com/anudeepeloori/Crop-Recommendation-and-Disease-prediction",
      demo:
        "https://drive.google.com/file/d/1ZEXBAJ1mirqmT0uOLZT45fSnIRVAW71E/view?usp=sharing",
    },
    {
      title: "Enhancing Reasoning Capabilities in Large Language Models",
      description:
        "This project aims to fine-tune an open-source LLM on datasets that combine coding and reasoning tasks to improve its problem-solving abilities.",
      image: llmImg,
      github:
        "https://github.com/anudeepeloori/LLMTAI",
      demo:
        "https://drive.google.com/file/d/1XhcMqA2JJh5Sf1b7P7Kyo3t69kmkNuqb/view?usp=sharing",
    },
    {
      title: "AR LABEL ASSISTANT",
      description:
        "Our application, the AR Label Assistant is conceived to address the common challenge of locating items within a room. Whether searching for items, identifying ingredients in a kitchen, or simply finding personal belongings, our application aims to streamline the process, providing an intuitive and enjoyable solution.",
      image: arImg,
      github:
        "https://drive.google.com/file/d/1XFX6aev95sfQTOhq3tA16IHKRzxSFabq/view?usp=sharing",
      demo:
        "https://www.youtube.com/watch?v=keiouKz4_RM",
        
    },
     {
      title: "Twitter Disaster Analysis",
      description:"This project develops a tweet classification system to identify disaster-related content using a broad range of machine learning and deep learning models.",
      image: twitterImg,
      github:
        "https://github.com/anudeepeloori/TwitterDisasterAnalysis",
      demo:
        "https://drive.google.com/file/d/1zgF1wKScRzW8vIyndTb2YYeALVyBGGLW/view?usp=sharing",
        
    }

  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>A selection of projects showcasing my problem-solving and development skills.</p>
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
