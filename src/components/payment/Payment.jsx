import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import masterCard from '../assets/mastercard_logo.png';
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
  const [showForm, setShowForm] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    ccv: "",
    expiryDate: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    setIsFormVisible(!showForm);
  };

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

  // const handleButtonClick = () => {
  //   alert("Pembayaran telah diselesaikan.");
  // };
  return (
    <Container className="my-5 row-w">
      <Row className="custom-button-cost justify-content-center text-cente">
        <div>
          <Button onClick={handleModalShow} variant="danger" size="md">
            Selesaikan Pembayaran sampai tanggal 10 Maret 2023 12:00
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
                  Selesaikan pembayaran Anda sebelum tanggal 10 Maret 2023!
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
        <Col>
          <Row>
            <div className="d-flex justify-content-between"></div>
            <p className="fw-bold">Isi Data Pembayaran</p>
            <div className="d-grid gap-2">
              <Button
                variant="secondary"
                size="md"
                style={{ textAlign: "left" }}
              >
                Gopay <FiChevronDown className="icon-right" />
              </Button>
              <Button
                variant="secondary"
                size="md"
                style={{ textAlign: "left" }}
              >
                Virtual Account <FiChevronDown className="icon-right" />
              </Button>
              <Button
                type="button"
                onClick={handleClick}
                variant="secondary"
                size="md"
                style={{ textAlign: "left", backgroundColor: "#7126B5" }}
              >
                Credit Card{" "}
                {isFormVisible ? (
                  <FiChevronUp className="icon-right" />
                ) : (
                  <FiChevronDown className="icon-right" />
                )}
              </Button>
              {showForm && (
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
                    <Row>
                      <Col>
                        <label
                          className="fw-medium"
                          style={{ textIndent: "50px" }}
                        >
                          CVV
                          <br />
                          <input
                            type="text"
                            name="cvv"
                            placeholder=" "
                            value={formData.cvv}
                            onChange={handleChange}
                            className="borderless-input"
                            style={{ width: "80%", marginLeft: "46px" }} // Mengatur lebar input menjadi 100%
                          />
                        </label>
                      </Col>
                      <Col>
                        <label
                          className="fw-medium"
                          style={{ textIndent: "40px" }}
                        >
                          Expiry Date
                          <br />
                          <input
                            type="text"
                            name="expiryDate"
                            placeholder=" "
                            value={formData.expiryDate}
                            onChange={handleChange}
                            className="borderless-input"
                            style={{ width: "80%", marginLeft: "38px" }} // Mengatur lebar input menjadi 100%
                          />
                        </label>
                      </Col>
                    </Row>
                  </Row>
                  <Row className="justify-content-center mt-3">
                    <Button
                      type="submit"
                      size="md"
                      className="custom-button-lgn text-light w-100"
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

        <Col>
          <Row>
            <Col>
              <div className="d-flex justify-content-between"></div>
              <p className="fw-bold">
                Booking Code: <b className="total-clr">6723y2GHK</b>
              </p>
              <Row>
                <Col>
                  <p className="fw-bold">07:00</p>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <p className="txt-clr fw-bold">Keberangkatan</p>
                </Col>
              </Row>
              <p>
                3 Maret 2023
                <br />
                <span className="fw-bold">
                  Soekarno Hatta - Terminal 1A Domestik
                </span>
              </p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col xs={1} className="d-flex align-items-center"></Col>
            <Col>
              <p className="fw-bold">
                Jet Air - Economy <br />
                JT - 203
              </p>
              <div className="information">
                <img src="/img/logo_leaf.svg" alt=" " />
                <p>
                  <span className="fw-bold">Informasi: </span>
                  <br /> <span className="fw-medium">Baggage 20 kg</span>
                  <br /> Cabin baggage 7 kg
                  <br /> In Flight Entertainment
                </p>
              </div>
            </Col>
            <hr />
          </Row>
          <Row>
            <Row>
              <Col>
                <p className="fw-bold">11:00</p>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <p className="txt-clr fw-bold">Kedatangan</p>
              </Col>
            </Row>
            <p>
              3 Maret 2023
              <br />
              <span className="fw-bold">Melbourne International Airport</span>
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
            <Col>
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
            <Col>
              <p className="total-clr">IDR 9.850.000</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
