import React from "react";
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import USF from "../../Assets/USF.png";
import VNR from "../../Assets/VNR.png";
import { FaJava } from "react-icons/fa";
import { SiMysql, SiSpring, SiTensorflow } from "react-icons/si";

const Education = () => {
  const getIcon = (name) => {
    const icons = {
      Java: <FaJava />,
      SQL: <SiMysql />,
      "Spring Boot": <SiSpring />,
      AI: <SiTensorflow />,
    };
    return icons[name] || null;
  };

  return (
    <section id="education" className="education-section">
      <h1 className="education-heading">My Academic Journey</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2023 – May 2025"
          iconStyle={{ background: "#0077b6", color: "#fff" }}
          icon={<img src={USF} alt="USF" className="timeline-logo" />}
        >
          <h3 className="vertical-timeline-element-title">University of South Florida</h3>
          <h4 className="vertical-timeline-element-subtitle">M.S. in Computer Science</h4>
          <div className="subject-tags">
            {[
              "Operating Systems",
              "Computer Architecture",
              "Data Structures",
              "AI",
              "Trustworthy AI Systems",
              "HCI",
              "Augmented Reality",
              "Social Media Mining",
              "Emerging Topics in Network Security"
            ].map((tag, i) => (
              <span key={i} className="tag">{getIcon(tag)} {tag}</span>
            ))}
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#b6e5ed", color: "#b6e5ed" }}
          icon={<img src={VNR} alt="VNR" className="timeline-logo" />}
        >
          <h3 className="vertical-timeline-element-title">VNR VJIET</h3>
          <h4 className="vertical-timeline-element-subtitle">B.Tech in Computer Science and Business Systems</h4>
          <div className="subject-tags">
            {[
              "Java",
              "Data Structures",
              "Operating Systems",
              "Computer Networks",
              "Web Development",
              "AI",
              "ML",
              "DBMS",
              "Software Design",
              "Design Thinking",
            ].map((tag, i) => (
              <span key={i} className="tag">{getIcon(tag)} {tag}</span>
            ))}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
