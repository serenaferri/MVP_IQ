import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeasonDetails from './SeasonalActivities';
import cities from './Cities';
import './CityDetails.css';

function CityDetails() {
  const [city, setCity] = useState({});
  const [selectedSeason, setSelectedSeason] = useState(null);
  const { id } = useParams();
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    loadCityDetails();
  }, []);

  const loadCityDetails = () => {
    const cityByID = cities.filter((city) => city.id === Number(id));
    setCity(cityByID[0]);
  };

  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
    setIsFirstPage(false);
  };

return (
  <div className="city-container">
    <div className="city-card">
      {isFirstPage && city.name && <h2>"When will you visit {city.name}?"</h2>}
      {!selectedSeason ? (
        <div className="city-details">
          {isFirstPage && city.name && (
            <>
            <div>
          <label htmlFor="season-dropdown">Select a Season: </label>
          <select id="season-dropdown" onChange={handleSeasonChange}>
            <option value="">-- Select Season  --</option>
            <option value="winter">Winter</option>
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
            <option value="autumn">Autumn</option>
          </select>
            </div>
              <p>Province: {city.province}</p>
              <p>Language: {city.language}</p>
              <p>Population: {city.population}</p>
            </>
          )}
            <div className = "city-image">
          {isFirstPage && city.name && <img src={city.url} className="city-image" alt={city.name} />} 
          </div>
        </div>
      ) : (
        <SeasonDetails city={city} season={selectedSeason} />
      )}
    </div>
  </div>
);
}


export default CityDetails;