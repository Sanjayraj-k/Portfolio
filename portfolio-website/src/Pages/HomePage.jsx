import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiAward, FiChevronLeft, FiChevronRight, FiCalendar, FiTrendingUp, FiBookOpen, FiLayers } from 'react-icons/fi';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';

import './HomePage.css';

// Images
import achievementsimg from '../assets/images/CSI CERTIFICATE 1 price.jpg';
import achievementsimg2 from '../assets/images/kgisl coding second prize.png';
import achievementsimg3 from '../assets/images/CSI.jpg';
import resume from '../assets/images/Resume.pdf';
import exodia from '../assets/images/exodia.jpg';
import ai from '../assets/images/ai.jpg';
import gen from '../assets/images/gen ai.jpg';
import srcas from '../assets/images/srcas.jpg';

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

  const achievements = [
    {
      id: 8,
      title: "SRCAS Hackathon 2.0",
      prize: "1st Prize",
      project: "LLM for Cyber Issue SOPs",
      college: "Sri Ramakrishna College of Arts and Science",
      date: "December 14, 2025",
      image: srcas
    }
    ,
    {
      id: 4,
      title: "GEN AI Cognitive Hackathon",
      prize: "1st Prize",
      project: "StudyMate - AI Study Assistant",
      college: "PSG College of Technology",
      date: "September 2025",
      image: gen
    },
    {
      id: 1,
      title: "CSD 24 Hour Hackathon",
      prize: "1st Prize",
      project: "AI Quiz Generator",
      college: "PSG College of Technology",
      date: "March 2025",
      image: achievementsimg
    },
    {
      id: 2,
      title: "KGISL Coding Contest",
      prize: "2nd Prize",
      project: "Complex DSA Problem Solving",
      college: "KGISL Institute",
      date: "October 2024",
      image: achievementsimg2
    },
    {
      id: 3,
      title: "CSI Project Expo",
      prize: "1st Prize",
      project: "Museum Ticket Chatbot",
      college: "PSG College of Technology",
      date: "April 2025",
      image: achievementsimg3
    },
    {
      id: 5,
      title: "KPR Tech Auro 2.0",
      prize: "3rd Prize",
      project: "Innovative AI Solution",
      college: "KPR Institute",
      date: "September 2025",
      image: gen
    },
    {
      id: 6,
      title: "Exodica Hackathon",
      prize: "1st Prize",
      project: "Face Album Matching",
      college: "PSG College of Technology",
      date: "2025",
      image: exodia
    },
    {
      id: 7,
      title: "Newells2K25",
      prize: "1st Prize",
      project: "AI Mock Interviewer",
      college: "PSG College of Technology",
      date: "October 2025",
      image: ai
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextAchievement();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentAchievement]);

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
                  href={resume}
                  className="btn secondary"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </div>

            {/* Achievement Slider Section */}
            <div className="achievements-slider">
              <h2 className="achievements-heading">
                <FiAward className="heading-icon" />
                Achievements
              </h2>

              <div className="slider-wrapper">
                {/* Left Arrow (Outside Card) */}
                <button
                  onClick={prevAchievement}
                  className="slider-arrow slider-arrow-left"
                >
                  <FiChevronLeft />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAchievement}
                    className="achievement-card"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="achievement-image">
                      <img
                        src={achievements[currentAchievement].image}
                        alt={achievements[currentAchievement].title}
                      />
                    </div>
                    <div className="achievement-content">
                      <h3>{achievements[currentAchievement].title}</h3>
                      <div className="achievement-details">
                        <div className="achievement-info">
                          <FiTrendingUp className="info-icon" />
                          <span>{achievements[currentAchievement].prize}</span>
                        </div>
                        <div className="achievement-info">
                          <FiLayers className="info-icon" />
                          <span>{achievements[currentAchievement].project}</span>
                        </div>
                        <div className="achievement-info">
                          <FiBookOpen className="info-icon" />
                          <span>{achievements[currentAchievement].college}</span>
                        </div>
                        <div className="achievement-info">
                          <FiCalendar className="info-icon" />
                          <span>{achievements[currentAchievement].date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Arrow (Outside Card) */}
                <button
                  onClick={nextAchievement}
                  className="slider-arrow slider-arrow-right"
                >
                  <FiChevronRight />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="slider-dots">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${currentAchievement === index ? 'active' : ''}`}
                    onClick={() => setCurrentAchievement(index)}
                  />
                ))}
              </div>
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

      <SectionWrapper id="about" dark onVisible={() => handleSectionChange('about')}>
        <About textEnter={textEnter} textLeave={textLeave} />
      </SectionWrapper>

      <SectionWrapper id="skills" dark onVisible={() => handleSectionChange('skills')}>
        <Skills textEnter={textEnter} textLeave={textLeave} />
      </SectionWrapper>

      <SectionWrapper id="experience" onVisible={() => handleSectionChange('experience')}>
        <Experience textEnter={textEnter} textLeave={textLeave} />
      </SectionWrapper>

      <SectionWrapper id="projects" dark onVisible={() => handleSectionChange('projects')}>
        <Projects
          projectEnter={projectEnter}
          projectLeave={projectLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      <SectionWrapper id="stats" dark onVisible={() => handleSectionChange('resume')}>
        <Resume
          textEnter={textEnter}
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

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