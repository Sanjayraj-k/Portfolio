import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
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
    description: 'AI-powered chatbot for Chennai Museum that allows users to chat, check ticket availability, and complete bookings with secure payments. Supports WhatsApp message updates and digital ticket sharing for a seamless experience.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    image: ticketImage,
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 2,
    title: 'AI Quiz Generator with Proctor System',
    description: 'AI-based quiz generator where teachers upload PDFs and create topic-specific quizzes. Students practice with videos, audio, and PDFs. Includes auto question generation, score tracking, and proctoring with face and tab-switch detection.',
    tags: ['Teacher Dashboard', 'Student Dashboard', 'React.js', 'Flask', 'MongoDB', 'LangChain', 'LLaMA 3', 'Proctoring'],
    image: quizImage,
    github: 'https://github.com/Sanjayraj-k/AI_Proctor_Quiz.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 3,
    title: 'AI-Powered Mock Interview Platform',
    description: 'A full-stack platform offering multi-round interview simulations with aptitude, coding, and AI-based HR rounds. Includes automated scoring, real-time proctoring, analytics dashboards, and ATS-based resume screening. Users can find company profiles, prepare with community forums, and upload their own study materials to generate custom questions with summaries and reference pages for revision.',
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
    description: 'A full-stack fitness tracking app where users log workouts, track calories, and monitor progress through interactive dashboards. Supports daily activity tracking, personalized fitness goals, and AI-based health insights.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'LLaMA 4'],
    image: fitnessAppImage,
    github: 'https://github.com/Sanjayraj-k/Fitness_app.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 8,
    title: 'AI ClassBot Assistant',
    description: 'An AI chatbot that manages student records using natural language commands. It converts user queries into SQL actions like search, update, and delete  no database knowledge required.',
    tags: ['Streamlit', 'SQL', 'LangChain', 'LLaMA 3', 'AI Chatbot', 'EdTech', 'NLP'],
    image: classbotImage,
    github: 'https://github.com/Sanjayraj-k/classbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 9,
    title: 'ML Streamlit App – Sentiment Analysis & Sleep Prediction',
    description: 'A Streamlit app that provides sentiment analysis using Logistic Regression and predicts ideal sleep duration with a Random Forest model. Combines ML preprocessing, model evaluation, and an interactive UI for real-time insights.',
    tags: ['Streamlit', 'Logistic Regression', 'Random Forest', 'NLTK', 'GridSearchCV', 'Machine Learning', 'Sentiment Analysis', 'Regression'],
    image: mlmodelImage,
    github: 'https://github.com/Sanjayraj-k/MlModels.git',
    live: 'https://mlmodels2.streamlit.app/',
  },



];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
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
    </div>
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
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
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