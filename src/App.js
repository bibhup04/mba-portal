import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import AboutMBA from './components/aboutMba/AboutMBA';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import MemberForm from './components/MemberForm';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-mba/*" element={<AboutMBA />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/member" element={<MemberForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
