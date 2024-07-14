import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberCard from './MemberCard';
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const categories = [
    'President',
    'Vice President',
    'General Secretary',
    'Organization Secretary',
    'Joint Secretary',
    'Advisory Committee',
    'Founding Members'
  ];

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

  const categorizeMembers = (occupation) => {
    return members.filter((member) => member.occupation === occupation);
  };

  return (
    <div className='home'>
      <div className='top-heading'>
        <h1>Members</h1>
      </div>
      <div className="members-container">
        {categories.map((category) => (
          <div key={category} className="member-category">
            <h1>{category}</h1>
            <ul>
              {categorizeMembers(category).map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
