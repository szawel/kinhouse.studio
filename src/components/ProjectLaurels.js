// src/components/ProjectLaurels.js
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/ProjectLaurels.css'; // Import the CSS file

const ProjectLaurels = ({ imageData }) => {
    if (!imageData || imageData.length === 0) {
        return null; // Do not render if there are no images
    }

    return (
        <div className="ProjectLaurelsContainer">
            <div className="imageRow">
                {imageData.map((image, index) => (
                    <GatsbyImage key={index} image={getImage(image)} alt={`Gallery image ${index + 1}`} className="ProjectLaurelsImage" />
                ))}
            </div>
        </div>
    );
};

export default ProjectLaurels;
