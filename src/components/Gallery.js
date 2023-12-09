// Gallery.js
import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import '../styles/Gallery.css';

const Gallery = ({ imagesData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const images = imagesData.map(item => getImage(item.localFile));

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
                setFade(true);
            }, 20); // Half the interval time for smooth transition
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="gallery">
            <div className="galleryWrapper">
                {images.map((image, index) => (
                    <GatsbyImage 
                        key={index}
                        image={image} 
                        alt={`Gallery Image ${index + 1}`}
                        className={`galleryImage ${index === currentImageIndex && fade ? 'fadeIn' : 'fadeOut'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
