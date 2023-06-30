import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Container, Form, Row } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import NavbarCO from "../components/checkout/NavbarCO";
import "../components/checkout/style.css";
import CheckoutCol2 from "../components/checkout/CheckoutCol2";

function Checkout() {
  const [show, setShow] = useState(false);
  const [adultPassenger, setAdultPassenger] = useState("");
  const [kidPassenger, setKidPassenger] = useState("");
  const [totalPassenger, setTotalPassenger] = useState("");
  let components = [];
  const toggleFamilyName = () => setShow(!show);

  useEffect(() => {
    calculatePassenger().then(totalAllPassenger()).then(formData());
    async function calculatePassenger() {
      const adult = window.localStorage.getItem("adult_passengers");
      setAdultPassenger(adult);
      const kid = window.localStorage.getItem("kid_passengers");
      setKidPassenger(kid);
    }
    async function totalAllPassenger() {
      await calculatePassenger();
      setTotalPassenger(adultPassenger + kidPassenger);
    }
    async function formData() {
      await totalAllPassenger();
      for (let i = 0; i < totalPassenger.value; i++) {
        components.push(
          <Card className="mb-3">
            <Card.Header style={{ background: "#3C3C3C", color: "white" }}>
              Data Diri Penumpang
            </Card.Header>
            <Card.Body>
              <Form className="mb-4 mx-3 ">
                <Form.Group className="my-3" controlId="formBasicName">
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    Nama Lengkap
                  </Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Masukkan Nama Lengkap"
                  />
                </Form.Group>

                <Form.Group className="my-3" controlId="formBasicFamilyName">
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    Nomor Telepon
                  </Form.Label>
                  <Form.Control type="tel" placeholder="+62 ." />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicBirthDate">
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    Tanggal Lahir
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicCountry">
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    Kewarganegaraan
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicID">
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    KTP/Paspor
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="my-3"
                  controlId="formBasicPublishCountry"
                >
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    Negara Penerbit
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formBasicExpireDate">
                  <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                    Berlaku Sampai
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        );
      }
    }
  }, []);

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
                        <Form className="mb-4 mx-3 ">
                          <Form.Group
                            className="my-3"
                            controlId="formBasicName"
                          >
                            <Form.Label
                              style={{ fontWeight: "bold", color: "#4B1979" }}
                            >
                              Nama Lengkap
                            </Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Masukkan Nama Lengkap"
                            />
                          </Form.Group>

                          <Form.Group
                            className="my-3"
                            controlId="formBasicPassword"
                          >
                            <Row>
                              <Col sm={8}>
                                <Form.Label>Punya Nama Keluarga?</Form.Label>
                              </Col>
                              <Col sm={4} style={{ textAlign: "end" }}>
                                <Form.Check // prettier-ignore
                                  type="switch"
                                  id="custom-switch"
                                  onChange={toggleFamilyName}
                                  trackColor={{
                                    true: "#4B1979",
                                    false: "grey",
                                  }}
                                />
                              </Col>
                            </Row>
                          </Form.Group>
                          {show ? (
                            <Form.Group
                              className="my-3"
                              controlId="formBasicFamilyName"
                            >
                              <Form.Label
                                style={{ fontWeight: "bold", color: "#4B1979" }}
                              >
                                Nama Keluarga
                              </Form.Label>
                              <Form.Control
                                type="name"
                                placeholder="Masukkan Nama Keluarga"
                              />
                            </Form.Group>
                          ) : null}
                          <Form.Group
                            className="my-3"
                            controlId="formBasicFamilyName"
                          >
                            <Form.Label
                              style={{ fontWeight: "bold", color: "#4B1979" }}
                            >
                              Nomor Telepon
                            </Form.Label>
                            <Form.Control type="tel" placeholder="+62 ." />
                          </Form.Group>
                          <Form.Group
                            className="my-3"
                            controlId="formBasicName"
                          >
                            <Form.Label
                              style={{ fontWeight: "bold", color: "#4B1979" }}
                            >
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Contoh : johndoe@gmail.com"
                            />
                          </Form.Group>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header as={"h5"}>
                    Isi Data Penumpang
                  </Accordion.Header>
                  <Accordion.Body>{components}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className=" mx-auto my-3 ">
                <button
                  className="w-100 bg-purple rounded-3 px-5 py-2 text-white fw-normal fs-30"
                  disabled
                >
                  Simpan
                </button>
              </div>
            </Row>
          </Col>
          <Col md>
            <CheckoutCol2 />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
