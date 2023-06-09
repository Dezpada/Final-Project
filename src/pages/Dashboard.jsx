import React from "react";
import Navbar1 from "../components/header/Navbar1";
import FlightForm from "../components/form/FlightForm";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

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
      </Container>
      <div className="bg-banner p-5 w-100"></div>
    </>
  );
};

export default Dashboard;
