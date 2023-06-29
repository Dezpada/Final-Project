import React, { useState } from "react";
import axios from "axios";
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const resetPassword = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("Email Address can not be empty");
      return;
    }
    try {
      let data = JSON.stringify({
        email,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_KEY}/auth/forgot-password`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      toast.success(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("Email Address can not be empty");
      return;
    }
    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_KEY}/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;
      localStorage.setItem("token", token);
      toast.success(response.data.message);
      setTimeout(3000);
      window.location.href = "/";
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
    <Container className="my-4">
      <Card>
        <Row className="g-0">
          <Col md="6">
            <img
              src="../../../img/bg-login.jpg"
              className="rounded-start w-100 d-none d-md-block px-0"
              alt="?"
            />
          </Col>
          <Col md="6">
            <Card.Body className="d-flex flex-column">
              <img
                src="../../../img/logo.svg"
                alt="logo-login"
                className="mb-4 mx-5"
                style={{ alignSelf: "center" }}
                width={200}
                height={200}
              />
              <h2 className="mb-3 ps-5 pb-3" style={{ fontWeight: "bold" }}>
                Masuk
              </h2>
              <Form className="mb-4 mx-5" onSubmit={onSubmit}>
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Label>Email/No Telepon</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Contoh: johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Row>
                    <Col sm={8}>
                      <Form.Label>Password</Form.Label>
                    </Col>
                    <Col sm={4} style={{ textAlign: "end" }}>
                      <a class="text-ungu" onClick={resetPassword}>
                        Lupa Kata Sandi
                      </a>
                    </Col>
                  </Row>
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
                    Masuk
                  </Button>
                  {/* <GoogleLogin log={` Masuk`} /> */}
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
