// Project.js
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../matz/dot.01.json'; // Update this path
import '../styles/Project.css';

const Project = ({ id, title, categories }) => {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    direction: 1, // 1 for normal, -1 for reverse
  });

  function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleMouseEnter = debounce(() => {
    setAnimationState({ isStopped: false, direction: 1 });
  }, 200); // 200 milliseconds debounce

  const handleMouseLeave = debounce(() => {
    setAnimationState({ isStopped: false, direction: -1 });
  }, 200); // 200 milliseconds debounce


  useEffect(() => {
    if (!animationState.isStopped) {
      setTimeout(() => {
        setAnimationState({ ...animationState, isStopped: true });
      }, 10000); // Delay of 2000 milliseconds
    }
  }, [animationState.isStopped, animationState.direction]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='projectContainer'
      // onMouseOver={handleMouseEnter}
      // onMouseOut={handleMouseLeave}>
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className='id'>{id}</div>
      <Lottie options={defaultOptions} height={70} width={70} isStopped={animationState.isStopped} direction={animationState.direction}/>
      <div className='title'>{title}</div>
      <Lottie options={defaultOptions} height={70} width={70} isStopped={animationState.isStopped} direction={animationState.direction}/>
      <div className='categories'>{categories}</div>
      <Lottie options={defaultOptions} height={70} width={70} isStopped={animationState.isStopped} direction={animationState.direction}/>
    </div>
  );
};

export default Project;
