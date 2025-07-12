import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleEmailClick = (e) => {
    // Fallback for devices without an email client
    const canOpenMailto = window.navigator.userAgent.includes('Mobi')
      ? !!navigator.userAgent.match(/(iPhone|iPad|Android)/) // Check for mobile devices likely to have an email app
      : !!window.navigator.mimeTypes['x-scheme-handler/mailto']; // Check for desktop email client support

    if (!canOpenMailto) {
      e.preventDefault(); // Prevent opening a new tab
      alert(
        'No email client detected. You can reach me at ksanjayias@gmail.com or use the Contact section below.'
      );
      // Optionally scroll to the Contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'stats', label: 'Stats' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span 
                    className="underline"
                    layoutId="underline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

       <div className="navbar-social">
          <a href="https://github.com/Sanjayraj-k/" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sanjayraj-k/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="mailto:ksanjayias@gmail.com">
            <FiMail />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;