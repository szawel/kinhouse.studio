import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import "../styles/FooterNote.css";
import logoAnimation from '../matz/Logo.Verical.02.json';

const FooterNote = () => {
    // Initialize state with a function to ensure it runs only on client-side
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );

    const [isLogoAnimated, setIsLogoAnimated] = useState(false);
    const frameRate = logoAnimation.fr;
    const totalFrames = logoAnimation.op - logoAnimation.ip;
    const logoAnimationDuration = (totalFrames / frameRate) * 1000;

    useEffect(() => {
        // Define the function inside useEffect
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 768);
            }
        };

        // Attach event listener conditionally
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        // Cleanup
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const toggleLogoAnimation = () => {
        setIsLogoAnimated(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggleLogoAnimation();
        }
    };

    useEffect(() => {
        let logoTimer;
        if (isLogoAnimated) {
            logoTimer = setTimeout(() => {
                setIsLogoAnimated(false);
            }, logoAnimationDuration);
        }
        return () => clearTimeout(logoTimer);
    }, [isLogoAnimated, logoAnimationDuration]);

    return (
        <div className={`footer-note ${isMobile ? 'mobile' : ''}`}>
            <div
                onClick={toggleLogoAnimation}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex="0"
                aria-label="Toggle logo animation"
                className="logotyp"
            >
                <Lottie
                    animationData={logoAnimation}
                    play={isLogoAnimated}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
};

export default FooterNote;
