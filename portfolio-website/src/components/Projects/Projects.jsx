import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import './Projects.css';
import ticketvideo from '../../assets/video/chennai museum.mp4';
import quiz from '../../assets/video/Ai Quiz.mp4';
import event from '../../assets/video/Event Management.mp4';
import fitness from '../../assets/video/fitness.mp4';
import fitnessapp from '../../assets/video/fitnessapp.mp4';
import classbot from '../../assets/video/chatbot.mp4';
import mlmodel from '../../assets/video/mlmodels.mp4';
import tagmeVideo from '../../assets/video/tageme.mp4';
import interviewVideo from '../../assets/video/mockinterview.mp4';

// Import unique images for each project
import ticketImage from '../../assets/images/chennai.png'; // Replace with actual image
import quizImage from '../../assets/images/quiz.png'; // Replace with actual image
import eventImage from '../../assets/images/event.png'; // Replace with actual image
import fitnessImage from '../../assets/images/fitnesstracker.png'; // Replace with actual image
import fitnessAppImage from '../../assets/images/fitnessapp.jpg'; // Replace with actual image
import classbotImage from '../../assets/images/classbot.png'; // Replace with actual image
import mlmodelImage from '../../assets/images/mlmodels.png'; // Replace with actual image
import interviewImage from '../../assets/images/mockinterview.png';
import tagemeImage from '../../assets/images/tagme.png';
 // Replace with actual image
const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description: 'An AI chatbot system for Chennai Museum that lets users explore exhibits, book tickets, and make payments. Built with React.js, Flask, and MongoDB, it uses LangChain with LLaMA 3 for smart, natural conversations. Razorpay handles secure payments.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    video: ticketvideo,
    image: ticketImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 2,
    title: 'AI Quiz Generator with Proctor System',
    description: 'An AI quiz app with dashboards for teachers and students. Teachers upload PDFs to auto-generate quizzes, and students take tests with proctoring features like face tracking and tab switch alerts. Built with React.js, Flask, and MongoDB using LangChain and LLaMA 4.',
    tags: ['Teacher Dashboard', 'Student Dashboard', 'React.js', 'Flask', 'MongoDB', 'LangChain', 'LLaMA 3', 'Proctoring'],
    video: quiz,
    image: quizImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/AI_Proctor_Quiz.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 3,
    title: 'AI-Powered Mock Interview Platform',
    description: 'A full-stack AI-driven mock interview system with LLM-based dynamic question generation, aptitude and coding rounds, and real-time proctoring (face detection, audio monitoring, tab switch tracking). Built using React.js, Flask, and MongoDB with Docker for code execution.',
    tags: ['React.js', 'Flask', 'MongoDB', 'LLM', 'OpenCV', 'Docker'],
    video: interviewVideo,
    image: interviewImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/Mock_Interview',
    live: 'https://mock-intervue.vercel.app/',
  },
  {
    id: 4,
    title: 'Event Management System',
    description: 'A full-stack platform for managing college and tech events. Organizers can create and manage events, track registrations, and view analytics. Built with React and Express, secured with JWT authentication, and uses MongoDb for data storage.',
    tags: ['React', 'Express', 'MongoDb', 'JWT', 'Event Management'],
    video: event,
    image: eventImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/EVENT-MANAGEMENT',
    live: 'https://master-event-mangagement.netlify.app/',
  },
  {
    id: 5,
    title: 'TagMeNow — AI Face Matching & Tagging System',
    description: 'An intelligent web app that automatically matches and tags faces in group photos using an MSTN deep learning model. Built with React.js, Tailwind CSS, and MongoDB, it offers fast, accurate tagging and a seamless user experience for organizing memories.',
    tags: ['React.js', 'Tailwind CSS', 'MongoDB', 'MSTN', 'Deep Learning'],
    video: tagmeVideo,
    image: tagemeImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/Face_Recognition.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 6,
    title: 'Fitness Tracker Dashboard',
    description: 'A fitness tracking web app that monitors workouts, calories, and progress over time. Users can log daily activities, view performance charts, and stay motivated. Built with React.js and Node.js, with data stored in MongoDB.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Fitness', 'Dashboard'],
    video: fitness,
    image: fitnessImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/Fitness_tracker.git',
    live: 'https://sanjayfitness.vercel.app/',
  },
  {
    id: 7,
    title: 'Fitness Tracker App',
    description: 'A full-stack fitness tracking app that allows users to log workouts, track calories, and monitor progress through dynamic dashboards. Features include daily activity logging, progress charts, goal setting, and motivational summaries. Built using React Native for the frontend, Node.js for backend APIs, and MongoDB for storing user data securely.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Fitness', 'Workout Tracker', 'Dashboard'],
    video: fitnessapp,
    image: fitnessAppImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/Fitness_app.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 8,
    title: 'AI ClassBot Assistant',
    description: 'ClassBot is an AI-powered assistant built with Streamlit and LLaMA 3 via LangChain, designed to manage student records using natural language commands. It connects to an SQL database (like SQLite or MySQL) to perform real-time queries such as finding the top-scoring student whose name starts with "S" or deleting students without any recorded marks. Just type your request in plain English and let ClassBot handle the SQL logic behind the scenes.',
    tags: ['Streamlit', 'SQL', 'LangChain', 'LLaMA 3', 'AI Chatbot', 'EdTech', 'NLP'],
    video: classbot,
    image: classbotImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/classbot.git',
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
  },
  {
    id: 9,
    title: 'ML Streamlit App – Sentiment Analysis & Sleep Prediction',
    description: 'This Streamlit-powered web app combines two powerful machine learning features in one interface. The Sentiment Analysis module uses Logistic Regression with NLTK preprocessing, enhanced via GridSearchCV for optimal accuracy. The Sleep Time Prediction module applies a Random Forest Regressor to estimate ideal sleep duration based on user data. This project demonstrates my ability to blend data preprocessing, ML modeling, and user-friendly deployment — all in a clean, interactive UI.',
    tags: ['Streamlit', 'Logistic Regression', 'Random Forest', 'NLTK', 'GridSearchCV', 'Machine Learning', 'Sentiment Analysis', 'Regression'],
    video: mlmodel,
    image: mlmodelImage, // Unique image for this project
    github: 'https://github.com/Sanjayraj-k/MlModels.git',
    live: 'https://mlmodels2.streamlit.app/',
  },
];

const ProjectCard = ({ project }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="project-card">
      <div className="project-image">
        {isMobile ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <video
            src={project.video}
            alt={project.title}
            muted
            playsInline
            autoPlay
            loop
            loading="lazy"
          />
        )}
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
  const [visibleProjects, setVisibleProjects] = useState(isMobile ? 3 : projects.length); // Show 3 projects initially on mobile

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length)); // Load 3 more projects, up to the total
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