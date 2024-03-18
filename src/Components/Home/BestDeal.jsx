import { Container, Row, Col, Nav, Tab, Card } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa';
import "../../Cssfolders/BestDeal.css";
function BestDeal() {
  return (
    <div className="section best-deal">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="section-heading">
              <h6>| Best Deal</h6>
              <h2>Find Your Best Deal Right Now!
           
              </h2>
            </div>
          </Col>
          <Col lg={12}>
            <div className="tabs-content">
              <Row>
                <Col lg={12}>
                  <Nav variant="tabs" className="nav-wrapper">
                    <Nav.Item className='myli'>
                      <Nav.Link eventKey="appartment" className='custom-a' active>
                        Appartment
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='myli'>
                      <Nav.Link eventKey="villa" className='custom-a'>Villa House</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='myli'>
                      <Nav.Link eventKey="penthouse" className='custom-a' >Penthouse</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content" id="myTabContent">
                    <Tab.Pane eventKey="appartment" className="tab-pane fade show active">
                      <Row>
                        <Col lg={3}>
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>185 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>4</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
                          </Card>
                        </Col>
                        <Col lg={3}>
                          <h4>Extra Info About Property</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                          <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                          <div className="icon-button">
                            <a href="property-details.html"><FaCalendar className='calendar'/> Schedule a visit</a>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="villa" className="tab-pane fade">
                      <Row>
                        <Col lg={3}>
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>250 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>5</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
                          </Card>
                        </Col>
                        <Col lg={3}>
                          <h4>Detail Info About Villa</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                          <div className="icon-button">
                            <a href="property-details.html"><FaCalendar className='calendar'/> Schedule a visit</a>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="penthouse" className="tab-pane fade">
                      <Row>
                        <Col lg={3}>
                          <div className="info-table">
                            <ul>
                              <li>Total Flat Space <span>320 m2</span></li>
                              <li>Floor number <span>34th</span></li>
                              <li>Number of rooms <span>6</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww" />
                          </Card>
                          
                        </Col>
                        <Col lg={3}>
                          <h4>Extra Info About Penthouse</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                          <div className="icon-button">
                            <a href="property-details.html"><FaCalendar className='calendar'/> Schedule a visit</a>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BestDeal;
