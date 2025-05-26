import React from "react";
import "./About.css";
import { FaAward, FaUserGraduate } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";
import myphoto from "../../Assets/myphoto2 (1).png";
import { useEffect, useState } from "react";
import CodeBlock from "../Code-block/Code-block";
import DevLottie from "../LottieAnimations/DevLottie";


const About = () => {
  const fullText = "Full-Stack Developer. Builder. Collaborator.";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <section id="about" className="about">
      <h1 className="about_heading" data-aos="fade-down">About Me</h1>
      <div className="about_container">
        {/* <div className="about_me" data-aos="fade-right">
          <div className="about_me_image">
            <img src={myphoto} alt="About" />
          </div>
        </div> */}

        {/* <div className="about_me">
      <CodeBlock />
    </div> */}

        {/* Lottie animation */}
        <div className="about_me">
          <DevLottie />
        </div>

        <div className="about_content" data-aos="fade-left">
          {/* <div className="about_cards">
            <article className="about_card glass">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2 years experience</small>
            </article>

            <article className="about_card glass">
              <MdOutlineFolderCopy className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about_card glass">
              <FaUserGraduate className="about_icon" />
              <h5>Education</h5>
              <small>M.Sc. Computer Science</small><br />
              <small>B.Tech. Computer Science</small>
            </article>
          </div> */}

          {/* <p data-aos="fade-up">
            I’m a Software Developer with strong expertise in Angular, React, Spring Boot,
            and Node.js, focused on building scalable, secure, and high-performance web applications.
            My development approach emphasizes clean architecture, maintainability, and performance optimization.
            <br /><br />
            I've engineered multi-tenant REST APIs, optimized SQL queries for faster response times,
            and implemented automated testing pipelines that shortened deployment cycles.
            I'm passionate about creating robust full-stack solutions using Kafka, Docker, Selenium, and TDD.
            <br /><br />
            I hold a Master’s in Computer Science from the University of South Florida,
            where I also contributed to Angular-based research tools as a Graduate Assistant.
            <br /><br />
            Certified in AWS Cloud and Google Data Analytics, I enjoy collaborating with cross-functional teams
            to bridge technical solutions with business goals.
          </p> */}
          <p className="about_paragraph" data-aos="fade-up" data-aos-delay="100">
            I’m a <span className="highlight">Full-Stack Software Developer</span> with strong expertise in
            <span className="highlight"> Angular</span>, <span className="highlight">React</span>, <span className="highlight">Spring Boot</span>,
            and <span className="highlight">Node.js</span>. I specialize in building scalable, secure, and high-performance web applications.
          </p>

          <p className="about_paragraph" data-aos="fade-up" data-aos-delay="200">
            I’ve engineered <span className="highlight">multi-tenant REST APIs</span>, optimized database queries for
            <span className="highlight">faster response times</span>, and implemented <span className="highlight">CI/CD pipelines</span> to accelerate deployment cycles.
            My work often leverages technologies like <span className="highlight">Kafka</span>, <span className="highlight">Docker</span>,
            and <span className="highlight">Selenium</span>.
          </p>

          <p className="about_paragraph" data-aos="fade-up" data-aos-delay="300">
            At the <span className="highlight">University of South Florida</span>, I completed my Master’s in Computer Science
            while contributing to Angular-based research applications as a <span className="highlight">Graduate Assistant</span>.
          </p>

          <p className="about_paragraph" data-aos="fade-up" data-aos-delay="400">
            I'm certified in <span className="highlight">AWS Cloud</span> and <span className="highlight">Google Data Analytics</span>.
            I love solving real-world problems through clean, maintainable code and thrive in cross-functional teams where
            <span className="highlight">business goals</span> meet <span className="highlight">technical execution</span>.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
