import React from "react";
import "../styles/ProjectTrailer.css"; // Importing the CSS file

const ProjectTrailer = ({ trailer }) => {

  const hasData = trailer;
  // Ensure the trailer prop is available
  if (!hasData) {
    console.log("no Trailer")
    return null;
  }

  // This dangerouslySetInnerHTML is necessary to render the HTML from Strapi
  return (
    <div className="project-trailer">
      <div className="iframe-wrapper">
        <div dangerouslySetInnerHTML={{ __html: trailer }}>
        </div>
      </div>

    </div>
  );
};

export default ProjectTrailer;