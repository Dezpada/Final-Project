import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Payment.css";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
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

  
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const location = useLocation();

  function calculatePricePassengers() {
    try {
      const { total_passenger, adults, child, baby } = location.state;
      setPassenger(total_passenger);

      if (!isNaN(flight.price)) {
        setPrice(+passenger * +flight.price);
      } else {
        setPrice(30);
      }
    } catch (error) {
      alert(error);
    }
  }

  function calculatePriceTotal() {
    try {
      if (!isNaN(price)) {
        setTotalPrice(+price + 300000);
      } else {
        setTotalPrice(20);
      }
    } catch (error) {
      alert(error);
    }
  }

  const params = useParams();

  async function fetchPost() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/flight/${params.ticket_code}`
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

  useEffect(() => {
    if (price === undefined) {
      if (params?.ticket_code) {
        fetchPost();
      }
    } else {
      if (params?.ticket_code) {
        fetchPost();
      }
    }
  }, [params, price]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      cardNumber: "",
      cardHolderName: "",
    });
    setShowForm(false);
  };

  const handlePayment = () => {
    // Data yang akan dikirim ke API
    const data = {
      ticket_code: {},
    };
    axios
      .post(`${process.env.REACT_APP_API_KEY}/flight/booking/checkout`, data)
      .then((response) => {
        console.log(response.data);
        navigate("/payment-success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigate = useNavigate();

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
                        style={{ width: "80%", marginLeft: "46px" }}
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
                        style={{ width: "80%", marginLeft: "46px" }}
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
                  <p className="fw-normal">
                    {moment(flight.flight_date).format("LL")}
                  </p>
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
                <p className="fw-normal">
                  {moment(flight.flight_date).format("LL")}
                </p>
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
                {formatter.format(price)}
                <br />
                Rp 300.000
              </p>
            </Col>
            <hr />
          </Row>
          <Row className=" fw-bold">
            <Col>
              <p>Total</p>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <p className="total-clr"> {formatter.format(totalPrice)}</p>
            </Col>
          </Row>
          <p>Loading...</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
