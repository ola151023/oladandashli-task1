
// PropertiesFilter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PropertiesFilter() {
  return (
    <Container>
      <Row>
        <Col>
          <ul className="properties-filter">
            <li><a className="is_active" href="#!" data-filter="*">Show All</a></li>
            <li><a href="#!" data-filter=".adv">Apartment</a></li>
            <li><a href="#!" data-filter=".str">Villa House</a></li>
            <li><a href="#!" data-filter=".rac">Penthouse</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default PropertiesFilter;