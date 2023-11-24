import React from 'react';
import Logo from '../matz/Logo_vertical.svg'; // Update the path according to your file structure
import "../styles/FooterNote.css"

const FooterNote = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-note'>
            <img src={Logo} alt="Logo" className='logotyp'/>
            {/* <p>{currentYear}</p> */}
        </div>
    );
};

export default FooterNote;
