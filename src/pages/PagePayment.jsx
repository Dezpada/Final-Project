import React from "react";
import Navbar1 from "../components/header/Navbar1";
import Payment from "../components/payment/Payment";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const PagePayment = () => {
  return (
    <>
      <Navbar1 />
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
