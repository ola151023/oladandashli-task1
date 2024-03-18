import { Container, Row, Col } from 'react-bootstrap';
import "../../Cssfolders/VideoSection.css"
function VideoSection() {
  return (
    <div className="video section">
      <Container>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <div className="section-heading text-center">
              <h6>| Video View</h6>
              <h2>Get Closer View & Different Feeling</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoSection;
