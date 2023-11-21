import React from 'react';
import { getSrc } from 'gatsby-plugin-image';
import '../styles/ProjectHeader.css';

const ProjectHeader = ({ superscription, title, subTitle, headerPhoto }) => {
  const backgroundImage = headerPhoto ? getSrc(headerPhoto.localFile.childImageSharp.gatsbyImageData) : null;

  return (
    <div className="project-header-wrapper">
      <div className="project-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="header-content">
          <div className="Superscription">{superscription}</div>
          <div className="Title">{title}</div>
          <div className="SubTitle">{subTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
