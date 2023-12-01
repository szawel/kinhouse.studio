// IntroDescription.js
import React from 'react';
import "../styles/IntroDescription.css";

const IntroDescription = ({ markdownData }) => {
    return (
        <div className="intro-description-wrapper">
            <div className="intro-description">
                {markdownData}
            </div>
        </div>
    );
};

export default IntroDescription;
