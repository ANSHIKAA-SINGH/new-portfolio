import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="brand-logo">
            MyPortfolio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Link to="/home" className="nav-item">
              Home
            </Link>
            <Link to="/about" className="nav-item">
              About
            </Link>
            <Link to="/education" className="nav-item">
              Education
            </Link>
            <Link to="/pro" className="nav-item">
              Skills
            </Link>
            <Link to="/ach" className="nav-item">
              Achievements & Position
            </Link>
            <Link to="/contact" className="nav-item">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
