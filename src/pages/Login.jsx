import React from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

function Login() {
  return (
    // <Container fluid="md">
    //   <Row>
    //     <Col sm="6" className="d-none d-sm-block px-0">
    //       <img
    //         src={background}
    //         alt="Login Img"
    //         className="w-100 vh-100"
    //         style={{ objectFit: "cover", objectPosition: "left" }}
    //       />
    //     </Col>
    //     <Col sm="6">
    //       <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
    //         <h2
    //           className="fw-bold mb-3 ps-5 pb-3"
    //           style={{ fontWeight: "bold" }}
    //         >
    //           Masuk
    //         </h2>
    //         <Form className="mb-4 mx-5 w-100">
    //           <Form.Group className="my-4" controlId="formBasicEmail">
    //             <Form.Label>Email/No Telepon</Form.Label>
    //             <Form.Control
    //               type="email"
    //               placeholder="Contoh: johndoe@gmail.com"
    //             />
    //           </Form.Group>

    //           <Form.Group className="my-4" controlId="formBasicPassword">
    //             <Row>
    //               <Col sm={8}>
    //                 <Form.Label>Password</Form.Label>
    //               </Col>
    //               <Col sm={4} style={{ textAlign: "end" }}>
    //                 <a href="/register" class="text-ungu">
    //                   Lupa Kata Sandi
    //                 </a>
    //               </Col>
    //             </Row>
    //             <Form.Control type="password" placeholder="Masukkan password" />
    //           </Form.Group>
    //           <div className="d-grid gap-2">
    //             <Button type="submit" className="mt-4 btn-ungu">
    //               Masuk
    //             </Button>
    //           </div>
    //           <p className="text-center mt-3">
    //             Belum punya akun?{" "}
    //             <a
    //               href="/register"
    //               class="text-ungu"
    //               style={{ fontWeight: "bold" }}
    //             >
    //               Daftar disini
    //             </a>
    //           </p>
    //         </Form>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
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
                Masuk
              </h2>
              <Form className="mb-4 mx-5 w-100">
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Email/No Telepon</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Contoh: johndoe@gmail.com"
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Row>
                    <Col sm={8}>
                      <Form.Label>Password</Form.Label>
                    </Col>
                    <Col sm={4} style={{ textAlign: "end" }}>
                      <a href="/register" class="text-ungu">
                        Lupa Kata Sandi
                      </a>
                    </Col>
                  </Row>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan password"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button type="submit" className="mt-4 btn-ungu">
                    Masuk
                  </Button>
                </div>
                <p className="text-center mt-3">
                  Belum punya akun?{" "}
                  <a
                    href="/register"
                    class="text-ungu"
                    style={{ fontWeight: "bold" }}
                  >
                    Daftar di sini
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
