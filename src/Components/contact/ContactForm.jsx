// ContactForm.jsx
import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import '../../Components/contact/ContactForm.css'
function ContactForm() {
  return (
    <Form id="contact-form" action="" method="post">
      <Row>
        <Col lg={12}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name..." autoComplete="on" required />
          </Form.Group>
        </Col>
        <Col lg={12}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
          </Form.Group>
        </Col>
        <Col lg={12}>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject..." autoComplete="on" />
          </Form.Group>
        </Col>
        <Col lg={12}>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>
        </Col>
        <Col lg={12}>
          <Button type="submit" id="form-submit" className="orange-button">Send Message</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactForm;
