import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import PaginationVillas from '../general/PaginationVillas'
import '../../Cssfolders/PropertiesSection.css'
function PropertiesSection() {
  return (
    <div className="properties section">
      <Container>
      <Row>
      <Col lg={12}>
            <div className="section-heading text-center">
              <h6>| PROPERTIES</h6>
              <h2>We Provide The Best Property You Like</h2>
            </div>
          </Col>
          </Row>
     <Row>
          <Col lg={4} md={6}>
            <Card className="item">
              <Card.Img className='myImg' variant="top" src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
              <Card.Body>
                <span className="category">Luxury Villa</span>
                <Card.Title className='price'>$2.264.000</Card.Title>
                <Card.Text>
                  <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                  <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul>
                </Card.Text>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="item">
              <Card.Img  className='myImg' variant="top" src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
              <Card.Body>
                <span className="category">Luxury Villa</span>
                <Card.Title className='price'>$2.264.000</Card.Title>
                <Card.Text>
                  <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                  <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul>
                </Card.Text>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="item">
              <Card.Img variant="top" className='myImg'  src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
              <Card.Body>
                <span className="category">Luxury Villa</span>
                <Card.Title className='price' >$2.264.000</Card.Title>
                <Card.Text>
                  <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                  <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul>
                </Card.Text>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="item">
              <Card.Img variant="top" className='myImg' src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
              <Card.Body>
                <span className="category">Luxury Villa</span>
                <Card.Title className='price'>$2.264.000</Card.Title>
                <Card.Text>
                  <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                  <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul>
                </Card.Text>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="item">
              <Card.Img variant="top" className='myImg'  src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
              <Card.Body>
                <span className="category">Luxury Villa</span>
                <Card.Title  className='price'>$2.264.000</Card.Title>
                <Card.Text>
                  <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                  <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul>
                </Card.Text>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="item">
              <Card.Img variant="top" className='myImg'  src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
              <Card.Body>
                <span className="category">Luxury Villa</span>
                <Card.Title  className='price'>$2.264.000</Card.Title>
                <Card.Text>
                  <h4><a href="property-details.html">18 New Street Miami, OR 97219</a></h4>
                  <ul>
                    <li>Bedrooms: <span>8</span></li>
                    <li>Bathrooms: <span>8</span></li>
                    <li>Area: <span>545m2</span></li>
                    <li>Floor: <span>3</span></li>
                    <li>Parking: <span>6 spots</span></li>
                  </ul>
                </Card.Text>
                <div className="main-button">
                  <a href="property-details.html">Schedule a visit</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat similar structure for other properties */}
        </Row>
        <Row>
          <Col lg={12}>
           <PaginationVillas/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PropertiesSection;
