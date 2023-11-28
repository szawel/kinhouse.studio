import React from 'react';
import "../styles/ProjectSynopsis.css";

const ProjectSynopsis = ({ synopsis }) => {
  // Check if the synopsis data is present
  const hasData = synopsis && synopsis.data && synopsis.data.childMarkdownRemark && synopsis.data.childMarkdownRemark.html;

  // If no data, do not render the component
  if (!hasData) {
    return null;
  }

  // Extract the HTML content
  const htmlContent = synopsis.data.childMarkdownRemark.html;

  return (
    <div className="synopsis-wrapper">
      <div
        className="synopsis-information"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default ProjectSynopsis;
