// BasicInformation.js
import React, { useState, useEffect } from 'react';

import "../styles/ProjectBasicInformation.css"

const ProjectBasicInformation = ({ basicInfo }) => {
  const htmlContent = basicInfo && basicInfo.data 
    ? basicInfo.data.childMarkdownRemark.html 
    : '';

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="basic-information-wrapper">
      <div
        className="basic-information"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default ProjectBasicInformation;
