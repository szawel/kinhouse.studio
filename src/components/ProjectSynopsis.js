//ProjectSynopsis.js
import React, { useState, useEffect } from 'react';

import "../styles/ProjectSynopsis.css"

const ProjectSynopsis = ({ htmlContent }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
