//import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Menu01 from '../matz/menu.01.svg'; // Adjust the path as necessary
import Menu02 from '../matz/menu.02.svg'; // Adjust the path as necessary

import React, { useState } from 'react';
// import "../styles/global.css"

const MenuBar = () => {
    const [isPrimaryDropdownOpen, setIsPrimaryDropdownOpen] = useState(false);
    const [openSecondaryDropdown, setOpenSecondaryDropdown] = useState(null);

    const togglePrimaryDropdown = () => {
        setIsPrimaryDropdownOpen(!isPrimaryDropdownOpen);
        if (isPrimaryDropdownOpen) {
            setOpenSecondaryDropdown(null); // Close secondary dropdown when primary is closed
        }
    };

    const navigateToSection = (section, yOffset = -100) => { // Default Y-offset set to -100
        if (window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname === '/index.html') {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            navigate(`/#${section}`);
        }
    };

    const handleSecondaryDropdown = (option) => {
        setOpenSecondaryDropdown(option === openSecondaryDropdown ? null : option);
    };

    return (
        <div >
            <div className="menu-bar">
                <Link to="/" className="menu-item">kinhouse</Link>
                <div onClick={togglePrimaryDropdown} className={`menu-item ${isPrimaryDropdownOpen ? 'active' : ''}`}>
                    <img src={isPrimaryDropdownOpen ? Menu01 : Menu02} alt="Menu" />
                </div>
            </div>

            <div className={`dropdown-bar ${isPrimaryDropdownOpen ? 'dropdown-active' : ''}`}>
                <div className="dropdown-item-wrapper">
                    <div onClick={() => handleSecondaryDropdown('option1')} className={`dropdown-item ${openSecondaryDropdown === 'option1' ? 'active' : ''}`}>Projects</div>
                </div>
                <div className="dropdown-item-wrapper">
                    <div onClick={() => handleSecondaryDropdown('option2')} className={`dropdown-item ${openSecondaryDropdown === 'option2' ? 'active' : ''}`}>Studio</div>
                </div>
            </div>

            {openSecondaryDropdown === 'option1' && (
                <div className="secondary-dropdown-bar dropdown-active">
                    <div className="dropdown-item-wrapper">
                        <div onClick={() => navigateToSection('movies', -200)} className="dropdown-item">Movies</div>
                    </div>
                    <div className="dropdown-item-wrapper">
                        <div onClick={() => navigateToSection('animation', -200)} className="dropdown-item">Animation</div>
                    </div>
                    <div className="dropdown-item-wrapper">
                        <div onClick={() => navigateToSection('immersive', -200)} className="dropdown-item">Immersive</div>
                    </div>
                </div>
            )}

            {openSecondaryDropdown === 'option2' && (
                <div className="secondary-dropdown-bar dropdown-active">
                    <div className="dropdown-item-wrapper">
                        <div onClick={() => navigateToSection('abount', -200)} className="dropdown-item">Abount us</div>
                    </div>
                    <div className="dropdown-item-wrapper">
                        <div onClick={() => navigateToSection('media', -200)} className="dropdown-item">Media</div>
                    </div>
                    <div className="dropdown-item-wrapper">
                        <div onClick={() => navigateToSection('contact', -200)} className="dropdown-item">Contact</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuBar;
