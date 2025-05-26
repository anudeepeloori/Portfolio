import React from "react";
import "../Experience/Experience.css";
import UsfLogo from "../../Assets/usflogo.png"
import FicusLogo from "../../Assets/ficus.png"

const Experience = () => {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <section id="experience" className="experience-section">
      <header className="experience-header">
        <h1>Professional Experience</h1>
        <p>A journey through impactful contributions and technology-driven results.</p>
      </header>

      <div className="experience-list">
        {/* USF */}
        <article
          className="experience-card"
          data-aos="fade-up"
          onClick={() => openLink("https://www.usf.edu")}
        >
          <div className="experience-header1">
            <img src={UsfLogo} alt="USF Logo" className="experience-logo1" />
            <div>
              <h2>University of South Florida</h2>
              <h4>Graduate Assistant</h4>
              <time>Jan 2024 – Aug 2024</time>
              <p>Tampa, FL, USA</p>
            </div>
          </div>
          <ul>
            <li>Improved Angular-based research app performance by 20% using state optimizations and lazy loading.</li>
            <li>Implemented 10+ technical upgrades inspired by 20+ peer-reviewed papers, accelerating workflows by 25%.</li>
            <li>Integrated RESTful services with modular UI components to enhance maintainability and streamline testing.</li>
          </ul>
          <div className="skill-tags">
            {["Angular", "REST APIs", "UI Optimization", "Research"].map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </article>

        {/* Ficus Realtime */}
        <article
          className="experience-card"
          data-aos="fade-up"
          data-aos-delay="100"
          onClick={() => openLink("https://www.linkedin.com/company/ficus-realtime/")}
        >
          <div className="experience-header1">
            <img src={FicusLogo} alt="Ficus Logo" className="experience-logo1" />
            <div>
              <h2>Ficus Realtime</h2>
              <h4>Software Developer</h4>
              <time>Jun 2021 – May 2023</time>
              <p>Hyderabad, India</p>
            </div>
          </div>
          <ul>
            <li>Built scalable REST APIs using Spring Boot, reducing response time by 15% and improving DB throughput by 30%.</li>
            <li>Increased test coverage by 28% with JUnit and automated UI validation with Selenium.</li>
            <li>Enhanced Kafka cluster performance and achieved 99.9% uptime through optimization of async data flows.</li>
            <li>Reduced deployment cycle time by 33% through CI/CD automation and intelligent bug tracking.</li>
          </ul>
          <div className="skill-tags">
            {["Java", "Spring Boot", "Kafka", "SQL", "Selenium", "JUnit", "MVC", "TDD"].map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
