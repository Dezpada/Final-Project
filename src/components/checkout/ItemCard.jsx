import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function ItemCard({ handleDataChange, handleDataSelectChange }) {
  // const location = useLocation();
  // const [countAllPassenger, setCountAllPassenger] = useState();
  // const [countAdultPassenger, setCountAdultPassenger] = useState(0);
  // const [countChildPassenger, setCountChildPassenger] = useState(0);
  // const [countBabyPassenger, setCountBabyPassenger] = useState(0);
  // const [selectedOption, setSelectedOption] = useState();
  const [formData, setFormData] = useState({
    passenger_type: "",
    title: "",
    name: "",
    family_name: "",
    birth: "",
    nationality: "",
    telp: "",
    passpor: "",
    origin_country: "",
    valid_until: "",
  });

  const [show, setShow] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSelectChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   let allPassenger = countAllPassenger;
  //   let adultPassenger = countAdultPassenger;
  //   let childPassenger = countChildPassenger;
  //   let babyPassenger = countBabyPassenger;
  //   const { name, value } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   if (allPassenger) {
  //     if (selectedOption === "Adult") {
  //       adultPassenger -= 1;
  //       setCountAdultPassenger(adultPassenger);
  //     } else if (selectedOption === "Child") {
  //       childPassenger -= 1;
  //       setCountChildPassenger(childPassenger);
  //     } else if (selectedOption === "Baby") {
  //       babyPassenger -= 1;
  //       setCountBabyPassenger(babyPassenger);
  //     }
  //   }
  // };

  const toggleFamilyName = () => setShow(!show);

  useEffect(() => {
    handleDataChange(formData);
    // const { adults, child, baby } = location.state;
    // setCountAdultPassenger(adults);
    // setCountChildPassenger(child);
    // setCountBabyPassenger(baby);
    // setCountAllPassenger(adults + child + baby);
  }, [formData, handleDataChange]);
  return (
    <Card className="mb-3">
      <Card.Header style={{ background: "#3C3C3C", color: "white" }}>
        Data Diri Penumpang
      </Card.Header>
      <Card.Body>
        <Form className="mb-4 mx-3 ">
          <Form.Group className="my-3" controlId="formBasicPassengerType">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Tipe Penumpang
            </Form.Label>
            <Form.Select
              name="passenger_type"
              value={formData.passenger_type}
              onChange={handleInputChange}
            >
              <option style={{ display: "none" }}>Title</option>
              <option value="Adult">Dewasa</option>
              <option value="Child">Anak</option>
              <option value="Baby">Bayi</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicName">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Nama Lengkap
            </Form.Label>
            <Row>
              <Col md={4}>
                <Form.Select
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                >
                  <option style={{ display: "none" }}>Title</option>
                  <option value="Mr">Mr.</option>
                  <option value="Mrs">Mrs.</option>
                </Form.Select>
              </Col>
              <Col md={8}>
                <Form.Control
                  type="name"
                  placeholder="Masukkan Nama Lengkap"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="my-3" controlId="formShowFamilyName">
            <Row>
              <Col sm={8}>
                <Form.Label>Punya Nama Keluarga?</Form.Label>
              </Col>
              <Col sm={4} style={{ textAlign: "end" }}>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  checked={show}
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
            <Form.Group className="my-3" controlId="formBasicFamilyName">
              <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
                Nama Keluarga
              </Form.Label>
              <Form.Control
                type="name"
                placeholder="Masukkan Nama Keluarga"
                name="family_name"
                value={formData.family_name}
                onChange={handleInputChange}
              />
            </Form.Group>
          ) : null}
          <Form.Group className="my-3" controlId="formBasicTelp">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Nomor Telepon
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="+62 ."
              name="telp"
              value={formData.telp}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicBirthDate">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Tanggal Lahir
            </Form.Label>
            <Form.Control
              type="date"
              name="birth"
              value={formData.birth}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicCountry">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Kewarganegaraan
            </Form.Label>
            <Form.Control
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicPasspor">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              KTP/Paspor
            </Form.Label>
            <Form.Control
              type="text"
              name="passpor"
              value={formData.passpor}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicPublishCountry">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Negara Penerbit
            </Form.Label>
            <Form.Control
              type="text"
              name="origin_country"
              value={formData.origin_country}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicExpireDate">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Berlaku Sampai
            </Form.Label>
            <Form.Control
              type="date"
              name="valid_until"
              value={formData.valid_until}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
