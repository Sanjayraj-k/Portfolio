import React from 'react';
import './Skills.css';

const Skills = ({ textEnter, textLeave }) => {
  const languages = [
    { name: 'Python', color: '#3776AB', icon: '🐍' },
    { name: 'Java', color: '#007396', icon: '☕' },
    { name: 'Langchain', color: '#00599C', icon: '🔗' },
    { name: 'LangGraph', color: '#00599C', icon: '🕸️' },
    { name: 'Machine Learning', color: '#FF6F00', icon: '🤖' },
    { name: 'Deep Learning', color: '#FF4081', icon: '🧠' },
    { name: 'Computer Vision', color: '#9C27B0', icon: '👁️' },
  ];

  const frontendTech = [
    { name: 'HTML', color: '#E34F26', icon: '🌐' },
    { name: 'CSS', color: '#1572B6', icon: '🎨' },
    { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'Bootstrap', color: '#7952B3', icon: '🅱️' },
    { name: 'Tailwind CSS', color: '#06B6D4', icon: '🌊' }
  ];

  const backendTech = [
    { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
    { name: 'Express JS', color: '#68CC00', icon: '🚀' },
    { name: 'Node.js', color: '#68A063', icon: '📗' },
    { name: 'Flask', color: '#000000', icon: '🌶️' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'SQL', color: '#00D4FF', icon: '🗄️' }
  ];

  const platformsTools = [
    { name: 'Github', color: '#181717', icon: '🐙' },
    { name: 'VS Code', color: '#007ACC', icon: '💻' },
    { name: 'Git', color: '#F05032', icon: '📊' },
    { name: 'Docker', color: '#2496ED', icon: '🐳' },
  ];

  const TechCard = ({ tech }) => (
    <div className="tech-card">
      <div className="tech-icon" style={{ backgroundColor: tech.color }}>
        {tech.icon}
      </div>
      <span className="tech-name">{tech.name}</span>
    </div>
  );

  return (
    <div className="tech-showcase">
      <div className="container">
        <h2 
          className="section-title main-title"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Skill<span className="highlight">s</span>
        </h2>
        
        <section className="tech-section">
          <h3 className="section-title">
            Front<span>end</span>
          </h3>
          <div className="tech-grid">
            {frontendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>

        <section className="tech-section">
          <h3 className="section-title">
            Back<span>end</span>
          </h3>
          <div className="tech-grid">
            {backendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        <section className="tech-section">
          <h3 className="section-title">
            Languages& <span>AI</span>
          </h3>
          <div className="tech-grid">
            {languages.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>

        <section className="tech-section">
          <h3 className="section-title">
            Platforms <span>& Tools</span>
          </h3>
          <div className="tech-grid">
            {platformsTools.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;