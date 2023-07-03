import React, { useEffect, useState } from "react";
import { Row, Col, Container, ListGroup, Form } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const User = () => {
  const [user, setUser] = useState([]);

  const token = localStorage.getItem("token");

  const url = "https://final-project-production-b6fe.up.railway.app/auth/user";

  let config = {
    headers: {
      Authorization: token,
    },
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [telp, setTelp] = useState();
  const navigate = useNavigate();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeTelp = (event) => {
    setTelp(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://final-project-production-b6fe.up.railway.app/auth/whoami",
        config
      );
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");

    const data = {
      name: name,
      telp: telp,
      email: email,
    };
    axios
      .put(url, data, config)
      .then((response) => {
        toast.success("berhasil update data");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
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

                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        return navigate("/");
                      }}
                    >
                      <div className="d-flex py-2 border-bottom ">
                        <img src="/img/fi_log-out.svg" alt="" />
                        <h6 className="my-auto ms-2 fw-normal">keluar</h6>
                      </div>
                    </button>
                  </ListGroup>
                </Col>
                <Col md={8}>
                  <div className="border p-2">
                    <h5 className="fw-semibold my-4">Ubah data Profil</h5>
                    <div className="rounded-top-3 bg-purple text-white">
                      <h6 className="ms-3 p-2">Data Diri</h6>
                    </div>
                    <div className="mx-2">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                          <Form.Label>Nama</Form.Label>
                          <Form.Control
                            type="text"
                            defaultValue={user?.name}
                            onChange={handleChangeName}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nomor Telepon</Form.Label>
                          <Form.Control
                            type="tel"
                            defaultValue={user?.telp}
                            onChange={handleChangeTelp}
                            disabled
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            defaultValue={user?.email}
                            onChange={handleChangeEmail}
                            disabled
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
