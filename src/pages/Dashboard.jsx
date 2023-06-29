import React from "react";
import Navbar1 from "../components/header/Navbar1";
import FlightForm from "../components/form/FlightForm";
import DesFav from "../components/DesFav/DesFav";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar1 />
      <Container>
        <div className="banner w-100 mt-5">
          <img
            src="../../../img/img-banner.svg"
            alt="img banner"
            className="w-100"
          />
        </div>
        <Row className="mt-2">
          <Col>
            <FlightForm />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <DesFav />
          </Col>
        </Row>
      </Container>
      <div className="bg-dark p-5 w-100"></div>
    </>
  );
};

export default Dashboard;
