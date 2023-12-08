//./src/components/TeamPage.js

import React from 'react';
import TeamMember from './TeamMembers';
import teamMembers from '../data/TeamMember';

const TeamPage = () => (
  <div className="team-page">
    <h1>Meet Our Team</h1>
    <div className="team-members">
      {teamMembers.map((member) => (
        <TeamMember key={member.id} {...member} />
      ))}
    </div>
  </div>
);

export default TeamPage;
