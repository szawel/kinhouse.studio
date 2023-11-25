import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../matz/plus.svg'; // Import your SVG icon
import '../styles/CategoriesCollapsible.css';

const CategoriesCollapsible = ({ text, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const contentRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        if (contentRef.current) {
            setMaxHeight(isOpen ? 0 : contentRef.current.scrollHeight);
            console.log(setMaxHeight);
        }
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen]);

    const containerClass = isOpen ? "close-icon open" : "close-icon";
    const containerClassText = isOpen ? "collapsible-content open" : "collapsible-content";

    return (
        <div className="categories-collapsible-container" onClick={toggleOpen}>
            <div className="categories-collapsible-wrapper">
                <div className='categories-collapsible-text'>{text}</div>
                <img src={CloseIcon} alt="Close" className={containerClass} onClick={toggleOpen} />
            </div>
            <div ref={contentRef} className={containerClassText} onClick={toggleOpen} style={{ maxHeight: `${maxHeight}px` }} >
                {children}
            </div>
        </div>
    );
};

CategoriesCollapsible.propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default CategoriesCollapsible;
