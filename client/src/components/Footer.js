import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{backgroundColor:"darkgray",  position:" absolute",  bottom: 0, width: "100%", height: "2.5rem" , textAlign:"center" }}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 style={{margin:"10px"}}>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
        
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;