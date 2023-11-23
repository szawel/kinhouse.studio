//ProjectProductionInformation.js
import React, { useState, useEffect } from 'react';

import "../styles/ProjectProductionInformation.css"

const ProjectProductionInformation = ({ productionStructure }) => {
  const htmlContent = productionStructure && productionStructure.data 
  ? productionStructure.data.childMarkdownRemark.html 
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
    <div className="production-information-wrapper">
      <div
        className="production-information"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default ProjectProductionInformation;
