// IntroTeamCollapsible.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/IntroTeamCollapsible.css';
import CloseIcon from '../matz/plus.svg'; // Import your SVG icon

const IntroTeam = ({ teamData }) => {
    const [openStatus, setOpenStatus] = useState({});
    const contentRef = useRef(null);

    const toggleOpen = (index) => {
        setOpenStatus(prevStatus => ({
            ...prevStatus,
            [index]: !prevStatus[index]
        }));
    };

    const handleKeyPress = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            toggleOpen(index);
        }
    };

    useEffect(() => {
        // Adjust this effect as per your requirements
    }, [openStatus]);

    return (
        <div className="team-collapsible-container">
            {teamData.map((member, index) => (
                <div onClick={() => toggleOpen(index)} key={index} className={`team-collapsible-member-card ${openStatus[index] ? 'open' : ''}`}>
                    <div className="team-collapsible-member-info">
                        <div className='team-collapsible-member'>{member.Name}</div>
                        <div className="team-collapsible-member-position">{member.Position}</div>
                        <div className="team-collapsible-member-email">{member.Email}</div>
                    </div>
                    <img src={CloseIcon} alt="Close" className={`close-collapsible-icon ${openStatus[index] ? 'open' : ''}`} />
                        <div className={`team-collapsible-member-description ${openStatus[index] ? 'open' : ''}`}>
                            <div className={`team-member-bio ${openStatus[index] ? 'open' : ''}`}
                                dangerouslySetInnerHTML={{ __html: member.Bio.data.childMarkdownRemark.html }}
                            />
                        </div>
                </div>
            ))}
        </div>
    );
};

export default IntroTeam;
