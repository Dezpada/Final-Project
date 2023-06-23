import React from "react";
import Navbar1 from "../components/header/Navbar1";
import NavbarCO from "../components/checkout/NavbarCO";
import Payment from "../components/payment/Payment";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const PagePayment = () => {
  return (
    <>
      <Navbar1 />
      <NavbarCO />
      <Container>
        <Row className="mt-5">
          <Col>
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PagePayment;
