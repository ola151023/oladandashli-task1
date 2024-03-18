import { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

import "/src/Cssfolders/nav.css";
const NavBar = () => {
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
    <Navbar bg={isScrolled ? "light" : "transparent"} expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          <h1>VILLA</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" exact="true" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/properties" className={({ isActive }) => (isActive ? "active" : "")}>
              Properties
            </Nav.Link>
            <Nav.Link as={Link} to="/details" className={({ isActive }) => (isActive ? "active" : "")}>
              Property Details
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto"> {/* Change justify-content-end to ml-auto */}
            <Nav.Link as={Link} to="/schedule">
              <div className="nav-item">
                <FaCalendar className="calendar-icon" />
                <span>Schedule a Visit</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
