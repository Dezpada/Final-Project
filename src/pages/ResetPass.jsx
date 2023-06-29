import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function ForgetPass() {
  return (
    <Container className="my-5">
      <Card>
        <Row className="g-0">
          <Col md="6" className="bg-logo rounded-start w-80">
            <Card.Body className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <img
                src="../../../img/logo.svg"
                alt="logo-login"
                className="mb-4 mx-5 w-50"
              />
            </Card.Body>
          </Col>
          <Col md="6">
            <Card.Body className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h2
                className="fw-bold mb-3 ps-5 pb-3"
                style={{ fontWeight: "bold" }}
              >
                Reset Password
              </h2>
              <Form className="mb-4 mx-5 w-100">
                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Form.Label>Masukkan Password Baru</Form.Label>
                  <Form.Control type="password" placeholder="Password Baru" />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Form.Label>Ulangi Password Baru</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ulangi Password Baru"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button type="submit" className="mt-4 btn-ungu">
                    Simpan
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ForgetPass;
