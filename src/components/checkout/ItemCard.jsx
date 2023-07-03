import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ItemCard() {
  const navigate = useNavigate();
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

  const getRequestBody = (formData) => {
    return {
      title: formData.title,
      name: formData.name,
      familyName: formData.familyName,
      birth: formData.birth,
      nationality: formData.nationality,
      telp: formData.telp,
      passpor: formData.passpor,
      originCountry: formData.originCountry,
      validUntil: formData.validUntil,
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    navigate("", { state: {} });
  });

  const [show, setShow] = useState(false);
  const toggleFamilyName = () => setShow(!show);
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
                  <option hidden selected>
                    Title
                  </option>
                  <option value={formData.title} onChange={handleInputChange}>
                    Mr.
                  </option>
                  <option value={formData.title} onChange={handleInputChange}>
                    Mrs.
                  </option>
                </Form.Select>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="name"
                  placeholder="Masukkan Nama Lengkap"
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
