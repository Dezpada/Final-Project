import React from "react";
import Navbar1 from "../components/header/Navbar1";
import { Col, Container, Row } from "react-bootstrap";
import RiwayatFilter from "../components/riwayat/RiwayatFilter";
import RiwayatPesanan from "../components/riwayat/RiwayatPesanan";
import DetailPesanan from "../components/riwayat/DetailPesanan";

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
    </>
  );
};

export default Riwayat;