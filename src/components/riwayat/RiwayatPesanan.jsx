import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DetailPesanan from './DetailPesanan';
import axios from 'axios';
import './Riwayat.css';

const RiwayatPesanan = () => {
  const [riwayatPesanan, setRiwayatPesanan] = useState([]);
  const [pesananTerpilih, setPesananTerpilih] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('https://final-project-production-b6fe.up.railway.app/show/ticket', {
            headers: {
              Authorization: `${token}`,
            },
          });
          const data = response.data.data;
          setRiwayatPesanan(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
              <Card.Text>
                  <div className={`status-payment ${riwayat.payment_status === 'Dibayar' ? 'paid' : 'unpaid'}`}>
                    {riwayat.payment_status === 'Dibayar' ? 'Sudah Dibayar' : 'Belum Dibayar'}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      Asal: {riwayat.flights.departureAirport.city}
                      <br />
                      Tanggal Penerbangan: {riwayat.flights.flight_date}
                      <br />
                      Waktu Keberangkatan: {riwayat.flights.departure_time}
                    </div>
                    <div>
                      Durasi: {riwayat.flights.flight_duration}
                    </div>
                    <div>
                      Tujuan: {riwayat.flights.arrivalAirport.city}
                      <br />
                      Tanggal Kedatangan: {riwayat.flights.flight_date}
                      <br />
                      Waktu Kedatangan: {riwayat.flights.arrival_time}
                    </div>
                  </div>
                  <hr style={{ color: '#000000', backgroundColor: '#000000', height: 2.5 }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      Booking Code: {riwayat.ticket_code}
                    </div>
                    <div>
                      Class: {riwayat.flights.class}
                    </div>
                    <div>
                      Harga: {riwayat.flights.price + (riwayat.returnFlights ? riwayat.returnFlights.price : 0)}
                    </div>
                  </div>
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
