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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function ForgetPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const toggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error(
        "Password must contain greater than or equal to 8 characters."
      );
      return;
    }

    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;
    let countSpecialCharacters = 0;

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "[",
        "{",
        "]",
        "}",
        ":",
        ";",
        "<",
        ">",
      ];

      if (specialChars.includes(password[i])) {
        countSpecialCharacters++;
      } else if (!isNaN(password[i] * 1)) {
        countDigit++;
      } else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++;
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++;
        }
      }
    }

    if (countLowerCase === 0) {
      toast.error("Invalid Form, 0 lower case characters in password");
      return;
    }

    if (countUpperCase === 0) {
      toast.error("Invalid Form, 0 upper case characters in password");
      return;
    }

    if (countDigit === 0) {
      toast.error("Invalid Form, 0 digit characters in password");
      return;
    }

    if (countSpecialCharacters === 0) {
      toast.error("Invalid Form, 0 special characters in password");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      let data = JSON.stringify({
        password,
        confirmPassword,
      });

      let config = {
        method: "put",
        url: `${process.env.REACT_APP_API_KEY}/auth/reset-password`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      toast.success(response.data.message);
      setTimeout(3000);
      window.location.href = "/login";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
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
              <a href="/" className="d-flex flex-column">
                <img
                  src="../../../img/logo.svg"
                  alt="logo-login"
                  className="mb-4 mx-5"
                  style={{ alignSelf: "center" }}
                  width={200}
                  height={200}
                />
              </a>
              <h2 className="mb-3 ps-5 pb-3" style={{ fontWeight: "bold" }}>
                Reset Password
              </h2>
              <Form className="mb-4 mx-5" onSubmit={onSubmit}>
                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Form.Label>Masukkan Password Baru</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={passwordType}
                      placeholder="Masukkan password baru"
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

                <Form.Group className="my-4" controlId="formConfirmPassword">
                  <Form.Label>Ulangi Password Baru</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={confirmPasswordType}
                      placeholder="Ulangi password baru"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                      onClick={toggleConfirmPassword}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#7126b5",
                      }}
                    >
                      {confirmPasswordType === "password" ? (
                        <FaEyeSlash color="#7126b5" />
                      ) : (
                        <FaEye color="#7126b5" />
                      )}
                    </Button>
                  </InputGroup>
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
