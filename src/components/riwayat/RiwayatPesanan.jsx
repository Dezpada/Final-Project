import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import DetailPesanan from './DetailPesanan';
import axios from 'axios';
import './Riwayat.css';
import { AiOutlineLine, AiOutlineRight } from "react-icons/ai";

const RiwayatPesanan = ({ searchCode, filteredDates }) => {
  const [riwayatPesanan, setRiwayatPesanan] = useState([]);
  const [pesananTerpilih, setPesananTerpilih] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token') || localStorage.getItem('Authorization');
        if (token) {
          const response = await axios.get(`${process.env.REACT_APP_API_KEY}/show/ticket`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          const data = response.data.data;

          // Melakukan filter berdasarkan kode pencarian (searchCode)
          let filteredData = data.filter((riwayat) => riwayat.ticket_code.includes(searchCode));

          // Melakukan filter berdasarkan tanggal (filteredDates)
          if (filteredDates) {
            const startDate = filteredDates.startDate.toISOString();
            const endDate = filteredDates.endDate.toISOString();
            filteredData = filteredData.filter((riwayat) => {
              const orderDate = new Date(riwayat.order_date).toISOString();
              return orderDate >= startDate && orderDate <= endDate;
            });
          }

          setRiwayatPesanan(filteredData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchCode, filteredDates]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 415);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (pesanan, index) => {
    if (isSmallScreen) {
      setPesananTerpilih(pesanan);
    } else {
      setPesananTerpilih(pesanan);
      setSelectedCardIndex(index);
    }
  };

  const groupByMonth = (riwayatPesanan) => {
    const groupedData = {};

    riwayatPesanan.forEach((riwayat) => {
      const monthYear = new Date(riwayat.order_date).toLocaleString('default', { month: 'long', year: 'numeric' });

      if (!groupedData[monthYear]) {
        groupedData[monthYear] = [];
      }

      groupedData[monthYear].push(riwayat);
    });

    return groupedData;
  };

  const groupedRiwayatPesanan = groupByMonth(riwayatPesanan);

  return (
    <Container>
      <Row className="my-3">
      <Col xs={isSmallScreen ? 12 : 7}>
          {Object.entries(groupedRiwayatPesanan).map(([monthYear, riwayatPesananByMonth]) => (
            <div key={monthYear}>
              <h6><strong className='group-monthYear'>{monthYear}</strong></h6>
              {riwayatPesananByMonth.map((riwayat, index) => (
                <Card
                  key={index}
                  onClick={() => handleCardClick(riwayat, index)}
                  style={{ cursor: 'pointer', marginBottom: '10px', border: selectedCardIndex === index ? '2px solid #7126B5' : '1px solid #dee2e6' }}
                  className="custom-card"
                >
                  <Card.Body>
                    <Card.Text className="custom-card-text">
                    <div className={`status-payment ${riwayat.payment_status === 'Dibayar' ? 'paid' : 'unpaid'}`}>
                      {riwayat.payment_status === 'Dibayar' ? 'Sudah Dibayar' : 'Belum Dibayar'}
                    </div>
                    <div className='riwayat-tiket' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="departure-info">
                      <span className="departure-info-span1">
                        {riwayat.flights.departureAirport.city}
                      </span>
                      <br/>
                      <span className="departure-info-span2">
                        {riwayat.flights.flight_date}
                      </span>
                      <br/>
                      <span className="departure-info-span3">
                        {riwayat.flights.departure_time}
                      </span>
                      </div>
                      <div className="duration-info" >
                        <div>
                      <span className='duration-info-span1' style={{display: 'flex',justifyContent:'center' }}>{Math.floor(riwayat.flights.flight_duration / 60)} j {riwayat.flights.flight_duration % 60} m</span><br/>
                      <span className='arrow-class'style={{display: 'flex',justifyContent:'center', marginTop:'-20%'}}><AiOutlineLine></AiOutlineLine><AiOutlineLine></AiOutlineLine><AiOutlineLine></AiOutlineLine><AiOutlineLine></AiOutlineLine><AiOutlineRight></AiOutlineRight></span>
                        </div>
                      </div>
                      <div className="arrival-info">
                      <span className="arrival-info-span1">
                        {riwayat.flights.arrivalAirport.city}
                      </span>
                        <br />
                      <span className='arrival-info-span2'>
                        {riwayat.flights.flight_date}
                      </span>
                        <br />
                      <span className='arrival-info-span3'>
                        {riwayat.flights.arrival_time}
                      </span>
                      </div>
                    </div>
                    <hr className="mt-4" style={{ color: '#000000', backgroundColor: '#000000', height: 1 }} />
                    <div className='dettik-info' style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className='code-info'>
                        <span className='code-info-span1' style={{  fontWeight: '600' }}>Booking Code</span>
                        <span className='code-info-span2'> {riwayat.ticket_code}</span>
                      </div>
                      <div className='class-info'>
                        <span className='class-info-span1' style={{  fontWeight: '600' }}>Class</span>
                        <span className='class-info-span2'> {riwayat.flights.class}</span>
                      </div>
                      <div className='price-info'>
                        <span className='price-info-span1' style={{  fontWeight: '600' }}>Harga</span>
                        <span className='price-info-span2' style={{ color: '#4B1979', fontWeight: '600' }}> {(
                        riwayat.flights.price + (riwayat.returnFlights ? riwayat.returnFlights.price : 0)
                        ).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace(/(\.|,)00$/, '')}</span>
                      </div>
                    </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          ))}
        </Col>
        {isSmallScreen && Object.keys(pesananTerpilih).length > 0 && (
          <Col xs={12}>
              <DetailPesanan pesanan={pesananTerpilih} />
          </Col>
        )}
        {!isSmallScreen && Object.keys(pesananTerpilih).length > 0 && (
          <Col xs={5}>
            <DetailPesanan pesanan={pesananTerpilih} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default RiwayatPesanan;