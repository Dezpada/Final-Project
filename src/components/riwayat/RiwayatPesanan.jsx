import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DetailPesanan from './DetailPesanan';
import axios from 'axios';
import './Riwayat.css';

const RiwayatPesanan = ({ searchCode }) => {
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
          {riwayatPesanan
            .filter((riwayat) => riwayat.ticket_code.includes(searchCode))
            .map((riwayat, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(riwayat)}
                style={{ cursor: 'pointer', marginBottom: '10px' }}
                className="custom-card"
              >
                <Card.Body>
                  <Card.Text className="custom-card-text"> 
                    <div className={`status-payment ${riwayat.payment_status === 'Dibayar' ? 'paid' : 'unpaid'}`}>
                      {riwayat.payment_status === 'Dibayar' ? 'Sudah Dibayar' : 'Belum Dibayar'}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="departure-info">
                      <span>
                        Asal: {riwayat.flights.departureAirport.city}
                      </span>
                      <br/>
                      <span>
                        {riwayat.flights.flight_date}
                      </span>
                      <br/>
                      <span>
                        {riwayat.flights.departure_time}
                      </span>
                      </div>
                      <div className="duration-info">
                      {Math.floor(riwayat.flights.flight_duration / 60)} jam {riwayat.flights.flight_duration % 60} menit
                      </div>
                      <div className="arrival-info">
                      <span>
                        Tujuan: {riwayat.flights.arrivalAirport.city}
                      </span>
                        <br />
                      <span>
                        {riwayat.flights.flight_date}
                      </span>
                        <br />
                      <span>
                        {riwayat.flights.arrival_time}
                      </span>
                      </div>
                    </div>
                    <hr className="mt-4" style={{ color: '#000000', backgroundColor: '#000000', height: 1 }} />
                    <div className='detick-info' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className='code-info'>
                      <strong>Booking Code</strong><br/><span> {riwayat.ticket_code}</span>
                      </div>
                      <div className='class-info'>
                      <strong>Class</strong><br/><span> {riwayat.flights.class}</span>
                      </div>
                      <div className='price-info'>
                        <strong>Harga</strong><br/><span style={{ color: '#4B1979', fontWeight: '600' }}> {(
                        riwayat.flights.price + (riwayat.returnFlights ? riwayat.returnFlights.price : 0)
                        ).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
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