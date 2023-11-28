//ProjectProductionInformation.js
import React from 'react';

import "../styles/ProjectProductionInformation.css"

const ProjectProductionInformation = ({ productionStructure }) => {
  // Check if the Production Information data is present
  const hasData = productionStructure && productionStructure.data && productionStructure.data.childMarkdownRemark && productionStructure.data.childMarkdownRemark.html;

  // If no data, do not render the component
  if (!hasData) {
    return null;
  }

// Extract the HTML content
  const htmlContent = productionStructure.data.childMarkdownRemark.html;

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