import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarMobile from "../components/header/NavbarMobile";

const Notifikasi = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const url = `${process.env.REACT_APP_API_KEY}/notifications`;

  const fetchData = async () => {
    try {
      const response = await axios.get(url, config);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar1 />
      <div className="bg-detail py-3">
        <Container>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <h5 className="fw-semibold my-4">Notifikasi</h5>
              <div className="py-2 my-auto bg-purple rounded-3 w-100 me-2">
                <div className="d-flex">
                  <Link to={"/"}>
                    <div>
                      <img
                        src="/img/fi_arrow-left.svg"
                        alt=""
                        className="mx-2"
                      />
                    </div>
                  </Link>
                  <h6 className="text-white my-auto">Beranda</h6>
                </div>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="mt-5">
          <Col md={2}></Col>
          <Col md={8}>
            {/* ISI NOTIFIKASI */}
            <div className="overflow-y-scroll mb-5">
              {data?.map((item) => (
                <div className="border-bottom my-2" key={item.id}>
                  <div className="d-flex">
                    <img src="/img/bell-notif.svg" alt="" className="me-1" />
                    <h6 className="text-secondary fs-14 ms-4">{item.title}</h6>
                    <div className="ms-auto text-secondary fs-14">
                      23 jan 2333, 09:00
                    </div>
                  </div>
                  <h6 className="fs-16 ms-5">{item.description}</h6>
                </div>
              ))}
            </div>
            {/* END NOTIFIKASI */}
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      <div className="mb-5"></div>
      <NavbarMobile />
    </>
  );
};

export default Notifikasi;
