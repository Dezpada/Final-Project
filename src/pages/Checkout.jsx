import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import NavbarCO from "../components/checkout/NavbarCO";

function Checkout() {
  return (
    <>
      <Navbar1 />
      <NavbarCO />
      <Container className="container-fluid my-3" width="100%">
        <Row className="mx-2 my-3">
          <Col md>
            <Row className="my-3">
              <Accordion alwaysOpen defaultActiveKey={["0", "1"]}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header as={"h5"}>
                    Isi Data Pemesanan
                  </Accordion.Header>
                  <Accordion.Body>
                    <Card>
                      <Card.Header
                        style={{ background: "#3C3C3C", color: "white" }}
                      >
                        Data Diri Pemesanan
                      </Card.Header>
                      <Card.Body>
                        <Form className="mb-4 mx-5 ">
                          <Form.Group
                            className="my-4"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Contoh: johndoe@gmail.com"
                            />
                          </Form.Group>

                          <Form.Group
                            className="my-4"
                            controlId="formBasicPassword"
                          >
                            <Row>
                              <Col sm={8}>
                                <Form.Label>Password</Form.Label>
                              </Col>
                              <Col sm={4} style={{ textAlign: "end" }}>
                                <a href="/register" class="text-ungu">
                                  Lupa Kata Sandi
                                </a>
                              </Col>
                            </Row>
                            <Form.Control
                              type="password"
                              placeholder="Masukkan password"
                            />
                          </Form.Group>
                          <div className="d-grid gap-2">
                            <Button type="submit" className="mt-4 btn-ungu">
                              Masuk
                            </Button>
                          </div>
                          <p className="text-center mt-3">
                            Belum punya akun?{" "}
                            <a
                              href="/register"
                              class="text-ungu"
                              style={{ fontWeight: "bold" }}
                            >
                              Daftar di sini
                            </a>
                          </p>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header as={"h5"}>
                    Isi Data Penumpang
                  </Accordion.Header>
                  <Accordion.Body>
                    <Card>
                      <Card.Header
                        style={{ background: "#3C3C3C", color: "white" }}
                      >
                        Data Diri Pemesanan
                      </Card.Header>
                      <Card.Body>
                        <Form className="mb-4 mx-5 ">
                          <Form.Group
                            className="my-4"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email/No Telepon</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Contoh: johndoe@gmail.com"
                            />
                          </Form.Group>

                          <Form.Group
                            className="my-4"
                            controlId="formBasicPassword"
                          >
                            <Row>
                              <Col sm={8}>
                                <Form.Label>Password</Form.Label>
                              </Col>
                              <Col sm={4} style={{ textAlign: "end" }}>
                                <a href="/register" class="text-ungu">
                                  Lupa Kata Sandi
                                </a>
                              </Col>
                            </Row>
                            <Form.Control
                              type="password"
                              placeholder="Masukkan password"
                            />
                          </Form.Group>
                          <div className="d-grid gap-2">
                            <Button type="submit" className="mt-4 btn-ungu">
                              Masuk
                            </Button>
                          </div>
                          <p className="text-center mt-3">
                            Belum punya akun?{" "}
                            <a
                              href="/register"
                              class="text-ungu"
                              style={{ fontWeight: "bold" }}
                            >
                              Daftar di sini
                            </a>
                          </p>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
          <Col md>Test</Col>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
