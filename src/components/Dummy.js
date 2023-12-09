import React from 'react';
import Lottie from 'react-lottie-player';
import '../styles/Dummy.css'; // Import the CSS file for styling

const Dummy = () => {
    return (
        <div className="lottie-container">
            <div className='lottie-wrapper'>

                <Lottie className='logos'
                    animationData={require('../matz/Logo.Verical.02.json')}
                    style={{ width: '250px', height: '250px' }}
                />
            </div>
        </div>
    );
};

export default Dummy;
