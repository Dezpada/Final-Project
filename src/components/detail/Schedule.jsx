import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Schedule = () => {
  const flight = [
    {
      id: 1,
      day: "Senin",
      date: "12/12/2023",
      // maskapai: "Jet Air",
      // class: "Economy",
      // price: "450000",
      // fromhour: "07:00",
      // fromcity: "JKT",
      // estimate: "4h 0m",
      // tohour: "11:00",
      // fromdate: "03/03/2023",
      // todate: "03/03/2023",
      // fromairport: "Soetta",
      // toairport: "melbourne",
    },
    {
      id: "2",
      day: "Selasa",
      date: "13/12/2023",
    },
    {
      id: "3",
      day: "Rabu",
      date: "14/12/2023",
    },
    {
      id: "4",
      day: "Kamis",
      date: "15/12/2023",
    },
    {
      id: "5",
      day: "Jumat",
      date: "16/12/2023",
    },
    {
      id: "6",
      day: "Sabtu",
      date: "17/12/2023",
    },
    {
      id: "7",
      day: "Minggu",
      date: "18/12/2023",
    },
    {
      id: "8",
      day: "Senin",
      date: "19/12/2023",
    },
  ];
  const [changeColor, setChangeColor] = useState();

  const handleScheduleClick = (id) => {
    setChangeColor(!changeColor);
  };

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
                className="rounded-4 my-1 py-2 px-2 bg-purple text-white"
              >
                <div className="d-flex h-100 ">
                  <button>
                    <img src="../../../img/arrow-left.svg" alt="" />
                  </button>
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
                <button className=" h-100 w-100 text-white ">
                  <h6 className="my-auto fw-semibold">Ubah Pencarian</h6>
                </button>
              </Col>
            </Row>
            <Row>
              <Col className="mx-auto button-schedule">
                <button
                  className={`rounded-3 px-3 py-2 border ${
                    changeColor === true ? "bg-purple text-white" : ""
                  }`}
                  onClick={handleScheduleClick()}
                >
                  <h6 className="fw-bold my-auto">Selasa</h6>
                  <h6 className="fw-normal fs-12 date my-auto">12/12/2001</h6>
                </button>
              </Col>

              <Col className="mx-auto button-schedule">
                <button
                  className={`rounded-3 px-3 py-2 border ${
                    changeColor === true ? "" : "bg-purple text-white"
                  }`}
                  onClick={handleScheduleClick(2)}
                >
                  <h6 className="fw-bold my-auto">Selasa</h6>
                  <h6 className="fw-normal fs-12 date my-auto">12/12/2001</h6>
                </button>
              </Col>
            </Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
