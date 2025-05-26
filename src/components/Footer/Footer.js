import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer-main">
        <div className="footer-branding">
          <h2>Anudeep Eloori</h2>
          <p>Full-Stack Developer | Angular · Spring Boot · Node.js</p>
          <p>Building scalable, clean, and efficient applications for the future.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Let's Connect</h4>
          <ul>
            <li><a href="mailto:anudeepeloori@gmail.com">Email</a></li>
            <li><a href="https://www.linkedin.com/in/anudeepeloori/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/anudeepeloori" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {currentYear} Anudeep Eloori. Built with React.</p>
        <div className="footer-policy">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
