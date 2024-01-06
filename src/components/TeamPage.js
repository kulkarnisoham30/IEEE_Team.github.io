//./src/components/TeamPage.js

import React from "react";
import TeamMember from "./TeamMembers";
import teamMembers from "../data/TeamMember";
import Navbar from "./Navbar";

const TeamPage = () => (
  <div>
    <Navbar />
    <div className="team-page">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  </div>
);

export default TeamPage;
