import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { FiAward, FiCode, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import './HomePage.css';

const HomePage = ({ 
  textEnter, 
  textLeave, 
  buttonEnter, 
  buttonLeave,
  projectEnter,
  projectLeave,
  setActiveSection
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const achievements = [
    {
      id: 1,
      title: "Project Completion",
      description: "Successfully launched a full-stack application with 10k+ users",
      icon: <FiCode />,
      date: "June 2023"
    },
    {
      id: 2,
      title: "Award Winner",
      description: "Received Best Developer Award at Tech Conference 2023",
      icon: <FiAward />,
      date: "March 2023"
    },
    {
      id: 3,
      title: "Community Growth",
      description: "Built developer community with 500+ active members",
      icon: <FiUsers />,
      date: "January 2023"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-page">
      {/* Starry Background */}
      

      {/* Home Section */}
      <SectionWrapper id="home" onVisible={() => handleSectionChange('home')}>
        <motion.div 
          className="home-section-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="home-hero-content">
            <div className="home-content">
              <motion.div
                className="home-text"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4>Hello, I'm</h4>
                <h1 
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Sanjay K
                </h1>
                <div className="type-animation">
                  <TypeAnimation
                    sequence={[
                      'I am a Full Stack Developer',
                      1000,
                      'I am a AI Developer',
                      1000,
                      'I love solving problems',
                      1000,
                      'I create amazing experiences',
                      1000
                    ]}
                    wrapper="h3"
                    cursor={true}
                    repeat={Infinity}
                    speed={50}
                    deletionSpeed={70}
                  />
                </div>
              </motion.div>

              <motion.div
                className="home-buttons"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a 
                  href="#contact" 
                  className="btn primary"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className="btn secondary"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </div>

            {/* Achievements Slider */}
            <div className="achievements-slider">
              <div className="slider-controls">
                <button onClick={prevAchievement} className="slider-arrow">
                  <FiChevronLeft />
                </button>
                <button onClick={nextAchievement} className="slider-arrow">
                  <FiChevronRight />
                </button>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAchievement}
                  className="achievement-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="achievement-icon">
                    {achievements[currentAchievement].icon}
                  </div>
                  <h3>{achievements[currentAchievement].title}</h3>
                  <p>{achievements[currentAchievement].description}</p>
                  <div className="achievement-date">
                    {achievements[currentAchievement].date}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Scroll Down</span>
            <div className="arrow"></div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" dark onVisible={() => handleSectionChange('about')}>
        <About 
          textEnter={textEnter} 
          textLeave={textLeave}
        />
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" dark onVisible={() => handleSectionChange('skills')}>
        <Skills 
          textEnter={textEnter} 
          textLeave={textLeave}
        />
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" onVisible={() => handleSectionChange('projects')}>
        <Projects 
          projectEnter={projectEnter}
          projectLeave={projectLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      {/* Resume Section */}
      <SectionWrapper id="resume" dark onVisible={() => handleSectionChange('resume')}>
        <Resume 
          textEnter={textEnter} 
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" onVisible={() => handleSectionChange('contact')}>
        <Contact 
          textEnter={textEnter} 
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>
    </div>
  );
};

export default HomePage;