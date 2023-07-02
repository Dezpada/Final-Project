import { useState } from "react";
import { Modal, Col, Row, Container, Form } from "react-bootstrap";
import "./detailPagestyle.css";

const ModalFilter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={9}></Col>
          <Col md={1}>
            <button
              onClick={handleShow}
              className=" border rounded-4  py-2 px-3 d-flex align-items-center"
            >
              <img src="/img/arrow-filter.svg" alt="" />
              <h6 className="my-auto text-purple">Termurah</h6>
            </button>
          </Col>
          <Col md={2}></Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {[`radio`].map((type) => (
                <div key={`filter-${type}`} className="mb-3">
                  <div className="d-flex px-2 py-2 rounded my-1 border">
                    <Form.Check
                      type={type}
                      name="radio"
                      id={`filter-${type}-1`}
                    />
                    <h6 className="ms-3 fw-semibold">Harga</h6>
                    <h6 className="mx-2 fw-semibold">-</h6>
                    <h6 className="fw-normal">Termurah</h6>
                  </div>
                  <div className="d-flex px-2 py-2 rounded my-1 border">
                    <Form.Check
                      type={type}
                      name="radio"
                      id={`filter-${type}-1`}
                    />
                    <h6 className="ms-3 fw-semibold">Durasi</h6>
                    <h6 className="mx-2 fw-semibold">-</h6>
                    <h6 className="fw-normal">Terpendek</h6>
                  </div>
                </div>
              ))}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleClose}
              className="border rounded-4  py-2 px-5 bg-purple"
            >
              <h6 className="my-auto text-white">Pilih</h6>
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ModalFilter;
