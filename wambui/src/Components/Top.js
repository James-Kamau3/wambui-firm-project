import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

import './Top.css';

function Top() {
  const whiteTextStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div className='allfoot'>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>
            <Image
              src="https://cdn.vectorstock.com/i/preview-1x/82/05/lady-justice-themis-golden-emblem-vector-29118205.webp"
              alt="Icon"
              width="50"
              height="50"
            />{' '}
            Wambui K. Advocates
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" style={whiteTextStyle} className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" style={whiteTextStyle} className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" style={whiteTextStyle} className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Top;

