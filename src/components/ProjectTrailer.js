import React from "react";
import "../styles/ProjectTrailer.css"; // Importing the CSS file

const ProjectTrailer = ({ trailer }) => {
  // Ensure the trailer prop is available
  if (!trailer) {
    return null;
  }

  // This dangerouslySetInnerHTML is necessary to render the HTML from Strapi
  return (
    <div className="project-trailer" dangerouslySetInnerHTML={{ __html: trailer }} />
  );
};

export default ProjectTrailer;
