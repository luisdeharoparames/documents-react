import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav_Docu = () => {
  return (
    <Container style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <a href="#">NEWS</a>
        </Col>
        <Col md="auto">
          <a href="#">OVERVIEW</a>
        </Col>
        <Col md="auto">
          <a href="#">STARTED</a>
        </Col>
        <Col md="auto">
          <a href="#">LIBRARY</a>
        </Col>
        <Col md="auto">
          <a href="#">API</a>
        </Col>
        <Col md="auto">
          <a href="#">FAQS</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav_Docu;
