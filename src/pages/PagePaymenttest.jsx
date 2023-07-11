import React from "react";
import Navbar1 from "../components/header/Navbar1";
import NavbarCO from "../components/checkout/NavbarCO";
import Paymenttest from "../components/payment/Paymenttest";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const PagePaymenttest = () => {
  return (
    <>
      <Navbar1 />
      <NavbarCO />
      <Container>
        <Row className="mt-5">
          <Col>
            <Paymenttest />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PagePaymenttest;
