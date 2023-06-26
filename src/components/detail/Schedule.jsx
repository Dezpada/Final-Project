import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
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

  // const url = `https://finalproject-develop-9a08.up.railway.app/flight`;

  // const [data, setData] = useState();

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response.data.data);
  //     setData(response.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [url]);

  return (
    <div className="bg-detail pt-5 pb-4">
      <Container className="">
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <h5 className="mb-4">Detail Penerbangan</h5>
            <Row>
              <Col
                sm={9}
                className="rounded-4 my-1 py-2 px-2 bg-purple text-white  "
              >
                <div className="d-flex h-100 ">
                  <Link to={"/"}>
                    <button>
                      <img src="/img/fi_arrow-left.svg" alt="" />
                    </button>
                  </Link>
                  <div className=" d-flex  ">
                    <h6 className="my-auto fw-semibold">JKT</h6>
                    <h6 className="mx-1 my-auto fw-semibold">-</h6>
                    <h6 className="my-auto fw-semibold">MLB</h6>
                    <h6 className="mx-1 my-auto fw-semibold">-</h6>
                    <h6 className="my-auto fw-semibold">2 Penumpang</h6>
                    <h6 className="mx-1 my-auto fw-semibold">-</h6>
                    <h6 className="my-auto fw-semibold">Economy</h6>
                  </div>
                </div>
              </Col>
              <Col className="rounded-4 my-1 ms-1 bg-green">
                <Link to={"/"}>
                  <button className=" h-100 w-100 text-white ">
                    <h6 className="my-auto fw-semibold">Ubah Pencarian</h6>
                  </button>
                </Link>
              </Col>
            </Row>
            <Row xs="auto mt-3 mx-auto">
              {dates.map((date, index) => (
                <Col className="mx-auto rounded-3 px-2 border button-schedule ">
                  <button className="  ">
                    <h6 className="fw-bold">{getDay(date)}</h6>
                    <h6 className="fw-normal fs-12 date">{getDate(date)}</h6>
                  </button>
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
