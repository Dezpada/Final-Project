import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import "./FlightForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FlightForm = () => {
  const [formData, setFormData] = useState({
    class: "ECONOMY",
    destination_airport: 1,
    flight_date: "",
    origin_airport: 1,
    returnDate: "",
    total_passenger: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://final-project-production-b6fe.up.railway.app/airports?page=1&per_page=50"
        );
        setAirports(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [airports, setAirports] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/detail-penerbangan", { state: { formData } });
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
                    <Form.Group controlId="origin_airport">
                      <Form.Label className="label">Dari</Form.Label>
                      <Form.Control
                        as="select"
                        name="origin_airport"
                        value={formData.origin_airport}
                        onChange={handleInputChange}

                        // onKeyUp={handleSearchInputChange}
                      >
                        {airports.map((airport) => (
                          <option key={airport.id} value={airport.id}>
                            {airport.city} ({airport.name})
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="destination_airport">
                      <Form.Label className="label">Tujuan</Form.Label>
                      <Form.Control
                        as="select"
                        name="destination_airport"
                        value={formData.destination_airport}
                        onChange={handleInputChange}
                      >
                        {airports.map((airport) => (
                          <option key={airport.id} value={airport.id}>
                            {airport.city} ({airport.name})
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Col className="mt-2">
                        <Form.Group controlId="flight_date">
                          <Form.Label className="label">
                            Tanggal Keberangkatan
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="flight_date"
                            value={formData.flight_date}
                            onChange={handleInputChange}
                            required
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
                        <Form.Group controlId="total_passengers">
                          <Form.Label className="label">
                            Jumlah Penumpang
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="total_passengers"
                            min={1}
                            value={formData.total_passenger}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col className="mt-2">
                        <Form.Group controlId="class">
                          <Form.Label className="label">Kelas</Form.Label>
                          <Form.Control
                            as="select"
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                          >
                            <option value="ECONOMY">Economy</option>
                            <option value="BUSINESS">Business</option>
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
