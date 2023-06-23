import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import noHistoryImage from '../../assets/noHistory.png';
import { Link } from 'react-router-dom';
import './Riwayat.css';

const NoHistoryMessage = () => {
  return (
    <Container>
      <Row>
        <Col className="no-history">
            <img src={noHistoryImage} alt="No History" />
            <h6 className='teks-nohistory'>Tidak Ada Riwayat Pemesanan</h6>
            <p className='bold-text'>Anda belum melakukan pemesanan penerbangan.</p>
            <Link to="/">
              <Button variant="primary" className='btn-caripnrbngn'>Cari Penerbangan</Button>
            </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NoHistoryMessage;
