import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import "../styles/FooterNote.css";
import logoAnimation from '../matz/Logo.Verical.02.json';

const FooterNote = () => {
    const [isLogoAnimated, setIsLogoAnimated] = useState(false);

    const frameRate = logoAnimation.fr;
    const totalFrames = logoAnimation.op - logoAnimation.ip;
    const logoAnimationDuration = (totalFrames / frameRate) * 1000;
  

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
        <div className='footer-note'>
            <div
                onClick={toggleLogoAnimation}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex="0"
                aria-label="Toggle logo animation" // Add an aria-label here
                className="logotyp"
            >
                <Lottie
                    animationData={logoAnimation}
                    play={isLogoAnimated}
                    style={{ width: '100%', height: '100%' }}
                // loop={false}
                // onComplete={() => setIsLogoAnimated(false)}
                />
            </div>
        </div>
    );
};

export default FooterNote;
