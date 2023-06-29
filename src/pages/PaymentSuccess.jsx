import React from "react";
import Navbar1 from "../components/header/Navbar1";
import NavbarCO from "../components/checkout/NavbarCO";
import { Container, Row, Button } from "react-bootstrap";
import successImage from "../assets/success.png";
import "./style.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar1 />
      <NavbarCO />
      <Container>
        <Row className="mt-5 text-center">
          <p className="custom-box">Terima Kasih Sudah Melakukan Transaksi</p>
        </Row>
        <hr />
        <Row className="mt-5 text-center">
          <div xs={12} md={6} className="mb-5">
            <img src={successImage} alt=" " />
          </div>
          <div xs={12} md={6}>
            <p>
              <span className="custom-text">Selamat!</span>
              <br />{" "}
              <span className="bold-text">
                Transaksi Pembayaran Tiket Berhasil!
              </span>
            </p>
          </div>
        </Row>
        <Row className="mt-3 text-center justify-content-center">
          <div xs={12} md={6} lg={4}>
            <Button
              type="submit"
              size="md"
              className="custom-button-lgn text-light w-40"
              as={Link}
              to="/riwayat"
            >
              Terbitkan Tiket
            </Button>
          </div>
          <div xs={12} md={6} lg={4}>
            <Button
              type="submit"
              size="md"
              className="custom-button-lgn-two text-light w-40 my-2"
              as={Link}
              to="/detail-penerbangan"
            >
              Cari Penerbangan Lain
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
