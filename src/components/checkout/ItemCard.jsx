import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

function ItemCard({ handleDataChange }) {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    familyName: "",
    birth: "",
    nationality: "",
    telp: "",
    passpor: "",
    originCountry: "",
    validUntil: "",
  });

  const [show, setShow] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleFamilyName = () => setShow(!show);

  useEffect(() => {
    handleDataChange(formData);
  }, [formData, handleDataChange]);
  return (
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
            <Row>
              <Col md={3}>
                <Form.Select>
                  <option disabled hidden>
                    Title
                  </option>
                  <option name="title" value="Mr." onChange={handleInputChange}>
                    Mr.
                  </option>
                  <option
                    name="title"
                    value="Mrs."
                    onChange={handleInputChange}
                  >
                    Mrs.
                  </option>
                </Form.Select>
              </Col>
              <Col md={9}>
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
                name="familyName"
                value={formData.familyName}
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
              name="originCountry"
              value={formData.originCountry}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formBasicExpireDate">
            <Form.Label style={{ fontWeight: "bold", color: "#4B1979" }}>
              Berlaku Sampai
            </Form.Label>
            <Form.Control
              type="date"
              name="validUntil"
              value={formData.validUntil}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
