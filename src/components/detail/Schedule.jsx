import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const Schedule = () => {
  return (
    <div className="bg-detail pt-5 pb-4">
      <Container className="">
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <h5 className="mb-4">Detail Penerbangan</h5>
            <Row>
              <Col sm={9} className="list-items rounded-4 my-1 bg-purple">
                <div className="d-flex h-100">
                  <button>
                    <img src="../../../img/arrow-left.svg" alt="" />
                  </button>
                  <div className=" d-flex items">
                    <h6>JKT</h6>
                    <h6>MLB</h6>
                    <h6 className="mx-1">-</h6>
                    <h6>2 Penumpang</h6>
                    <h6 className="mx-1">-</h6>
                    <h6>Economy</h6>
                  </div>
                </div>
              </Col>
              <Col sm={3} className="edit-search rounded-4 ms-auto my-1">
                <button className="w-100 h-100 text-light search-button">
                  Ubah Pencarian
                </button>
              </Col>
            </Row>
            <Row xs="auto mt-3 mx-auto">
              <Col className="  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className="  rounded-3 date px-1 mx-auto ">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className=" bg-purple  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className="  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className="  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className="  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className="  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
                </button>
              </Col>
              <Col className="  rounded-3 date px-1 mx-auto">
                <button className="w-100 h-100 ">
                  <h6>Selasa</h6>
                  <p>12/12/2001</p>
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
