import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./detailPagestyle.css";

const CardFilter = () => {
  return (
    <>
      <div>
        <Card className="mx-4 py-2 rounded-4 bg-detail">
          <Card.Body>
            <Card.Title>
              <h6 className="fw-semibold ms-2">Filter</h6>
            </Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <div
                  className="d-flex py-2 border-bottom"
                  style={{ cursor: "pointer" }}
                >
                  <img src="/img/fi_box.svg" alt="" />
                  <p className="my-auto ms-2 fw-normal">Transit</p>
                  <img
                    src="/img/fi_chevron-right.svg"
                    alt=""
                    className="ms-auto"
                  />
                </div>
                <div
                  className="d-flex py-2 border-bottom"
                  style={{ cursor: "pointer" }}
                >
                  <img src="/img/fi_heart.svg" alt="" />
                  <p className="my-auto ms-2 fw-normal">Fasilitas</p>
                  <img
                    src="/img/fi_chevron-right.svg"
                    alt=""
                    className="ms-auto"
                  />
                </div>
                <div className="d-flex py-2 " style={{ cursor: "pointer" }}>
                  <img src="/img/fi_dollar-sign.svg" alt="" />
                  <p className="my-auto ms-2 fw-normal">Harga</p>
                  <img
                    src="/img/fi_chevron-right.svg"
                    alt=""
                    className="ms-auto"
                  />
                </div>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardFilter;
