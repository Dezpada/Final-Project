import React from 'react';
import { Card } from 'react-bootstrap';

const DetailPesanan = ({ pesanan }) => {
  return (
    <Card style={{ cursor: 'pointer' }}>
      <Card.Body>
        <Card.Title>Detail Pesanan</Card.Title>
        <Card.Text>{pesanan.detail}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DetailPesanan;
