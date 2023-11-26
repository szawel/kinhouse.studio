import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import Lottie from 'react-lottie';
import logoAnimation from '../matz/Logotyp.3.json';
import menuAnimation from '../matz/menu.01.json';
import '../styles/Menu.css';

const Menu = () => {
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false, direction: 1,
  });

  const toggleLogoAnimation = () => {
    setIsLogoAnimated(prevState => !prevState);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: isOpen ? -1 : 1,
    });
  };

  const logoOptions = {
    loop: false,
    autoplay: false,
    animationData: logoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    eventListeners: [
      {
        eventName: 'complete',
        callback: () => setIsLogoAnimated(false),
      },
    ],
  };


  const menuOptions = {
    loop: false,
    autoplay: false,
    animationData: menuAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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
        <Lottie options={logoOptions}
          isStopped={!isLogoAnimated}
          isPaused={false}
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
          options={menuOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
          direction={animationState.direction}
        />
      </div>
    </div>
  );
};

export default Menu;
