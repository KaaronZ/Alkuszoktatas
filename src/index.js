import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import './CssComponents/Global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <HeroSection/>
  </React.StrictMode>
);

