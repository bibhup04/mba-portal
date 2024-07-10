import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
      const fetchMembers = async () => {
          try {
              const response = await axios.get('http://localhost:8080/api/members/all');
              setMembers(response.data);
          } catch (error) {
              console.error('Error fetching members:', error);
          }
      };

      fetchMembers();
  }, []);

  return (
      <div>
          <h1>Members</h1>
          <ul>
              {members.map((member) => (
                  <li key={member.id}>
                      <h2>{member.name}</h2>
                      <p>Age: {member.age}</p>
                      <p>Achievements: {member.achievements}</p>
                      <p>Profession: {member.profession}</p>
                      <p>Occupation: {member.occupation}</p>
                      {member.photo && <img src={`data:image/jpeg;base64,${member.photo}`} alt={`${member.name}`} />}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default Members;
