import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarker,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMap,
} from "react-icons/fa";
import "../../Cssfolders/NavContainer.css"



const SubHeader = () => {
  return (
    <div className="sub-header">
      <Container>
        <Row>
          <Col lg={8} md={8}>
            <ul className="info">
              <li>
              <FaEnvelope className="icon1 envo" /> info@company.com
              </li>

              <li>
              <FaMap className="icon1" /> Sunny Isles Beach, FL 33160
              </li>
            </ul>
          </Col>
          <Col lg={4} md={4}>
            <ul className="social-links">
              <li>
                <a href="#">
                  <FaFacebook className="icon" />
                </a>
              </li>
              <li>
                <a href="#" >
            
                  <FaInstagram className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
           
                  <FaLinkedin className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="icon" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubHeader;
