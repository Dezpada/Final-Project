import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Schedule = () => {
  // FUNCTION DATE NOW
  const currentDate = Date.now();
  const dates = [];

  // LOOPING 8 DAYS
  for (let i = 0; i < 8; i++) {
    const loopDate = new Date(currentDate + i * 24 * 60 * 60 * 1000);
    dates.push(loopDate);
  }
  // FUNCTION NAMA HARI

  const getDay = (date) => {
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  // FUNCTION DATE (dd,mm,yyyy)
  const getDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  const location = useLocation();
  const formData = location.state;

  const [cityFrom, setCityFrom] = useState(null);
  const [cityTo, setCityTo] = useState(null);
  const idFrom = formData.formData.origin_airport;
  const idTo = formData.formData.destination_airport;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://final-project-production-b6fe.up.railway.app/airports?page=1&per_page=50"
        );
        let newCityFrom = response.data.data.find(
          (cityfromid) => cityfromid.id === Number(idFrom)
        );
        let newCityTo = response.data.data.find(
          (citytoid) => citytoid.id === Number(idTo)
        );

        setCityTo(newCityTo);
        setCityFrom(newCityFrom);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idFrom, idTo]);
  return (
    <div className="bg-detail pt-5 pb-4">
      <Container className="">
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <h5 className="mb-4">Detail Penerbangan</h5>
            <Row>
              <Col className="rounded-4 my-1 py-2 px-2 bg-purple text-white  ">
                <div className="d-flex h-100 ">
                  <Link to={"/"}>
                    <div className="mx-2">
                      <img src="/img/fi_arrow-left.svg" alt="" />
                    </div>
                  </Link>
                  <div className=" d-flex ">
                    <h6 className="my-auto fw-semibold">{cityFrom?.city}</h6>
                    <div className="mx-2">
                      <img
                        src="/img/fi_arrow-right.png"
                        alt=""
                        style={{ width: "12px" }}
                      />
                    </div>
                    <h6 className="my-auto fw-semibold">{cityTo?.city}</h6>
                    <div className="mx-2">
                      <img
                        src="/img/fi_arrow-right.png"
                        alt=""
                        style={{ width: "12px" }}
                      />
                    </div>
                    <h6 className="my-auto fw-semibold">
                      {formData.formData.total_passengers} Penumpang
                    </h6>
                    <div className="mx-2">
                      <img
                        src="/img/fi_arrow-right.png"
                        alt=""
                        style={{ width: "12px" }}
                      />
                    </div>
                    <h6 className="my-auto fw-semibold">
                      {formData.formData.class}
                    </h6>
                  </div>
                </div>
              </Col>
            </Row>
            <Row xs="auto mt-3 mx-auto">
              {dates.map((date, index) => (
                <Col
                  key={index}
                  className="mx-auto rounded-3 px-2 py-1 border button-schedule text-center"
                  style={{ cursor: "pointer" }}
                >
                  <h6 className="fw-bold">{getDay(date)}</h6>
                  <h6 className="fw-normal fs-12 date">{getDate(date)}</h6>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
