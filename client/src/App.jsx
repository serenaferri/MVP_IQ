import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CityArray from './Components/CityArray.jsx'
import CityDetails from './Components/CityDetails.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <Routes>
       <Route path="/" element={<CityArray/>} />
       <Route path="/city/:id/" element={<CityDetails/>} />
      </Routes>
  );
}

export default App;






