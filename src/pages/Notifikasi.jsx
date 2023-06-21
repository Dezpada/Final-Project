import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navbar1 from "../components/header/Navbar1";

const data = [
  {
    id: 1,
    title: "promosi",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, voluptatem nam. Error dolorem laborum dolorum molestiae corrupti enim recusandae? Sapiente!",
    date: "23 Maret 2014",
    clock: "20:00",
  },
  {
    id: 2,
    title: "notifikasi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa placeat, aspernatur repudiandae quo similique vel tempora hic repellendus quidem, voluptatibus, nulla necessitatibus labore enim.",
    date: "23 Maret 2020",
    clock: "20.25",
  },
  {
    id: 3,
    title: "kejutan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eius labore porro officiis reiciendis cumque.",
    date: "10 January 2001",
    clock: "11:05",
  },
  {
    id: 4,
    title: "notifikasi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa placeat, aspernatur repudiandae quo similique vel tempora hic repellendus quidem, voluptatibus, nulla necessitatibus labore enim.",
    date: "23 Maret 2020",
    clock: "20.25",
  },
  {
    id: 5,
    title: "diskon",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa placeat, aspernatur repudiandae quo similique vel tempora hic repellendus quidem, voluptatibus, nulla necessitatibus labore enim.",
    date: "23 Maret 2020",
    clock: "20.25",
  },
];

const NotifList = ({ notif }) => {
  return (
    <div className="border-bottom my-2">
      <div className="d-flex">
        <img src="/img/bell-notif.svg" alt="" className="me-1" />
        <h6 className="text-secondary fs-14 ms-4">{notif.title}</h6>
        <div className="ms-auto text-secondary fs-14">
          {notif.date}, {notif.clock}
        </div>
      </div>
      <h6 className="fs-16 ms-5">{notif.content}</h6>
    </div>
  );
};

const Notifikasi = () => {
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
        {/* ISI NOTIFIKASI */}
        <Row className="mt-5">
          <Col md={2}></Col>
          <Col md={8}>
            {data.map((notif) => (
              <NotifList key={notif.id} notif={notif} />
            ))}
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Notifikasi;
