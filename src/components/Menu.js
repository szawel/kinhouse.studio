import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import Lottie from 'react-lottie';
import logoAnimation from '../matz/Logotyp.json';
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

  return (
    <div className="menu-container">
      <div onClick={toggleLogoAnimation} className="menu-logo">
        <Lottie options={logoOptions}
          isStopped={!isLogoAnimated}
          isPaused={false}
        />
      </div>
      <div className={`menu-options ${isOpen ? 'show' : ''}`}>
        <div onClick={() => navigateToSection('movies', 0)} className="option-button">Movies</div>
        <div onClick={() => navigateToSection('animation', 0)} className="option-button">Animation</div>
        <div onClick={() => navigateToSection('immersive', 0)} className="option-button">Immersive</div>
        <div className="vertical-line"></div>
        <div onClick={() => navigateToSection('immersive', 0)} className="option-button">Studio</div>
        <div className="option-button">Contact</div>
        <div className="vertical-line"></div>
        <div className="option-button">Doc</div>
      </div>
      <div onClick={toggleMenu} className="menu-button">
        <Lottie options={menuOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
          direction={animationState.direction}
        />
      </div>
    </div>
  );
};

export default Menu;
