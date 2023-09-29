import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <h3>About Our Mission</h3>
            <p>
              Our mission is to help families build stronger relationships
              uniquely and enjoyably. We understand the importance of family
              bonding and want to provide a memorable experience that brings
              loved ones closer together.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
