import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "/src/Cssfolders/Footer.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={8}>
            <p>
              Copyright © 2048 Villa Agency Co., Ltd. All rights reserved.
   
              <a rel="nofollow" href="https://templatemo.com" target="_blank">
                TemplateMo
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
