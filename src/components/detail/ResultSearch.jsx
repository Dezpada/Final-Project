import React from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Accordion,
  ListGroup,
} from "react-bootstrap";

const ResultSearch = () => {
  return (
    <Container>
      <div>
        <Row className="mx-auto mt-3">
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: "14rem" }}>
              <ListGroup variant="flush" className="mt-3">
                <h6 className="ms-4">Filter</h6>
                <ListGroup.Item>
                  <button className="w-100">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-self-center">
                        <img src="/img/fi_box.svg" alt="" />
                        <h6 className="my-auto ms-2">Transit</h6>
                      </div>
                      <img src="/img/arrow-right.svg" alt="" />
                    </div>
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="w-100">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-self-center">
                        <img src="/img/fi_heart.svg" alt="" />
                        <h6 className="my-auto ms-2">Fasilitas</h6>
                      </div>
                      <img src="/img/arrow-right.svg" alt="" />
                    </div>
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="w-100">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-self-center">
                        <img src="/img/fi_dollar-sign.svg" alt="" />
                        <h6 className="my-auto ms-2">Harga</h6>
                      </div>
                      <img src="/img/arrow-right.svg" alt="" />
                    </div>
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={6}>
            <Accordion className="position-relative z-0 mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="bg-light">
                  <div className="flex-column">
                    <div className="d-flex">
                      <h6 className="fw-semibold">Jet Air</h6>
                      <h6 className="fw-semibold mx-2"> - </h6>
                      <h6 className="fw-semibold">Economy</h6>
                    </div>
                    <div className="d-flex">
                      <div className="my-auto">
                        <h6 className="fw-bold">07:00</h6>
                        <h6 className="fw-semibold">JKT</h6>
                      </div>
                      <div className="d-flex flex-column ">
                        <h6 className="mx-auto text-secondary fw-normal">
                          4h 0m
                        </h6>
                        <img src="/img/arrow-line.svg" alt="" />
                        <h6 className="mx-auto pt-1 text-secondary fw-normal">
                          Direct
                        </h6>
                      </div>
                      <div className="my-auto">
                        <h6 className="fw-bold">11:00</h6>
                        <h6 className="fw-semibold">MLB</h6>
                      </div>
                      <div className="ms-3">
                        <h5 className="ms-1">IDR 4.950.000</h5>
                        <div className="position-absolute z-1">
                          <button className="bg-purple  rounded-4 text-center my-auto px-5">
                            <h5 className="text-light">Pilih</h5>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <div className="d-flex">
                      <div>
                        <h6 className="text-purple fw-bold">
                          Detail Penerbangan
                        </h6>
                        <div className="d-flex flex-column">
                          <h6 className="fw-bold">07:00</h6>
                          <h6 className="fw-normal">3 Maret 2023</h6>
                          <div className="d-flex">
                            <h6 className="fw-semibold">Soekarno Hatta</h6>
                            <h6 className="fw-semibold mx-2">-</h6>
                            <h6 className="fw-semibold">
                              Terminal 1A Dosmetik
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <h6 className="text-purple fw-semibold">
                          Keberangkatan
                        </h6>
                      </div>
                    </div>
                    <div className="w-75 mx-auto">
                      <img src="/img/line.svg" alt="" className="w-100" />
                    </div>
                    <div className="d-flex my-2">
                      <div className="my-auto me-3">
                        <img src="/img/logo-leaf.svg" alt="" />
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <h6 className="fw-bold">Jet Air</h6>
                          <h6 className="fw-bold mx-2">-</h6>
                          <h6 className="fw-bold">Economy</h6>
                        </div>
                        <div className="d-flex">
                          <h6 className="fw-bold">JT</h6>
                          <h6 className="fw-bold mx-2">-</h6>
                          <h6 className="fw-bold">203</h6>
                        </div>
                        <div>
                          <h6 className="fw-bold mt-3">Informasi:</h6>
                          <h6 className="fw-normal">Baggage 20 Kg</h6>
                          <h6 className="fw-normal">Cabin Baggage 7 Kg</h6>
                          <h6 className="fw-normal">In Flight Entertainment</h6>
                        </div>
                      </div>
                    </div>
                    <div className="w-75 mx-auto">
                      <img src="/img/line.svg" alt="" className="w-100" />
                    </div>
                    <div className="d-flex">
                      <div>
                        <div className="d-flex flex-column">
                          <h6 className="fw-bold">11:00</h6>
                          <h6 className="fw-normal">3 Maret 2023</h6>
                          <h6 className="fw-semibold">
                            Melbourne International Airport
                          </h6>
                        </div>
                      </div>
                      <div className="ms-auto my-auto">
                        <h6 className="text-purple fw-semibold">Kedatangan</h6>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default ResultSearch;
