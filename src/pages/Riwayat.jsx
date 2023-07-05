import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { toPng } from "html-to-image";

const DetailPesanan = ({ pesanan }) => {
  const countPassengerByType = (passengerType) => {
    return pesanan.passengers.filter(
      (passenger) => passenger.passenger_type === passengerType
    ).length;
  };

  const calculateTotalPrice = () => {
    let totalPrice = pesanan.flights.price;
    if (pesanan.returnFlights) {
      totalPrice += pesanan.returnFlights.price;
    }
    return totalPrice;
  };

  const handleCetakTiket = () => {
    htmlToImageConvert();
    // sendEmail();
  };

  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "tiket-pesawat.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderPaymentButton = () => {
    if (pesanan.payment_status === "Dibayar") {
      return (
        <Button variant="primary" onClick={handleCetakTiket}>
          Cetak Tiket
        </Button>
      );
    } else if (pesanan.payment_status === "Belum Bayar") {
      return (
        <Link to={`/page-payment/${pesanan.ticket_code}`}>
          <Button variant="danger">Lanjut Bayar</Button>
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Card ref={elementRef}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="detail-pesanan">Detail Pesanan</h5>
            <div
              className={`status-payment ${
                pesanan.payment_status === "Dibayar" ? "paid" : "unpaid"
              }`}
            >
              {pesanan.payment_status === "Dibayar"
                ? "Sudah Dibayar"
                : "Belum Dibayar"}
            </div>
          </div>
          <Card.Text>
            <span>Booking Code:</span>{" "}
            <span style={{ color: "#4B1979", fontWeight: "600" }}>
              {pesanan.ticket_code}
            </span>
            <br />
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginTop: "10px" }}
            >
              <strong>{pesanan.flights.departure_time}</strong>{" "}
              <span
                className="text-right"
                style={{ color: "#4B1979", fontWeight: "600" }}
              >
                Keberangkatan
              </span>
            </div>
            {pesanan.flights.flight_date}
            <br />
            {pesanan.flights.departureAirport.name} -{" "}
            {pesanan.flights.departure_terminal_name}
            <br />
            <hr
              className="mt-3"
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                height: 1,
              }}
            />
            <strong style={{ marginLeft: "20px" }}>
              {pesanan.flights.airplane.airline.name} -{" "}
              <span style={{ fontSize: "15px" }}>{pesanan.flights.class}</span>
            </strong>{" "}
            <br />
            <strong style={{ marginLeft: "20px" }}>
              {pesanan.flights.flight_number}
            </strong>{" "}
            <br />
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginTop: "10px", marginLeft: "20px" }}
            >
              <strong>Informasi :</strong> <br />
            </div>
            {pesanan.passengers.map((passenger, index) => (
              <div className="" key={index} style={{ marginLeft: "20px" }}>
                <span>Penumpang {index + 1} :</span>
                <span style={{ marginLeft: "5px" }}>{passenger.name}</span>{" "}
                <br />
                <div>
                  <span>ID :</span>
                  <span style={{ marginLeft: "5px" }}>
                    {passenger.passenger_id}
                  </span>
                </div>
              </div>
            ))}
            <hr
              className="mt-3"
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                height: 1,
              }}
            />
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ marginTop: "10px" }}
            >
              <strong>{pesanan.flights.arrival_time}</strong>{" "}
              <span
                className="text-right"
                style={{ color: "#4B1979", fontWeight: "600" }}
              >
                Kedatangan
              </span>
            </div>
            {pesanan.flights.flight_date}
            <br />
            {pesanan.flights.arrivalAirport.name} -{" "}
            {pesanan.flights.arrival_terminal_name}
            <br />
            <hr
              className="mt-3"
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                height: 1,
              }}
            />
            <strong>Rincian Harga</strong> <br />
            {countPassengerByType("Adult")} Adult
            <br />
            {countPassengerByType("Baby")} Baby
            <br />
            <div className="d-flex justify-content-between align-items-center">
              Harga Penerbangan{" "}
              <span className="text-right">{pesanan.flights.price}</span>
            </div>
            {pesanan.returnFlights && (
              <>
                <div className="d-flex justify-content-between align-items-center">
                  Harga Pulang-pergi{" "}
                  <span className="text-right">
                    {pesanan.returnFlights.price}
                  </span>
                </div>
              </>
            )}
            <hr
              className="mt-3"
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                height: 1,
              }}
            />
            <div className="d-flex justify-content-between align-items-center">
              <strong>Total Harga:</strong>{" "}
              <span
                className="text-right"
                style={{ color: "#4B1979", fontWeight: "600" }}
              >
                {calculateTotalPrice()
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .replace(/(\.|,)00$/, "")}
              </span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "7px",
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          {renderPaymentButton()}
        </div>
      </div>
    </>
  );
};

export default DetailPesanan;
