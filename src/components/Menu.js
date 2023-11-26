import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import Lottie from 'react-lottie-player';
import menuAnimation from '../matz/menu.01.json';
import logoAnimation from '../matz/Logotyp.3.json';
import '../styles/Menu.css';

const Menu = () => {
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuAnimated, setIsMenuAnimated] = useState(false);

  // Calculate menu animation duration
  const frameRate = menuAnimation.fr;
  const totalFrames = menuAnimation.op - menuAnimation.ip;
  const menuAnimationDuration = (totalFrames / frameRate) * 1000;

  const logoframeRate = logoAnimation.fr;
  const logototalFrames = logoAnimation.op - logoAnimation.ip;
  const logoAnimationDuration = (logototalFrames / logoframeRate) * 1000;
  

  const toggleLogoAnimation = () => {
    setIsLogoAnimated(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMenuAnimated(true);
  };

  useEffect(() => {
    let logoTimer;
    if (isLogoAnimated) {
      logoTimer = setTimeout(() => {
        setIsLogoAnimated(false);
      }, logoAnimationDuration);
    }
    return () => clearTimeout(logoTimer);
  }, [isLogoAnimated, logoAnimationDuration]);

  useEffect(() => {
    let menuTimer;
    if (isMenuAnimated) {
      menuTimer = setTimeout(() => {
        setIsMenuAnimated(false);
      }, menuAnimationDuration);
    }
    return () => clearTimeout(menuTimer);
  }, [isMenuAnimated, menuAnimationDuration]);

  const navigateToSection = (section, yOffset = -100) => { // Default Y-offset set to -100
    if (window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/index.html') {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  // Add a keyboard event handler
  const handleKeyPress = (event, section, yOffset = 0) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigateToSection(section, yOffset);
    }
  };

  return (
    <div className="menu-container">
      <Link to="/" onClick={toggleLogoAnimation} className="menu-logo">
        <Lottie
          animationData={logoAnimation}
          play={isLogoAnimated}
          style={{ width: '100%', height: '100%' }}
        />
      </Link>
      <div className={`menu-options ${isOpen ? 'show' : ''}`}>
        <div
          tabIndex="0"
          role="button"
          onClick={() => navigateToSection('movies', 0)}
          onKeyPress={(e) => handleKeyPress(e, 'movies')}
          className="option-button">Movies
        </div>
        <div
          tabIndex="0"
          role="button"
          onClick={() => navigateToSection('animation', 0)}
          onKeyPress={(e) => handleKeyPress(e, 'animation')}
          className="option-button">Animation
        </div>
        <div
          tabIndex="0"
          role="button"
          onClick={() => navigateToSection('immersive', 0)}
          onKeyPress={(e) => handleKeyPress(e, 'immersive')}
          className="option-button">Immersive
        </div>
        <div className="vertical-line"></div>
        <div
          tabIndex="0"
          role="button"
          onClick={() => navigateToSection('studio', 0)}
          onKeyPress={(e) => handleKeyPress(e, 'studio')}
          className="option-button">About us
        </div>
        <div className="vertical-line"></div>
        <div className="option-button">Doc</div>
      </div>
      <div
        tabIndex="0"
        role="button"
        aria-label="Toggle menu"
        onClick={toggleMenu}
        onKeyPress={(e) => handleKeyPress(e, 'menu-button')}
        className="menu-button">
        <Lottie
          animationData={menuAnimation}
          play={isMenuAnimated}
          style={{ width: '100%', height: '100%' }}
          direction={isOpen ? 1 : -1}
          goTo={isMenuAnimated ? 0 : null} // Reset to start or leave as is
        />
      </div>
    </div>
  );
};

export default Menu;
