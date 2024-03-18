import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainContent from './MainContent';
import AccordionSection from './AccordionSection';
import InfoTable from './InfoTable';

function SingleProperty() {
  return (

    <div className="single-property section">
      <Container>
        <Row>
          <Col lg={8}>
            <MainContent />
            <AccordionSection />
          </Col>
          <Col lg={4}>
            <InfoTable />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default SingleProperty;
