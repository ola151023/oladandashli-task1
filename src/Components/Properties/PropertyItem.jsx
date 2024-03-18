import React from 'react';
import { Col } from 'react-bootstrap';

function PropertyItem({ category, price, address, bedrooms, bathrooms, area, floor, parking }) {
  return (
    <Col lg={4} md={6} align="center" className="mb-30 properties-items">
      {/* Content of your property item goes here */}
    </Col>
  );
}

export default PropertyItem;