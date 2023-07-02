import React, { useState } from "react";
import Navbar1 from "../components/header/Navbar1";
import Schedule from "../components/detail/Schedule";
import ResultSearch from "../components/detail/ResultSearch";
import CardFilter from "../components/detail/CardFilter";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const DetailPenerbangan = () => {
  // mengambil data tanggal
  const location = useLocation();
  const defaultDate = location.state.requestBody.flight_date;

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Navbar1 />
      <Schedule onDateSelect={handleDateSelect} selectedDate={selectedDate} />
      <Container>
        <Row className="my-3">
          <Col md={9}></Col>
          <Col md={1}></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md={2} className="mb-3">
            {/* <CardFilter /> */}
          </Col>
          <Col md={8}>
            <ResultSearch selectedDate={selectedDate} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPenerbangan;

