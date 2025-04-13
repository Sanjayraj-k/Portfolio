import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJs, FaDatabase, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiGraphql, SiDocker, SiRedux } from 'react-icons/si'
import './Skills.css'

const skills = [
  { name: 'JavaScript', level: 95, icon: <FaJs />, color: '#f0db4f' },
  { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: '#007acc' },
  { name: 'React', level: 90, icon: <FaReact />, color: '#61dafb' },
  { name: 'Node.js', level: 88, icon: <FaNodeJs />, color: '#68a063' },
  { name: 'Express', level: 85, icon: <FaNodeJs />, color: '#000000' },
  { name: 'MongoDB', level: 80, icon: <FaDatabase />, color: '#4DB33D' },
  { name: 'GraphQL', level: 75, icon: <SiGraphql />, color: '#e535ab' },
  { name: 'Docker', level: 70, icon: <SiDocker />, color: '#2496ed' },
  { name: 'Redux', level: 85, icon: <SiRedux />, color: '#764abc' },
  { name: 'CSS/Sass', level: 90, icon: <FaCss3Alt />, color: '#2965f1' },
]

const Skills = ({ textEnter, textLeave }) => {
  return (
    <motion.div 
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="skills-container">
        <motion.h2 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ backgroundColor: skill.color }}
                />
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills