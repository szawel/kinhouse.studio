// src/components/ProjectGallery.js
import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/ProjectGallery.css';
import ArrowRightURL, { ReactComponent as ArrowRight } from '/src/matz/arrow-right.svg';
import ArrowLeftURL, { ReactComponent as ArrowLeft } from '/src/matz/arrow-left.svg';


const ProjectGallery = ({ imageData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!imageData || imageData.length === 0) {
        return null; // Do not render if there are no images
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % imageData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + imageData.length) % imageData.length);
    };

    return (
        <div className="projectGalleryContainer">
            <button onClick={prevSlide} className="slideButton prevButton">
                <ArrowLeft className="arrow" />
            </button>
            <div className="projectGallerySlider">
                {imageData.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <GatsbyImage image={getImage(image)} alt={`Gallery image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className="slideButton nextButton">
                <ArrowRight className="arrow" />
            </button>
        </div>
    );
};

export default ProjectGallery;
