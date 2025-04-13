import { motion } from 'framer-motion'
import './About.css'

const About = ({ textEnter, textLeave }) => {
  return (
    <motion.div 
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="about-container">
        <div className="about-content">
          <motion.h2 
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a passionate Full Stack Developer with 5+ years of experience building web applications. 
              My journey in tech started when I built my first website at 15, and I've been hooked ever since.
            </p>
            <p>
              I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Express, MongoDB). 
              I love creating efficient, scalable, and user-friendly solutions to complex problems.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <div className="profile-image"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About