import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import './Resume.css'

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2020 - Present',
    description: 'Led a team of developers to build scalable web applications. Implemented CI/CD pipelines and improved performance by 40%.'
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client projects. Introduced React which reduced development time by 30%.'
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Web Masters',
    period: '2016 - 2018',
    description: 'Built responsive websites and assisted in backend development. Learned modern JavaScript frameworks.'
  }
]

const educations = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    institution: 'Tech University',
    period: '2014 - 2016'
  },
  {
    id: 2,
    degree: 'Bachelor of Software Engineering',
    institution: 'State University',
    period: '2010 - 2014'
  }
]

const Resume = ({ textEnter, textLeave, buttonEnter, buttonLeave }) => {
  return (
    <motion.div 
      className="resume-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="resume-container">
        <motion.h2 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>
        
        <motion.a
          href="/resume.pdf"
          download
          className="download-btn"
          onMouseEnter={buttonEnter}
          onMouseLeave={buttonLeave}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FiDownload /> Download Resume
        </motion.a>
        
        <div className="resume-content">
          <div className="experience-section">
            <motion.h3 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className="timeline-item"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{exp.role}</h4>
                    <div className="timeline-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="education-section">
            <motion.h3 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
            
            <div className="education-list">
              {educations.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="education-item"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume