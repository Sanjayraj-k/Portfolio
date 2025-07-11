import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import './Projects.css';

// Import unique images for each project
import ticketImage from '../../assets/images/chennai.png';
import quizImage from '../../assets/images/quiz.png';
import eventImage from '../../assets/images/event.png';
import fitnessImage from '../../assets/images/fitnesstracker.png';
import fitnessAppImage from '../../assets/images/fitnessapp.jpg';
import classbotImage from '../../assets/images/classbot.png';
import mlmodelImage from '../../assets/images/mlmodels.png';
import interviewImage from '../../assets/images/mockinterview.png';
import tagemeImage from '../../assets/images/tagme.png';

const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description: 'An AI chatbot system for Chennai Museum that lets users explore exhibits, book tickets, and make payments. Built with React.js, Flask, and MongoDB, it uses LangChain with LLaMA 3 for smart, natural conversations. Razorpay handles secure payments.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    image: ticketImage,
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 2,
    title: 'AI Quiz Generator with Proctor System',
    description: 'An AI quiz app with dashboards for teachers and students. Teachers upload PDFs to auto-generate quizzes, and students take tests with proctoring features like face tracking and tab switch alerts. Built with React.js, Flask, and MongoDB using LangChain and LLaMA 4.',
    tags: ['Teacher Dashboard', 'Student Dashboard', 'React.js', 'Flask', 'MongoDB', 'LangChain', 'LLaMA 3', 'Proctoring'],
    image: quizImage,
    github: 'https://github.com/Sanjayraj-k/AI_Proctor_Quiz.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 3,
    title: 'AI-Powered Mock Interview Platform',
    description: 'A full-stack AI-driven mock interview system with LLM-based dynamic question generation, aptitude and coding rounds, and real-time proctoring (face detection, audio monitoring, tab switch tracking). Built using React.js, Flask, and MongoDB with Docker for code execution.',
    tags: ['React.js', 'Flask', 'MongoDB', 'LLM', 'OpenCV', 'Docker'],
    image: interviewImage,
    github: 'https://github.com/Sanjayraj-k/Mock_Interview',
    live: 'https://mock-intervue.vercel.app/',
  },
  {
    id: 4,
    title: 'Event Management System',
    description: 'A full-stack platform for managing college and tech events. Organizers can create and manage events, track registrations, and view analytics. Built with React and Express, secured with JWT authentication, and uses MongoDb for data storage.',
    tags: ['React', 'Express', 'MongoDb', 'JWT', 'Event Management'],
    image: eventImage,
    github: 'https://github.com/Sanjayraj-k/EVENT-MANAGEMENT',
    live: 'https://master-event-mangagement.netlify.app/',
  },
  {
    id: 5,
    title: 'TagMeNow — AI Face Matching & Tagging System',
    description: 'An intelligent web app that automatically matches and tags faces in group photos using an MSTN deep learning model. Built with React.js, Tailwind CSS, and MongoDB, it offers fast, accurate tagging and a seamless user experience for organizing memories.',
    tags: ['React.js', 'Tailwind CSS', 'MongoDB', 'MSTN', 'Deep Learning'],
    image: tagemeImage,
    github: 'https://github.com/Sanjayraj-k/Face_Recognition.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 6,
    title: 'Fitness Tracker Dashboard',
    description: 'A fitness tracking web app that monitors workouts, calories, and progress over time. Users can log daily activities, view performance charts, and stay motivated. Built with React.js and Node.js, with data stored in MongoDB.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Fitness', 'Dashboard'],
    image: fitnessImage,
    github: 'https://github.com/Sanjayraj-k/Fitness_tracker.git',
    live: 'https://sanjayfitness.vercel.app/',
  },
  {
    id: 7,
    title: 'Fitness Tracker App',
    description: 'A full-stack fitness tracking app that allows users to log workouts, track calories, and monitor progress through dynamic dashboards. Features include daily activity logging, progress charts, goal setting, and motivational summaries. Built using React Native for the frontend, Node.js for backend APIs, and MongoDB for storing user data securely.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Fitness', 'Workout Tracker', 'Dashboard'],
    image: fitnessAppImage,
    github: 'https://github.com/Sanjayraj-k/Fitness_app.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 8,
    title: 'AI ClassBot Assistant',
    description: 'ClassBot is an AI-powered assistant built with Streamlit and LLaMA 3 via LangChain, designed to manage student records using natural language commands. It connects to an SQL database (like SQLite or MySQL) to perform real-time queries such as finding the top-scoring student whose name starts with "S" or deleting students without any recorded marks. Just type your request in plain English and let ClassBot handle the SQL logic behind the scenes.',
    tags: ['Streamlit', 'SQL', 'LangChain', 'LLaMA 3', 'AI Chatbot', 'EdTech', 'NLP'],
    image: classbotImage,
    github: 'https://github.com/Sanjayraj-k/classbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 9,
    title: 'ML Streamlit App – Sentiment Analysis & Sleep Prediction',
    description: 'This Streamlit-powered web app combines two powerful machine learning features in one interface. The Sentiment Analysis module uses Logistic Regression with NLTK preprocessing, enhanced via GridSearchCV for optimal accuracy. The Sleep Time Prediction module applies a Random Forest Regressor to estimate ideal sleep duration based on user data. This project demonstrates my ability to blend data preprocessing, ML modeling, and user-friendly deployment — all in a clean, interactive UI.',
    tags: ['Streamlit', 'Logistic Regression', 'Random Forest', 'NLTK', 'GridSearchCV', 'Machine Learning', 'Sentiment Analysis', 'Regression'],
    image: mlmodelImage,
    github: 'https://github.com/Sanjayraj-k/MlModels.git',
    live: 'https://mlmodels2.streamlit.app/',
  },
];

const ProjectCard = ({ project, index }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 200 + index * 150); // Stagger animation for each card

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      className="project-card"
      initial={{
        x: 0,
        y: 0,
        rotate: index === 0 ? 0 : index === 1 ? -5 : 5,
        scale: 1,
        zIndex: projects.length - index,
      }}
      animate={{
        x: isAnimated ? 0 : 0,
        y: isAnimated ? 0 : -(index * 20),
        rotate: isAnimated ? 0 : index === 0 ? 0 : index === 1 ? -5 : 5,
        scale: isAnimated ? 1 : index === 0 ? 1 : 0.95,
        zIndex: isAnimated ? 1 : projects.length - index,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0,
      }}
      style={{
        transformOrigin: 'center center',
      }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const isMobile = window.innerWidth <= 768;
  const [visibleProjects, setVisibleProjects] = useState(isMobile ? 3 : projects.length);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <motion.div
      className="projects-section"
      initial={isMobile ? {} : { opacity: 0 }}
      whileInView={isMobile ? {} : { opacity: 1 }}
      transition={isMobile ? {} : { duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="projects-container">
        <motion.h2
          initial={isMobile ? {} : { x: -50, opacity: 0 }}
          whileInView={isMobile ? {} : { x: 0, opacity: 1 }}
          transition={isMobile ? {} : { duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {isMobile && visibleProjects < projects.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;