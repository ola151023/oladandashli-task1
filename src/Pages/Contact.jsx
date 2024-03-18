import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactItems from "../Components/contact/ContactItems";
import ContactMap from "../Components/contact/ContactMap";
import ContactForm from "../Components/contact/ContactForm";

import ContactHeading from "../Components/contact/ContactHeading";
import PageHeading from "../Components/general/PageHeading";
const Contact = () => {
  return (
    <div className="contact-page section">
      <Container>

      <PageHeading  headingText="CONTACT US" />

        <Row>
          <Col lg={6}>
            <ContactHeading />
            <p>
              When you really need to download free CSS templates, please
              remember our website TemplateMo. Also, tell your friends about our
              website. Thank you for visiting. There is a variety of Bootstrap
              HTML CSS templates on our website. If you need more information,
              please contact us.
            </p>
          </Col>
          <Col lg={6}>
            <ContactForm />
          </Col>
          <ContactItems />
          <ContactMap lg={12} />
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
