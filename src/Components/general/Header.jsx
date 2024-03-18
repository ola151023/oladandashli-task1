import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';

import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../Cssfolders/NavBar.css';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header-area header-sticky background-header">
      <Container>
        <Row>
          <Col>
            <Nav className="main-nav ">
              
              <a href="index.html" className="logo" >
                <h1>Villa</h1>
              </a>
        
              <Nav.Item className='nav-item'>
                <Nav.Link   id="one" as={Link} to="/" exact className={({ isActive }) => (isActive ? "active" : "")}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link  id="two" as={Link} to="/properties"  className={({ isActive }) => (isActive ? "active" : "")}>Properties</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link  id="three" as={Link} to="/details"  className={({ isActive }) => (isActive ? "active" : "")}>Property Details</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item'>
                <Nav.Link   id="four" as={Link} to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item className='nav-item custom-one'>
                
                <Button  >
               < FaCalendar className='custom-icon'/> Schedule a visit
               </Button>
              </Nav.Item >
  
              {/* <a className="menu-trigger">
                <span>Menu</span>
              </a> */}
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
