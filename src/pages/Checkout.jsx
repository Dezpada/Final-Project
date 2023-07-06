import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Container, Form, Row } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import NavbarCO from "../components/checkout/NavbarCO";
import "../components/checkout/style.css";
import CheckoutCol2 from "../components/checkout/CheckoutCol2";
import ItemCard from "../components/checkout/ItemCard";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const [show, setShow] = useState(false);
  const [passengerData, setPassengerData] = useState([]);
  const [total_passenger, setTotalPassenger] = useState("");
  const [adultPassenger, setAdultPassenger] = useState();
  const [childPassenger, setChildPassenger] = useState();
  const [babyPassenger, setBabyPassenger] = useState();
  const [departure_flight_id, setDepartFlightID] = useState("");
  const [return_flight_id, setReturnFlightID] = useState("");
  const [is_roundtrip, setRoundTrip] = useState(false);
  const navigate = useNavigate();

  const toggleFamilyName = () => setShow(!show);
  const location = useLocation();

  const handleDataChange = (index, newData) => {
    setPassengerData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = newData;
      return updatedData;
    });
  };

  const handleOnClick = async (e) => {
    try {
      let payload = JSON.stringify({
        total_passenger,
        departure_flight_id, // provide the departure flight ID
        return_flight_id, // provide the return flight ID
        is_roundtrip, // or false depending on your logic
        dataPassenger: passengerData,
      });
      let token = localStorage.getItem("Authorization");
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_API_KEY}/flight/booking`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        data: payload,
      };

      const response = await axios.request(config);
      const { ticketCode } = response.data.data.ticket_code;
      toast.success(response.data.message);
      setTimeout(
        navigate(`/page-payment/${ticketCode}`, {
          state: {
            ticket_code: ticketCode,
            departure_flight_id: departure_flight_id,
            return_flight_id: return_flight_id,
          },
        }),
        [3000]
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  const renderCard = () => {
    let passenger = total_passenger;
    let newData = [];
    for (let i = 0; i < passenger; i++) {
      newData.push(i);
    }
    return newData?.map((value, index) => {
      return (
        <div key={index}>
          <ItemCard
            handleDataChange={(data) => handleDataChange(index, data)}
          />
        </div>
      );
    });
  };

  useEffect(() => {
    const { total_passenger, flight_id, return_flight_id, is_roundtrip } =
      location.state;
    setTotalPassenger(total_passenger);
    setRoundTrip(is_roundtrip);
    setDepartFlightID(flight_id);
    if (is_roundtrip === false) {
      setDepartFlightID(flight_id);
    } else {
      setDepartFlightID(flight_id);
      setReturnFlightID(return_flight_id);
    }
  }, [location.state]);

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
                  <Accordion.Body>{renderCard()}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
          <Col md>
            <CheckoutCol2 />
            <div className=" mx-auto ">
              <button
                className="w-100 btn btn-danger rounded-3 px-5 py-2 text-white fw-normal fs-30"
                onClick={handleOnClick}
              >
                Lanjut Bayar
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Checkout;
