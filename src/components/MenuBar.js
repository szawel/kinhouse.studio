import React, { useState, useRef, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import Lottie from 'react-lottie-player';
import logoAnimation from '../matz/Logotyp.3.json';
import menuAnimation from '../matz/menu.01.json';
import '../styles/MenuBar.css';

const MenuBar = () => {
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [isMenuAnimated, setIsMenuAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Calculate logo animation duration
  const logoframeRate = logoAnimation.fr;
  const logototalFrames = logoAnimation.op - logoAnimation.ip;
  const logoAnimationDuration = (logototalFrames / logoframeRate) * 1000;

  // Calculate menu animation duration
  const frameRate = menuAnimation.fr;
  const totalFrames = menuAnimation.op - menuAnimation.ip;
  // const menuAnimationDuration = (totalFrames / frameRate) * 1000;
  const menuAnimationDuration = 430;
  
  
  const toggleLogoAnimation = () => {
    setIsLogoAnimated(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = (section, yOffset = -150) => {
    if (window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/index.html') {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        // Wait for the next event loop tick to ensure all elements are rendered correctly
        setTimeout(() => {
          const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + -70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 0);
      }
    } else {
      navigate(`/#${section}`);
    }
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
  
  const toggleMenuList = isOpen ? "menu-list-container open" : "menu-list-container";
  const toggleMenuBar = isOpen ? "menu-bar open" : "menu-bar";
  const toggleBarA = isOpen ? "bar-a open" : "bar-a";
  const toggleBarB = isOpen ? "bar-b open" : "bar-b";
  const toggleBarC = isOpen ? "bar-c open" : "bar-c";
  
  
  return (
    <div className='menu-container'>
      <div className='menu-gui-container'>
        <div className='gui-logo'>
          <Link to="/" onClick={toggleLogoAnimation} className="menu-logo">
            <Lottie
              animationData={logoAnimation}
              play={isLogoAnimated}
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </div>
        <div className='gui-button' onClick={toggleOpen}>
          <div className={toggleMenuBar}>
            <div className={toggleBarA}/>
            <div className={toggleBarB}/>
            <div className={toggleBarC}/>
          </div>
        </div>
      </div>
      <div onClick={toggleOpen} className={toggleMenuList}>
        <div className='list-button' onClick={() => navigateToSection('movies', 0)} >Movies</div>
        <div className='list-button' onClick={() => navigateToSection('animation', 0)} >Animation</div>
        <div className='list-button' onClick={() => navigateToSection('immersive', 0)} >Immersive</div>
        <div className='list-button' onClick={() => navigateToSection('about us', 0)} >About us</div>
        <div className='list-button' onClick={() => navigateToSection('movies', 0)} >Doc</div>
      </div>
    </div>
  );
};

export default MenuBar;
