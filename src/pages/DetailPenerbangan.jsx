import React from "react";
import Navbar1 from "../components/header/Navbar1";
import Schedule from "../components/detail/Schedule";
import ResultSearch from "../components/detail/ResultSearch";
import ModalFilter from "../components/detail/ModalFilter";
import CardFilter from "../components/detail/CardFilter";
import { Col, Container, Row } from "react-bootstrap";

const DetailPenerbangan = () => {
  return (
    <>
      <Navbar1 />
      <Schedule />
      <Container>
        <Row className="my-3">
          <Col sm={9}></Col>
          <Col cm={1}>
            <ModalFilter />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col sm={3}>
            <CardFilter />
          </Col>
          <Col sm={7}>
            <ResultSearch />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPenerbangan;
