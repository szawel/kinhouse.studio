// src/components/Synopsis.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Synopsis.css';


const Synopsis = ({ htmlContent }) => {
    return (
        // <div className='synopsis-wrapper'>
            <div className="synopsis">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        // </div>
    );
};

Synopsis.propTypes = {
    htmlContent: PropTypes.string.isRequired,
};

export default Synopsis;
