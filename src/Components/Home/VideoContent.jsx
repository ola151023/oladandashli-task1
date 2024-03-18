import { Container, Row, Col } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';

function VideoContent() {
  return (
    <div className="video-content">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="video-frame">
              <img src="../../assets/images/video-frame.jpg" alt="" />
              <a href="https://youtube.com" target="_blank"><FaPlay/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ); 
}

export default VideoContent;
