import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DetailPesanan from './DetailPesanan';

const RiwayatPesanan = () => {
  const riwayatPesanan = [
    {
      asal: 'Jakarta',
      tujuan: 'Surabaya',
      bookingCode: 'ABC123',
      class: 'Ekonomi',
      harga: 'Rp 500.000',
      detail: 'Detail pesanan 1',
    },
    {
      asal: 'Bandung',
      tujuan: 'Yogyakarta',
      bookingCode: 'DEF456',
      class: 'Bisnis',
      harga: 'Rp 1.200.000',
      detail: 'Detail pesanan 2',
    },
    {
      asal: 'Surabaya',
      tujuan: 'Medan',
      bookingCode: 'GHI789',
      class: 'Ekonomi',
      harga: 'Rp 800.000',
      detail: 'Detail pesanan 3',
    },
  ];

  const [pesananTerpilih, setPesananTerpilih] = useState({});

  const handleCardClick = (pesanan) => {
    setPesananTerpilih(pesanan);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col xs={7}>
          {riwayatPesanan.map((riwayat, index) => (
            <Card
              key={index}
              onClick={() => handleCardClick(riwayat)}
              style={{ cursor: 'pointer', marginBottom: '10px' }}
              className="custom-card"
            >
              <Card.Body>
                <Card.Title>Riwayat Pesanan</Card.Title>
                <Card.Text>
                  <strong>Asal:</strong> {riwayat.asal}
                  <br />
                  <strong>Tujuan:</strong> {riwayat.tujuan}
                  <br />
                  <strong>Booking Code:</strong> {riwayat.bookingCode}
                  <br />
                  <strong>Class:</strong> {riwayat.class}
                  <br />
                  <strong>Harga:</strong> {riwayat.harga}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        {Object.keys(pesananTerpilih).length > 0 && (
          <Col xs={5}>
            <DetailPesanan pesanan={pesananTerpilih} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default RiwayatPesanan;
