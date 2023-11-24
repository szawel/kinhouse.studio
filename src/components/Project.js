import React, { useState, useCallback } from 'react';
import animationData from '../matz/dot.01.json'; // Update this path
import '../styles/Project.css';

const Project = ({ id, title, categories }) => {
  const [animationState, setAnimationState] = useState({
  });



  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='projectContainer'>
        <div className='projectContainerDot'>
          <div className='dot'>

          </div>
        </div>
      <div className='projectContainerText'>
        <div className='id'>{id}</div>
        <div className='title'>{title}</div>
        <div className='categories'>{categories}</div>
      </div>
    </div>
  );
};

export default Project;
