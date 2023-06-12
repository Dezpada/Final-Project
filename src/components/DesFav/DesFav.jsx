import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import './DesFav.css';

const destinations = [
  { id: 1, name: 'Jakarta', to: 'Sydney', region: 'Asia', maskapai: 'AirAsia', foto: 'https://s.id/1LTHz', price: '3.650.000' },
  { id: 2, name: 'New York', to: 'Paris', region: 'Amerika', maskapai: 'AirAsia', foto: 'https://s.id/1LTIx', price: '2.650.000' },
  { id: 3, name: 'Sydney', to: 'Jakarta', region: 'Australia', maskapai: 'AirAsia', foto: 'https://s.id/1LTJZ', price: '3.650.000' },
  { id: 4, name: 'Paris', to: 'New York', region: 'Eropa', maskapai: 'AirAsia', foto: 'https://s.id/1LTJd', price: '2.650.000' },
  { id: 5, name: 'Cape Town', to: 'Sydney', region: 'Afrika', maskapai: 'AirAsia', foto: 'https://s.id/1LTHz', price: '3.450.000' },
  // Tambahkan destinasi lainnya di sini
];

const DestinationCard = ({ destination }) => {
  return (
    <div className='card-dest'>
      <img src={destination.foto} alt={destination.name} className="destination-image" />
      <p className="name">{destination.name} - {destination.to}</p>
      <p className="maskapai">{destination.maskapai}</p>
      <p className="price-description">Mulai dari <span className="price" style={{ color: 'red' }}>IDR {destination.price}</span></p>
    </div>
  );
};

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState('Semua');
  const [buttonColors, setButtonColors] = useState({ Semua: '#7126B5' });

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setButtonColors({ [region]: '#7126B5' });
  };

  const filteredDestinations = selectedRegion === 'Semua' ? destinations : destinations.filter(dest => dest.region === selectedRegion);

  return (
    <Container className="mt-2">
      <div className="container">
        <h6 className="destinasi-heading">Destinasi Favorit</h6>
        <div className="region-buttons">
          <button className={selectedRegion === 'Semua' ? 'active' : ''} style={{ backgroundColor: buttonColors['Semua'] }} onClick={() => handleRegionClick('Semua')}><FiSearch className="button-icon" />Semua</button>
          <button className={selectedRegion === 'Asia' ? 'active' : ''} style={{ backgroundColor: buttonColors['Asia'] }} onClick={() => handleRegionClick('Asia')}><FiSearch className="button-icon" />Asia</button>
          <button className={selectedRegion === 'Amerika' ? 'active' : ''} style={{ backgroundColor: buttonColors['Amerika'] }} onClick={() => handleRegionClick('Amerika')}><FiSearch className="button-icon" />Amerika</button>
          <button className={selectedRegion === 'Australia' ? 'active' : ''} style={{ backgroundColor: buttonColors['Australia'] }} onClick={() => handleRegionClick('Australia')}><FiSearch className="button-icon" />Australia</button>
          <button className={selectedRegion === 'Eropa' ? 'active' : ''} style={{ backgroundColor: buttonColors['Eropa'] }} onClick={() => handleRegionClick('Eropa')}><FiSearch className="button-icon" />Eropa</button>
          <button className={selectedRegion === 'Afrika' ? 'active' : ''} style={{ backgroundColor: buttonColors['Afrika'] }} onClick={() => handleRegionClick('Afrika')}><FiSearch className="button-icon" />Afrika</button>
        </div>
        <div className="destination-cards">
          {filteredDestinations.slice(0, 5).map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default App;
