import React, { useState } from 'react';
import Lottie from 'react-lottie';
import "../styles/FooterNote.css"
import logoAnimation from '../matz/Logo.Verical.02.json';

const FooterNote = () => {
    const [isLogoAnimated, setIsLogoAnimated] = useState(false);

    const toggleLogoAnimation = () => {
        setIsLogoAnimated(prevState => !prevState);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggleLogoAnimation();
        }
    };

    const logoOptions = {
        loop: false,
        autoplay: true, 
        animationData: logoAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        eventListeners: [
            {
                eventName: 'complete',
                callback: () => setIsLogoAnimated(false),
            },
        ],
    };

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
                <Lottie options={logoOptions}
                    isStopped={!isLogoAnimated}
                    isPaused={false}
                />
            </div>
        </div>
    );
};

export default FooterNote;
