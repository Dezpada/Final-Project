import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import masterCard from '../assets/mastercard_logo.png';
import "./Payment.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Payment() {
  const [setShowForm] = useState(false);
  const [isGopayFormVisible, setIsGopayFormVisible] = useState(false);
  const [isVirtualAccountFormVisible, setIsVirtualAccountFormVisible] =
    useState(false);
  const [isCreditCardFormVisible, setIsCreditCardFormVisible] = useState(false);

  const [isGopayButtonActive, setIsGopayButtonActive] = useState(false);
  const [isVirtualAccountButtonActive, setIsVirtualAccountButtonActive] =
    useState(false);
  const [isCreditCardButtonActive, setIsCreditCardButtonActive] =
    useState(false);

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    // ccv: "",
    // expiryDate: "",
  });

  const handleToggleForm = (formType) => {
    if (formType === "gopay") {
      setIsGopayFormVisible(!isGopayFormVisible);
      setIsGopayButtonActive(!isGopayButtonActive);
    } else if (formType === "virtualAccount") {
      setIsVirtualAccountFormVisible(!isVirtualAccountFormVisible);
      setIsVirtualAccountButtonActive(!isVirtualAccountButtonActive);
    } else if (formType === "creditCard") {
      setIsCreditCardFormVisible(!isCreditCardFormVisible);
      setIsCreditCardButtonActive(!isCreditCardButtonActive);
    }
  };

  const [flightData, setFlightData] = useState(null);
  const flightId = "2"; // Ubah ID sesuai kebutuhan Anda

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://final-project-develop-f89c.up.railway.app/flight/${flightId}`
        );
        setFlightData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [flightId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Lakukan sesuatu dengan data yang diinputkan
    setFormData({
      cardNumber: "",
      cardHolderName: "",
      ccv: "",
      expiryDate: "",
    });
    setShowForm(false);
  };

  const [showModal, setShowModal] = useState(false);
  const handleModalShow = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container className="my-1 row-w">
      <Row className="custom-button-cost justify-content-center text-center">
        <div>
          <Button onClick={handleModalShow} variant="danger" size="md">
            Segera Selesaikan pembayaran Anda!
          </Button>
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <span className="fw-medium">Status Pembayaran (Unpaid)</span>
                <br />{" "}
                <span className="fw-bold">
                  Selesaikan Pembayaran Anda 3 Hari sebelum Keberangkatan!
                </span>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={handleModalClose}
                style={{ backgroundColor: "#7126B5" }}
              >
                Tutup
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Row>
      <hr />
      <Row className="my-5">
        <Col md={6}>
          <Row>
            <div className="d-flex justify-content-between"></div>
            <p className="fw-bold">Isi Data Pembayaran</p>
            <div className="d-grid gap-2">
              <Button
                type="button"
                onClick={() => handleToggleForm("gopay")}
                size="md"
                style={{
                  textAlign: "left",
                  backgroundColor: isGopayButtonActive ? "#7126B5" : "#8A8A8A",
                  color: isGopayButtonActive ? "#ffffff" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Gopay{" "}
                {isGopayFormVisible ? (
                  <FiChevronUp className="icon-right" />
                ) : (
                  <FiChevronDown className="icon-right" />
                )}
              </Button>
              {isGopayFormVisible && (
                <form
                  onSubmit={handleSubmit}
                  className="form"
                  style={{ textAlign: "left" }}
                >
                  <Row>
                    <label
                      className="fw-medium mt-2"
                      style={{ textIndent: "50px" }}
                    >
                      Card Number
                      <br />
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder=" "
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="borderless-input"
                        style={{ width: "80%", marginLeft: "46px" }} // Mengatur lebar input menjadi 100%
                      />
                    </label>
                  </Row>
                  <Row className="justify-content-center mt-3">
                    <Button
                      type="submit"
                      size="md"
                      // className="custom-button-lgn text-light custom-button-small"
                      style={{
                        width: "96%",
                        backgroundColor: "#7126B5",
                      }}
                      as={Link}
                      to="/payment-success"
                    >
                      Bayar
                    </Button>
                  </Row>
                </form>
              )}

              <Button
                type="button"
                onClick={() => handleToggleForm("virtualAccount")}
                size="md"
                style={{
                  textAlign: "left",
                  backgroundColor: isVirtualAccountButtonActive
                    ? "#7126B5"
                    : "#8A8A8A",
                  color: isVirtualAccountButtonActive ? "#ffffff" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Virtual Account{" "}
                {isVirtualAccountFormVisible ? (
                  <FiChevronUp className="icon-right" />
                ) : (
                  <FiChevronDown className="icon-right" />
                )}
              </Button>
              {isVirtualAccountFormVisible && (
                <form
                  onSubmit={handleSubmit}
                  className="form"
                  style={{ textAlign: "left" }}
                >
                  <Row>
                    <label
                      className="fw-medium mt-2"
                      style={{ textIndent: "50px" }}
                    >
                      Card Number
                      <br />
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder=" "
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="borderless-input"
                        style={{ width: "80%", marginLeft: "46px" }} // Mengatur lebar input menjadi 100%
                      />
                    </label>
                  </Row>
                  <Row className="justify-content-center mt-3">
                    <Button
                      type="submit"
                      size="md"
                      // className="custom-button-lgn text-light custom-button-small"
                      style={{
                        width: "96%",
                        backgroundColor: "#7126B5",
                      }}
                      as={Link}
                      to="/payment-success"
                    >
                      Bayar
                    </Button>
                  </Row>
                </form>
              )}

              <Button
                type="button"
                onClick={() => handleToggleForm("creditCard")}
                size="md"
                style={{
                  textAlign: "left",
                  backgroundColor: isCreditCardButtonActive
                    ? "#7126B5"
                    : "#8A8A8A",
                  color: isCreditCardButtonActive ? "#ffffff" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Credit Card{" "}
                {isCreditCardFormVisible ? (
                  <FiChevronUp className="icon-right" />
                ) : (
                  <FiChevronDown className="icon-right" />
                )}
              </Button>
              {isCreditCardFormVisible && (
                <form
                  onSubmit={handleSubmit}
                  className="form"
                  style={{ textAlign: "left" }}
                >
                  <Row>
                    <label
                      className="fw-medium mt-2"
                      style={{ textIndent: "50px" }}
                    >
                      Card Number
                      <br />
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder=" "
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="borderless-input"
                        style={{ width: "80%", marginLeft: "46px" }} // Mengatur lebar input menjadi 100%
                      />
                    </label>
                    <label className="fw-medium" style={{ textIndent: "50px" }}>
                      Card Holder Name
                      <br />
                      <input
                        type="text"
                        name="cardHolderName"
                        placeholder=" "
                        value={formData.cardHolderName}
                        onChange={handleChange}
                        className="borderless-input"
                        style={{ width: "80%", marginLeft: "46px" }} // Mengatur lebar input menjadi 100%
                      />
                    </label>
                  </Row>
                  <Row className="justify-content-center mt-3">
                    <Button
                      type="submit"
                      size="md"
                      // className="custom-button-lgn text-light custom-button-small"
                      style={{
                        width: "96%",
                        backgroundColor: "#7126B5",
                      }}
                      as={Link}
                      to="/payment-success"
                    >
                      Bayar
                    </Button>
                  </Row>
                </form>
              )}
            </div>
          </Row>
        </Col>

        <Col md={6}>
          {flightData ? (
            <>
              <Row>
                <Col>
                  <div style={{ margin: "40px 0" }}></div>
                  <div className="d-flex justify-content-between"></div>
                  <p className="fw-bold">
                    Booking Code:{" "}
                    <b className="total-clr">{flightData.flight_number}</b>
                  </p>
                  <Row>
                    <Col>
                      <p className="fw-bold">{flightData.departure_time}</p>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                      <p className="ms-auto my-auto fs-12 txt-clr fw-bold">
                        Keberangkatan
                      </p>
                    </Col>
                  </Row>
                  <p>
                    {flightData.flight_date}
                    <br />
                    <span className="fw-bold">
                      {flightData.departureAirport.name} -{" "}
                      {flightData.departure_terminal_name}
                    </span>
                  </p>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col xs={1} className="d-flex align-items-center"></Col>
                <Col>
                  <div className="d-flex">
                    <div className="me-1 my-auto">
                      <img
                        src={flightData.airplane.airline.icon_url}
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          marginRight: "12px",
                        }}
                      />
                    </div>
                    <div className="d-flex flex-column ml-1">
                      <div>
                        <div className="d-flex">
                          <p className="fw-bold fs-14">
                            {flightData.airplane.airline.name} -{" "}
                            {flightData.class} <br />
                            {flightData.airplane.airline_code} -{" "}
                            {flightData.flight_number}
                          </p>
                        </div>
                      </div>
                      <p>
                        <span className="fw-bold">Informasi: </span>
                        <br />{" "}
                        <span className="fw-medium">
                          Baggage {flightData.free_baggage} kg
                        </span>
                        <br /> Cabin baggage {flightData.cabin_baggage} kg
                        <br /> In Flight Entertainment
                      </p>
                    </div>
                  </div>
                </Col>
                <hr />
              </Row>
              <Row>
                <Row>
                  <Col>
                    <p className="fw-bold">{flightData.arrival_time}</p>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <p className="ms-auto my-auto fs-12 txt-clr fw-bold">
                      Kedatangan
                    </p>
                  </Col>
                </Row>
                <p>
                  {flightData.flight_date}
                  <br />
                  <span className="fw-bold">
                    {flightData.arrivalAirport.name} -{" "}
                    {flightData.arrival_terminal_name}
                  </span>
                </p>
                <hr />
              </Row>
              <Row>
                <p className="fw-bold">Rincian Harga</p>
                <Col>
                  <p>
                    2 Adults
                    <br />1 Baby
                    <br />
                    Tax
                  </p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <p>
                    IDR 9.550.000
                    <br />
                    IDR 0
                    <br />
                    IDR 300.000
                  </p>
                </Col>
                <hr />
              </Row>
              <Row className=" fw-bold">
                <Col>
                  <p>Total</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <p className="total-clr">IDR 9.850.000</p>
                </Col>
              </Row>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
