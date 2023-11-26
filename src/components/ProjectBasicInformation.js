// BasicInformation.js
import React from 'react';

import "../styles/ProjectBasicInformation.css"

const ProjectBasicInformation = ({ basicInfo }) => {
  const htmlContent = basicInfo && basicInfo.data 
    ? basicInfo.data.childMarkdownRemark.html 
    : '';

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
