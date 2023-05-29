import React, { useState } from 'react';
import cities from './Cities';
import './CityArray.css';
import { useNavigate } from 'react-router-dom';

function cityArray(city) {
  useEffect(() => {
    fetch("/api/cities")
      .then(res => res.json())
  }, []);
 

  const navigate = useNavigate ();
  

  const handleCityDetailsClick = (city) => {
    navigate(`/city/${city.id}`);
  };


  return (
    <div className="city-container">
    
    {cities.map((city) => (
        <div className="city-card" key={city.id}>
          <h2>{city.name}</h2>
          <div className="city-details">
            <p>Train Access: {city.trainAccess ? `Yes, ${city.trainAccess}` : 'No'}</p>
          </div>
    <img src={city.url} className="city-image" alt={city.name} /> 
    <button onClick={() => handleCityDetailsClick(city)}>More Details</button> 
       </div>
      ))};
      
    </div>
  );
}

export default cityArray;
