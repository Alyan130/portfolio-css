import React from 'react';
import SkillCard from '../skills/skillsCard';
import { Code2, Palette, Brain } from 'lucide-react';
import '../skills/skills.css';

const Skills = () => {
  const educationData = [
    {
      period: "2020-2022",
      title: "Pre-Engineering",
      institution: "Govt CollegeFormen",
    },
    {
      period: "2022-Present",
      title: "BS-Computer Science",
      institution: "Dawood University of Engineering and Technology",
    },
    {
      period: "2024-Present",
      title: "Cloud Applied Generative AI Engineer",
      institution: "Governor IT Initiative",
    }
  ];

  const technicalSkills = [
    { name: "HTML", progress: 95 },
    { name: "CSS", progress: 75 },
    { name: "Javascript", progress: 80 },
    { name: "Typescript", progress: 80 },
    { name: "Figma UI Design", progress: 60 }
  ];

  const learningSkills = [
    {
      title: "Web Design",
      description: "Learn how to design websites with understanding of UI/UX."
    },
    {
      title: "Nextjs",
      description: "Exploring modern web application framework Nextjs to build fast and scalable products."
    },
    {
      title: "Tailwind CSS",
      description: "CSS framework to develop websites with ease."
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-underline"></div>
      </div>

      <div className="skills-content">
        <div className="skills-section">
          <div className="section-header">
            <Brain className="section-icon" />
            <h2>Education</h2>
          </div>
          <div className="education-cards">
            {educationData.map((edu, index) => (
              <div key={index} className="education-card">
                <span className="period">{edu.period}</span>
                <h3>{edu.title}</h3>
                <p>{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="section-header">
            <Code2 className="section-icon" />
            <h2>Technical Skills</h2>
          </div>
          <div className="technical-skills">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-bar">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="section-header">
            <Palette className="section-icon" />
            <h2>Learning</h2>
          </div>
          <div className="learning-cards">
            {learningSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;