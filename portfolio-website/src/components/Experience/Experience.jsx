import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import experienceAnimation from '../../assets/animations/Experience.lottie?url';
import './Experience.css';

const Experience = ({ textEnter, textLeave }) => {

    const experience = {
        role: "Software Developer Intern",
        company: "Aerele Technologies",
        location: "India",
        duration: "Aug 2025 - Oct 2025",
        description: "Worked as a Software Developer Intern, contributing to real-world projects and gaining hands-on experience in full-stack development and modern technologies.",
        skills: ["React.js", "Node.js", "MongoDB", "REST APIs", "Frappe", "Linux"]
    };

    return (
        <motion.div
            className="experience-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="experience-container">
                <motion.h2
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className="experience-content">
                    {/* Left Side - Lottie Animation */}
                    <motion.div
                        className="experience-animation"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <DotLottieReact
                            src={experienceAnimation}
                            loop
                            autoplay
                            className="lottie-animation"
                        />
                    </motion.div>

                    {/* Right Side - Experience Details */}
                    <motion.div
                        className="experience-details"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="details-card">
                            <div className="card-header">
                                <div className="role-icon">
                                    <FiBriefcase />
                                </div>
                                <div className="role-info">
                                    <h3>{experience.role}</h3>
                                    <span className="company-name">{experience.company}</span>
                                </div>
                            </div>

                            <div className="card-meta">
                                <div className="meta-item">
                                    <FiCalendar />
                                    <span>{experience.duration}</span>
                                </div>
                                <div className="meta-item">
                                    <FiMapPin />
                                    <span>{experience.location}</span>
                                </div>
                            </div>

                            <p className="card-description">{experience.description}</p>

                            <div className="card-skills">
                                <span className="skills-label">
                                    <FiArrowRight /> Tech Stack
                                </span>
                                <div className="skills-list">
                                    {experience.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="skill-chip"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
