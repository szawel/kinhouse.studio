// Logline
import React from 'react';
import "../styles/ProjectLogline.css";

const ProjectLogline = ({ logline }) => {
  // Check if the synopsis data is present
  const hasData = logline && logline.data && logline.data.childMarkdownRemark && logline.data.childMarkdownRemark.html;

  // If no data, do not render the component
  if (!hasData) {
    return null;
  }

  // Extract the HTML content
  const htmlContent = logline.data.childMarkdownRemark.html;

  return (
    <div className="logline-wrapper">
      <div
        className="logline-information"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default ProjectLogline;
