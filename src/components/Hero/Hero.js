import React, { useEffect, useState } from "react";
import "./Hero.css";
import ProfileImg from "../../Assets/myphoto.png";
import GithubImg from "../../Assets/Github_Img.png";
import LinkedInImg from "../../Assets/LinkedIn_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full-Stack Developer",
    "Spring Boot Engineer",
    "Angular Enthusiast"
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const period = 1500;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(50);
    }
  };

  const resumeLink = () => {
    window.open("https://drive.google.com/file/d/12u4BGbXT4JXp8-GyoLrd9RA74oIHviCA/view?usp=sharing", "_blank");
  };

  return (
    <header id="home" className="hero-container">
      <div className="hero-profile">
        <img src={ProfileImg} alt="Anudeep Eloori" />
      </div>

      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Anudeep Eloori</span></h1>
        <h2 className="dynamic-title">{text}</h2>

        <p className="hero-summary">
          Full-stack developer passionate about building scalable web applications using
          Angular, Spring Boot, Node.js, and React. I create elegant
          and testable solutions that are production-ready.
        </p>

        <div className="hero-buttons">
          <AnchorLink className="button primary" offset={50} href="#contact">Connect with Me</AnchorLink>
          <button className="button outline" onClick={resumeLink}>View Resume</button>
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/anudeepeloori/" target="_blank" rel="noreferrer">
            <img src={LinkedInImg} alt="LinkedIn" title="LinkedIn" />
          </a>
          <a href="https://github.com/anudeepeloori" target="_blank" rel="noreferrer">
            <img src={GithubImg} alt="GitHub" title="GitHub" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
