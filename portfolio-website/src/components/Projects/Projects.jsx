import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/600x400?text=E-commerce+Platform',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team functionality.',
    tags: ['React', 'Firebase', 'Redux', 'Material UI'],
    image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with data visualization and export capabilities.',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: 'https://via.placeholder.com/600x400?text=Social+Media+Dashboard',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Weather application with 5-day forecasts, location search, and interactive maps.',
    tags: ['React', 'OpenWeather API', 'Leaflet', 'Sass'],
    image: 'https://via.placeholder.com/600x400?text=Weather+Forecast+App',
    github: 'https://github.com',
    live: 'https://example.com'
  },
]

const Projects = ({ projectEnter, projectLeave, buttonEnter, buttonLeave }) => {
  return (
    <motion.div 
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="projects-container">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects