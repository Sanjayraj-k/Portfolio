import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import ticketvideo from '../../assets/video/chennai museum.mp4';
import quiz from '../../assets/video/Ai Quiz.mp4'
import event from '../../assets/video/Event Management.mp4' 
import fitness from '../../assets/video/fitness.mp4';
import fitnessapp from '../../assets/video/fitnessapp.mp4'; 
import classbot from '../../assets/video/chatbot.mp4';
import mlmodel from '../../assets/video/mlmodels.mp4'; // Import a demo video here if available
// Import chatbot.mp4 as classbotVideo
// Replace with the correct import for 'video (1).mp4' 
 // Import your video file here
// Import your video file here
const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description: 'An AI chatbot system for Chennai Museum that lets users explore exhibits, book tickets, and make payments. Built with React.js, Flask, and MongoDB, it uses LangChain with LLaMA 3 for smart, natural conversations. Razorpay handles secure payments.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    video: ticketvideo, // Replace with actual video URL
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git', // Replace with your actual GitHub repo link
    live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg',
    
  },
  {
  id: 2,
  title: 'AI Quiz Generator with Proctor System',
  description: 'An AI quiz app with dashboards for teachers and students. Teachers upload PDFs to auto-generate quizzes, and students take tests with proctoring features like face tracking and tab switch alerts. Built with React.js, Flask, and MongoDB using LangChain and LLaMA 4.',
  tags: ['Teacher Dashboard', 'Student Dashboard', 'React.js', 'Flask', 'MongoDB', 'LangChain', 'LLaMA 3', 'Proctoring'],
  video: quiz, // Replace with actual video URL
  github: 'https://github.com/Sanjayraj-k/AI_Proctor_Quiz.git',
  live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg'
}
    ,
  {
    id: 3,
    title: 'Event Management System',
    description: 'A full-stack platform for managing college and tech events. Organizers can create and manage events, track registrations, and view analytics. Built with React and Express, secured with JWT authentication, and uses MongoDb for data storage.',
    tags: ['React', 'Express', 'MongoDb', 'JWT', 'Event Management'],
    video: event, // Replace with actual video URL
    github: 'https://github.com/Sanjayraj-k/EVENT-MANAGEMENT', // Replace with your actual GitHub repo link
    live: 'https://master-event-mangagement.netlify.app/', // Replace with your live link
  },
  {
  id: 4,
  title: 'Fitness Tracker Dashboard',
  description: 'A fitness tracking web app that monitors workouts, calories, and progress over time. Users can log daily activities, view performance charts, and stay motivated. Built with React.js and Node.js, with data stored in MongoDB.',
  tags: ['React.js', 'Node.js', 'MongoDB', 'Fitness', 'Dashboard'],
  video: fitness, // Replace 'video' with the actual import name for your video file
  github: 'https://github.com/Sanjayraj-k/Fitness_tracker.git', // Replace with your actual repo link
  live: 'https://sanjayfitness.vercel.app/' // Replace with your actual live link
},
{
  id: 5,
  title: 'Fitness Tracker App',
  description: 'A full-stack fitness tracking app that allows users to log workouts, track calories, and monitor progress through dynamic dashboards. Features include daily activity logging, progress charts, goal setting, and motivational summaries. Built using React Native for the frontend, Node.js for backend APIs, and MongoDB for storing user data securely.',
  tags: ['React Native', 'Node.js', 'MongoDB', 'Fitness', 'Workout Tracker', 'Dashboard'],
  video: fitnessapp, // Replace with the correct import for 'video (1).mp4'
  github: 'https://github.com/Sanjayraj-k/Fitness_app.git', // Replace with actual repo link
  live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg' // Replace with actual live link
},
{
  id: 6,
  title: 'AI ClassBot Assistant',
  description: 'ClassBot is an AI-powered assistant built with Streamlit and LLaMA 3 via LangChain, designed to manage student records using natural language commands. It connects to an SQL database (like SQLite or MySQL) to perform real-time queries such as finding the top-scoring student whose name starts with "S" or deleting students without any recorded marks. Just type your request in plain English and let ClassBot handle the SQL logic behind the scenes.',
  tags: ['Streamlit', 'SQL', 'LangChain', 'LLaMA 3', 'AI Chatbot', 'EdTech', 'NLP'],
  video: classbot, // Import chatbot.mp4 as classbotVideo
  github: 'https://github.com/Sanjayraj-k/classbot.git',
  live: 'https://drive.google.com/drive/folders/1OOWh5aCHHF4S2SPqfTUkguF_ebY8Figg'
},
{
  id: 7,
  title: 'ML Streamlit App – Sentiment Analysis & Sleep Prediction',
  description: 'This Streamlit-powered web app combines two powerful machine learning features in one interface. The Sentiment Analysis module uses Logistic Regression with NLTK preprocessing, enhanced via GridSearchCV for optimal accuracy. The Sleep Time Prediction module applies a Random Forest Regressor to estimate ideal sleep duration based on user data. This project demonstrates my ability to blend data preprocessing, ML modeling, and user-friendly deployment — all in a clean, interactive UI.',
  tags: ['Streamlit', 'Logistic Regression', 'Random Forest', 'NLTK', 'GridSearchCV', 'Machine Learning', 'Sentiment Analysis', 'Regression'],
  video: mlmodel, // Import a demo video here if available
  github: 'https://github.com/Sanjayraj-k/MlModels.git',
  live: 'https://mlmodels2.streamlit.app/'
}



];

const Projects = () => {
  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
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
            >
              <div className="project-image">
                <video
                  src={project.video}
                  alt={project.title}
                  muted
                  playsInline
                  ref={(el) => el && el.play().catch(() => console.log('Autoplay failed'))}
                />
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
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;