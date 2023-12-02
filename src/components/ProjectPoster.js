// src/components/ProjectPoster.js
import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ProjectPoster.css'; // Update the CSS file path if needed

const ProjectPoster = ({ imageData }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!imageData || imageData.length === 0) {
        return null; // Do not render if there are no images
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    //     return (
    //         <div className="projectPosterContainer">
    //             {isMobile ? (
    //                 imageData.map((image, index) => (
    //                     <GatsbyImage key={index} image={getImage(image)} alt={`Poster image ${index + 1}`} className="projectPosterImage" />
    //                 ))
    //             ) : (
    //                 <Slider {...settings}>
    //                     {imageData.map((image, index) => (
    //                         <div key={index}>
    //                             <GatsbyImage image={getImage(image)} alt={`Poster image ${index + 1}`} className="projectPosterImage" />
    //                         </div>
    //                     ))}
    //                 </Slider>
    //             )}
    //         </div>
    //     );
    // };
    return (
        <div className="projectPosterContainer">
            <Slider {...settings}>
                {imageData.map((image, index) => (
                    <div key={index}>
                        <GatsbyImage image={getImage(image)} alt={`Poster image ${index + 1}`} className="projectPosterImage" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectPoster;
