import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Container,
  Modal,
} from "react-bootstrap";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUser,
  FaCogs,
} from "react-icons/fa";
import "./FlightForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FlightForm = () => {
  // set req body awal
  const [formData, setFormData] = useState({
    class: "ECONOMY",
    destination_airport: 1,
    flight_date: "",
    origin_airport: 1,
    departure_date: "",
    return_date: "",
    // total_passenger: 1,
    tripType: "oneway",
  });
  // get api oneway / twoway
  const getApiEndpoint = (tripType) => {
    if (tripType === "oneway") {
      return "https://final-project-production-b6fe.up.railway.app/flight/search/oneway";
    } else {
      return "https://final-project-production-b6fe.up.railway.app/flight/search/twoway";
    }
  };
  // get req body oneway / twoway
  const getRequestBody = (tripType, formData) => {
    if (tripType === "oneway") {
      return {
        origin_airport: Number(formData.origin_airport),
        destination_airport: Number(formData.destination_airport),
        flight_date: formData.flight_date,
        total_passenger: formData.total_passenger,
        class: formData.class,
        tripType: formData.tripType,
      };
    } else {
      return {
        origin_airport: Number(formData.origin_airport),
        destination_airport: Number(formData.destination_airport),
        departure_date: formData.flight_date,
        return_date: formData.return_date,
        total_passenger: formData.total_passenger,
        class: formData.class,
        tripType: formData.tripType,
        flight_date: formData.flight_date,
      };
    }
  };
  // fetch data airport
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
  useEffect(() => {
    fetchData();
  }, []);

  const [airports, setAirports] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTripTypeChange = (event) => {
    const tripType = event.target.checked ? "twoway" : "oneway";
    setFormData((prevState) => ({
      ...prevState,
      tripType: tripType,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiEndpoint = getApiEndpoint(formData.tripType);
    const requestBody = getRequestBody(formData.tripType, formData);

    navigate("/detail-penerbangan", {
      state: { apiEndpoint, requestBody },
    });
  };

  // Digunakan untuk Jumlah Passenger
  const [showModal, setShowModal] = useState(false);
  const [selectedPassengers, setSelectedPassengers] = useState({
    adults: 1,
    children: 0,
    baby: 0,
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handlePassengerChange = (event) => {
    const { name, value } = event.target;
    setSelectedPassengers((prevPassengers) => ({
      ...prevPassengers,
      [name]: parseInt(value),
    }));
  };

  const renderSelectedPassengers = () => {
    const { adults, children, baby } = selectedPassengers;
    let selectedPassengersString = "";

    if (adults > 0) {
      selectedPassengersString += ` ${adults} Dewasa`;
    }
    if (children > 0) {
      selectedPassengersString += ` ,${children} Anak`;
    }
    if (baby > 0) {
      selectedPassengersString += ` ,${baby} Bayi`;
    }

    return selectedPassengersString.trim();
  };

  const handleClick = () => {
    handleClose();
  };

  return (
    <Container className="mt-1">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="origin_airport">
                      <Form.Label
                        className="label"
                        style={{ color: "#7126b5", fontWeight: "bold" }}
                      >
                        <FaPlaneDeparture className="icon" /> Dari
                      </Form.Label>

                      <Form.Control
                        as="select"
                        name="origin_airport"
                        value={formData.origin_airport}
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
                  <Col xs={12} md={6}>
                    <Form.Group controlId="destination_airport">
                      <Form.Label
                        className="label"
                        style={{ color: "#7126b5", fontWeight: "bold" }}
                      >
                        <FaPlaneArrival className="icon" /> Tujuan
                      </Form.Label>
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
                  <Col xs={12} md={6}>
                    <Row>
                      <Col xs={12} md={6} className="mt-2">
                        <Form.Group controlId="flight_date">
                          <Form.Label
                            className="label"
                            style={{ color: "#7126b5", fontWeight: "bold" }}
                          >
                            <FaCalendarAlt className="icon" /> Tanggal
                            Keberangkatan
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
                      <Col xs={6} md={6} className="mt-2">
                        <div className="d-flex flex-column">
                          <Form.Check
                            type="switch"
                            id="tripTypeSwitch"
                            label=""
                            checked={formData.tripType === "twoway"}
                            onChange={handleTripTypeChange}
                          />
                          <h6 style={{ color: "#7126b5" }}>Pulang/Pergi</h6>
                        </div>
                      </Col>
                      {formData.tripType === "twoway" && (
                        <Col xs={12} md={6} className="mt-2">
                          <Form.Group controlId="return_date">
                            <Form.Label
                              className="label"
                              style={{ color: "#7126b5", fontWeight: "bold" }}
                            >
                              <FaCalendarAlt className="icon" /> Tanggal Kembali
                            </Form.Label>
                            <Form.Control
                              type="date"
                              name="return_date"
                              value={formData.return_date}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                      )}
                    </Row>
                  </Col>

                  <Col xs={12} md={6}>
                    <Row>
                      <Col xs={6} md={6} className="mt-2">
                        <Form.Label
                          className="label"
                          style={{ color: "#7126b5", fontWeight: "bold" }}
                        >
                          <FaUser className="icon" /> Jumlah Penumpang
                        </Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={renderSelectedPassengers()}
                          onClick={handleShow}
                        />
                        <Modal show={showModal} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Pilih Jenis Penumpang</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group controlId="adults" className="mb-2">
                                <Form.Label>
                                  <strong style={{ color: "#7126b5" }}>
                                    Dewasa
                                  </strong>
                                  <br />
                                  <small className="text-muted ml-2">
                                    (12 tahun keatas)
                                  </small>
                                </Form.Label>
                                <Form.Control
                                  type="number"
                                  min="0"
                                  name="adults"
                                  value={selectedPassengers.adults}
                                  onChange={handlePassengerChange}
                                />
                              </Form.Group>

                              <Form.Group controlId="children" className="mb-2">
                                <Form.Label>
                                  <strong style={{ color: "#7126b5" }}>
                                    Anak
                                  </strong>
                                  <br />
                                  <small className="text-muted ml-2">
                                    (2 - 11 tahun)
                                  </small>
                                </Form.Label>
                                <Form.Control
                                  type="number"
                                  min="0"
                                  name="children"
                                  value={selectedPassengers.children}
                                  onChange={handlePassengerChange}
                                />
                              </Form.Group>

                              <Form.Group controlId="baby" className="mb-3">
                                <Form.Label>
                                  <strong style={{ color: "#7126b5" }}>
                                    Bayi
                                  </strong>
                                  <br />
                                  <small className="text-muted ml-2">
                                    (Dibawah 2 tahun)
                                  </small>
                                </Form.Label>
                                <Form.Control
                                  type="number"
                                  min="0"
                                  name="baby"
                                  value={selectedPassengers.baby}
                                  onChange={handlePassengerChange}
                                />
                              </Form.Group>
                              <div className="button-posisition">
                                <Button
                                  onClick={handleClick}
                                  className="button-passenger text-light"
                                  style={{ backgroundColor: "#7126b5" }}
                                >
                                  Submit
                                </Button>
                              </div>
                            </Form>
                          </Modal.Body>
                        </Modal>
                      </Col>
                      <Col xs={6} md={6} className="mt-2">
                        <Form.Group controlId="class">
                          <Form.Label
                            className="label"
                            style={{ color: "#7126b5", fontWeight: "bold" }}
                          >
                            <FaCogs className="icon" /> Kelas
                          </Form.Label>
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