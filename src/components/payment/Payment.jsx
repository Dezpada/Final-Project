import React, { useState, useEffect, useHistory } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import masterCard from '../assets/mastercard_logo.png';
import "./Payment.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";
moment.locale("id");

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

  const [flight, setFlight] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [airplane, setAirplane] = useState("");
  const [airline, setAirline] = useState("");
  const [passenger, setPassenger] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://final-project-production-b6fe.up.railway.app/flight/${params.id}`
        );
        setFlight(response.data.data);
        setDepartureAirport(response.data.data.departureAirport);
        setArrivalAirport(response.data.data.arrivalAirport);
        setAirplane(response.data.data.airplane);
        setAirline(response.data.data.airplane.airline);
        //console.log(flight.price);
        calculatePricePassengers();
        calculatePriceTotal();
      } catch (error) {
        alert(error);
      }
    }

    function calculatePricePassengers() {
      try {
        const passengers = window.localStorage.getItem("passengers");
        setPassenger(passengers);

        setPrice(parseInt(passenger) * parseInt(flight.price));
      } catch (error) {
        alert(error);
      }
    }

    function calculatePriceTotal() {
      try {
        setTotalPrice(parseInt(price) + 300000);
      } catch (error) {
        alert(error);
      }
    }

    if (params?.id) {
      fetchPost();
    }
  }, [params]);

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
    });
    setShowForm(false);
  };

  const handlePayment = () => {
    // Data yang akan dikirim ke API
    const data = {
      // ...isi data yang ingin dikirim
    };
    axios
      .post(
        "https://final-project-production-b6fe.up.railway.app/flight/booking/checkout",
        data
      )
      .then((response) => {
        console.log(response.data); 
        history.push("/payment-success");
      })
      .catch((error) => {
        console.error(error); 
      });
  };
  const history = useHistory();

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
                      style={{
                        width: "96%",
                        backgroundColor: "#7126B5",
                      }}
                      onClick={handlePayment}
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
                      style={{
                        width: "96%",
                        backgroundColor: "#7126B5",
                      }}
                      onClick={handlePayment}
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
                      onClick={handlePayment}
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
          <Row>
            <Col>
              <div style={{ margin: "40px 0" }}></div>
              <div className="d-flex justify-content-between"></div>
              <p className="fw-bold">
                Booking Code:{" "}
                <b className="total-clr">{flight.flight_number}</b>
              </p>
              <Row>
                <Col>
                  <p className="fw-bold">{flight.departure_time}</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <p className="ms-auto my-auto fs-12 txt-clr fw-bold">
                    Keberangkatan
                  </p>
                </Col>
              </Row>
              <p>
                {flight.flight_date}
                <br />
                <span className="fw-bold">
                  {flight.departureAirport.name} -{" "}
                  {flight.departure_terminal_name}
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
                    src={flight.airplane.airline.icon_url}
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
                        {flight.airplane.airline.name} - {flight.class} <br />
                        {flight.airplane.airline_code} - {flight.flight_number}
                      </p>
                    </div>
                  </div>
                  <p>
                    <span className="fw-bold">Informasi: </span>
                    <br />{" "}
                    <span className="fw-medium">
                      Baggage {flight.free_baggage} kg
                    </span>
                    <br /> Cabin baggage {flight.cabin_baggage} kg
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
                <p className="fw-bold">{flight.arrival_time}</p>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <p className="ms-auto my-auto fs-12 txt-clr fw-bold">
                  Kedatangan
                </p>
              </Col>
            </Row>
            <p>
              {flight.flight_date}
              <br />
              <span className="fw-bold">
                {flight.arrivalAirport.name} - {flight.arrival_terminal_name}
              </span>
            </p>
            <hr />
          </Row>
          <Row>
            <p className="fw-bold">Rincian Harga</p>
            <Col>
              <p>
                {passenger} Passenger
                <br />
                Tax
              </p>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <p>
                IDR {price}
                <br />
                IDR 300000
              </p>
            </Col>
            <hr />
          </Row>
          <Row className=" fw-bold">
            <Col>
              <p>Total</p>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <p className="total-clr">IDR {totalPrice}</p>
            </Col>
          </Row>
          <p>Loading...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
