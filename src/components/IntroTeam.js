// IntroTeam.js
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/IntroTeam.css'; // Ensure you have this CSS file

const IntroTeam = ({ teamData }) => {
    return (
        <div className="team-container">
            {teamData.map((member, index) => (
                <div key={index} className="team-member-card">
                    <GatsbyImage
                        image={getImage(member.Photo.localFile)}
                        alt={member.Name}
                        className="team-member-photo"
                    />
                    <div className="team-member-info">
                        <div className='team-member'>{member.Name}</div>
                        <div className="team-member-position">{member.Position}</div>
                        <div className="team-member-email">{member.Email}</div>
                        <div className="team-member-bio"
                            dangerouslySetInnerHTML={{ __html: member.Bio.data.childMarkdownRemark.html }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IntroTeam;
