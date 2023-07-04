import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { IoArrowBack } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import './Riwayat.css';
import FilterDateModal from './DateModal';
import SearchModal from './SearchModal';
import RiwayatPesanan from './RiwayatPesanan';

const FilterRiwayat = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchCode, setSearchCode] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchClick = () => {
    setSearchCode('');
    setShowSearchModal(true);
  };

  const handleCloseSearchModal = () => {
    setSearchCode('');
    setShowSearchModal(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchCode(event.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Kode yang dicari:', searchCode);
    setRecentSearches((prevSearches) => [searchCode, ...prevSearches]);
    handleCloseSearchModal();
    setSearchCode(searchCode);
  };

  const handleRecentSearchDelete = (index) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [...prevSearches];
      updatedSearches.splice(index, 1);
      return updatedSearches;
    });
  };

  return (
    <Container className="riwayat-container mt-1">
      <Row>
        <Col>
          <h6 className="riwayat-heading">Riwayat Pemesanan</h6>
          <Link to="/" className="beranda-link">
            <Button variant="custom" className="beranda-button">
              <IoArrowBack className="mb-1" /> Beranda
            </Button>
          </Link>

          <FilterDateModal />

          <span className="search-icon">
            <FiSearch className="mt-1" onClick={handleSearchClick} />
          </span>
        </Col>
      </Row>
      <hr style={{ color: '#000000', backgroundColor: '#000000', height: 4 }}/>
      <SearchModal
        showModal={showSearchModal}
        handleCloseModal={handleCloseSearchModal}
        handleSearchSubmit={handleSearchSubmit}
        handleSearchInputChange={handleSearchInputChange}
        searchCode={searchCode}
        recentSearches={recentSearches}
        handleRecentSearchDelete={handleRecentSearchDelete}
      />

      <RiwayatPesanan searchCode={searchCode} />
    </Container>
  );
};

export default FilterRiwayat;
