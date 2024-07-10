import React from 'react';
import { Link, Route, Routes, useResolvedPath, useMatch } from 'react-router-dom';

import './AboutMBA.css'; // Import the CSS file
import Mba from './Mba';
import Vision from './Vision';
import Mission from './Mission';
import Members from './Members';


const AboutMBA = () => {
  const resolvedPath = useResolvedPath('');
  const match = useMatch(`${resolvedPath.pathname}/*`);
  const basePath = match ? match.pathnameBase : '';

  return (
    <div className="about-mba-container">
      <h1 className="about-mba-header">About MBA</h1>
      <ul className="about-mba-nav">
        <li><Link to={`${basePath}/vision`}>Vision</Link></li>
        <li><Link to={`${basePath}/mission`}>Mission</Link></li>
        <li><Link to={`${basePath}/members`}>Members</Link></li>
      </ul>

      <div className="sub-tab-content">
        <Routes>
          <Route path="/" element={<Mba />} />
          <Route path="vision" element={<Vision />} />
          <Route path="mission" element={<Mission />} />
          <Route path="members" element={<Members />} />
        </Routes>
      </div>
    </div>
  );
};

export default AboutMBA;
