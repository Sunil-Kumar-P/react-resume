import React, { useState } from 'react';
import './Navbar.css';
import { VscMenu, VscChromeClose } from 'react-icons/vsc'; // Import both icons
import { useTheme } from '../ThemeContext';

export default function Navbar({ heroRef }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useTheme(); // Use context for theme

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const scrollToHero = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (heroRef && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const listOfLinks = [
    { name: "About", action: scrollToHero },
    // Add other links here
  ];

  return (
    <div className={`nav-bar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <h1 className='nav-header'>Sunil</h1>

      <div className="nav-links">
        {listOfLinks.map((link, index) => (
          <a href="#" className="nav-link" key={index} onClick={link.action}>
            {link.name}
          </a>
        ))}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>

      <div className="menu-icon-container">
        {isPopupOpen ? (
          <VscChromeClose size={'2rem'} className='nav-menu-icon' onClick={togglePopup} />
        ) : (
          <VscMenu size={'2rem'} className='nav-menu-icon' onClick={togglePopup} />
        )}
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-menu" onClick={(e) => e.stopPropagation()}>
            {listOfLinks.map((link, index) => (
              <a href="#" className="popup-link" key={index} onClick={link.action}>
                {link.name}
              </a>
            ))}
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
