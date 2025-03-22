import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function Home() {
  return (
    <div className="content">
      {/* Wrapper to Center Text */}
      <div className="center-content">
        <h1 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px brown' }}>
          Hello From Anshika!!
        </h1>
        <h2 style={{ color: 'white', textShadow: '2px 2px grey' }}>
          Frontend Developer
        </h2>
        <h3 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px grey' }}>
          Experience in web design
        </h3>
        <h3 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px grey' }}>
          and development knowledge...
        </h3>
        <Button asChild className="btn text-white">
          <a
            href="ANSHIKA SINGH_28 (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline"
          >
            Open CV
          </a>
        </Button>
      </div>

      {/* Image Positioned on Left Center */}
      <div className="ans">
        <img src="/Anshii.jpeg" alt="Anshika" />
      </div>
    </div>
  );
}

export default Home;
