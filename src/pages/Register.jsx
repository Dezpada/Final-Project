import "./style.css";
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
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [resendOtp, setResendOtp] = useState(false);

  const resendClick = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        email,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_KEY}/resend-otp`,
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

    if (name.length === 0) {
      toast.error("Name can not be empty");
      return;
    }

    if (email.length === 0) {
      toast.error("Email Address can not be empty");
      return;
    }

    if (telp.length === 0) {
      toast.error("Phone Number can not be empty");
      return;
    }

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

    try {
      let data = JSON.stringify({
        name,
        email,
        telp,
        password,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_KEY}/auth/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      toast.success(response.data.message);
      setResendOtp(true);
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
                as={Link}
                to={"/"}
              />
              <h2 className="mb-3 ps-5 pb-3" style={{ fontWeight: "bold" }}>
                Daftar
              </h2>
              <Form className="mb-4 mx-5" onSubmit={onSubmit}>
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
                {resendOtp ? (
                  <div className="text-center">
                    Tidak menerima email otp?{" "}
                    {
                      <a href="?" onClick={resendClick}>
                        Klik disini
                      </a>
                    }
                  </div>
                ) : null}

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
