//ProjectSynopsis.js
import React from 'react';

import "../styles/ProjectSynopsis.css"

const ProjectSynopsis = ({ synopsis }) => {
  const htmlContent = synopsis && synopsis.data 
  ? synopsis.data.childMarkdownRemark.html 
  : '';

  return (
    <div className="synopsis-wrapper">
      <div
        className="production-information"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default ProjectSynopsis;
