import React from 'react';
import Top from '../Top';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import Body from '../SectionA/Body';

function Rout() {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Rout;
