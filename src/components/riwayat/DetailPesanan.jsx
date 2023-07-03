import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailPesanan = ({ pesanan }) => {
  const countPassengerByType = (passengerType) => {
    return pesanan.passengers.filter((passenger) => passenger.passenger_type === passengerType).length;
  };

  const calculateTotalPrice = () => {
    let totalPrice = pesanan.flights.price;
    if (pesanan.returnFlights) {
      totalPrice += pesanan.returnFlights.price;
    }
    return totalPrice;
  };

  const renderPaymentButton = () => {
    if (pesanan.payment_status === 'Dibayar') {
      return <Button variant="primary">Cetak Tiket</Button>;
    } else if (pesanan.payment_status === 'Belum Bayar') {
      return (
        <Link to="/page-payment">
          <Button variant="danger">Lanjut Bayar</Button>
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <Card style={{ cursor: 'pointer' }}>
      <Card.Body>
        <Card.Title>Detail Pesanan</Card.Title>
        <Card.Text>
          <strong>Ticket Code:</strong> {pesanan.ticket_code}<br />
          <strong>Waktu Keberangkatan:</strong> {pesanan.flights.departure_time}<br />
          <strong>Tanggal Penerbangan:</strong> {pesanan.flights.flight_date}<br />
          <strong>Bandara Keberangkatan:</strong> {pesanan.flights.departureAirport.name}<br />
          <strong>Terminal Keberangkatan:</strong> {pesanan.flights.departure_terminal_name}<br />
          <strong>Maskapai:</strong> {pesanan.flights.airplane.airline.name}<br />
          <strong>Kelas:</strong> {pesanan.flights.class}<br />
          <strong>Kode Penerbangan:</strong> {pesanan.flights.flight_number}<br />
          <strong>Waktu Kedatangan:</strong> {pesanan.flights.arrival_time}<br />
          <strong>Tanggal Kedatangan:</strong> {pesanan.flights.flight_date}<br />
          <strong>Bandara Kedatangan:</strong> {pesanan.flights.arrivalAirport.name}<br />
          <strong>Terminal Kedatangan:</strong> {pesanan.flights.arrival_terminal_name}<br />
          <strong>Jumlah Penumpang Adult:</strong> {countPassengerByType('Adult')}<br />
          <strong>Jumlah Penumpang Baby:</strong> {countPassengerByType('Baby')}<br />
          <strong>Harga Penerbangan:</strong> {pesanan.flights.price}<br />
          {pesanan.returnFlights && (<><strong>Harga Pulang-pergi:</strong> {pesanan.returnFlights.price}<br /></>)}
          <strong>Total Harga:</strong> {calculateTotalPrice()}<br /><br />

          {renderPaymentButton()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DetailPesanan;
