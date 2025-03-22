import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Education from './Education';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Achievements from './Achievements';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/pro" element={<Skills />} />
            <Route path="/ach" element={<Achievements />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Card className="footer-card">
        <Card.Body>
          <Card.Title className="footer-icons">
            <FaGithub />
            <IoLogoLinkedin />
            <FaTwitter />
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
