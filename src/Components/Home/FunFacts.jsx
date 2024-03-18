import { Container, Row, Col } from 'react-bootstrap';


import "/src/Cssfolders/FunFacts.css";
function FunFacts() {
  return (
    <div className="fun-facts">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="counter customize">
              <h2 className="timer count-title count-number" data-to="34" data-speed="1000">34</h2>
              <p className="count-text ">Buildings<br />Finished Now</p>
            </div>
          </Col>
          <Col lg={4}  >
            <div className="counter customize" >
              <h2 className="timer count-title count-number" data-to="12" data-speed="1000">12</h2>
              <p className="count-text ">Years<br />Experience</p>
           
            </div>
          </Col>
          <Col lg={4} >
            <div className="counter customize" >
              <h2 className="timer count-title count-number" data-to="24" data-speed="1000">24</h2>
              <p className="count-text ">Awwards<br />Won 2023</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FunFacts;
