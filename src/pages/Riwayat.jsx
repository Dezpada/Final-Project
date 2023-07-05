import React from "react";
import Navbar1 from "../components/header/Navbar1";
import { Col, Container, Row } from "react-bootstrap";
import RiwayatFilter from "../components/riwayat/RiwayatFilter";
import RiwayatPesanan from "../components/riwayat/RiwayatPesanan";

const Riwayat = () => {
  return (
    <>
      <Navbar1 />
      <Container>
        <Row className="my-3">
          <Col>
            <RiwayatFilter />
          </Col>
        </Row>
        <Row>
          <Col>
            <RiwayatPesanan />
          </Col>
        </Row>
      </Container>
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <NavbarMobile />
    </>
  );
};

export default Riwayat;
