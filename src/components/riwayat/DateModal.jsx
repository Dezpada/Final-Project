import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Button, Modal } from 'react-bootstrap';
import { BiFilterAlt } from 'react-icons/bi';
import './Riwayat.css';

const DateModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedDates, setSelectedDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      },
    ]);
  
    const handleFilterClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleDateChange = (ranges) => {
      setSelectedDates([ranges.selection]);
    };
  
    return (
      <>
        <Button variant="custom" className="filter-button" onClick={handleFilterClick}>
          <BiFilterAlt className="mb-1" /> Filter
        </Button>
  
        <Modal show={showModal} onHide={handleCloseModal} dialogClassName="date-modal">
          <Modal.Header closeButton>
            <Modal.Title>Cari berdasarkan tanggal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DateRange
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={selectedDates}
              rangeColors={['#D0B7E6']}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal} >
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default DateModal;
