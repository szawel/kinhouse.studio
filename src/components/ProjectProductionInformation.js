//ProjectProductionInformation.js
import React from 'react';

import "../styles/ProjectProductionInformation.css"

const ProjectProductionInformation = ({ productionStructure }) => {
  const htmlContent = productionStructure && productionStructure.data 
  ? productionStructure.data.childMarkdownRemark.html 
  : '';

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
