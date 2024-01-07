//./src/components/TeamMember.js

import React from 'react';

const TeamMember = ({ name, position, image, linkedin }) => (
  <div className="team-member">
    <div className="member-info">
      <img src={image}  />
      <h3>{name}</h3>
      <h4>{position}</h4>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className='linked'>
        <img src='/static/Img/Linked-In.png'  />
      </a>
    </div>
  </div>
);

export default TeamMember;
