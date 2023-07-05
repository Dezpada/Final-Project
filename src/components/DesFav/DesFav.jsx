import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import './DesFav.css';

const API_URL = `${process.env.REACT_APP_API_KEY}/flight`;


const DestinationCard = ({ destination }) => {
  return (
    <Card.Text className='card-dest' >
      <img className="destination-image" src={destination.airplane.airline.icon_url} alt={destination.arrivalAirport.name} />
      <p className="desfav-name">{destination.departureAirport.city} =&gt; {destination.arrivalAirport.city}</p>
      <p className="maskapai">{destination.airplane.airline.name}</p>
      <p className="price-description">Mulai dari IDR <span className="price" style={{ color: 'red' }}>{destination.price}</span></p>
    </Card.Text>
  );
};

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('Semua');
  const [buttonColors, setButtonColors] = useState({ Semua: '#7126B5' });

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setButtonColors({ [region]: '#7126B5' });
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setDestinations(data.data);
    } catch (error) {
      console.log('Error fetching destinations:', error);
    }
  };

  const filteredDestinations = selectedRegion === 'Semua' ? destinations : destinations.filter(dest => dest.arrivalAirport.region === selectedRegion);

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
            <DestinationCard key={destination.flight_number} destination={destination} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default App;