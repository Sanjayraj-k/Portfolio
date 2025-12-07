import { motion } from 'framer-motion';
import './About.css';
import profile from "../../assets/images/profile.jpg";  // Make sure this path is correct

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
              I am a passionate <strong>Full Stack</strong> and <strong>GenAI enthusiast</strong> with strong problem-solving skills and a drive to build real-world impactful solutions. I enjoy working across both frontend and backend technologies while integrating advanced AI capabilities to create intelligent applications. I have developed several real-time AI and full stack projects that solve practical problems and enhance user experience. With continuous learning and hands-on development, I strive to innovate and build smart solutions that make a meaningful difference.
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
            <img src={profile} alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;