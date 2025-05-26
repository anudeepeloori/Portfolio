import React from "react";
import "../Experience/Experience.css";
import UsfLogo from "../../Assets/usflogo.png";
import FicusLogo from "../../Assets/ficus.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaCode } from "react-icons/fa";
import { SiAngular, SiTypescript, SiPostman, SiRedux, SiJunit5, SiSpring, SiDocker,
  SiKubernetes, SiTerraform, SiGit, SiJavascript, SiMongodb, SiMysql, SiSelenium } from "react-icons/si";
import { FaStream,  FaJava, FaPython, FaReact, FaAws } from "react-icons/fa"; 



const Experience = () => {
  const experiences = [
    {
      company: "University of South Florida",
      logo: UsfLogo,
      role: "Graduate Assistant",
      duration: "Jan 2024 – Aug 2024",
      location: "Tampa, FL, USA",
      link: "https://www.usf.edu",
      icon: <FaUniversity />,
      responsibilities: [
        "Improved Angular-based research app performance by 20% using state optimizations and lazy loading.",
        "Implemented 10+ technical upgrades inspired by 20+ peer-reviewed papers, accelerating workflows by 25%.",
        "Integrated RESTful services with modular UI components to enhance maintainability and streamline testing.",
      ],
      skills: ["Angular", "TypeScript", "REST APIs", "Lazy Loading", "State Management", "Modular UI", "Cross-functional Collaboration", "UI Testing"],
    },
    {
      company: "Ficus Realtime",
      logo: FicusLogo,
      role: "Software Developer",
      duration: "Jun 2021 – May 2023",
      location: "Hyderabad, India",
      link: "https://www.linkedin.com/company/ficus-realtime/",
      icon: <FaCode />,
      responsibilities: [
        "Built scalable REST APIs using Spring Boot, reducing response time by 15% and improving DB throughput by 30%.",
        "Increased test coverage by 28% with JUnit and automated UI validation with Selenium.",
        "Enhanced Kafka cluster performance and achieved 99.9% uptime through optimization of async data flows.",
        "Reduced deployment cycle time by 33% through CI/CD automation and intelligent bug tracking.",
      ],
      skills: ["Java", "Spring Boot", "Spring MVC", "Kafka", "SQL", "Partitioning", "JUnit", "Mockito", "TDD", "Selenium", "CI/CD", "Automation", "Microservices", "Kubernetes", "Docker", "Git", "Terraform", "Cloud"],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h1 className="experience-heading">Professional Experience</h1>
      <VerticalTimeline>
        {experiences.map((exp, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={exp.duration}
            iconStyle={{ background: "#dee4ff", color: "#dee4ff" }}
            icon={<img src={exp.logo} alt={exp.company} className="timeline-logo" />}
            contentArrowStyle={{ borderRight: "7px solid #0077b6" }}
            contentStyle={{ boxShadow: "0 10px 25px #b6e5ed" }}
          >
            <div className="timeline-card">
              <div className="card-front">
                <h3 className="vertical-timeline-element-title">{exp.role}</h3>
                <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                <p className="location">{exp.location}</p>
                <ul>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card-back">
                <h4>Skills & Tools</h4>
                <div className="skill-tags">
                  {exp.skills.map((tag, i) => (
                    <span key={i} className="tag">
                      {getSkillIcon(tag)} {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

const getSkillIcon = (name) => {
  const icons = {
    Angular: <SiAngular />,
    TypeScript: <SiTypescript />,
    REST: <SiPostman />,
    "Lazy Loading": <SiAngular />,
    "State Management": <SiRedux />,
    Java: <FaJava />,
    "Spring Boot": <SiSpring />,
    "Spring MVC": <SiSpring />,
    Kafka: <SiPostman />, // placeholder
    SQL: <SiMysql />,
    JUnit: <SiJunit5 />,
    Mockito: <SiJunit5 />,
    TDD: <SiJunit5 />,
    Selenium: <SiSelenium />,
    "CI/CD": <SiGit />,
    Microservices: <SiSpring />,
    Kubernetes: <SiKubernetes />,
    Docker: <SiDocker />,
    Git: <SiGit />,
    Terraform: <SiTerraform />,
    Cloud: <FaAws />,
    Kafka: <FaStream />,
  };
  return icons[name] || null;
};

export default Experience;
