// ContactHeading.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContactHeading({ lgSize, offset }) {
  return (
    <Container>
      <Row>
        <Col lg={lgSize} className={`offset-lg-${offset}`}>
          <div className="section-heading text-center">
            <h6>| Contact Us</h6>
            <h2>Get In Touch With Our Agents</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactHeading;
