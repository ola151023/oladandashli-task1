import { Container, Row, Col } from 'react-bootstrap';
import '../../Cssfolders/ContactSection.css'
function ContactSection() {
  return (
    <div className="contact section">
      <Container>
        <Row>
          <Col lg={4} className="offset-lg-4">
            <div className="section-heading text-center">
              <h6>| Contact Us</h6>
              <h2>Get In Touch With Our Agents</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;
