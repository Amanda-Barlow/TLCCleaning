import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Tips from './components/Tips';
import Referrals from './components/Referrals'
import HomePage from './components/HomePage';

function App() {
  return (
     <Routes>
      <Route path="/" element = {<HomePage />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="tips" element={<Tips />} /> 
      <Route path="contact" element={<Contact />} />
      <Route path="referrals" element={<Referrals />} />   
    </Routes>
  )
}


export default App;

