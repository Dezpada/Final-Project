import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SearchModal = ({
  showModal,
  handleCloseModal,
  handleSearchSubmit,
  handleSearchInputChange,
  searchCode,
  recentSearches,
  handleRecentSearchDelete,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} className="search-modal">
      <Modal.Header closeButton>
        <input
          type="text"
          value={searchCode}
          onChange={handleSearchInputChange}
          placeholder="Masukkan Nomor Penerbangan"
          className="search-input"
        />
      </Modal.Header>
      <Modal.Body>
        <h6 className="bold-text">Pencarian terkini:</h6>
        {recentSearches.length > 0 ? (
          <p>
            {recentSearches.map((search, index) => (
              <p key={index}>
                {search}
                <span className="delete-icon" onClick={() => handleRecentSearchDelete(index)}>
                  Hapus
                </span>
              </p>
            ))}
          </p>
        ) : (
          <p className="no-search-history">Tidak ada riwayat pencarian.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSearchSubmit}>
          Cari
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
