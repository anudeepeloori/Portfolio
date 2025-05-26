// import React from "react";
// import "./Skills.css";
// import { BsPatchCheckFill } from "react-icons/bs";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaAngular,
//   FaAws,
//   FaDocker,
//   FaJava,
//   FaPython,
//   FaDatabase,
//   FaGitAlt,
//   FaNodeJs,
// } from "react-icons/fa";

// import {
//   SiTypescript,
//   SiBootstrap,
//   SiKubernetes,
//   SiMongodb,
//   SiJunit5,
//   SiSpring,
//   SiPostman,
//   SiCplusplus,
//   SiC,
//   SiJson,
//   SiHibernate,
//   SiSelenium,
//   SiCmake,
// } from "react-icons/si";

// const frontendSkills = [
//   { name: "HTML", level: "Experienced" },
//   { name: "CSS", level: "Experienced" },
//   { name: "JavaScript", level: "Experienced" },
//   { name: "React", level: "Experienced" },
//   { name: "Angular", level: "Experienced" },
//   { name: "Bootstrap", level: "Experienced" },
//   { name: "TypeScript", level: "Experienced" },
//   { name: "AWS", level: "Experienced" },
//   { name: "Docker", level: "Experienced" },
//   { name: "Kubernetes", level: "Experienced" },
//   { name: "SQL", level: "Experienced" },
//   { name: "MongoDB", level: "Experienced" },
//   { name: "Junit", level: "Experienced" },
//   { name: "Mockito", level: "Experienced" },
// ];

// const backendSkills = [
//   { name: "Java", level: "Experienced" },
//   { name: "C++", level: "Experienced" },
//   { name: "Python", level: "Experienced" },
//   { name: "Data Structures", level: "Experienced" },
//   { name: "Spring Boot", level: "Experienced" },
//   { name: "Spring MVC", level: "Experienced" },
//   { name: "Spring Security", level: "Experienced" },
//   { name: "Hibernate and JPA", level: "Experienced" },
//   { name: "Microservices", level: "Experienced" },
//   { name: "Maven", level: "Experienced" },
//   { name: "JDBC", level: "Experienced" },
//   { name: "JSON", level: "Experienced" },
//   { name: "Postman", level: "Experienced" },
//   { name: "CI/CD", level: "Experienced" },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="skills-section">
//   <h1 className="skills-heading">My Technical Toolbox</h1>
//   <p className="skills-subtext">Technologies I use to design, build, and scale robust solutions.</p>
//       <div className="skills-wrapper">
//         <div className="skills-box">
//           <h2>Frontend & Cloud</h2>
//           <div className="skills-grid">
//             {frontendSkills.map((skill, index) => (
//               <div className="skill-item" key={index}>
//                 <BsPatchCheckFill className="check-icon" />
//                 <div>
//                   <strong>{skill.name}</strong>
//                   <p>{skill.level}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="skills-box">
//           <h2>Backend Development</h2>
//           <div className="skills-grid">
//             {backendSkills.map((skill, index) => (
//               <div className="skill-item" key={index}>
//                 <BsPatchCheckFill className="check-icon" />
//                 <div>
//                   <strong>{skill.name}</strong>
//                   <p>{skill.level}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiBootstrap,
  SiKubernetes,
  SiMongodb,
  SiJunit5,
  SiSpring,
  SiPostman,
  SiCplusplus,
  SiC,
  SiJson,
  SiHibernate,
  SiSelenium,
  SiCmake,
} from "react-icons/si";

// Skill arrays
const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "Angular", level: "Experienced" },
  { name: "Bootstrap", level: "Experienced" },
  { name: "TypeScript", level: "Experienced" },
  { name: "AWS", level: "Experienced" },
  { name: "Docker", level: "Experienced" },
  { name: "Kubernetes", level: "Experienced" },
  { name: "SQL", level: "Experienced" },
  { name: "MongoDB", level: "Experienced" },
  { name: "Junit", level: "Experienced" },
  { name: "Mockito", level: "Experienced" },
];

const backendSkills = [
  { name: "Java", level: "Experienced" },
  { name: "C++", level: "Experienced" },
  { name: "Python", level: "Experienced" },
  { name: "Data Structures", level: "Experienced" },
  { name: "Spring Boot", level: "Experienced" },
  { name: "Spring MVC", level: "Experienced" },
  { name: "Spring Security", level: "Experienced" },
  { name: "Hibernate and JPA", level: "Experienced" },
  { name: "Microservices", level: "Experienced" },
  { name: "Maven", level: "Experienced" },
  { name: "JDBC", level: "Experienced" },
  { name: "JSON", level: "Experienced" },
  { name: "Postman", level: "Experienced" },
  { name: "CI/CD", level: "Experienced" },
];

// Icon mapping
const iconMap = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  React: <FaReact />,
  Angular: <FaAngular />,
  Bootstrap: <SiBootstrap />,
  TypeScript: <SiTypescript />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  Kubernetes: <SiKubernetes />,
  SQL: <FaDatabase />,
  MongoDB: <SiMongodb />,
  Junit: <SiJunit5 />,
  Mockito: <SiSelenium />,
  Java: <FaJava />,
  "C++": <SiCplusplus />,
  Python: <FaPython />,
  "Data Structures": <SiCmake />,
  "Spring Boot": <SiSpring />,
  "Spring MVC": <SiSpring />,
  "Spring Security": <SiSpring />,
  "Hibernate and JPA": <SiHibernate />,
  Microservices: <FaNodeJs />,
  Maven: <FaGitAlt />,
  JDBC: <FaDatabase />,
  JSON: <SiJson />,
  Postman: <SiPostman />,
  "CI/CD": <FaGitAlt />,
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-heading">My Technical Toolbox</h1>
      <p className="skills-subtext">
        Technologies I use to design, build, and scale robust solutions.
      </p>

      <div className="skills-wrapper">
        {/* Frontend Box */}
        <div className="skills-box">
          <h2>Frontend & Cloud</h2>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span className="tech-icon">{iconMap[skill.name]}</span>
                <div>
                  <strong>{skill.name}</strong>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Box */}
        <div className="skills-box">
          <h2>Backend Development</h2>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span className="tech-icon">{iconMap[skill.name]}</span>
                <div>
                  <strong>{skill.name}</strong>
                  <p>{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

