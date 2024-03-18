// ContactContent.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../contact/ContactForm';
import ContactMap from '../contact/ContactMap';
import ContactItems from '../contact/ContactItems';
import "../../Cssfolders/ContactContent.css"
function ContactContent() {
  return (
    <div className="contact-content">
      <Container>
        <Row>
        <Col lg={7}> 
          <ContactMap/>
          <ContactItems />
          </Col>
       
          <Col lg={5}>
            <ContactForm  />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactContent;
