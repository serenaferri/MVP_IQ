import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CityArray from './Components/CityArray.jsx';
import CityDetails from './Components/CityDetails.jsx';
//import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <CityArray/>
      <CityDetails/>
    </div>

  /*<div>
      <Routes>
       <Route path="/" element={<CityArray/>} />
       <Route path="/city/:id/" element={<CityDetails/>} />
      </Routes>
      </div>*/
  );
}

export default App;






