import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        name,
        email,
        telp,
        password,
      });

      let config = {
        method: "post",
        url: `https://finalproject-production-0b25.up.railway.app/auth/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      toast.success(response.data.message);
      //localStorage.setItem("token", token);
      window.location.href = "/login";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
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
              <Form className="mb-4 mx-5 w-100" onSubmit={onSubmit}>
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Contoh: johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Nomor Telepon</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="+62 ."
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Form.Label>Buat Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={passwordType}
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      onClick={togglePassword}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#7126b5",
                      }}
                    >
                      {passwordType === "password" ? (
                        <FaEyeSlash color="#7126b5" />
                      ) : (
                        <FaEye color="#7126b5" />
                      )}
                    </Button>
                  </InputGroup>
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

export default Register;
