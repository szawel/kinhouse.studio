import React from 'react';
import '../styles/Project.css';

const Project = ({ id, title, categories }) => {

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
