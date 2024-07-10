import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member }) => {
  return (
    <li className="member-card">
      <img
        className="member-photo"
        src={`data:image/jpeg;base64,${member.photo}`}
        alt={`${member.name}`}
      />
      <div className="member-details">
        <h2>{member.name}</h2>
        <p>Age: {member.age}</p>
        <p>Achievements: {member.achievements}</p>
        <p>Profession: {member.profession}</p>
        <p>Occupation: {member.occupation}</p>
      </div>
    </li>
  );
};

export default MemberCard;
