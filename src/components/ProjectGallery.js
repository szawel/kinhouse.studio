// src/components/ProjectGallery.js
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ProjectGallery.css'; // Import the CSS file

const ProjectGallery = ({ imageData }) => {

    if (!imageData || imageData.length === 0) {
        return null; // Do not render if there are no images
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className="projectGalleryContainer">
            <Slider {...settings}>
                {imageData.map((image, index) => (
                    <div key={index}>
                        <GatsbyImage image={getImage(image)} alt={`Gallery image ${index + 1}`} className="projectGalleryImage" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectGallery;
