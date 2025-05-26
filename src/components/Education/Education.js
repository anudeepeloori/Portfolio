import React from "react";
import "./Education.css";

import USF from "../../Assets/USF.png";
import VNR from "../../Assets/VNR.png"; 

const Education = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="education" className="education-section">
      <header className="education-header">
        <h1>My Academic Journey</h1>
        <p>Formal education and foundational learning experiences</p>
      </header>

      <div className="education-cards">
        <article className="edu-card" onClick={() => openInNewTab("https://vnrvjiet.ac.in/")}>
          <img src={VNR} alt="VNR VJIET" className="edu-logo" />
          <div className="edu-content">
            <h2>VNR Vignana Jyothi Institute of Engineering and Technology</h2>
            <h3>B.Tech in Computer Science</h3>
            <p>
              <strong>Key Subjects:</strong> Java, Data Structures, OS, CN, Web Development, ML, AI..
            </p>
          </div>
        </article>

        <article className="edu-card" onClick={() => openInNewTab("https://www.usf.edu")}>
          <img src={USF} alt="University of South Florida" className="edu-logo" />
          <div className="edu-content">
            <h2>University of South Florida</h2>
            <h3>M.S. in Computer Science</h3>
            <time>Aug 2023 – May 2025</time>
            <p>
              <strong>Key Subjects:</strong> Advanced OS, Computer Architecture, Data Structures and Algorithms, 
              Intoduction to AI, Trustworthy AI Systems, Human Computer Interaction, Augmented Reality, Social Media Mining.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
