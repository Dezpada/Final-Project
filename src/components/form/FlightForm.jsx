import React, { useState } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "./FlightForm.css";
import { Link } from "react-router-dom";

const FlightForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    seatClass: "economy",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions based on the filled data
  };

  // const handleSearchInputChange = (event) => {
  //   const searchValue = event.target.value.toLowerCase();
  //   const filteredOptions = options.filter((option) =>
  //     option.toLowerCase().includes(searchValue)
  //   );
  //   // Lakukan sesuatu dengan filteredOptions, seperti mengubah state atau menampilkan hasil pencarian.
  // };

  return (
    <Container className="mt-1">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Form.Group controlId="from">
                      <Form.Label className="label">Dari</Form.Label>
                      <Form.Control
                        as="select"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
                        // onKeyUp={handleSearchInputChange}
                      >
                        <option value="">Jakarta (JKT)</option>
                        <option value="">Bangkok</option>
                        <option value="">Kuala Lumpur</option>
                        <option value="">Singapura</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="to">
                      <Form.Label className="label">Tujuan</Form.Label>
                      <Form.Control
                        as="select"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
                      >
                        <option value="">Melbourne (MLB)</option>
                        <option value="">Singapura</option>
                        <option value="">Jakarta</option>
                        <option value="">Bangkok</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Col className="mt-2">
                        <Form.Group controlId="departureDate">
                          <Form.Label className="label">
                            Tanggal Keberangkatan
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col className="mt-2">
                        <Form.Group controlId="returnDate">
                          <Form.Label className="label">
                            Tanggal Kembali
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>

                  <Col>
                    <Row>
                      <Col className="mt-2">
                        <Form.Group controlId="passengers">
                          <Form.Label className="label">
                            Jumlah Penumpang
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="passengers"
                            min={1}
                            value={formData.passengers}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col className="mt-2">
                        <Form.Group controlId="seatClass">
                          <Form.Label className="label">Kelas</Form.Label>
                          <Form.Control
                            as="select"
                            name="seatClass"
                            value={formData.seatClass}
                            onChange={handleInputChange}
                          >
                            <option value="economy">Economy</option>
                            <option value="premium economy">
                              Premium Economy
                            </option>
                            <option value="business">Business</option>
                            <option value="first Class">First Class</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* <Row className="mt-2"></Row> */}
                <Col className="p-2 text-center">
                  <Button
                    className="custom-button mt-4 text-light"
                    type="submit"
                    size="md"
                    as={Link}
                    to="/detail-penerbangan"
                  >
                    Cari Penerbangan
                  </Button>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FlightForm;
