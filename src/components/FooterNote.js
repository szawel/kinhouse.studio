import React from 'react';
import "../styles/FooterNote.css"

const FooterNote = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='footer-note'>
            {/* <p>kinhouse studio {currentYear}</p> */}
            <p>{currentYear}</p>
        </div>
    );
};

export default FooterNote;
