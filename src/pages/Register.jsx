import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function Login() {
  return (
    <Container className="my-5">
      <Card>
        <Row className="g-0">
          <Col md="6" className="bg-logo rounded-start">
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
                Daftar
              </h2>
              <Form className="mb-4 mx-5 w-100">
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="name" placeholder="Nama Lengkap" />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Contoh: johndoe@gmail.com"
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control type="email" placeholder="+62 ." />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Form.Label>Buat Password</Form.Label>
                  <Form.Control type="password" placeholder="Buat password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" className="mt-4 btn-ungu">
                    Daftar
                  </Button>
                </div>
                <p className="text-center mt-3">
                  Sudah punya akun?{" "}
                  <a
                    href="/login"
                    class="text-ungu"
                    style={{ fontWeight: "bold" }}
                  >
                    Masuk di sini
                  </a>
                </p>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;
