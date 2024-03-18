// PageHeading.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../../Pages/ContactPageHeading.css'
function PageHeading({ headingText }) {
  const style={
    
  }
  return (
    <div className="page-heading header-text">
      <Container>
        <Row>
          <Col lg={12}>
            <span className="CustomSection">
              <a href="#">Home</a> / {headingText}
            </span>
            <h3 className="customHeading">{headingText}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageHeading;
