import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";
import axios from "axios";

const Notifikasi = () => {
  const [data, setData] = useState([]);

  const url =
    "https://final-project-production-b6fe.up.railway.app/notifications";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
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
      <Container>
        <Row className="mt-5">
          <Col md={2}></Col>
          <Col md={8}>
            {/* ISI NOTIFIKASI */}
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
            {/* END NOTIFIKASI */}
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Notifikasi;
