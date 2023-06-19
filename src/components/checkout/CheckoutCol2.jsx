import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CheckoutCol2() {
  return (
    <Container className="my-3">
      <div className="d-flex">
        <div className="d-flex flex-column">
          <h6 className="text-purple fw-semibold fs-14">Detail Penerbangan</h6>
          <h6 className="fw-bold fs-16">07:00</h6>
          <h6 className="fw-normal fs-14">3 Maret 2023</h6>
          <div className="d-flex">
            <h6 className="fw-semibold fs-14">Soekarno Hatta</h6>
            <h6 className="fw-semibold fs-14 mx-2">-</h6>
            <h6 className="fw-semibold fs-14">Terminal 1A Domestik</h6>
          </div>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
          Keberangkatan
        </h6>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex">
        <div className="me-2 my-auto">
          <img src="/img/logo_leaf.svg" alt="" />
        </div>
        <div className="d-flex flex-column">
          <div>
            <div className="d-flex">
              <h6 className="fw-bold fs-14">Jet Air</h6>
              <h6 className="fw-bold fs-14 mx-2">-</h6>
              <h6 className="fw-bold fs-14">Economy</h6>
            </div>
            <div className="d-flex">
              <h6 className="fw-bold fs-14">JT</h6>
              <h6 className="fw-bold fs-14 mx-2">-</h6>
              <h6 className="fw-bold fs-14">203</h6>
            </div>
          </div>
          <h6 className="fw-bold fs-14 mt-2">Informasi:</h6>
          <h6 className="fw-normal fs-14">Baggage 20 Kg</h6>
          <h6 className="fw-normal fs-14">Cabin Baggage 7 Kg</h6>
          <h6 className="fw-normal fs-14">in Flight Entertainment</h6>
        </div>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex">
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-14">07:00</h6>
          <h6 className="fw-normal fs-14">3 Maret 2023</h6>
          <h6 className="fw-semibold fs-14">Melbourne International Airport</h6>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-12 text-purple">
          Kedatangan
        </h6>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <h6 className="fw-bold fs-14">Rincian Harga</h6>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <h6 className="fw-normal fs-14">2 Adults</h6>
          <h6 className="fw-normal fs-14">1 Baby</h6>
          <h6 className="fw-normal fs-14">Tax</h6>
        </div>
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-14 text-end"> </h6>
          <h6 className="fw-normal fs-14 text-end">IDR 9.550.000</h6>
          <h6 className="fw-normal fs-14 text-end">IDR 0</h6>
          <h6 className="fw-normal fs-14 text-end">IDR 300.000</h6>
        </div>
      </div>
      <div className="border-bottom w-50 mx-auto my-2"></div>
      <div className="d-flex mb-3">
        <div className="d-flex flex-column">
          <h6 className="fw-bold fs-20">Total</h6>
        </div>
        <h6 className="ms-auto my-auto fw-bold fs-20 text-purple">
          IDR 9.850.000
        </h6>
      </div>
      <div className=" mx-auto ">
        <Link to={"/page-payment"}>
          <button className="w-100 btn btn-danger rounded-3 px-5 py-2 text-white fw-normal fs-30">
            Lanjut Bayar
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default CheckoutCol2;
