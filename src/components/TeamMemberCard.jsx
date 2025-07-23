
import React from 'react';
import './TeamMemberCard.css';

function TeamMemberCard({ member }) {
  const cardStyle = {
    '--glow-color': member.color,
  };

  return (
    <div className="team-member-card" style={cardStyle}>
      <div className="card-header">
        <div className="card-icon">{member.icon}</div>
        <h3 className="card-name">{member.name}</h3>
      </div>
      <div className="card-body">
        <p>{member.intro}</p>
        
        <h4>MBTI</h4>
        <p>{member.mbti}</p>

        <h4>Skills</h4>
        <ul>
          {member.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h4>Hobby</h4>
        <p>{member.hobby}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
