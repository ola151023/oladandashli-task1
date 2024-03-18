// ContactItems.js
import React from 'react';
import { Col, Row } from 'react-bootstrap';

function ContactItems() {
  return (
    <Row>
      <Col lg={6}>
        <div className="item phone">
          <img src="	https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/phone-icon.png" alt="" style={{ maxWidth: '52px' }} />
          <h6>010-020-0340<br /><span>Phone Number</span></h6>
        </div>
      </Col>
      <Col lg={6}>
        <div className="item email">
          <img src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/email-icon.png" alt="" style={{ maxWidth: '52px' }} />
          <h6>info@villa.co<br /><span>Business Email</span></h6>
        </div>
      </Col>
    </Row>
  );
}

export default ContactItems;
