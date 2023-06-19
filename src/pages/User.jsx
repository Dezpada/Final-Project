import React, { useState } from "react";
import { Row, Col, Container, ListGroup, Form } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const User = () => {
  const token = localStorage.getItem("token");
  const URL_API = "test";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userLogout = async () => {
    try {
      const res = await axios.get(URL_API, () => {
        setIsLoading(true);
        localStorage.removeItem("token");
        if (res.status(200)) {
          setIsLoading(false);
          navigate("/login");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar1 />
      <div className="bg-detail py-3">
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h5 className="fw-semibold my-4">Akun</h5>
              <div className="d-flex">
                <div className="py-2 my-auto bg-purple rounded-3 w-100 me-2">
                  <button>
                    <img src="/img/fi_arrow-left.svg" alt="" className="mx-2" />
                  </button>
                  <span className="text-white">Beranda</span>
                </div>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="mt-5">
            <Col md={2}></Col>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <ListGroup>
                    <button>
                      <div className="d-flex py-2 border-bottom">
                        <img src="/img/fi_edit-3.svg" alt="" />
                        <h6 className="my-auto ms-2 fw-normal">Ubah Profil</h6>
                      </div>
                    </button>
                    <button>
                      <div className="d-flex py-2 border-bottom">
                        <img src="/img/fi_settings.svg" alt="" />
                        <h6 className="my-auto ms-2 fw-normal">
                          Pengaturan Akun
                        </h6>
                      </div>
                    </button>
                    {isLoading ? (
                      <button disabled>
                        <div className="d-flex py-2 border-bottom ">
                          <img src="/img/fi_log-out.svg" alt="" />
                          <h6 className="my-auto ms-2 fw-normal">
                            Loading ...
                          </h6>
                        </div>
                      </button>
                    ) : (
                      <button onClick={userLogout}>
                        <div className="d-flex py-2 border-bottom ">
                          <img src="/img/fi_log-out.svg" alt="" />
                          <h6 className="my-auto ms-2 fw-normal">keluar</h6>
                        </div>
                      </button>
                    )}
                  </ListGroup>
                </Col>
                <Col md={8}>
                  <div className="border p-2">
                    <h5 className="fw-semibold my-4">Ubah data Profil</h5>
                    <div className="rounded-top-3 bg-purple text-white">
                      <h6 className="ms-3 p-2">Data Diri</h6>
                    </div>
                    <div className="mx-2">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Nama</Form.Label>
                          <Form.Control type="text" placeholder="Aguss" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nomor Telepon</Form.Label>
                          <Form.Control type="phone" placeholder="+62 ." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-center btn-submit">
                          <button
                            className="bg-purple text-white py-2 px-5 rounded-3"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col ms={2}></Col>
              </Row>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default User;
