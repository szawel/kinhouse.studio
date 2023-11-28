// BasicInformation.js
import React from 'react';

import "../styles/ProjectBasicInformation.css"

const ProjectBasicInformation = ({ basicInfo }) => {
  // Check if the synopsis data is present
  const hasData = basicInfo && basicInfo.data && basicInfo.data.childMarkdownRemark && basicInfo.data.childMarkdownRemark.html;

  // If no data, do not render the component
  if (!hasData) {
    return null;
  }

  // Extract the HTML content
  const htmlContent = basicInfo.data.childMarkdownRemark.html;


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
