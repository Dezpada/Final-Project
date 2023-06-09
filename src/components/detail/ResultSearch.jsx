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
      <div className="mt-5">
        <Row>
          <Col md={9}></Col>
          <Col md={1}>
            <button className=" border rounded-4  py-2 px-3 d-flex align-items-center">
              <img src="/img/arrow-filter.svg" alt="" />
              <h6 className="my-auto text-purple">Termurah</h6>
            </button>
          </Col>
          <Col md={2}></Col>
        </Row>
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
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="bg-light">
                  Accordion Item #1<br></br>asdasd asdasdas sada sdasd asdas das
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
