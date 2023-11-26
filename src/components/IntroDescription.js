// IntroDescription.js
import React from 'react';
import "../styles/IntroDescription.css";

const IntroDescription = ({ markdownData }) => {
    return (
        <div className="intro-description">
            {markdownData}
        </div>
    );
};

export default IntroDescription;
